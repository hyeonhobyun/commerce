import { useStyletron } from 'styletron-react';
import { DetailThumbnailCarousel } from '@component/organisms/carousel/productDetail/detailThumbnailCarousel';
import { SummaryInfo } from '@component/molecules/product/detail/summaryInfo';

const thumbnailDummy: string[] = [
  '/dummy/image/ice_americano.png',
  '/dummy/image/ice_americano.png',
  '/dummy/image/ice_americano.png',
];

interface ProductDetailSummaryPanelProps {
  id?: number;
}

const ProductDetailSummaryPanel = ({ id }: ProductDetailSummaryPanelProps) => {
  const [css] = useStyletron();

  return (
    <article
      className={css({
        display: 'grid',
        columnGap: '16px',
        gridTemplateColumns: '1fr 1fr',
      })}
    >
      <DetailThumbnailCarousel thumbnails={thumbnailDummy} />
      <SummaryInfo
        title="아이스 아메리카노"
        price={100000}
        sellerName="변현호"
        sellerId="hyeonho"
      />
      {/* 수량 */}
      {/* 옵션 */}
      {/* 장바구니 */}
      {/* 바로구매 */}
    </article>
  );
};

export type { ProductDetailSummaryPanelProps };
export { ProductDetailSummaryPanel };
