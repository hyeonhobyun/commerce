import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useStyletron } from 'styletron-react';
import { dehydrate, DehydratedState } from '@tanstack/query-core';
import { QueryClient } from '@tanstack/react-query';
import ms from 'ms';
import { useMount } from 'react-use';
import { Header } from '@component/organisms/header';
import { margin, padding } from 'polished';

type Params = 'sellerId';
type Query = Record<Params, string>;

interface ProductSellerProps {
  query: Query;
}

const ProductSeller: NextPage<ProductSellerProps> = ({ query }) => {
  const [css] = useStyletron();

  useMount(() => {
    console.log(query);
  });

  return (
    <>
      <Header />
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          ...margin('', 'auto'),
          ...padding('32px', '', ''),
        })}
      >
        <span>asdf</span>
      </div>
    </>
  );
};

const getStaticPaths: GetStaticPaths<Query> = async () => {
  const data = Array(10)
    .fill(undefined)
    .map((arr, i) => i);

  const paths = data.map((post) => ({
    params: { sellerId: `${post}` },
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

export type { ProductSellerProps };
export { getStaticProps, getStaticPaths };
export default ProductSeller;
