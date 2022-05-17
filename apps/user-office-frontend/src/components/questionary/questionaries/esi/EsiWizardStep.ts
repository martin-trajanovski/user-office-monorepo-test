import { QuestionaryWizardStep } from '../questionary/DefaultWizardStepFactory';
import { ProposalEsiSubmissionState } from '../../questionary/proposalEsi/ProposalEsiSubmissionState';
import { QuestionarySubmissionState } from '../../questionary/QuestionarySubmissionState';

export class EsiWizardStep extends QuestionaryWizardStep {
  isItemWithQuestionaryEditable(state: QuestionarySubmissionState): boolean {
    const registrationState = state as ProposalEsiSubmissionState;

    return registrationState.esi.isSubmitted === false;
  }
}
