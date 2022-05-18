import React, { useContext } from 'react';

import { WizardStep } from '../../../../models/questionary/QuestionarySubmissionState';
import { StepDisplayElementFactory } from '../../DefaultStepDisplayElementFactory';
import { GenericTemplateContextType } from '../../questionaryComponents/GenericTemplate/GenericTemplateContainer';
import {
  createMissingContextErrorMessage,
  QuestionaryContext,
} from '../../QuestionaryContext';
import QuestionaryStepView from '../../QuestionaryStepView';

const GenericTemplateQuestionaryStepView = ({
  topicId,
  isReadonly,
  wizardStep,
}: {
  topicId: number;
  isReadonly: boolean;
  wizardStep: WizardStep;
}) => {
  const { dispatch, state } = useContext(
    QuestionaryContext
  ) as GenericTemplateContextType;

  if (!state || !dispatch) {
    throw new Error(createMissingContextErrorMessage());
  }

  const isLastStep = (wizardStep: WizardStep) =>
    state.wizardSteps[state.wizardSteps.length - 1] === wizardStep;

  return (
    <div>
      <QuestionaryStepView
        readonly={isReadonly}
        topicId={topicId}
        onStepComplete={() => {
          if (isLastStep(wizardStep)) {
            dispatch({
              type: 'ITEM_WITH_QUESTIONARY_SUBMITTED',
              itemWithQuestionary: state.genericTemplate,
            });
          }
        }}
      />
    </div>
  );
};

export class GenericTemplateStepDisplayElementFactory
  implements StepDisplayElementFactory
{
  getDisplayElement(wizardStep: WizardStep, isReadonly: boolean) {
    switch (wizardStep.type) {
      case 'QuestionaryStep':
        return (
          <GenericTemplateQuestionaryStepView
            isReadonly={isReadonly}
            topicId={wizardStep.payload.topicId}
            wizardStep={wizardStep}
          />
        );

      default:
        throw new Error(`Unknown step type ${wizardStep.type}`);
    }
  }
}
