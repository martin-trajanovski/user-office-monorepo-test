import ProposalSummary from '../proposal/ProposalSummary';
import { DefaultReviewWizardStep } from '../questionary/DefaultReviewWizardStep';
import { DefaultStepDisplayElementFactory } from '../questionary/DefaultStepDisplayElementFactory';
import { DefaultWizardStepFactory } from '../questionary/DefaultWizardStepFactory';
import { Sdk, TemplateGroupId } from '@user-office-software/shared-types';
import { ProposalSubmissionState } from '../../questionary/proposal/ProposalSubmissionState';
import { ItemWithQuestionary } from '../../questionary/QuestionarySubmissionState';

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
