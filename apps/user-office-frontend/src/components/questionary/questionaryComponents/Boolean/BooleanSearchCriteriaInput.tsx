import { FormControl, Grid, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useState } from 'react';

import { SearchCriteriaInputProps } from '../proposal/SearchCriteriaInputProps';
import { QuestionFilterCompareOperator } from '@user-office-software/shared-types';

function BooleanSearchCriteriaInput({
  onChange,
  searchCriteria,
}: SearchCriteriaInputProps) {
  const [value, setValue] = useState(searchCriteria?.value ?? '');

  return (
    <Grid container>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel shrink id="is-checked">
            Value
          </InputLabel>
          <Select
            value={value}
            onChange={(event) => {
              const newValue = event.target.value === 'yes';
              setValue(event.target.value as string);
              onChange(QuestionFilterCompareOperator.EQUALS, newValue);
            }}
            labelId="is-checked"
            data-cy="is-checked"
          >
            <MenuItem key="yes" value={'yes'}>
              Yes
            </MenuItem>
            <MenuItem key="no" value={'no'}>
              No
            </MenuItem>
          </Select>
        </FormControl>
      </Grid>
    </Grid>
  );
}

export default BooleanSearchCriteriaInput;
