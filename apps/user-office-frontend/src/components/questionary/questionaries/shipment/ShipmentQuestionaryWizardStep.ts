import { QuestionaryWizardStep } from '../questionary/DefaultWizardStepFactory';
import { ShipmentStatus } from '@user-office-software/shared-types';
import { QuestionarySubmissionState } from '../../models/questionary/QuestionarySubmissionState';
import { ShipmentSubmissionState } from '../../models/questionary/shipment/ShipmentSubmissionState';

export class ShipmentQuestionaryWizardStep extends QuestionaryWizardStep {
  isItemWithQuestionaryEditable(state: QuestionarySubmissionState): boolean {
    const shipmentState = state as ShipmentSubmissionState;

    return shipmentState.shipment.status !== ShipmentStatus.SUBMITTED;
  }
}
