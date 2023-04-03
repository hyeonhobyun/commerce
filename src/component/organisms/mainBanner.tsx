import { Carousel } from '@component/molecules/carousel/carousel';
import useEmblaCarousel from 'embla-carousel-react';
import { EmblaOptionsType } from 'embla-carousel';
import {
  MainBannerItem,
  MainBannerItemProps,
} from '@component/molecules/banner/mainBannerItem';

const dummyData: MainBannerItemProps[] = [
  {
    id: 0,
    redirectUrl: '/promotion/coffee',
    image: '/dummy/banner/img_banner_coffee.jpeg',
  },
  {
    id: 1,
    redirectUrl: '/promotion/coffee',
    image: '/dummy/banner/img_banner_coffee.jpeg',
  },
  {
    id: 2,
    redirectUrl: '/promotion/coffee',
    image: '/dummy/banner/img_banner_coffee.jpeg',
  },
  {
    id: 3,
    redirectUrl: '/promotion/coffee',
    image: '/dummy/banner/img_banner_coffee.jpeg',
  },
  {
    id: 4,
    redirectUrl: '/promotion/coffee',
    image: '/dummy/banner/img_banner_coffee.jpeg',
  },
  {
    id: 5,
    redirectUrl: '/promotion/coffee',
    image: '/dummy/banner/img_banner_coffee.jpeg',
  },
];

const CAROUSEL_OPTIONS: EmblaOptionsType = {
  loop: true,
  align: 0,
};

const MainBanner = () => {
  const [emblaRef, emblaAPI] = useEmblaCarousel(CAROUSEL_OPTIONS);

  return (
    <Carousel<MainBannerItemProps>
      carouselRef={emblaRef}
      carouselApi={emblaAPI}
      data={dummyData}
      overrides={{
        Root: {
          style: {
            width: '100%',
          },
        },
      }}
      renderContent={(item, index) => <MainBannerItem key={index} {...item} />}
    />
  );
};

export { MainBanner };
