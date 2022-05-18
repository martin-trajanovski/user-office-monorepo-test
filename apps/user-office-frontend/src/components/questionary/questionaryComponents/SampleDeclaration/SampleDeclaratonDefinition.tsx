import AssignmentIcon from '@mui/icons-material/Assignment';
import { DataType } from '@user-office-software-libs/shared-types';
import { sampleDeclarationValidationSchema } from '@user-office-software/validation';
import React from 'react';

import { ProposalSubmissionState } from '../../../../models/questionary/proposal/ProposalSubmissionState';
import defaultRenderer from '../../DefaultQuestionRenderer';
import { QuestionaryComponentDefinition } from '../../QuestionaryComponentRegistry';
import QuestionaryComponentSampleDeclaration from './QuestionaryComponentSampleDeclaration';
import { QuestionSampleDeclarationForm } from './QuestionSampleDeclarationForm';
import { QuestionTemplateRelationSampleDeclarationForm } from './QuestionTemplateRelationSampleDeclarationForm';

export const sampleDeclarationDefinition: QuestionaryComponentDefinition = {
  dataType: DataType.SAMPLE_DECLARATION,
  name: 'Sample Declaration',
  questionaryComponent: QuestionaryComponentSampleDeclaration,
  questionForm: () => QuestionSampleDeclarationForm,
  questionTemplateRelationForm: () =>
    QuestionTemplateRelationSampleDeclarationForm,
  readonly: true,
  creatable: true,
  icon: <AssignmentIcon />,
  renderers: {
    answerRenderer: () => null,
    questionRenderer: defaultRenderer.questionRenderer,
  },
  createYupValidationSchema: (answer) =>
    sampleDeclarationValidationSchema(answer),
  getYupInitialValue: ({ state, answer }) => {
    const samplesState = state as ProposalSubmissionState;

    return (
      samplesState.proposal.samples?.filter(
        (sample) => sample.questionId === answer.question.id
      ) ?? []
    );
  },
};
