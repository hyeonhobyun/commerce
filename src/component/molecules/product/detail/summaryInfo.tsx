import { useStyletron } from 'styletron-react';
import { Link } from '@component/atoms/link';
import { border, margin } from 'polished';
import { numberWithCommas } from '@helper/number';

interface SummaryInfoProps {
  title: string;
  price: number;
  sellerName: string;
  sellerId: string;
}

const SummaryInfo = ({
  title,
  price,
  sellerName,
  sellerId,
}: SummaryInfoProps) => {
  const [css] = useStyletron();

  return (
    <section
      className={css({
        maxWidth: '500px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
      })}
    >
      <Link href={`/product/seller/${sellerId}`}>
        <span
          className={css({
            fontSize: '14px',
            lineHeight: '21px',
            color: '#58a2da',
          })}
        >
          {sellerName}
        </span>
      </Link>
      <b
        className={css({
          fontSize: '32px',
          lineHeight: '60px',
          color: '#333333',
        })}
      >
        {title}
      </b>
      <hr
        className={css({
          width: '100%',
          ...border('0'),
          ...border('top', '1px', 'solid', '#e0e0e0'),
          ...margin('12px', '', '24px'),
        })}
      />
      <span
        className={css({
          fontSize: '24px',
          lineHeight: '32px',
          color: '#333333',
        })}
      >
        {numberWithCommas(price)}원
      </span>
    </section>
  );
};

export type { SummaryInfoProps };
export { SummaryInfo };
