import React from 'react';

import { AnswerRenderer } from '../questionary/QuestionaryComponentRegistry';
import { DateConfig, SettingsId } from '@user-office-software/shared-types';
import { useFormattedDateTime } from '../../admin/useFormattedDateTime';

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
