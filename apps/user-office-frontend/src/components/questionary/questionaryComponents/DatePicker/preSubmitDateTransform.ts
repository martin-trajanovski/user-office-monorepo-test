import { DateConfig } from '@user-office-software/shared-types';
import { DateTime } from 'luxon';

import { QuestionaryComponentDefinition } from '../../QuestionaryComponentRegistry';

export const preSubmitDateTransform: QuestionaryComponentDefinition['preSubmitTransform'] =
  (answer) => {
    const ifNotRequiredDateCanBeNull =
      !(answer.config as DateConfig).required && answer.value === null;

    return {
      ...answer,
      value: ifNotRequiredDateCanBeNull
        ? null
        : DateTime.fromISO(answer.value, { zone: 'utc' }).toISO(), // ISO time format with utc timezone
    };
  };
