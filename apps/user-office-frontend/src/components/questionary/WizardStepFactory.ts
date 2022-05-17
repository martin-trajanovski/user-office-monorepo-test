import { QuestionaryStep } from '@user-office-software/shared-types';

import { WizardStep } from '../../models/questionary/QuestionarySubmissionState';

export interface WizardStepFactory {
  getWizardSteps(questionarySteps: QuestionaryStep[]): WizardStep[];
}
