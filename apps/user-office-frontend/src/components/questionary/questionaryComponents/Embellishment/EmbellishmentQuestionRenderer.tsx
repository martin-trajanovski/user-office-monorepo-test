import { EmbellishmentConfig } from '@user-office-software-libs/shared-types';
import React from 'react';

import { QuestionRenderer } from '../../QuestionaryComponentRegistry';

const EmbellisgmentQuestionRenderer: QuestionRenderer = ({ config }) => (
  <span>{(config as EmbellishmentConfig).plain}</span>
);

export default EmbellisgmentQuestionRenderer;
