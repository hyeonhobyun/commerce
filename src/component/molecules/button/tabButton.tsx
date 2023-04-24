import { useStyletron } from 'styletron-react';
import { OverrideObject } from '@type/component.types';
import { MutableRefObject } from 'react';
import { Button, ButtonProps } from '@component/atoms/button';
import { isNull } from 'lodash';

type TabButtonOverrides = {
  Root?: Omit<OverrideObject<ButtonProps>, 'component'>;
};

interface TabButtonProps {
  text: string;
  targetRef: MutableRefObject<HTMLDivElement | null>;
  overrides?: TabButtonOverrides;
}

// TODO:: button actived style 필요
const TabButton = ({ text, targetRef, overrides }: TabButtonProps) => {
  const [css] = useStyletron();

  return (
    <Button
      overrides={overrides}
      onClick={() => {
        const target = targetRef?.current;

        if (isNull(target)) {
          return;
        }

        const targetPosition =
          target.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({
          top: targetPosition - 62,
          // behavior: 'smooth',
        });
      }}
    >
      <span
        className={css({
          fontSize: '16px',
          lineHeight: '24px',
          color: '#333333',
        })}
      >
        {text}
      </span>
    </Button>
  );
};

export type { TabButtonProps };
export { TabButton };
