import React from 'react';
import SourceLink from '../../components/Quizzs/SourceLink';

function CardItemHOC(WrappedComponent) {
  return (props) => {
    const {
      quizz: { source, rootSource },
    } = props;
    const SourceLinkWrapp = () => (
      <SourceLink source={source} rootSource={rootSource} />
    );
    return <WrappedComponent SourceLink={SourceLinkWrapp} {...props} />;
  };
}

export default CardItemHOC;
