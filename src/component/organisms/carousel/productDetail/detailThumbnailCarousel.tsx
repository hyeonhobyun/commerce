import useEmblaCarousel from 'embla-carousel-react';
import { Carousel } from '@component/molecules/carousel/carousel';
import { EmblaOptionsType } from 'embla-carousel';
import { DetailThumbnailImage } from '@component/molecules/product/detail/detailThumbnailItem';

interface DetailThumbnailCarouselProps {
  thumbnails: string[];
}

const CAROUSEL_OPTIONS: EmblaOptionsType = {
  loop: true,
  align: 0,
};

const DetailThumbnailCarousel = ({
  thumbnails,
}: DetailThumbnailCarouselProps) => {
  const [emblaRef, emblaAPI] = useEmblaCarousel(CAROUSEL_OPTIONS);

  return (
    <Carousel<string>
      carouselRef={emblaRef}
      carouselApi={emblaAPI}
      data={thumbnails}
      hasDots
      overrides={{
        Root: {
          style: {
            width: '500px',
            height: '500px',
          },
        },
      }}
      renderContent={(item, index) => (
        <DetailThumbnailImage key={index} id={index} thumbnailUrl={item} />
      )}
    />
  );
};

export type { DetailThumbnailCarouselProps };
export { DetailThumbnailCarousel };
