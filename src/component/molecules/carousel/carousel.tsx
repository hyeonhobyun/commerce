import { get } from 'lodash';
import { borderRadius, padding } from 'polished';
import { ReactNode, useEffect, useState } from 'react';
import { useStyletron } from 'styletron-react';
import { OverrideObject } from '@type/component.types';
import { ButtonProps } from '@component/atoms/button';
import { EmblaOptionsType } from 'embla-carousel';
import { UseEmblaCarouselType } from 'embla-carousel-react/components';

interface CarouselOverrides {
  Root?: Omit<OverrideObject<ButtonProps>, 'component'>;
  ListItem?: Omit<OverrideObject<ButtonProps>, 'component'>;
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
  renderContent: (props: T, index: number) => ReactNode;
}

interface CarouselDefaultData {
  id: number;
}

const Carousel = <T extends CarouselDefaultData>({
  data,
  overrides,
  carouselRef,
  carouselApi,
  hasPagination,
  hasDots,
  renderContent,
  columnGap = '0px',
}: CarouselProps<T>) => {
  const [css] = useStyletron();
  const [currentPage, setCurrentPage] = useState(1);
  const MAX_SLIDE = data?.length ?? 0;

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
        <div
          className={css({
            flex: 1,
            display: 'flex',
            columnGap: columnGap,
          })}
        >
          {data?.map((item, index) => renderContent?.(item, index))}
        </div>
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
      </article>
    </>
  );
};

export { Carousel };
export type { CarouselProps };
