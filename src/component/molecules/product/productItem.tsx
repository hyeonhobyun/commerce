import { useStyletron } from 'styletron-react';
import Image from 'next/image';
import { border } from 'polished';
import { Link } from '@component/atoms/link';
import { numberWithCommas } from '@helper/number';

interface ProductItemProps {
  id: number;
  title: string;
  thumbnailUrl: string;
  price: number;
}

const ProductItem = ({ id, title, thumbnailUrl, price }: ProductItemProps) => {
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
            width={160}
            height={160}
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

export type { ProductItemProps };
export { ProductItem };
