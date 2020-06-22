import React from 'react';

const someVar = true;

const ConditionalRender = () => {
  if (someVar === true) {
    return (
      <p className="cr">This is a sentence to confirm the conditional rendering works</p>
    )
  }
}

export default ConditionalRender;