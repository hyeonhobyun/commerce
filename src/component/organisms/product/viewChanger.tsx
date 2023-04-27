import { useStyletron } from 'styletron-react';
import { Radio } from '@component/atoms/radio';
import { useState } from 'react';
import { makeSpriteIMG } from '@style/getSprite';
import { border } from 'polished';
import { ViewChangerSpriteImages } from '@type/assetTypeHelper';
import {
  viewInfoState,
  ViewInfoType,
} from '@store/product/viewChanger/viewInfoState';
import { useRecoilValue, useSetRecoilState } from 'recoil';

const viewChangeList: ViewInfoType[] = ['grid', 'list'];

const ViewChanger = () => {
  const [css] = useStyletron();
  const viewInfo = useRecoilValue(viewInfoState);
  const setViewInfo = useSetRecoilState(viewInfoState);
  const [checkedIndex, setCheckedIndex] = useState(
    viewChangeList.indexOf(viewInfo) || 0,
  );

  return (
    <article
      className={css({
        display: 'flex',
      })}
    >
      {viewChangeList.map((item, index) => (
        <Radio
          key={`view-changer-${item}`}
          index={index}
          groupName="viewChanger"
          checkedIndex={checkedIndex}
          setCheckedIndex={setCheckedIndex}
          callback={() => {
            setViewInfo(item);
          }}
        >
          <div
            className={css({
              width: '24px',
              height: '24px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: checkedIndex === index ? 'unset' : 'pointer',
              marginLeft: index === 0 ? 'unset' : '-1px',
              ...border('1px', 'solid', '#e0e0e0'),
            })}
          >
            <span
              className={css({
                filter: `invert(${checkedIndex === index ? 0.7 : 0})`,
                ...makeSpriteIMG({
                  dir: 'viewChanger',
                  img: `ic_${item}` as ViewChangerSpriteImages,
                  imgSize: {
                    width: 16,
                    height: 16,
                  },
                }),
              })}
            />
          </div>
        </Radio>
      ))}
    </article>
  );
};

export { ViewChanger };
