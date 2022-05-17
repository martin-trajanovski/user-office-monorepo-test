import { feedbackBasisPreSubmit } from '../questionary/questionaryComponents/FeedbackBasis/QuestionaryComponentFeedbackBasis';
import { genericTemplateBasisPreSubmit } from '../questionary/questionaryComponents/GenericTemplateBasis/QuestionaryComponentGenericTemplateBasis';
import { proposalBasisPreSubmit } from '../questionary/questionaryComponents/ProposalBasis/QuestionaryComponentProposalBasis';
import { sampleBasisPreSubmit } from '../questionary/questionaryComponents/SampleBasis/QuestionaryComponentSampleBasis';
import { shipmentBasisPreSubmit } from '../questionary/questionaryComponents/ShipmentBasis/QuestionaryComponentShipmentBasis';
import { visitBasisPreSubmit } from '../questionary/questionaryComponents/VisitBasis/QuestionaryComponentVisitBasis';
import { Answer, DataType, Sdk } from '@user-office-software/shared-types';
import {
  Event,
  QuestionarySubmissionState,
} from '../../models/questionary/QuestionarySubmissionState';

export type SubmitActionDependencyContainer = {
  state: QuestionarySubmissionState;
  dispatch: React.Dispatch<Event>;
  api: Sdk;
};
export type SubmitAction = (
  dependencies: SubmitActionDependencyContainer
) => Promise<number | null>;

export function usePreSubmitActions() {
  return (answers: Answer[]): SubmitAction[] => {
    const actions = answers.flatMap((answer) => {
      switch (answer.question.dataType) {
        case DataType.SAMPLE_BASIS:
          return sampleBasisPreSubmit();
        case DataType.PROPOSAL_BASIS:
          return proposalBasisPreSubmit();
        case DataType.SHIPMENT_BASIS:
          return shipmentBasisPreSubmit();
        case DataType.VISIT_BASIS:
          return visitBasisPreSubmit();
        case DataType.GENERIC_TEMPLATE_BASIS:
          return genericTemplateBasisPreSubmit();
        case DataType.FEEDBACK_BASIS:
          return feedbackBasisPreSubmit();
      }

      return [];
    });

    return actions;
  };
}

export function usePostSubmitActions() {
  return (answers: Answer[]): SubmitAction[] => {
    const actions = answers
      .flatMap((answer) => {
        switch (
          answer.question.dataType
          // nothing here for now
        ) {
        }

        return [];
      })
      .filter((promise) => promise !== null);

    return actions;
  };
}
