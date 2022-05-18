import {
  DateConfig,
  SettingsId,
} from '@user-office-software-libs/shared-types';
import React from 'react';

import { useFormattedDateTime } from '../../../../hooks/admin/useFormattedDateTime';
import { AnswerRenderer } from '../../QuestionaryComponentRegistry';

const DateAnswerRenderer: AnswerRenderer = ({ config, value }) => {
  const settingsFormatToUse = (config as DateConfig).includeTime
    ? SettingsId.DATE_TIME_FORMAT
    : SettingsId.DATE_FORMAT;
  const { toFormattedDateTime } = useFormattedDateTime({
    settingsFormatToUse,
  });

  if (!value) {
    return <span>Left blank</span>;
  }

  return <span>{toFormattedDateTime(value)}</span>;
};

export default DateAnswerRenderer;
