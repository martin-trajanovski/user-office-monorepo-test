import { GetSamplesWithQuestionaryStatusQuery } from '@user-office-software/shared-types';

export type SampleCore = NonNullable<
  GetSamplesWithQuestionaryStatusQuery['samples']
>[number];
