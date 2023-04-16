import { useStyletron } from 'styletron-react';
import { Radio } from '@component/atoms/radio';
import { useState } from 'react';
import { makeSpriteIMG } from '@style/getSprite';

const ViewChanger = () => {
  const [css] = useStyletron();
  const [checkedIndex, setCheckedIndex] = useState(0);

  return (
    <article
      className={css({
        display: 'flex',
        columnGap: '8px',
      })}
    >
      <Radio
        index={0}
        groupName="viewChanger"
        checkedIndex={checkedIndex}
        setCheckedIndex={setCheckedIndex}
        callback={() => {
          console.log('asdf');
        }}
      >
        <span
          className={css({
            ...makeSpriteIMG({
              dir: 'viewChanger',
              img: 'ic_grid',
              imgSize: {
                width: 16,
                height: 16,
              },
            }),
          })}
        />
      </Radio>
      <Radio
        index={1}
        groupName="viewChanger"
        checkedIndex={checkedIndex}
        setCheckedIndex={setCheckedIndex}
        callback={() => {
          console.log('asdfasdf');
        }}
      >
        <span
          className={css({
            ...makeSpriteIMG({
              dir: 'viewChanger',
              img: 'ic_list',
              imgSize: {
                width: 16,
                height: 16,
              },
            }),
          })}
        />
      </Radio>
    </article>
  );
};

export { ViewChanger };
