import { useContext } from 'react';

import { FeedbackContextType } from '../feedback/FeedbackContainer';
import {
  createMissingContextErrorMessage,
  QuestionaryContext,
} from '../questionary/QuestionaryContext';
import { SubmitActionDependencyContainer } from '../../questionary/useSubmitActions';
import { FeedbackSubmissionState } from '../../questionary/feedback/FeedbackSubmissionState';

function QuestionaryComponentFeedbackBasis() {
  const { dispatch, state } = useContext(
    QuestionaryContext
  ) as FeedbackContextType;

  if (!state || !dispatch) {
    throw new Error(createMissingContextErrorMessage());
  }

  return null;
}

const feedbackBasisPreSubmit =
  () =>
  async ({ api, dispatch, state }: SubmitActionDependencyContainer) => {
    const feedback = (state as FeedbackSubmissionState).feedback;

    const isCreated = feedback.id !== 0;
    if (isCreated) {
      // return existing questionary id
      return feedback.questionaryId;
    }

    // create new feedback and return new questionary id
    const result = await api.createFeedback({
      scheduledEventId: feedback.scheduledEventId,
    });
    const newFeedback = result.createFeedback.feedback;

    if (newFeedback?.questionary) {
      dispatch({
        type: 'ITEM_WITH_QUESTIONARY_CREATED',
        itemWithQuestionary: newFeedback,
      });

      return newFeedback.questionary.questionaryId;
    }

    throw new Error('Failed to create feedback');
  };

export { QuestionaryComponentFeedbackBasis, feedbackBasisPreSubmit };
