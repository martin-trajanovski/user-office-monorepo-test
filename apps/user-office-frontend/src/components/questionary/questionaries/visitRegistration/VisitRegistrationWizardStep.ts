import { QuestionarySubmissionState } from '../../../../models/questionary/QuestionarySubmissionState';
import { VisitRegistrationSubmissionState } from '../../../../models/questionary/visit/VisitRegistrationSubmissionState';
import { QuestionaryWizardStep } from '../../DefaultWizardStepFactory';

export class VisitRegistrationWizardStep extends QuestionaryWizardStep {
  isItemWithQuestionaryEditable(state: QuestionarySubmissionState): boolean {
    const registrationState = state as VisitRegistrationSubmissionState;

    return registrationState.registration.isRegistrationSubmitted === false;
  }
}
