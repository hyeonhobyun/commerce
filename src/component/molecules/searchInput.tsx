import { useStyletron } from 'styletron-react';
import { border, padding } from 'polished';
import { Input } from '@component/atoms/input';
import { Button } from '@component/atoms/button';
import SearchSvg from '@asset/svgs/search.svg';
import { useSearchList } from '@hook/useSearchList';
import { useEffect } from 'react';
import { debounce } from 'lodash';

const SearchInput = () => {
  const [css] = useStyletron();
  const {
    value: searchValue,
    setSearchValue,
    getSearchList,
  } = useSearchList({
    limit: 5,
  });

  useEffect(() => {
    const list = getSearchList();
    console.log(list);
  }, [getSearchList, searchValue]);

  return (
    <article
      className={css({
        display: 'flex',
        width: '450px',
        ...border('1px', 'solid', '#e0e0e0'),
      })}
    >
      <Input
        overrides={{
          Root: {
            style: {
              width: '100%',
              fontsize: '18px',
              lineHeight: '24px',
              ...padding('16px', '', '16px', '16px'),
            },
          },
        }}
        placeholder="상품명을 입력해주세요"
        onChange={debounce((e) => {
          const { value } = e.target;

          console.log('change');

          setSearchValue(value);
        }, 300)}
        onKeyUp={(e) => {
          if (e.key === 'Enter') {
            const { value } = e.target as HTMLInputElement;

            setSearchValue(value);
          }
        }}
      />
      <Button
        overrides={{
          Root: {
            style: {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              ...padding('16px'),
            },
          },
        }}
        onClick={() => {
          console.log('asdf');
        }}
      >
        <SearchSvg width="24px" height="24px" />
      </Button>
    </article>
  );
};

export { SearchInput };
