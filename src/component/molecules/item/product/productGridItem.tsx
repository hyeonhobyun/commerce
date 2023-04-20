import { useStyletron } from 'styletron-react';
import Image from 'next/image';
import { border } from 'polished';
import { Link } from '@component/atoms/link';
import { numberWithCommas } from '@helper/number';
import { ProductItemType } from '@type/item/product';

const ProductGridItem = ({
  id,
  title,
  thumbnailUrl,
  price,
}: ProductItemType) => {
  const [css] = useStyletron();

  return (
    <Link href={`/product/detail/${id}`}>
      <article
        className={css({
          display: 'flex',
          flexDirection: 'column',
          rowGap: '8px',
        })}
      >
        <div
          className={css({
            display: 'flex',
            ...border('1px', 'solid', '#e0e0e0'),
          })}
        >
          <Image
            src={thumbnailUrl}
            alt={`${title} 썸네일 이미지`}
            width={240}
            height={240}
          />
        </div>
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
          })}
        >
          <b
            className={css({
              fontSize: '14px',
              lineHeight: '21px',
              color: '#333333',
            })}
          >
            {title}
          </b>
          <span
            className={css({
              fontSize: '14px',
              lineHeight: '21px',
              color: '#333333',
            })}
          >
            {numberWithCommas(price)}원
          </span>
        </div>
      </article>
    </Link>
  );
};

export { ProductGridItem };
