import { DateTime } from 'luxon';

import { QuestionaryComponentDefinition } from '../questionary/QuestionaryComponentRegistry';
import { DateConfig } from '@user-office-software/shared-types';

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
