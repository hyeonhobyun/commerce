import { useStyletron } from 'styletron-react';
import { DetailThumbnailCarousel } from '@component/organisms/carousel/productDetail/detailThumbnailCarousel';
import { SummaryInfo } from '@component/molecules/product/detail/summaryInfo';
import { ProductQuantity } from '@component/molecules/product/productQuantity';
import { useRecoilValue } from 'recoil';
import { purchaseInfoState } from '@store/product/purchaseInfo/quantityInfoState';

const thumbnailDummy: string[] = [
  '/dummy/image/ice_americano.png',
  '/dummy/image/ice_americano.png',
  '/dummy/image/ice_americano.png',
];

const priceDummy = 100000;

interface ProductDetailSummaryPanelProps {
  id?: number;
}

const ProductDetailSummaryPanel = ({ id }: ProductDetailSummaryPanelProps) => {
  const [css] = useStyletron();
  const quantity = useRecoilValue(purchaseInfoState);

  return (
    <article
      className={css({
        display: 'grid',
        columnGap: '16px',
        gridTemplateColumns: '1fr 1fr',
      })}
    >
      <DetailThumbnailCarousel thumbnails={thumbnailDummy} />
      <div
        className={css({
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        })}
      >
        <SummaryInfo
          title="아이스 아메리카노"
          price={priceDummy * quantity}
          sellerName="변현호"
          sellerId="hyeonho"
        />
        <section
          className={css({
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'end',
            columnGap: '24px',
            marginTop: '24px',
          })}
        >
          {/* 수량 */}
          <ProductQuantity />
          {/*리뷰*/}
          {/* 옵션 */}
          {/* 장바구니 */}
          {/* 바로구매 */}
          {/*  총 상품 금액 */}
        </section>
      </div>
    </article>
  );
};

export type { ProductDetailSummaryPanelProps };
export { ProductDetailSummaryPanel };
