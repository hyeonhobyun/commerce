import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useStyletron } from 'styletron-react';
import { dehydrate } from '@tanstack/query-core';
import { QueryClient } from '@tanstack/react-query';
import ms from 'ms';
import { useMount } from 'react-use';
import { Header } from '@component/organisms/header';
import { margin, padding } from 'polished';
import { ProductDetailSummaryPanel } from '@component/organisms/product/productDetailSummaryPanel';
import { ProductDetailTab } from '@component/organisms/product/productDetailTab';
import { GetStaticPropsGeneric } from '@type/staticPage';

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
    <>
      <Header
        overrides={{
          Root: {
            style: {
              position: 'absolute',
            },
          },
        }}
      />
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          ...margin('90px', 'auto', ''),
          ...padding('32px', '', ''),
        })}
      >
        {/* 상단 썸네일 및 상품정보 */}
        <div
          className={css({
            marginBottom: '24px',
          })}
        >
          <ProductDetailSummaryPanel />
        </div>

        {/* 탭 */}
        <ProductDetailTab />

        {/* 상품 상세, 리뷰, 약관 등 */}
        <div
          id="productDetail"
          className={css({
            height: '1000px',
            scrollMarginTop: '64px',
          })}
        >
          상품상세
        </div>
        <div
          id="productReview"
          className={css({
            height: '1000px',
            scrollMarginTop: '64px',
          })}
        >
          리뷰
        </div>
        <div
          id="productQnA"
          className={css({
            height: '1000px',
            scrollMarginTop: '64px',
          })}
        >
          QnA
        </div>
      </div>
    </>
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
