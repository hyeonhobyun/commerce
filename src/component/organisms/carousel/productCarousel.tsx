import { Carousel } from '@component/molecules/carousel/carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import { ProductItem } from '@component/molecules/product/productItem';
import { useStyletron } from 'styletron-react';
import { margin } from 'polished';
import { Button } from '@component/atoms/button';

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
];

const productItemSize = {
  width: '160px',
  height: '160px',
};

const CAROUSEL_OPTIONS: EmblaOptionsType = {
  dragFree: true,
  align: 0,
};

interface ProductCarouselProps {
  title?: string;
  maxWidth?: string;
}

const ProductCarousel = ({
  title,
  maxWidth = '912px',
}: ProductCarouselProps) => {
  const [css] = useStyletron();
  const [emblaRef, emblaAPI] = useEmblaCarousel(CAROUSEL_OPTIONS);

  return (
    <div
      className={css({
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        rowGap: '16px',
        maxWidth: maxWidth,
        ...margin('24px', '', '32px'),
      })}
    >
      {title && (
        <div
          className={css({
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight: '16px',
          })}
        >
          <b
            className={css({
              fontSize: '24px',
              lineHeight: '32px',
              color: '#333333',
            })}
          >
            {title}
          </b>
          <Button
            onClick={() => {
              console.log('click more button');
            }}
          >
            <span
              className={css({
                fontSize: '14px',
                lineHeight: '21px',
                color: '#333333',
              })}
            >
              더보기
            </span>
          </Button>
        </div>
      )}
      <Carousel
        carouselRef={emblaRef}
        carouselApi={emblaAPI}
        data={dummyData.slice(0, 10)}
        columnGap="8px"
        contentSize={productItemSize}
        renderContent={(item, index) => <ProductItem key={index} {...item} />}
      />
    </div>
  );
};

export { ProductCarousel };
