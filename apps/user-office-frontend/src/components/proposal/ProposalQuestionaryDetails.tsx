import { DataType } from '@user-office-software/shared-types';
import React from 'react';

import GenericTemplatesAnswerRenderer from '../questionary/questionaryComponents/GenericTemplate/GenericTemplateAnswerRenderer';
import SamplesAnswerRenderer from '../questionary/questionaryComponents/SampleDeclaration/SamplesAnswerRenderer';
import QuestionaryDetails, {
  QuestionaryDetailsProps,
} from '../questionary/QuestionaryDetails';

interface ProposalQuestionaryDetailsProps extends QuestionaryDetailsProps {
  proposalPk: number;
}

function ProposalQuestionaryDetails(props: ProposalQuestionaryDetailsProps) {
  const { proposalPk, questionaryId, additionalDetails } = props;

  return (
    <QuestionaryDetails
      questionaryId={questionaryId}
      additionalDetails={additionalDetails}
      answerRenderer={(answer) => {
        if (answer.question.dataType === DataType.SAMPLE_DECLARATION) {
          return (
            <SamplesAnswerRenderer proposalPk={proposalPk} answer={answer} />
          );
        } else if (answer.question.dataType === DataType.GENERIC_TEMPLATE) {
          return (
            <GenericTemplatesAnswerRenderer
              proposalPk={proposalPk}
              answer={answer}
            />
          );
        } else {
          return null;
        }
      }}
    />
  );
}

export default ProposalQuestionaryDetails;
