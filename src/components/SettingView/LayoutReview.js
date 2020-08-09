import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { v1 as uuidv1 } from 'uuid';
import { useSelector } from 'react-redux';
import { getCardNumber } from '../../utils/quizzs';
import { getSpaceAndView } from '../../selector/options';
import { layoutPreview as layoutPreviewClass } from './styled';

const LayoutReview = () => {
  console.log('LayoutReView - rerender');
  const options = useSelector(getSpaceAndView);
  const { space, view } = options;

  const [cardNumber, setCardNumber] = useState(
    getCardNumber(window.innerWidth, view, space)
  );
  const cardHolder = cardNumber * 2;
  const classes = layoutPreviewClass({
    view,
    space,
    cardNumber,
  });

  useEffect(() => {
    // When user toggle layout view
    setCardNumber(getCardNumber(window.innerWidth, view, space));
    // When user resize browser
    const resizeWindow = () => {
      if (window.innerWidth) {
        const newCardNumber = getCardNumber(window.innerWidth, view, space);
        setCardNumber(newCardNumber);
      }
    };
    window.addEventListener('resize', resizeWindow);
    return () => window.removeEventListener('resize', resizeWindow);
  }, [space, view]);

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
      <div className={classes.layouttPreviewPost}>
        {Array(cardHolder)
          .fill(null)
          .map(() => (
            <span key={uuidv1()} />
          ))}
      </div>
    </div>
  );
};

export default LayoutReview;
