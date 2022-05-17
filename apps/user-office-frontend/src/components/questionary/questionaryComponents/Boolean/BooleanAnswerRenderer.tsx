import React from 'react';

import { AnswerRenderer } from '../questionary/QuestionaryComponentRegistry';

const BooleanAnswerRenderer: AnswerRenderer = ({ value }) => {
  if (value === null || value === undefined) {
    return <span>Not answered</span>;
  }

  return <span>{value === true ? 'Yes' : 'No'}</span>;
};

export default BooleanAnswerRenderer;
