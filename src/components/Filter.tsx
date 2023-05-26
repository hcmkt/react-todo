import type { FC } from 'react';
import { FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { useAtom } from 'jotai';
import { filterAtom, countsAtom } from '@/atoms/atoms';
import { filters } from '@/constants/constants';
import { capitalize } from '@/libs/libs';
import type { Filter as TFilter } from '@/types/types';

const Filter: FC = () => {
  const [filter, setFilter] = useAtom(filterAtom);
  const [counts] = useAtom(countsAtom);

  return (
    <RadioGroup
      row
      value={filter}
      onChange={(e) => setFilter(e.target.value as TFilter)}
      sx={{ justifyContent: 'space-around' }}
    >
      {Object.entries(filters).map(([_filter]) => (
        <FormControlLabel
          key={_filter}
          value={_filter}
          control={<Radio />}
          label={`${capitalize(_filter)} (${counts[_filter]})`}
        />
      ))}
    </RadioGroup>
  );
};

export default Filter;
