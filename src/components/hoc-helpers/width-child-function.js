import React from 'react';

const withChildFunction = fn => Wrap => {
  return props => {
    return <Wrap {...props} renderItem={fn} />;
  };
};

export default withChildFunction;