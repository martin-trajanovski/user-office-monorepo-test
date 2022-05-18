import { QuestionarySubmissionState } from '../../../../models/questionary/QuestionarySubmissionState';
import { SampleEsiSubmissionState } from '../../../../models/questionary/sampleEsi/SampleEsiSubmissionState';
import { QuestionaryWizardStep } from '../../DefaultWizardStepFactory';

export class SampleEsiWizardStep extends QuestionaryWizardStep {
  isItemWithQuestionaryEditable(state: QuestionarySubmissionState): boolean {
    const sampleEsiState = state as SampleEsiSubmissionState;

    return sampleEsiState.esi.isSubmitted === false;
  }
}
