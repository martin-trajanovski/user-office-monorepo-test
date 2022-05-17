import { immerable } from 'immer';

import {
  Questionary,
  SampleFragment,
  TemplateGroupId,
} from '@user-office-software/shared-types';

import { QuestionarySubmissionState } from '../QuestionarySubmissionState';
import { ShipmentWithQuestionary } from './ShipmentWithQuestionary';

export class ShipmentSubmissionState extends QuestionarySubmissionState {
  [immerable] = true;

  constructor(public shipment: ShipmentWithQuestionary) {
    super(TemplateGroupId.SHIPMENT, shipment);
    this.stepIndex = this.getInitialStepIndex();
  }

  getItemId(): number {
    return this.shipment.id;
  }
  get itemWithQuestionary() {
    return this.shipment;
  }

  set itemWithQuestionary(item: { questionary: Questionary }) {
    this.shipment = { ...this.shipment, ...item };
  }
}

export interface ShipmentBasisFormikData {
  title: string;
  proposalPk: number;
  samples: SampleFragment[];
}
