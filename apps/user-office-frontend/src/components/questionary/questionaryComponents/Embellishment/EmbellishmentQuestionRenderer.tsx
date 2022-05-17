import React from 'react';

import { QuestionRenderer } from '../questionary/QuestionaryComponentRegistry';
import { EmbellishmentConfig } from '@user-office-software/shared-types';

const EmbellisgmentQuestionRenderer: QuestionRenderer = ({ config }) => (
  <span>{(config as EmbellishmentConfig).plain}</span>
);

export default EmbellisgmentQuestionRenderer;
