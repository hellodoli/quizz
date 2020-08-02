import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOptions } from '../../selector/options';
import { toggleTypeLayoutView } from '../../actions/options';
// Components
import Tooltip from '../Tooltip';
import SwitchView from '../Switch';

const SwitchLayoutReView = () => {
  const dispath = useDispatch();
  const options = useSelector(getOptions);
  const { view } = options;
  const titleTooltip = view === 'card' ? 'Row View' : 'Card View';

  const switchViewLayout = () => {
    dispath(toggleTypeLayoutView());
  };

  return (
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
          onClick={switchViewLayout}
        />
      </div>
    </Tooltip>
  );
};

export default React.memo(SwitchLayoutReView);
