import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { useStyletron } from 'styletron-react';
import { dehydrate, DehydratedState } from '@tanstack/query-core';
import { QueryClient } from '@tanstack/react-query';
import ms from 'ms';
import { useMount } from 'react-use';
import { DetailThumbnailCarousel } from '@component/organisms/carousel/productDetail/detailThumbnailCarousel';
import { Header } from '@component/organisms/header';
import { margin, padding } from 'polished';

const thumbnailDummy: string[] = [
  '/dummy/image/ice_americano.png',
  '/dummy/image/ice_americano.png',
  '/dummy/image/ice_americano.png',
];

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
      <Header />
      <div
        className={css({
          display: 'flex',
          flexDirection: 'column',
          ...margin('', 'auto'),
          ...padding('32px', '', ''),
        })}
      >
        {/* 상단 썸네일 및 상품정보 */}
        <div>
          <DetailThumbnailCarousel thumbnails={thumbnailDummy} />
        </div>

        {/* 탭 */}
        <div></div>

        {/* 상품 상세, 리뷰, 약관 등 */}
        <div></div>
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
