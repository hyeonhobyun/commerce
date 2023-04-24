import { useStyletron } from 'styletron-react';
import { Link } from '@component/atoms/link';
import { margin } from 'polished';
import { numberWithCommas } from '@helper/number';
import { Hr } from '@component/atoms/hr';

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
      <Hr
        overrides={{
          Root: {
            style: {
              ...margin('12px', '', '24px'),
            },
          },
        }}
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
