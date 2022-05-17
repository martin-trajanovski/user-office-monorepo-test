import { QuestionaryWizardStep } from '../questionary/DefaultWizardStepFactory';
import { FeedbackStatus } from '@user-office-software/shared-types';
import { FeedbackSubmissionState } from '../../models/questionary/feedback/FeedbackSubmissionState';
import { QuestionarySubmissionState } from '../../models/questionary/QuestionarySubmissionState';

export class FeedbackWizardStep extends QuestionaryWizardStep {
  isItemWithQuestionaryEditable(state: QuestionarySubmissionState): boolean {
    const registrationState = state as FeedbackSubmissionState;

    return registrationState.feedback.status === FeedbackStatus.DRAFT;
  }
}
