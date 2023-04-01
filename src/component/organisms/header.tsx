import { useStyletron } from 'styletron-react';
import { border, margin, padding } from 'polished';
import { Input } from '@component/atoms/input';
import LogoSvg from '@asset/svgs/logo.svg';
import BasketSvg from '@asset/svgs/basket.svg';
import { Link } from '@component/atoms/link';

const Header = () => {
  const [css] = useStyletron();

  return (
    <header
      className={css({
        width: '100%',
        height: '80px',
        display: 'flex',
        position: 'sticky',
        top: 0,
        backgroundColor: '#ffffff',
        ...border('bottom', '1px', 'solid', '#e0e0e0'),
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
          <div
            className={css({
              display: 'flex',
              width: '450px',
              ...padding('16px'),
            })}
          >
            <Input
              placeholder="상품명을 입력해주세요"
              onChange={(e) => {
                const { value } = e.target;

                console.log(value);
              }}
            />
          </div>
        </section>

        {/* 장바구니 */}
        <section
          className={css({
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          })}
        >
          <BasketSvg width="32px" height="32px" />
        </section>
      </div>
    </header>
  );
};

export { Header };

// CenterFitWrapper vs CenterWrapper
