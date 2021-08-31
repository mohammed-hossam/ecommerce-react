import React from 'react';

function WithSpinner(RenderedComponent) {
  function component({ isLoading, ...props }) {
    return !isLoading ? (
      <div>...loading</div>
    ) : (
      <RenderedComponent {...props} />
    );
  }
  return component;
}

export default WithSpinner;
