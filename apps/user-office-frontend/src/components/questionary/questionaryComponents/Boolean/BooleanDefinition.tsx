import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { booleanQuestionValidationSchema } from '@user-office-software/validation';
import React from 'react';

import defaultRenderer from '../questionary/DefaultQuestionRenderer';
import { DataType } from '@user-office-software/shared-types';

import { QuestionaryComponentDefinition } from '../../QuestionaryComponentRegistry';
import BooleanAnswerRenderer from './BooleanAnswerRenderer';
import BooleanSearchCriteriaInput from './BooleanSearchCriteriaInput';
import { QuestionaryComponentBoolean } from './QuestionaryComponentBoolean';
import { QuestionBooleanForm } from './QuestionBooleanForm';
import { QuestionTemplateRelationBooleanForm } from './QuestionTemplateRelationBooleanForm';

export const booleanDefinition: QuestionaryComponentDefinition = {
  dataType: DataType.BOOLEAN,
  name: 'Boolean',
  questionaryComponent: QuestionaryComponentBoolean,
  questionForm: () => QuestionBooleanForm,
  questionTemplateRelationForm: () => QuestionTemplateRelationBooleanForm,
  readonly: false,
  creatable: true,
  icon: <CheckBoxOutlineBlankIcon />,
  renderers: {
    questionRenderer: defaultRenderer.questionRenderer,
    answerRenderer: BooleanAnswerRenderer,
  },
  createYupValidationSchema: booleanQuestionValidationSchema,
  getYupInitialValue: ({ answer }) => answer.value || false,
  searchCriteriaComponent: BooleanSearchCriteriaInput,
};
