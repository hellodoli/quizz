import React from 'react';
import clsx from 'clsx';
import { useSelector, useDispatch } from 'react-redux';
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { getSpace } from '../../selector/options';
import { changeTypeSpaceView } from '../../actions/options';
import { formControlLabel as formControlLabelClass } from './styled';

function SpaceLayout() {
  console.log('SpaceLayout re-render');
  const classes = formControlLabelClass();
  const dispatch = useDispatch();
  const space = useSelector(getSpace);

  const FormControlLabelCustom = ({ value, label }) => {
    const activeOption = clsx(space === value && 'quizz-active-option');
    return (
      <FormControlLabel
        classes={classes}
        className={activeOption}
        label={label}
        value={value}
        control={<Radio color="primary" size="small" />}
      />
    );
  };
  const handleChange = (event) => {
    dispatch(changeTypeSpaceView(event.target.value));
  };

  return (
    <RadioGroup
      aria-label="spaciness"
      name="spaciness"
      value={space}
      onChange={handleChange}
    >
      <FormControlLabelCustom label="ECO" value="eco" />
      <FormControlLabelCustom label="ROOMY" value="roomy" />
      <FormControlLabelCustom label="COZY" value="cozy" />
    </RadioGroup>
  );
}

export default SpaceLayout;
