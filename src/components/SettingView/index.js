import React from 'react';
import { connect } from 'react-redux';
import clsx from 'clsx';
import { v1 as uuidv1 } from 'uuid';
import {
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
} from '@material-ui/core';
import {
  toggleTypeLayoutView,
  changeTypeSpaceView,
  changeTypePreferences,
} from '../../actions/options';
import {
  settingView as settingViewClass,
  layoutPreview as layoutPreviewClass,
  formControlLabel as formControlLabelClass,
  preferencesLayout as preferencesLayoutClass,
} from './styled';
// Components
import Tooltip from '../Tooltip';
import SwitchView from '../Switch';

const LayoutReview = ({ view, space }) => {
  const classes = layoutPreviewClass({ view, space });
  const LayoutPreviewPost = () => {
    const getItemPreView = () => {
      if (view === 'card') {
        if (space === 'eco') {
          return Array(8).fill(null);
        }
        return Array(6).fill(null);
      }
      return Array(3).fill(null);
    };
    return (
      <div className={classes.layouttPreviewPost}>
        {getItemPreView().map(() => (
          <span key={uuidv1()} />
        ))}
      </div>
    );
  };
  return (
    <div className={clsx(classes.layoutPreview, classes.layoutPreviewCSSVar)}>
      {/* preview Top */}
      <div className={classes.layoutPreviewTop}>
        <span />
        <span />
        <span />
        <span />
      </div>
      {/* preview Post */}
      <LayoutPreviewPost />
    </div>
  );
};

const SwitchLayoutReView = ({ view, toggle }) => {
  const titleTooltip = view === 'card' ? 'Row View' : 'Card View';
  return (
    <Tooltip
      title={titleTooltip}
      placement="top"
      enterDelay={500}
      leaveDelay={200}
      arrow
    >
      <div>
        <SwitchView width={64} isActive={!!(view === 'row')} onClick={toggle} />
      </div>
    </Tooltip>
  );
};

const SpaceLayout = ({ space, setSpace }) => {
  const classes = formControlLabelClass();
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
    setSpace(event.target.value);
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
};

const PreferencesLayout = ({ pre, changePre }) => {
  const { id, value, name } = pre;
  const classes = preferencesLayoutClass();
  const handleChangePre = () => {
    changePre({
      key: id,
      value: !value,
    });
  };
  return (
    <div className={classes.root}>
      <div className={classes.switch}>
        <SwitchView
          width={32}
          height={16}
          leftIcon={null}
          rightIcon={null}
          isActive={value}
          onClick={handleChangePre}
        />
      </div>
      <Typography variant="body1">{name}</Typography>
    </div>
  );
};

function SettingView(props) {
  const {
    options: { view, space, preferences },
    toggleTypeLayoutView: toggleLayoutView, // toggle view
    changeTypeSpaceView: setSpace, // change space
    changeTypePreferences: changePre, // change preferences
  } = props;
  const preValues = Object.values({ ...preferences });
  const classes = settingViewClass();
  return (
    <div className={classes.root}>
      <LayoutReview view={view} space={space} />
      <div className="separator" />
      {/* Layout */}
      <div className={classes.item}>
        <div className={classes.itemTitle}>LAYOUT</div>
        <div className={classes.itemBody}>
          <SwitchLayoutReView toggle={toggleLayoutView} view={view} />
        </div>
      </div>
      {/* Spaciness */}
      <div className={classes.item}>
        <div className={classes.itemTitle}>SPACINESS</div>
        <div className={classes.itemBody}>
          <SpaceLayout space={space} setSpace={setSpace} />
        </div>
      </div>
      {/* Preferences */}
      <div className={classes.item}>
        <div className={classes.itemTitle}>Preferences</div>
        <div className={classes.itemBody}>
          {preValues.map((pre) => (
            <PreferencesLayout key={pre.id} pre={pre} changePre={changePre} />
          ))}
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  options: state.optionsReducer,
});

export default connect(mapStateToProps, {
  toggleTypeLayoutView,
  changeTypeSpaceView,
  changeTypePreferences,
})(SettingView);
