import { Carousel } from '@component/molecules/carousel/carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import { ProductItem } from '@component/molecules/product/productItem';
import { useStyletron } from 'styletron-react';

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
}

const ProductCarousel = ({ title }: ProductCarouselProps) => {
  const [css] = useStyletron();
  const [emblaRef, emblaAPI] = useEmblaCarousel(CAROUSEL_OPTIONS);

  return (
    <article
      className={css({
        display: 'flex',
        flexDirection: 'column',
        rowGap: '16px',
      })}
    >
      {title && (
        <b
          className={css({
            fontSize: '24px',
            lineHeight: '32px',
            color: '#333333',
          })}
        >
          {title}
        </b>
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
