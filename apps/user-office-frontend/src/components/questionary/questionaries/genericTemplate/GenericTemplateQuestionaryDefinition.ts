import { Sdk, TemplateGroupId } from '@user-office-software/shared-types';
import { ItemWithQuestionary } from '../../models/questionary/QuestionarySubmissionState';

import { QuestionaryDefinition } from '../../models/questionaryRegistry';
import { GenericTemplateStepDisplayElementFactory } from './GenericTemplateStepDisplayElementFactory';
import { GenericTemplateWizardStepFactory } from './GenericTemplateWizardStepFactory';

export const genericTemplateQuestionaryDefinition: QuestionaryDefinition = {
  groupId: TemplateGroupId.GENERIC_TEMPLATE,
  displayElementFactory: new GenericTemplateStepDisplayElementFactory(),
  wizardStepFactory: new GenericTemplateWizardStepFactory(),
  getItemWithQuestionary(
    api: Sdk,
    genericTemplateId: number
  ): Promise<ItemWithQuestionary | null> {
    return api
      .getGenericTemplate({ genericTemplateId })
      .then(({ genericTemplate }) => genericTemplate);
  },
};
