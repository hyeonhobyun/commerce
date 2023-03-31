import { useStyletron } from 'styletron-react';
import { border, padding } from 'polished';
import { Link } from '@component/atoms/link';
import { Input } from '@component/atoms/input';

const Header = () => {
  const [css] = useStyletron();

  return (
    <header
      className={css({
        width: '100%',
        height: '80px',
        position: 'sticky',
        top: 0,
        display: 'flex',
        backgroundColor: '#ffffff',
        ...border('bottom', '1px', 'solid', '#e0e0e0'),
        ...padding('16px', '24px'),
      })}
    >
      {/* 로고 */}
      <section>
        <Link href="/">
          <b
            className={css({
              fontSize: '48px',
              lineHeight: '56px',
              color: '#333333',
            })}
          >
            LOGO
          </b>
        </Link>
      </section>

      {/* 검색창 */}
      <section>
        <div
          className={css({
            display: 'flex',
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
      <section>
        <b>
          장바구니
          <br />
          위치
        </b>
      </section>
    </header>
  );
};

export { Header };

// CenterFitWrapper vs CenterWrapper
