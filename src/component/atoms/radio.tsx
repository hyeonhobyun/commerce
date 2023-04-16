import { Dispatch, FC, ReactNode, SetStateAction, SyntheticEvent } from 'react';
import { useStyletron } from 'styletron-react';

interface RadioProps {
  index: number;
  groupName: string;
  checkedIndex: number;
  setCheckedIndex: Dispatch<SetStateAction<number>>;
  callback: (e: SyntheticEvent<Element, Event>) => void;
  children: ReactNode;
}

const Radio: FC<RadioProps> = ({
  index,
  groupName,
  checkedIndex,
  setCheckedIndex,
  callback,
  children,
}) => {
  const [css] = useStyletron();

  return (
    <label
      htmlFor={`${groupName}-${index}`}
      className={css({
        position: 'relative',
      })}
    >
      <input
        type="radio"
        id={`${groupName}-${index}`}
        name={groupName}
        checked={checkedIndex === index}
        onChange={(e) => {
          setCheckedIndex(index);

          if (checkedIndex !== index) {
            callback(e);
          }
        }}
        className={css({
          position: 'absolute',
        })}
      />
      {children}
    </label>
  );
};

export { Radio };
export type { RadioProps };
