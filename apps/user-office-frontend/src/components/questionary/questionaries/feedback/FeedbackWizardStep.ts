import { FeedbackStatus } from '@user-office-software-libs/shared-types';

import { FeedbackSubmissionState } from '../../../../models/questionary/feedback/FeedbackSubmissionState';
import { QuestionarySubmissionState } from '../../../../models/questionary/QuestionarySubmissionState';
import { QuestionaryWizardStep } from '../../DefaultWizardStepFactory';

export class FeedbackWizardStep extends QuestionaryWizardStep {
  isItemWithQuestionaryEditable(state: QuestionarySubmissionState): boolean {
    const registrationState = state as FeedbackSubmissionState;

    return registrationState.feedback.status === FeedbackStatus.DRAFT;
  }
}
