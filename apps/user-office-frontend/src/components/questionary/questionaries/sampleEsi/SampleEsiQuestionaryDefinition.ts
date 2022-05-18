import { Sdk, TemplateGroupId } from '@user-office-software-libs/shared-types';

import { ItemWithQuestionary } from '../../../../models/questionary/QuestionarySubmissionState';
import SampleEsiReview from '../../../sampleEsi/SampleEsiReview';
import { DefaultReviewWizardStep } from '../../DefaultReviewWizardStep';
import { DefaultStepDisplayElementFactory } from '../../DefaultStepDisplayElementFactory';
import { DefaultWizardStepFactory } from '../../DefaultWizardStepFactory';
import { QuestionaryDefinition } from '../../QuestionaryRegistry';
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
