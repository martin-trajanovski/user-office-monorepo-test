import {
  Questionary,
  TemplateGroupId,
} from '@user-office-software/shared-types';
import { immerable } from 'immer';

import { QuestionarySubmissionState } from '../QuestionarySubmissionState';
import { ProposalWithQuestionary } from './ProposalWithQuestionary';

export class ProposalSubmissionState extends QuestionarySubmissionState {
  [immerable] = true;
  constructor(public proposal: ProposalWithQuestionary) {
    super(TemplateGroupId.PROPOSAL, proposal);
    this.stepIndex = this.getInitialStepIndex();
  }

  getItemId(): number {
    return this.proposal.primaryKey;
  }

  get itemWithQuestionary() {
    return this.proposal;
  }

  set itemWithQuestionary(item: { questionary: Questionary }) {
    this.proposal = { ...this.proposal, ...item };
  }

  getInitialStepIndex(): number {
    if (this.proposal?.status?.shortCode.toString() === 'EDITABLE_SUBMITTED') {
      return 0;
    }

    return super.getInitialStepIndex();
  }
}
