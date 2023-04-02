import { GetStaticProps, NextPage } from 'next';
import { useStyletron } from 'styletron-react';
import { dehydrate, QueryClient } from '@tanstack/query-core';
import ms from 'ms';
import { Header } from '@component/organisms/header';
import { padding } from 'polished';
import { ProductCarousel } from '@component/organisms/product/productCarousel';

const Index: NextPage = () => {
  const [css] = useStyletron();

  return (
    <>
      <Header />
      <article
        className={css({
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          ...padding('32px', '', ''),
        })}
      >
        <ProductCarousel title="신상품" />
        <div
          className={css({
            width: '100%',
            height: '200vh',
            backgroundColor: 'lightgray',
          })}
        />
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
