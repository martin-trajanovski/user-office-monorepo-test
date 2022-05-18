import { Sdk, TemplateGroupId } from '@user-office-software-libs/shared-types';

import { ProposalEsiSubmissionState } from '../../../../models/questionary/proposalEsi/ProposalEsiSubmissionState';
import { ItemWithQuestionary } from '../../../../models/questionary/QuestionarySubmissionState';
import ProposalEsiReview from '../../../proposalEsi/ProposalEsiReview';
import { DefaultReviewWizardStep } from '../../DefaultReviewWizardStep';
import { DefaultStepDisplayElementFactory } from '../../DefaultStepDisplayElementFactory';
import { DefaultWizardStepFactory } from '../../DefaultWizardStepFactory';
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
