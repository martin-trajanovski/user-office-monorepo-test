import ShortTextIcon from '@mui/icons-material/ShortText';
import { textInputQuestionValidationSchema } from '@user-office-software/validation';
import React from 'react';

import defaultRenderer from '../questionary/DefaultQuestionRenderer';
import { QuestionaryComponentDefinition } from '../questionary/QuestionaryComponentRegistry';
import { DataType } from '@user-office-software/shared-types';

import { QuestionaryComponentTextInput } from './QuestionaryComponentTextInput';
import { QuestionTemplateRelationTextInputForm } from './QuestionTemplateRelationTextInputForm';
import { QuestionTextInputForm } from './QuestionTextInputForm';
import TextSearchCriteriaComponent from './TextSearchCriteriaComponent';

export const textInputDefinition: QuestionaryComponentDefinition = {
  dataType: DataType.TEXT_INPUT,
  name: 'Text Input',
  questionaryComponent: QuestionaryComponentTextInput,
  questionForm: () => QuestionTextInputForm,
  questionTemplateRelationForm: () => QuestionTemplateRelationTextInputForm,
  readonly: false,
  creatable: true,
  icon: <ShortTextIcon />,
  renderers: defaultRenderer,
  createYupValidationSchema: textInputQuestionValidationSchema,
  getYupInitialValue: ({ answer }) => answer.value || '',
  searchCriteriaComponent: TextSearchCriteriaComponent,
};
