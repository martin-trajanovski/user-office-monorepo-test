import { GetVisitRegistrationQuery } from '@user-office-software/shared-types';

export type RegistrationWithQuestionary = NonNullable<
  GetVisitRegistrationQuery['visitRegistration']
>;
