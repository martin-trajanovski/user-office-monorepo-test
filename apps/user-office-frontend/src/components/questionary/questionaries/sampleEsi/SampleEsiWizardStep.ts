import { QuestionaryWizardStep } from '../questionary/DefaultWizardStepFactory';
import { QuestionarySubmissionState } from '../../questionary/QuestionarySubmissionState';
import { SampleEsiSubmissionState } from '../../questionary/sampleEsi/SampleEsiSubmissionState';

export class SampleEsiWizardStep extends QuestionaryWizardStep {
  isItemWithQuestionaryEditable(state: QuestionarySubmissionState): boolean {
    const sampleEsiState = state as SampleEsiSubmissionState;

    return sampleEsiState.esi.isSubmitted === false;
  }
}
