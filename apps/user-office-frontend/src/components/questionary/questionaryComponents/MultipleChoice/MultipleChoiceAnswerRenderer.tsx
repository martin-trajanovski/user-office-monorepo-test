import React from 'react';

import { AnswerRenderer } from '../../QuestionaryComponentRegistry';

const MultipleChoiceAnswerRenderer: AnswerRenderer = ({ value }) => (
  <span>{value.join(', ')}</span>
);

export default MultipleChoiceAnswerRenderer;
