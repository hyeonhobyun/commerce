import { useStyletron } from 'styletron-react';
import { Link } from '@component/atoms/link';
import { OverrideObject } from '@type/component.types';
import { getOverrideStyle } from '@helper/getOverridesStyle';

type TabButtonOverrides<T> = {
  Root?: Omit<OverrideObject<TabButtonProps<T>>, 'component'>;
};

interface TabButtonProps<T> {
  text: string;
  anchor: T;
  overrides?: TabButtonOverrides<T>;
}

const TabButton = <T extends string>({
  text,
  anchor,
  overrides,
}: TabButtonProps<T>) => {
  const [css] = useStyletron();

  return (
    <Link href={`#${anchor}`}>
      <div className={css(getOverrideStyle(overrides))}>
        <span
          className={css({
            fontSize: '16px',
            lineHeight: '24px',
            color: '#333333',
          })}
        >
          {text}
        </span>
      </div>
    </Link>
  );
};

export type { TabButtonProps };
export { TabButton };
