import {
  Sdk,
  ShipmentStatus,
  TemplateGroupId,
} from '@user-office-software-libs/shared-types';

import { ItemWithQuestionary } from '../../../../models/questionary/QuestionarySubmissionState';
import { ShipmentSubmissionState } from '../../../../models/questionary/shipment/ShipmentSubmissionState';
import ShipmentReview from '../../../shipments/ShipmentReview';
import { DefaultReviewWizardStep } from '../../DefaultReviewWizardStep';
import { DefaultStepDisplayElementFactory } from '../../DefaultStepDisplayElementFactory';
import { DefaultWizardStepFactory } from '../../DefaultWizardStepFactory';
import { QuestionaryDefinition } from '../../QuestionaryRegistry';
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
