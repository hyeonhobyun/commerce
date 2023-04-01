import { useCallback, useState } from 'react';

interface UseSearchListProps {
  limit?: number;
}

const dummyData = Array(50)
  .fill(undefined)
  .map((arr, i) => i);

const useSearchList = ({ limit = 10 }: UseSearchListProps) => {
  const [value, setValue] = useState<string>('');

  const setSearchValue = (searchValue: string) => {
    setValue(searchValue);
  };

  const getSearchList = useCallback(() => {
    console.log(value);

    return dummyData.slice(0, limit);
  }, [value, limit]);

  return {
    value,
    setSearchValue,
    getSearchList,
  };
};

export { useSearchList };
