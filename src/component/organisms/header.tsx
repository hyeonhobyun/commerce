import { useStyletron } from 'styletron-react';
import { border, margin, padding } from 'polished';
import LogoSvg from '@asset/svgs/logo.svg';
import BasketSvg from '@asset/svgs/basket.svg';
import { Link } from '@component/atoms/link';
import { SearchInput } from '@component/molecules/searchInput';
import { Button } from '@component/atoms/button';
import { OverrideObject } from '@type/component.types';
import { getOverrideStyle } from '@helper/getOverridesStyle';

type HeaderOverrides = {
  Root?: Omit<OverrideObject<HeaderProps>, 'component'>;
};

interface HeaderProps {
  overrides?: HeaderOverrides;
}

const Header = ({ overrides }: HeaderProps) => {
  const [css] = useStyletron();

  return (
    <header
      className={css({
        zIndex: 2,
        width: '100%',
        height: '90px',
        display: 'flex',
        position: 'sticky',
        top: 0,
        backgroundColor: '#ffffff',
        ...border('bottom', '1px', 'solid', '#e0e0e0'),
        ...getOverrideStyle(overrides),
      })}
    >
      <div
        className={css({
          display: 'flex',
          columnGap: '48px',
          ...margin('', 'auto'),
          ...padding('16px', '24px'),
        })}
      >
        <section
          className={css({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          })}
        >
          <Link href="/">
            <div
              className={css({
                ...padding('4px'),
              })}
            >
              <LogoSvg
                className={css({
                  display: 'block',
                })}
              />
            </div>
          </Link>
        </section>

        <section
          className={css({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          })}
        >
          <SearchInput />
        </section>

        <section
          className={css({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          })}
        >
          <Button
            onClick={() => {
              console.log('click basket icon');
            }}
          >
            <BasketSvg width="32px" height="32px" />
          </Button>
        </section>
      </div>
    </header>
  );
};

export { Header };

// CenterFitWrapper vs CenterWrapper
