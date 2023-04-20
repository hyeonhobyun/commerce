import { OverrideObject } from '@type/component.types';
import { getOverrideStyle } from '@helper/getOverridesStyle';
import { useStyletron } from 'styletron-react';
import { border } from 'polished';

type HrOverrides = {
  Root?: Omit<OverrideObject<HrProps>, 'component'>;
};

interface HrProps {
  overrides?: HrOverrides;
}

const Hr = ({ overrides }: HrProps) => {
  const [css] = useStyletron();

  return (
    <hr
      className={css({
        width: '100%',
        ...border('top', '1px', 'solid', '#e0e0e0'),
        ...border('right', '0'),
        ...border('bottom', '0'),
        ...border('left', '0'),
        ...getOverrideStyle<HrProps>(overrides),
      })}
    />
  );
};

export type { HrProps };
export { Hr };
