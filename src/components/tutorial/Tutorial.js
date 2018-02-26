import React from 'react';
import PropTypes from 'prop-types';
import CodeBlock from './CodeBlock';

const Tutorial = () => {
  return (
    <div>
      <p>
        This paragraph explains indepth how to dismantle a thing without
        alarming the neighbors.
      </p>
      <CodeBlock header="Bar" />
    </div>
  );
};

export default Tutorial;
