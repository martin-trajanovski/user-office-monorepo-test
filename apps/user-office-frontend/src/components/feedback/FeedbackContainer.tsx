/* eslint-disable @typescript-eslint/no-use-before-define */
import { default as React, useState } from 'react';

import Questionary from '../questionary/Questionary';
import {
  QuestionaryContext,
  QuestionaryContextType,
} from '../questionary/QuestionaryContext';
import { TemplateGroupId } from '@user-office-software/shared-types';
import { FeedbackSubmissionState } from '../../questionary/feedback/FeedbackSubmissionState';
import { FeedbackWithQuestionary } from '../../questionary/feedback/FeedbackWithQuestionary';
import { QuestionarySubmissionModel } from '../../questionary/QuestionarySubmissionState';
import useEventHandlers from '../../questionary/useEventHandlers';
export interface FeedbackContextType extends QuestionaryContextType {
  state: FeedbackSubmissionState | null;
}

export interface FeedbackContainerProps {
  feedback: FeedbackWithQuestionary;
}
export default function FeedbackContainer(props: FeedbackContainerProps) {
  const [initialState] = useState(new FeedbackSubmissionState(props.feedback));

  const eventHandlers = useEventHandlers(TemplateGroupId.FEEDBACK);

  const { state, dispatch } = QuestionarySubmissionModel(initialState, [
    eventHandlers,
  ]);

  return (
    <QuestionaryContext.Provider value={{ state, dispatch }}>
      <Questionary title={'Feedback to the facility'} />
    </QuestionaryContext.Provider>
  );
}
