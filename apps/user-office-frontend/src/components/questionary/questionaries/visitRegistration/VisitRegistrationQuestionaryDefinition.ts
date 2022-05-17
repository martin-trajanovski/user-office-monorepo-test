import { DefaultReviewWizardStep } from '../questionary/DefaultReviewWizardStep';
import { DefaultStepDisplayElementFactory } from '../questionary/DefaultStepDisplayElementFactory';
import { DefaultWizardStepFactory } from '../questionary/DefaultWizardStepFactory';
import VisitRegistrationReview from '../visit/VisitRegistrationReview';
import { Sdk, TemplateGroupId } from '@user-office-software/shared-types';
import { ItemWithQuestionary } from '../../questionary/QuestionarySubmissionState';
import { VisitRegistrationSubmissionState } from '../../questionary/visit/VisitRegistrationSubmissionState';

import { QuestionaryDefinition } from '../../QuestionaryRegistry';
import { VisitRegistrationWizardStep } from './VisitRegistrationWizardStep';

export const visitRegistrationQuestionaryDefinition: QuestionaryDefinition = {
  groupId: TemplateGroupId.VISIT_REGISTRATION,

  displayElementFactory: new DefaultStepDisplayElementFactory(
    VisitRegistrationReview
  ),

  wizardStepFactory: new DefaultWizardStepFactory(
    VisitRegistrationWizardStep,
    new DefaultReviewWizardStep(
      (state) =>
        (state as VisitRegistrationSubmissionState).registration
          .isRegistrationSubmitted
    )
  ),

  getItemWithQuestionary(
    api: Sdk,
    visitId: number
  ): Promise<ItemWithQuestionary | null> {
    return api
      .getVisitRegistration({ visitId })
      .then(({ visitRegistration }) => visitRegistration);
  },
};
