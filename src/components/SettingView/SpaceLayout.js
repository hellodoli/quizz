import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { getSpace, getOptions } from '../../selector/options';
import { changeTypeSpaceView } from '../../actions/options';
import { formControlLabel as formControlLabelClass } from './styled';

function SpaceLayout() {
  console.log('SpaceLayout re-render');
  const classes = formControlLabelClass();
  const dispatch = useDispatch();
  const { space } = useSelector(getOptions);

  const FormControlLabelCustom = ({ value, label }) => {
    return (
      <FormControlLabel
        classes={classes}
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

export default React.memo(SpaceLayout);
