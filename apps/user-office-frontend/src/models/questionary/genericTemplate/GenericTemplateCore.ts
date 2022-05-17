import { GetGenericTemplatesWithQuestionaryStatusQuery } from '@user-office-software/shared-types';

export type GenericTemplateCore = NonNullable<
  GetGenericTemplatesWithQuestionaryStatusQuery['genericTemplates']
>[number];
