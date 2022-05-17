import React from 'react';

import TitledContainer from '../common/TitledContainer';
import { Question } from '@user-office-software/shared-types';

export function QuestionExcerpt({ question }: { question: Question }) {
  return (
    <TitledContainer label={'Question'}>{question.question}</TitledContainer>
  );
}
