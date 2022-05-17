import React from 'react';

import { AnswerRenderer } from '../questionary/QuestionaryComponentRegistry';
import { Unit } from '@user-office-software/shared-types';

const NumberInputAnswerRenderer: AnswerRenderer = (answer) => {
  if (!answer.value.value) {
    return <span>Left blank</span>;
  }

  const value = answer.value.value;
  const symbol = (answer.value.unit as Unit)?.symbol;

  return (
    <span>
      {value} {symbol ?? ''}
    </span>
  );
};

export default NumberInputAnswerRenderer;
