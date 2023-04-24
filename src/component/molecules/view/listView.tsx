import { Fragment, ReactNode } from 'react';
import { useStyletron } from 'styletron-react';
import { margin } from 'polished';
import { Hr } from '@component/atoms/hr';

interface ListViewProps<T> {
  data: T[];
  rowGap?: string;
  renderContent: (props: T, index: number) => ReactNode;
}

type ListViewDefaultData =
  | unknown
  | (Record<string, unknown> & {
      id: number;
    });

// TODO:: pagination 추가 필요
const ListView = <T extends ListViewDefaultData>({
  data,
  rowGap = '0px',
  renderContent,
}: ListViewProps<T>) => {
  const [css] = useStyletron();

  return (
    <article
      className={css({
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        rowGap: rowGap,
      })}
    >
      {data?.map((item, index) => (
        <Fragment key={index}>
          {index !== 0 && (
            <Hr
              overrides={{
                Root: {
                  style: {
                    ...margin('12px', ''),
                  },
                },
              }}
            />
          )}
          <li>{renderContent?.(item, index)}</li>
        </Fragment>
      ))}
    </article>
  );
};

export type { ListViewProps };
export { ListView };
