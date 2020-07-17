import React from 'react';
import { connect } from 'react-redux';
import { toggleTypeLayoutView } from '../../actions/layoutView';
import {
  settingView as settingViewClass,
  layoutPreview as layoutPreviewClass,
} from './styled';
// Components
import SwitchView from '../Switch';

const LayoutReview = ({ view }) => {
  const classes = layoutPreviewClass({ view });
  const renderPreviewPost = () => {
    if (view === 'card')
      return (
        <div className={classes.layouttPreviewPostCard}>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>
      );
    return (
      <div className={classes.layouttPreviewPostRow}>
        <span />
        <span />
        <span />
        <span />
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
      {renderPreviewPost()}
    </div>
  );
};

function SettingView(props) {
  const { view, toggleTypeLayoutView: toggle } = props;
  const classes = settingViewClass();

  return (
    <div className={classes.root}>
      <LayoutReview view={view} />
      <div className="separator" />
      <div className={classes.item}>
        <div className={classes.itemTitle}>LAYOUT</div>
        <SwitchView width={64} isActive={!!(view === 'row')} onClick={toggle} />
      </div>

      <div className={classes.item}>
        <div className={classes.itemTitle}>SPACINESS</div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  view: state.layoutViewReducer.view,
});

export default connect(mapStateToProps, { toggleTypeLayoutView })(SettingView);
