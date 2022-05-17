import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { multipleChoiceValidationSchema } from '@user-office-software/validation';
import React from 'react';

import defaultRenderer from '../questionary/DefaultQuestionRenderer';
import MultipleChoiceSearchCriteriaComponent from '../questionary/questionaryComponents/MultipleChoice/MultipleChoiceSearchCriteriaComponent';
import { DataType } from '@user-office-software/shared-types';

import { QuestionaryComponentDefinition } from '../../models/questionaryComponentRegistry';
import MultipleChoiceAnswerRenderer from './MultipleChoiceAnswerRenderer';
import { QuestionaryComponentMultipleChoice } from './QuestionaryComponentMultipleChoice';
import { QuestionMultipleChoiceForm } from './QuestionMultipleChoiceForm';
import { QuestionTemplateRelationMultipleChoiceForm } from './QuestionTemplateRelationMultipleChoiceForm';

export const multipleChoiceDefinition: QuestionaryComponentDefinition = {
  dataType: DataType.SELECTION_FROM_OPTIONS,
  name: 'Multiple choice',
  questionaryComponent: QuestionaryComponentMultipleChoice,
  questionForm: () => QuestionMultipleChoiceForm,
  questionTemplateRelationForm: () =>
    QuestionTemplateRelationMultipleChoiceForm,
  readonly: false,
  creatable: true,
  icon: <RadioButtonCheckedIcon />,
  renderers: {
    answerRenderer: MultipleChoiceAnswerRenderer,
    questionRenderer: defaultRenderer.questionRenderer,
  },
  createYupValidationSchema: multipleChoiceValidationSchema,
  getYupInitialValue: ({ answer }) => answer.value || [],
  searchCriteriaComponent: MultipleChoiceSearchCriteriaComponent,
};
