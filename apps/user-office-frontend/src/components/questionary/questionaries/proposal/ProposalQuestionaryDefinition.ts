import { Sdk, TemplateGroupId } from '@user-office-software-libs/shared-types';

import { ProposalSubmissionState } from '../../../../models/questionary/proposal/ProposalSubmissionState';
import { ItemWithQuestionary } from '../../../../models/questionary/QuestionarySubmissionState';
import ProposalSummary from '../../../proposal/ProposalSummary';
import { DefaultReviewWizardStep } from '../../DefaultReviewWizardStep';
import { DefaultStepDisplayElementFactory } from '../../DefaultStepDisplayElementFactory';
import { DefaultWizardStepFactory } from '../../DefaultWizardStepFactory';
import { QuestionaryDefinition } from '../../QuestionaryRegistry';
import { ProposalQuestionaryWizardStep } from './ProposalQuestionaryWizardStep';

export const proposalQuestionaryDefinition: QuestionaryDefinition = {
  groupId: TemplateGroupId.PROPOSAL,
  displayElementFactory: new DefaultStepDisplayElementFactory(ProposalSummary),
  wizardStepFactory: new DefaultWizardStepFactory(
    ProposalQuestionaryWizardStep,
    new DefaultReviewWizardStep((state) => {
      const proposalState = state as ProposalSubmissionState;

      return proposalState.proposal.submitted === true;
    })
  ),

  getItemWithQuestionary(
    api: Sdk,
    primaryKey: number
  ): Promise<ItemWithQuestionary | null> {
    return api.getProposal({ primaryKey: primaryKey }).then(({ proposal }) => {
      return proposal;
    });
  },
};
