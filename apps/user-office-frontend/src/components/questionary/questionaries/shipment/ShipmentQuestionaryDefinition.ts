import { DefaultReviewWizardStep } from '../questionary/DefaultReviewWizardStep';
import { DefaultStepDisplayElementFactory } from '../questionary/DefaultStepDisplayElementFactory';
import { DefaultWizardStepFactory } from '../questionary/DefaultWizardStepFactory';
import ShipmentReview from '../shipments/ShipmentReview';
import { Sdk, ShipmentStatus, TemplateGroupId } from '@user-office-software/shared-types';
import { ItemWithQuestionary } from '../../models/questionary/QuestionarySubmissionState';
import { ShipmentSubmissionState } from '../../models/questionary/shipment/ShipmentSubmissionState';

import { QuestionaryDefinition } from '../../models/questionaryRegistry';
import { ShipmentQuestionaryWizardStep } from './ShipmentQuestionaryWizardStep';

export const shipmentQuestionaryDefinition: QuestionaryDefinition = {
  groupId: TemplateGroupId.SHIPMENT,
  displayElementFactory: new DefaultStepDisplayElementFactory(ShipmentReview),
  wizardStepFactory: new DefaultWizardStepFactory(
    ShipmentQuestionaryWizardStep,
    new DefaultReviewWizardStep((state) => {
      return (
        (state as ShipmentSubmissionState).shipment.status ===
        ShipmentStatus.SUBMITTED
      );
    })
  ),

  getItemWithQuestionary(
    api: Sdk,
    shipmentId: number
  ): Promise<ItemWithQuestionary | null> {
    return api.getShipment({ shipmentId }).then(({ shipment }) => shipment);
  },
};
