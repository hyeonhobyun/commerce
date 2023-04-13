import { TabButton } from '@component/molecules/button/tabButton';
import { useStyletron } from 'styletron-react';
import { border } from 'polished';

const dummyReviewCount = 10;

type AnchorType = 'productDetail' | 'productReview' | 'productQnA';

const ProductDetailTab = () => {
  const [css] = useStyletron();

  return (
    <article
      className={css({
        zIndex: 3,
        width: '100%',
        height: '64px',
        position: 'sticky',
        top: 0,
        display: 'flex',
        gridTemplateColumns: 'repeat(3, 1fr)',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        ...border('1px', 'solid', '#e0e0e0'),
      })}
    >
      <TabButton<AnchorType>
        text="상품 상세"
        anchor="productDetail"
        overrides={{
          Root: {
            style: {
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
          },
        }}
      />
      <TabButton<AnchorType>
        text={`리뷰 ${dummyReviewCount}`}
        anchor="productReview"
        overrides={{
          Root: {
            style: {
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
          },
        }}
      />
      <TabButton<AnchorType>
        text="QnA"
        anchor="productQnA"
        overrides={{
          Root: {
            style: {
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            },
          },
        }}
      />
    </article>
  );
};

export { ProductDetailTab };
