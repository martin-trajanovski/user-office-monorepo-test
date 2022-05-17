import React from 'react';

import EsiIcon from '../common/icons/EsiIcon';
import { DataType } from '@user-office-software/shared-types';
import { SampleEsiSubmissionState } from '../../models/questionary/sampleEsi/SampleEsiSubmissionState';

import { QuestionaryComponentDefinition } from '../../models/questionaryComponentRegistry';
import { createSampleEsiBasisValidationSchema } from './createSampleEsiValidationSchema';
import { QuestionSampleEsiBasisForm } from './QuestionSampleEsiBasisForm';
import { QuestionTemplateRelationSampleEsiBasisForm } from './QuestionTemplateRelationSampleEsiBasisForm';

export const sampleEsiBasisDefinition: QuestionaryComponentDefinition = {
  dataType: DataType.SAMPLE_ESI_BASIS,
  name: 'Sample ESI Basis',
  questionaryComponent: null,
  questionForm: () => QuestionSampleEsiBasisForm,
  questionTemplateRelationForm: () =>
    QuestionTemplateRelationSampleEsiBasisForm,
  readonly: true,
  creatable: false,
  icon: <EsiIcon />,
  createYupValidationSchema: createSampleEsiBasisValidationSchema,
  getYupInitialValue: ({ state }) => {
    const esiState = state as SampleEsiSubmissionState;

    return esiState.esi;
  },
};
