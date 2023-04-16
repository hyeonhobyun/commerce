import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useStyletron } from 'styletron-react';
import { Header } from '@component/organisms/header';
import { margin, padding } from 'polished';
import { GetStaticPropsGeneric } from '@type/staticPage';
import { QueryClient } from '@tanstack/react-query';
import { dehydrate } from '@tanstack/query-core';
import ms from 'ms';
import { ProductGridView } from '@component/organisms/grid/productGridView';
import { useMount } from 'react-use';

const dummyData = [
  {
    id: 0,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 1,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 2,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 3,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 4,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 5,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 6,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 7,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 8,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 9,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 10,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 0,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 1,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 2,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 3,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 4,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 5,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 6,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 7,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 8,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 9,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 10,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 0,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 1,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 2,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 3,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 4,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 5,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 6,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 7,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 8,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 9,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 10,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 0,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 1,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 2,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 3,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 4,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 5,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 6,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 7,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 8,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 9,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
  {
    id: 10,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
  },
];

type Params = 'id';
type Query = Record<Params, string>;

interface CategoryProps {
  query: Query;
}

const Category: NextPage<CategoryProps> = ({ query }) => {
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
          ...margin('', 'auto', '32px'),
          ...padding('32px', '', ''),
        })}
      >
        <div
          className={css({
            marginBottom: '48px',
          })}
        >
          <h1
            className={css({
              fontSize: '48px',
              lineHeight: '56px',
              color: '#333333',
            })}
          >
            더미타이틀
          </h1>
          {/* 버튼 */}
          <div
            className={css({
              float: 'right',
            })}
          >
            <span>asdf</span>
          </div>
        </div>
        <ProductGridView data={dummyData} />
      </div>
    </>
  );
};

const getStaticPaths: GetStaticPaths<Query> = async () => {
  const data = [123123, 123124, 123125];

  const paths = data.map((post) => ({
    params: { id: `${post}` },
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

export type { CategoryProps };
export { getStaticProps, getStaticPaths };
export default Category;
