import FeedbackReview from '../feedback/FeedbackReview';
import { DefaultReviewWizardStep } from '../questionary/DefaultReviewWizardStep';
import { DefaultStepDisplayElementFactory } from '../questionary/DefaultStepDisplayElementFactory';
import { DefaultWizardStepFactory } from '../questionary/DefaultWizardStepFactory';
import { FeedbackStatus, Sdk, TemplateGroupId } from '@user-office-software/shared-types';
import { FeedbackSubmissionState } from '../../models/questionary/feedback/FeedbackSubmissionState';
import { ItemWithQuestionary } from '../../models/questionary/QuestionarySubmissionState';

import { QuestionaryDefinition } from '../../models/questionaryRegistry';
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
