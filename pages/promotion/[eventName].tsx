import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useStyletron } from 'styletron-react';
import { dehydrate } from '@tanstack/query-core';
import { QueryClient } from '@tanstack/react-query';
import ms from 'ms';
import { useMount } from 'react-use';
import { GetStaticPropsGeneric } from '@type/staticPage';

type Params = 'eventName';
type Query = Record<Params, string>;

interface PromotionEventProps {
  query: Query;
}

const PromotionEvent: NextPage<PromotionEventProps> = ({ query }) => {
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
      <span>{query.eventName}</span>
    </div>
  );
};

const getStaticPaths: GetStaticPaths<Query> = async () => {
  const data = ['coffee'];

  const paths = data.map((post) => ({
    params: { eventName: `${post}` },
  }));

  return { paths, fallback: false };
};

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

export type { PromotionEventProps };
export { getStaticProps, getStaticPaths };
export default PromotionEvent;
