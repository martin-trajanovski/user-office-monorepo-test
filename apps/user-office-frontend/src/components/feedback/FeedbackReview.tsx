import React, { useContext } from 'react';

import { NavigButton } from '../components/common/NavigButton';
import NavigationFragment from '../questionary/NavigationFragment';
import {
  createMissingContextErrorMessage,
  QuestionaryContext,
} from '../questionary/QuestionaryContext';
import QuestionaryDetails, {
  TableRowData,
} from '../questionary/QuestionaryDetails';
import { FeedbackStatus } from '@user-office-software/shared-types';
import useDataApiWithFeedback from '../../utils/useDataApiWithFeedback';
import { FunctionType } from '../../utilTypes';
import withConfirm, { WithConfirmType } from '../../utils/withConfirm';

import { FeedbackContextType } from './FeedbackContainer';

type FeedbackReviewProps = {
  onComplete?: FunctionType<void>;
  confirm: WithConfirmType;
};

function FeedbackReview({ confirm }: FeedbackReviewProps) {
  const { api, isExecutingCall } = useDataApiWithFeedback();
  const { state, dispatch } = useContext(
    QuestionaryContext
  ) as FeedbackContextType;
  if (!state || !dispatch) {
    throw new Error(createMissingContextErrorMessage());
  }

  const isSubmitted = state.feedback.status === 'SUBMITTED';

  const additionalDetails: TableRowData[] = [
    { label: 'Status', value: isSubmitted ? 'Submitted' : 'Draft' },
  ];

  return (
    <>
      <QuestionaryDetails
        questionaryId={state.feedback.questionaryId!}
        additionalDetails={additionalDetails}
        title="Feedback information"
      />
      <NavigationFragment isLoading={isExecutingCall}>
        <NavigButton
          onClick={() =>
            confirm(
              async () => {
                const result = await api().updateFeedback({
                  feedbackId: state.feedback.id,
                  status: FeedbackStatus.SUBMITTED,
                });
                if (!result.updateFeedback.feedback) {
                  return;
                }
                dispatch({
                  type: 'ITEM_WITH_QUESTIONARY_MODIFIED',
                  itemWithQuestionary: result.updateFeedback.feedback,
                });
                dispatch({
                  type: 'ITEM_WITH_QUESTIONARY_SUBMITTED',
                  itemWithQuestionary: result.updateFeedback.feedback,
                });
              },
              {
                title: 'Confirmation',
                description:
                  'I am aware that no further edits can be done after feedback submission.',
              }
            )()
          }
          disabled={isSubmitted}
          data-cy="submit-feedback-button"
        >
          {isSubmitted ? '✔ Submitted' : 'Submit'}
        </NavigButton>
      </NavigationFragment>
    </>
  );
}

export default withConfirm(FeedbackReview);
