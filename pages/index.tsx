import { GetStaticProps, NextPage } from 'next';
import { useStyletron } from 'styletron-react';
import { dehydrate, QueryClient } from '@tanstack/query-core';
import ms from 'ms';
import { Header } from '@component/organisms/header';
import { ProductCarouselProps } from '@component/organisms/carousel/productCarousel';
import dynamic from 'next/dynamic';
import { EmptyPlaceholder } from '@component/atoms/emptyPlaceholder';
import LazyLoad from 'react-lazyload';

const DynamicMainBannerCarousel = dynamic(
  () =>
    import('@component/organisms/carousel/mainBannerCarousel').then(
      ({ MainBannerCarousel }) => MainBannerCarousel,
    ),
  {
    ssr: false,
    loading: () => <EmptyPlaceholder style={{ height: '480px' }} />,
  },
);

const DynamicProductCarousel = dynamic<ProductCarouselProps>(
  () =>
    import('@component/organisms/carousel/productCarousel').then(
      ({ ProductCarousel }) => ProductCarousel,
    ),
  {
    ssr: false,
    loading: () => <EmptyPlaceholder style={{ height: '316px' }} />,
  },
);

const Index: NextPage = () => {
  const [css] = useStyletron();

  return (
    <>
      <Header />
      <LazyLoad height={480} once={true}>
        <DynamicMainBannerCarousel />
      </LazyLoad>
      <article
        className={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '72px',
        })}
      >
        <LazyLoad height={316} once={true}>
          <DynamicProductCarousel id={123123} title="신상품" />
        </LazyLoad>
        <LazyLoad height={316} once={true}>
          <DynamicProductCarousel id={123124} title="인기상품" />
        </LazyLoad>
        <LazyLoad height={316} once={true}>
          <DynamicProductCarousel id={123125} title="품절임박" />
        </LazyLoad>
      </article>
    </>
  );
};

const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient();

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: ms('1d') / 1000,
  };
};

export { getStaticProps };
export default Index;
