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
    id: 0,
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
    id: 0,
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
    id: 0,
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
    id: 0,
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
    id: 0,
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
];

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
  maxWidth = '850px',
}: ProductCarouselProps) => {
  const [css] = useStyletron();
  const [emblaRef, emblaAPI] = useEmblaCarousel(CAROUSEL_OPTIONS);

  return (
    <article
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
        renderContent={(item, index) => <ProductItem key={index} {...item} />}
      />
    </article>
  );
};

export { ProductCarousel };
