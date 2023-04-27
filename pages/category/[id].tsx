import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useStyletron } from 'styletron-react';
import { Header } from '@component/organisms/header';
import { margin, padding } from 'polished';
import { GetStaticPropsGeneric } from '@type/staticPage';
import { QueryClient } from '@tanstack/react-query';
import { dehydrate } from '@tanstack/query-core';
import ms from 'ms';
import { useMount } from 'react-use';
import { ViewChanger } from '@component/organisms/product/viewChanger';
import { viewInfoState } from '@store/product/viewChanger/viewInfoState';
import { useRecoilValue } from 'recoil';
import { ProductGridView } from '@component/organisms/product/view/productGridView';
import { ProductListView } from '@component/organisms/product/view/productListView';

const gridDummyData = [
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
const listDummyData = [
  {
    id: 0,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 1,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 2,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 3,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 4,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 5,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 6,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 7,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 8,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 9,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 10,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 0,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 1,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 2,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 3,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 4,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 5,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 6,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 7,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 8,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 9,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 10,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 0,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 1,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 2,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 3,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 4,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 5,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 6,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 7,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 8,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 9,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 10,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 0,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 1,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 2,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 3,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 4,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 5,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 6,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 7,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 8,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 9,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
  {
    id: 10,
    title: '아메리카노',
    thumbnailUrl: '/dummy/image/ice_americano.png',
    price: 100000,
    sellerName: '변현호',
  },
];

type Params = 'id';
type Query = Record<Params, string>;

interface CategoryProps {
  query: Query;
}

const Category: NextPage<CategoryProps> = ({ query }) => {
  const [css] = useStyletron();
  const viewInfo = useRecoilValue(viewInfoState);

  useMount(() => {
    console.log(query.id);
  });

  return (
    <>
      <Header />
      <div
        className={css({
          width: '1016px',
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
          <div
            className={css({
              float: 'right',
            })}
          >
            <ViewChanger />
          </div>
        </div>
        {viewInfo === 'grid' && <ProductGridView data={gridDummyData} />}
        {viewInfo === 'list' && <ProductListView data={listDummyData} />}
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
