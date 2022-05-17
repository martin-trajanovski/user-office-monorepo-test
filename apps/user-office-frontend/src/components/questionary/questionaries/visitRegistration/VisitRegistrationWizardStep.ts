import { QuestionaryWizardStep } from '../questionary/DefaultWizardStepFactory';
import { QuestionarySubmissionState } from '../../questionary/QuestionarySubmissionState';
import { VisitRegistrationSubmissionState } from '../../questionary/visit/VisitRegistrationSubmissionState';

export class VisitRegistrationWizardStep extends QuestionaryWizardStep {
  isItemWithQuestionaryEditable(state: QuestionarySubmissionState): boolean {
    const registrationState = state as VisitRegistrationSubmissionState;

    return registrationState.registration.isRegistrationSubmitted === false;
  }
}
