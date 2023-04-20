import { ProductItemType } from '@type/item/product';
import { Link } from '@component/atoms/link';
import { useStyletron } from 'styletron-react';
import { border } from 'polished';
import Image from 'next/image';
import { numberWithCommas } from '@helper/number';

interface ProductListItemProps extends ProductItemType {
  sellerName: string;
}

const ProductListItem = ({
  id,
  title,
  thumbnailUrl,
  price,
  sellerName,
}: ProductListItemProps) => {
  const [css] = useStyletron();

  return (
    <Link href={`/product/detail/${id}`}>
      <article
        className={css({
          width: '100%',
          display: 'flex',
          columnGap: '12px',
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
            width={120}
            height={120}
          />
        </div>
        <div
          className={css({
            display: 'flex',
            flexDirection: 'column',
            rowGap: '4px',
          })}
        >
          <b>{sellerName}</b>
          <span>{title}</span>
          <span>{numberWithCommas(price)}원</span>
        </div>
      </article>
    </Link>
  );
};

export type { ProductListItemProps };
export { ProductListItem };
