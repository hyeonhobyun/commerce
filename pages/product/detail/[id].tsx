import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useStyletron } from 'styletron-react';
import { dehydrate, DehydratedState } from '@tanstack/query-core';
import { QueryClient } from '@tanstack/react-query';
import ms from 'ms';
import { useMount } from 'react-use';

type Params = 'id';
type Query = Record<Params, string>;

interface ProductDetailProps {
  query: Query;
}

const ProductDetail: NextPage<ProductDetailProps> = ({ query }) => {
  const [css] = useStyletron();

  useMount(() => {
    console.log(query);
  });

  return (
    <div
      className={css({
        display: 'flex',
      })}
    >
      <span>{query.id}</span>
    </div>
  );
};

const getStaticPaths: GetStaticPaths<Query> = async () => {
  const data = Array(10)
    .fill(undefined)
    .map((arr, i) => i);

  const paths = data.map((post) => ({
    params: { id: `${post}` },
  }));

  return { paths, fallback: false };
};

interface GetStaticPropsGeneric {
  dehydratedState: DehydratedState;
}

const getStaticProps: GetStaticProps<GetStaticPropsGeneric, Query> = async ({
  params,
}) => {
  const queryClient = new QueryClient();

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      query: params,
    },
    revalidate: ms('1d') / 1000,
  };
};

export type { ProductDetailProps };
export { getStaticProps, getStaticPaths };
export default ProductDetail;
