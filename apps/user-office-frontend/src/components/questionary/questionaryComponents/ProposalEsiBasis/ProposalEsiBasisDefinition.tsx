import { DataType } from '@user-office-software-libs/shared-types';
import React from 'react';

import { ProposalEsiSubmissionState } from '../../../../models/questionary/proposalEsi/ProposalEsiSubmissionState';
import EsiIcon from '../../../common/icons/EsiIcon';
import { QuestionaryComponentDefinition } from '../../QuestionaryComponentRegistry';
import { createProposalEsiBasisValidationSchema } from './createProposalEsiValidationSchema';
import QuestionaryComponentProposalEsiBasis from './QuestionaryComponentProposalEsiBasis';
import { QuestionProposalEsiBasisForm } from './QuestionProposalEsiBasisForm';
import { QuestionTemplateRelationProposalEsiBasisForm } from './QuestionTemplateRelationProposalEsiBasisForm';

export const proposalEsiBasisDefinition: QuestionaryComponentDefinition = {
  dataType: DataType.PROPOSAL_ESI_BASIS,
  name: 'Proposal ESI Basis',
  questionaryComponent: QuestionaryComponentProposalEsiBasis,
  questionForm: () => QuestionProposalEsiBasisForm,
  questionTemplateRelationForm: () =>
    QuestionTemplateRelationProposalEsiBasisForm,
  readonly: true,
  creatable: false,
  icon: <EsiIcon />,
  createYupValidationSchema: createProposalEsiBasisValidationSchema,
  getYupInitialValue: ({ state }) => {
    const esiState = state as ProposalEsiSubmissionState;

    return esiState.esi.sampleEsis;
  },
};
