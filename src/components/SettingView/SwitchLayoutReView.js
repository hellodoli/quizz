import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getView } from '../../selector/options';
import { toggleTypeLayoutView } from '../../actions/options';
// Components
import Tooltip from '../Tooltip';
import SwitchView from '../Switch';

const IconCard = (
  <svg version="1.1" viewBox="0 0 24 24">
    <path
      pid="0"
      d="M6 4h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2zm0 10h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2a2 2 0 012-2zM16 4h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6a2 2 0 012-2zm0 10h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2a2 2 0 012-2z"
      _fill="#FFF"
      fillRule="evenodd"
    />
  </svg>
);

const IconRow = (
  <svg version="1.1" viewBox="0 0 24 24">
    <path
      pid="0"
      d="M5 17h14a1 1 0 011 1v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-1a1 1 0 011-1zM5 4h9a1 1 0 011 1v1a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1zm13 0h1a1 1 0 011 1v1a1 1 0 01-1 1h-1a1 1 0 01-1-1V5a1 1 0 011-1zM5 10.5h14a1 1 0 011 1v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-1a1 1 0 011-1z"
      _fill="#FFF"
      fillRule="evenodd"
    />
  </svg>
);

const SwitchLayoutReView = () => {
  console.log('SwitchLayoutReView re-render');
  const dispath = useDispatch();
  const view = useSelector(getView);
  const titleTooltip = view === 'card' ? 'Row View' : 'Card View';

  const switchViewLayout = () => {
    dispath(toggleTypeLayoutView());
  };

  return (
    <div>
      <Tooltip
        title={titleTooltip}
        placement="top"
        enterDelay={500}
        leaveDelay={200}
        arrow
      >
        <div className="d-inline-flex">
          <SwitchView
            width={64}
            leftIcon={() => IconCard}
            rightIcon={() => IconRow}
            isActive={!!(view === 'row')}
            onClick={switchViewLayout}
          />
        </div>
      </Tooltip>
    </div>
  );
};

export default SwitchLayoutReView;
