import FeedbackIcon from '@mui/icons-material/Feedback';
import React from 'react';

import { DataType } from '@user-office-software/shared-types';

import { QuestionaryComponentDefinition } from '../../models/questionaryComponentRegistry';
import { QuestionaryComponentFeedbackBasis } from './QuestionaryComponentFeedbackBasis';
import { QuestionFeedbackBasisForm } from './QuestionFeedbackBasisForm';
import { QuestionTemplateRelationFeedbackBasisForm } from './QuestionTemplateRelationFeedbackBasisForm';

export const feedbackBasisDefinition: QuestionaryComponentDefinition = {
  dataType: DataType.FEEDBACK_BASIS,
  name: 'Feedback Basis',
  questionaryComponent: QuestionaryComponentFeedbackBasis,
  questionForm: () => QuestionFeedbackBasisForm,
  questionTemplateRelationForm: () => QuestionTemplateRelationFeedbackBasisForm,
  readonly: true,
  creatable: false,
  icon: <FeedbackIcon />,
  createYupValidationSchema: null,
  getYupInitialValue: () => null,
};
