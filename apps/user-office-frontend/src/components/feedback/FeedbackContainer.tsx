/* eslint-disable @typescript-eslint/no-use-before-define */

import { TemplateGroupId } from '@user-office-software/shared-types';
import { default as React, useState } from 'react';

import { FeedbackSubmissionState } from '../../models/questionary/feedback/FeedbackSubmissionState';
import { FeedbackWithQuestionary } from '../../models/questionary/feedback/FeedbackWithQuestionary';
import { QuestionarySubmissionModel } from '../../models/questionary/QuestionarySubmissionState';
import useEventHandlers from '../../models/questionary/useEventHandlers';
import Questionary from '../questionary/Questionary';
import {
  QuestionaryContext,
  QuestionaryContextType,
} from '../questionary/QuestionaryContext';
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
