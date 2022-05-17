import ProposalEsiReview from '../proposalEsi/ProposalEsiReview';
import { DefaultReviewWizardStep } from '../questionary/DefaultReviewWizardStep';
import { DefaultStepDisplayElementFactory } from '../questionary/DefaultStepDisplayElementFactory';
import { DefaultWizardStepFactory } from '../questionary/DefaultWizardStepFactory';
import { Sdk, TemplateGroupId } from '@user-office-software/shared-types';
import { ProposalEsiSubmissionState } from '../../questionary/proposalEsi/ProposalEsiSubmissionState';
import { ItemWithQuestionary } from '../../questionary/QuestionarySubmissionState';

import { QuestionaryDefinition } from '../../QuestionaryRegistry';
import { EsiWizardStep } from './EsiWizardStep';

export const esiQuestionaryDefinition: QuestionaryDefinition = {
  groupId: TemplateGroupId.PROPOSAL_ESI,

  displayElementFactory: new DefaultStepDisplayElementFactory(
    ProposalEsiReview
  ),

  wizardStepFactory: new DefaultWizardStepFactory(
    EsiWizardStep,
    new DefaultReviewWizardStep(
      (state) => (state as ProposalEsiSubmissionState).esi.isSubmitted
    )
  ),
  getItemWithQuestionary(
    api: Sdk,
    esiId: number
  ): Promise<ItemWithQuestionary | null> {
    return api.getEsi({ esiId }).then(({ esi }) => esi);
  },
};
