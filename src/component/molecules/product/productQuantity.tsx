import { useStyletron } from 'styletron-react';
import { ChangeEvent } from 'react';
import { border, borderRadius } from 'polished';
import { Button } from '@component/atoms/button';
import { Input } from '@component/atoms/input';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { useMount } from 'react-use';
import { purchaseInfoState } from '@store/product/purchaseInfo/quantityInfoState';

interface ProductQuantityProps {
  initialValue?: number;
}

const ProductQuantity = ({ initialValue = 1 }: ProductQuantityProps) => {
  const [css] = useStyletron();
  const quantity = useRecoilValue(purchaseInfoState);
  const setQuantity = useSetRecoilState(purchaseInfoState);

  useMount(() => {
    if (initialValue !== quantity) {
      setQuantity(initialValue);
    }
  });

  const handleQuantityChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const parsedValue = parseInt(value, 10);
    if (parsedValue && parsedValue !== quantity) {
      setQuantity(parsedValue);
    }
  };

  const handleQuantityIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div
      className={css({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: 'fit-content',
        height: '48px',
        ...border('1px', 'solid', '#e0e0e0'),
        ...borderRadius('top', '4px'),
        ...borderRadius('bottom', '4px'),
      })}
    >
      <Button
        type="button"
        overrides={{
          Root: {
            style: {
              width: '48px',
              height: '48px',
              backgroundColor: '#dadada',
            },
          },
        }}
        onClick={handleQuantityDecrease}
      >
        <span
          className={css({
            fontSize: '16px',
            lineHeight: '24px',
            color: '#7c7c7c',
          })}
        >
          -
        </span>
      </Button>
      <Input
        type="text"
        pattern="[0-9]+"
        overrides={{
          Root: {
            style: {
              width: '48px',
              height: '48px',
              textAlign: 'center',
              '-webkit-appearance': 'none',
              ...border('1px', 'solid', '#e0e0e0'),
            },
          },
        }}
        value={quantity}
        onChange={handleQuantityChange}
      />
      <Button
        type="button"
        overrides={{
          Root: {
            style: {
              width: '48px',
              height: '48px',
              backgroundColor: '#dadada',
            },
          },
        }}
        onClick={handleQuantityIncrease}
      >
        <span
          className={css({
            fontSize: '16px',
            lineHeight: '24px',
            color: '#7c7c7c',
          })}
        >
          +
        </span>
      </Button>
    </div>
  );
};

export type { ProductQuantityProps };
export { ProductQuantity };
