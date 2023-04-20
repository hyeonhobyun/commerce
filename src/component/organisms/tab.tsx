import { TabButton } from '@component/molecules/button/tabButton';
import { useStyletron } from 'styletron-react';
import { border } from 'polished';
import { MutableRefObject } from 'react';

interface TabProps {
  tabText: string[];
  tabRef: MutableRefObject<HTMLDivElement | null>[];
}

const Tab = ({ tabText, tabRef }: TabProps) => {
  const [css] = useStyletron();

  return (
    <article
      className={css({
        zIndex: 3,
        width: '100%',
        height: '64px',
        position: 'sticky',
        top: 0,
        display: 'flex',
        gridTemplateColumns: 'repeat(3, 1fr)',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        ...border('1px', 'solid', '#e0e0e0'),
      })}
    >
      {tabText.map((text, index) => (
        <TabButton
          key={`tabButton-${index}`}
          text={text}
          targetRef={tabRef[index]}
          overrides={{
            Root: {
              style: {
                width: '100%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              },
            },
          }}
        />
      ))}
    </article>
  );
};

export { Tab };
