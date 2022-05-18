import CheckBoxOutlineBlankIcon from '@mui/icons-material/CheckBoxOutlineBlank';
import { DataType } from '@user-office-software-libs/shared-types';
import { booleanQuestionValidationSchema } from '@user-office-software-libs/validation';
import React from 'react';

import defaultRenderer from '../../DefaultQuestionRenderer';
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
