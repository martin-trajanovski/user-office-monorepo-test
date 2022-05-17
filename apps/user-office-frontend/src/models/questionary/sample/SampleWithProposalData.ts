import { GetSamplesWithProposalDataQuery } from '@user-office-software/shared-types';

export type SampleWithProposalData = NonNullable<
  GetSamplesWithProposalDataQuery['samples']
>[number];
