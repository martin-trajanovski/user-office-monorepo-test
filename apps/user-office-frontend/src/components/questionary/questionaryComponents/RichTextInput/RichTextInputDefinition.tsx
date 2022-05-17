import TextFormatIcon from '@mui/icons-material/TextFormat';
import { richTextInputQuestionValidationSchema } from '@user-office-software/validation';
import React from 'react';

import { QuestionaryComponentDefinition } from '../questionary/QuestionaryComponentRegistry';
import { DataType } from '@user-office-software/shared-types';

import { QuestionaryComponentRichTextInput } from './QuestionaryComponentRichTextInput';
import { QuestionRichTextInputForm } from './QuestionRichTextInputForm';
import { QuestionTemplateRelationRichTextInputForm } from './QuestionTemplateRelationRichTextInputForm';
import {
  RichTextInputAnswerRenderer,
  RichTextInputQuestionRenderer,
} from './RichTextInputRenderer';

export const richTextInputDefinition: QuestionaryComponentDefinition = {
  dataType: DataType.RICH_TEXT_INPUT,
  name: 'Rich Text Input',
  questionaryComponent: QuestionaryComponentRichTextInput,
  questionForm: () => QuestionRichTextInputForm,
  questionTemplateRelationForm: () => QuestionTemplateRelationRichTextInputForm,
  readonly: false,
  creatable: true,
  icon: <TextFormatIcon />,
  renderers: {
    questionRenderer: RichTextInputQuestionRenderer,
    answerRenderer: RichTextInputAnswerRenderer,
  },
  createYupValidationSchema: richTextInputQuestionValidationSchema,
  getYupInitialValue: ({ answer }) => answer.value || '',
};
