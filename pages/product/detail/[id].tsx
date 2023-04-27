import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useStyletron } from 'styletron-react';
import { dehydrate } from '@tanstack/query-core';
import { QueryClient } from '@tanstack/react-query';
import ms from 'ms';
import { useMount } from 'react-use';
import { Header } from '@component/organisms/header';
import { margin, padding } from 'polished';
import { ProductDetailSummaryPanel } from '@component/organisms/product/productDetailSummaryPanel';
import { Tab } from '@component/organisms/tab';
import { GetStaticPropsGeneric } from '@type/staticPage';
import { useRef } from 'react';

type Params = 'id';
type Query = Record<Params, string>;

interface ProductDetailProps {
  query: Query;
}

const dummyReviewCount = 10;

const ProductDetail: NextPage<ProductDetailProps> = ({ query }) => {
  const [css] = useStyletron();
  const productDetailRef = useRef<HTMLDivElement>(null);
  const productReviewRef = useRef<HTMLDivElement>(null);
  const productQnARef = useRef<HTMLDivElement>(null);

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
        <div
          className={css({
            marginBottom: '24px',
          })}
        >
          <ProductDetailSummaryPanel />
        </div>
        <Tab
          tabText={['상품 상세', `리뷰 ${dummyReviewCount}`, 'QnA']}
          tabRef={[productDetailRef, productReviewRef, productQnARef]}
        />
        <div
          ref={productDetailRef}
          className={css({
            height: '1000px',
            scrollMarginTop: '64px',
          })}
        >
          상품상세
        </div>
        <div
          ref={productReviewRef}
          className={css({
            height: '1000px',
            scrollMarginTop: '64px',
          })}
        >
          리뷰
        </div>
        <div
          ref={productQnARef}
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
