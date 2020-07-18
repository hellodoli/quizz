import React from 'react';
import { connect } from 'react-redux';
import { v1 as uuidv1 } from 'uuid';
import { RadioGroup, Radio, FormControlLabel } from '@material-ui/core';
import { toggleTypeLayoutView } from '../../actions/layoutView';
import {
  settingView as settingViewClass,
  layoutPreview as layoutPreviewClass,
} from './styled';
// Components
import Tooltip from '../Tooltip';
import SwitchView from '../Switch';
import RadioCustom from '../Radio';

const LayoutReview = ({ view }) => {
  const classes = layoutPreviewClass();
  const LayoutPreviewPost = () => {
    const className =
      view === 'card'
        ? classes.layouttPreviewPostCard
        : classes.layouttPreviewPostRow;
    const itemPreview =
      view === 'card' ? Array(10).fill(null) : Array(4).fill(null);
    return (
      <div className={className}>
        {itemPreview.map(() => (
          <span key={uuidv1()} />
        ))}
      </div>
    );
  };
  return (
    <div className={classes.layoutPreview}>
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

function SettingView(props) {
  const {
    options: { view, space },
    toggleTypeLayoutView: toggle,
  } = props;
  const classes = settingViewClass();
  const titleTooltip = view === 'card' ? 'Row View' : 'Card View';
  return (
    <div className={classes.root}>
      <LayoutReview view={view} />
      <div className="separator" />
      {/* Layout */}
      <div className={classes.item}>
        <div className={classes.itemTitle}>LAYOUT</div>
        <Tooltip
          title={titleTooltip}
          placement="top"
          enterDelay={500}
          leaveDelay={200}
          arrow
        >
          <div>
            <SwitchView
              width={64}
              isActive={!!(view === 'row')}
              onClick={toggle}
            />
          </div>
        </Tooltip>
      </div>
      {/* Spaciness */}
      <div className={classes.item}>
        <div className={classes.itemTitle}>SPACINESS</div>
        <div>
          <RadioGroup
            aria-label="gender"
            name="gender1"
            value={space}
            // onChange={handleChange}
          >
            <FormControlLabel
              value="eco"
              control={<RadioCustom color="primary" size="small" />}
              label="ECO"
            />
            <FormControlLabel
              value="roomy"
              control={<RadioCustom color="primary" size="small" font />}
              label="ROOMY"
            />
            <FormControlLabel
              value="cozy"
              control={<RadioCustom color="primary" size="small" />}
              label="COZY"
            />
          </RadioGroup>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  options: state.optionsReducer,
});

export default connect(mapStateToProps, { toggleTypeLayoutView })(SettingView);
