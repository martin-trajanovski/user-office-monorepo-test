import { QuestionaryStep } from '@user-office-software/shared-types';
import { WizardStep } from '../../questionary/QuestionarySubmissionState';

export interface WizardStepFactory {
  getWizardSteps(questionarySteps: QuestionaryStep[]): WizardStep[];
}
