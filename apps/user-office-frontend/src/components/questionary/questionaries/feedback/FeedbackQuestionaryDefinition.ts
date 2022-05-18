import {
  FeedbackStatus,
  Sdk,
  TemplateGroupId,
} from '@user-office-software-libs/shared-types';

import { FeedbackSubmissionState } from '../../../../models/questionary/feedback/FeedbackSubmissionState';
import { ItemWithQuestionary } from '../../../../models/questionary/QuestionarySubmissionState';
import FeedbackReview from '../../../feedback/FeedbackReview';
import { DefaultReviewWizardStep } from '../../DefaultReviewWizardStep';
import { DefaultStepDisplayElementFactory } from '../../DefaultStepDisplayElementFactory';
import { DefaultWizardStepFactory } from '../../DefaultWizardStepFactory';
import { QuestionaryDefinition } from '../../QuestionaryRegistry';
import { FeedbackWizardStep } from './FeedbackWizardStep';

export const feedbackQuestionaryDefinition: QuestionaryDefinition = {
  groupId: TemplateGroupId.FEEDBACK,

  displayElementFactory: new DefaultStepDisplayElementFactory(FeedbackReview),

  wizardStepFactory: new DefaultWizardStepFactory(
    FeedbackWizardStep,
    new DefaultReviewWizardStep(
      (state) =>
        (state as FeedbackSubmissionState).feedback.status ===
        FeedbackStatus.SUBMITTED
    )
  ),

  getItemWithQuestionary(
    api: Sdk,
    feedbackId: number
  ): Promise<ItemWithQuestionary | null> {
    return api.getFeedback({ feedbackId }).then(({ feedback }) => {
      return feedback;
    });
  },
};
