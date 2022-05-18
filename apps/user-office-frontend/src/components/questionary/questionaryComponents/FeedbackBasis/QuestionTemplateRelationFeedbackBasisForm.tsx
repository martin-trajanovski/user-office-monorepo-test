import React, { FC } from 'react';

import { QuestionTemplateRelationFormProps } from '../../QuestionaryComponentRegistry';
import { QuestionTemplateRelationFormShell } from '../QuestionTemplateRelationFormShell';

export const QuestionTemplateRelationFeedbackBasisForm: FC<
  QuestionTemplateRelationFormProps
> = (props) => {
  return (
    <QuestionTemplateRelationFormShell {...props} validationSchema={null} />
  );
};
