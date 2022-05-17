import TodayIcon from '@mui/icons-material/Today';
import { dateQuestionValidationSchema } from '@user-office-software/validation';
import React from 'react';

import defaultRenderer from '../questionary/DefaultQuestionRenderer';
import { DataType } from '@user-office-software/shared-types';

import { QuestionaryComponentDefinition } from '../../models/questionaryComponentRegistry';
import DateAnswerRenderer from './DateAnswerRenderer';
import DateSearchCriteriaInput from './DateSearchCriteriaInput';
import { preSubmitDateTransform } from './preSubmitDateTransform';
import { QuestionaryComponentDatePicker } from './QuestionaryComponentDatePicker';
import { QuestionDateForm } from './QuestionDateForm';
import { QuestionTemplateRelationDateForm } from './QuestionTemplateRelationDateForm';

export const dateDefinition: QuestionaryComponentDefinition = {
  dataType: DataType.DATE,
  name: 'Date',
  questionaryComponent: QuestionaryComponentDatePicker,
  questionForm: () => QuestionDateForm,
  questionTemplateRelationForm: () => QuestionTemplateRelationDateForm,
  readonly: false,
  creatable: true,
  icon: <TodayIcon />,
  renderers: {
    questionRenderer: defaultRenderer.questionRenderer,
    answerRenderer: DateAnswerRenderer,
  },
  createYupValidationSchema: dateQuestionValidationSchema,
  getYupInitialValue: ({ answer }) => answer.value,
  searchCriteriaComponent: DateSearchCriteriaInput,
  preSubmitTransform: preSubmitDateTransform,
};
