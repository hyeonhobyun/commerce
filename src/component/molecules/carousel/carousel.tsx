import { get } from 'lodash';
import { borderRadius, padding } from 'polished';
import { ReactNode, useEffect, useState } from 'react';
import { useStyletron } from 'styletron-react';
import { OverrideObject } from '@type/component.types';
import { ButtonProps } from '@component/atoms/button';
import { EmblaOptionsType } from 'embla-carousel';
import { UseEmblaCarouselType } from 'embla-carousel-react/components';
import { Dot } from '@component/molecules/carousel/carousel.styled';
import { StyleObject } from 'styletron-standard';

interface CarouselOverrides {
  Root?: Omit<OverrideObject<ButtonProps>, 'component'>;
  CarouselContent?: Omit<OverrideObject<ButtonProps>, 'component'>;
}

interface CarouselProps<T> {
  overrides?: CarouselOverrides;
  columnGap?: string;
  carouselRef: UseEmblaCarouselType[0];
  carouselApi: UseEmblaCarouselType[1];
  data: T[] | undefined;
  option?: EmblaOptionsType;
  hasPagination?: boolean;
  hasDots?: boolean;
  contentSize?: {
    width?: string;
    height?: string;
  };
  renderContent: (props: T, index: number) => ReactNode;
}

type CarouselDefaultData =
  | unknown
  | (Record<string, unknown> & {
      id: number;
    });

const Carousel = <T extends CarouselDefaultData>({
  data,
  overrides,
  carouselRef,
  carouselApi,
  hasPagination,
  hasDots,
  contentSize,
  renderContent,
  columnGap = '0px',
}: CarouselProps<T>) => {
  const [css] = useStyletron();
  const [currentPage, setCurrentPage] = useState(1);
  const MAX_SLIDE = data?.length ?? 0;
  const [slideItemStyle] = useState<StyleObject>(() => {
    const itemWidth = get(contentSize, 'width');
    let width = '';
    switch (typeof itemWidth) {
      case 'string':
        width = itemWidth;
        break;
      default:
        width = '100%';
    }

    return {
      display: 'inline-flex',
      position: 'relative',
      flexGrow: 0,
      flexShrink: 0,
      flexBasis: width,
      maxWidth: width,
      overflow: 'hidden',
      ...get(overrides, 'CarouseContent.style', {}),
    };
  });

  useEffect(() => {
    const needPaging = hasPagination || hasDots;

    const onScroll = () => {
      if (carouselApi) {
        if (needPaging) {
          const INCREASING_NUMBER = 1;
          const currentIndex =
            carouselApi?.selectedScrollSnap() + INCREASING_NUMBER;

          setCurrentPage(
            currentIndex > MAX_SLIDE ? currentIndex - MAX_SLIDE : currentIndex,
          );
        }
      }
    };

    if (needPaging) {
      onScroll();
      carouselApi?.on('select', onScroll);
    }

    return () => {
      if (needPaging) {
        carouselApi?.off('select', onScroll);
      }
    };
  }, [carouselApi, data, hasPagination, hasDots, MAX_SLIDE]);

  useEffect(
    function reInitDuringDataUpdating() {
      carouselApi?.reInit();
    },
    [data, carouselApi],
  );

  return (
    <>
      <article
        className={css({
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          ...get(overrides, 'Root.style', {}),
        })}
        ref={carouselRef}
      >
        <ul
          className={css({
            flex: 1,
            display: 'flex',
            columnGap: columnGap,
            width: '100%',
          })}
        >
          {data?.map((item, index) => (
            <li key={`embla-carousel-${index}`} className={css(slideItemStyle)}>
              {renderContent?.(item, index)}
            </li>
          ))}
        </ul>
        {hasPagination && MAX_SLIDE > 1 && (
          <div
            className={css({
              position: 'absolute',
              bottom: '12px',
              right: '12px',
              fontSize: '10px',
              lineHeight: '13px',
              color: '#fff',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              ...padding('2px', '8px'),
              ...borderRadius('top', '15px'),
              ...borderRadius('bottom', '15px'),
            })}
          >
            {currentPage} / {MAX_SLIDE}
          </div>
        )}
        {hasDots && MAX_SLIDE > 1 && (
          <ul
            className={css({
              display: 'block',
              alignSelf: 'center',
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
            })}
          >
            {data?.map((item, index) => (
              <Dot key={index} $isActive={index === currentPage - 1} />
            ))}
          </ul>
        )}
      </article>
    </>
  );
};

export { Carousel };
export type { CarouselProps };
