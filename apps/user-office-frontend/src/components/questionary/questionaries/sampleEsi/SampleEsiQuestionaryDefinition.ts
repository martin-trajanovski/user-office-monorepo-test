import { DefaultReviewWizardStep } from '../questionary/DefaultReviewWizardStep';
import { DefaultStepDisplayElementFactory } from '../questionary/DefaultStepDisplayElementFactory';
import { DefaultWizardStepFactory } from '../questionary/DefaultWizardStepFactory';
import SampleEsiReview from '../sampleEsi/SampleEsiReview';
import { Sdk, TemplateGroupId } from '@user-office-software/shared-types';
import { ItemWithQuestionary } from '../../models/questionary/QuestionarySubmissionState';

import { QuestionaryDefinition } from '../../models/questionaryRegistry';
import { SampleEsiWizardStep } from './SampleEsiWizardStep';

export const sampleEsiQuestionaryDefinition: QuestionaryDefinition = {
  groupId: TemplateGroupId.SAMPLE_ESI,
  displayElementFactory: new DefaultStepDisplayElementFactory(SampleEsiReview),
  wizardStepFactory: new DefaultWizardStepFactory(
    SampleEsiWizardStep,
    new DefaultReviewWizardStep(() => false)
  ),
  getItemWithQuestionary(
    api: Sdk,
    [esiId, sampleId]: [number, number]
  ): Promise<ItemWithQuestionary | null> {
    return api
      .getSampleEsi({ esiId, sampleId })
      .then(({ sampleEsi }) => sampleEsi);
  },
};
