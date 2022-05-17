import React, { FC } from 'react';

import { QuestionTemplateRelationFormProps } from '../questionary/QuestionaryComponentRegistry';

import { QuestionTemplateRelationFormShell } from '../QuestionTemplateRelationFormShell';

export const QuestionTemplateRelationShipmentBasisForm: FC<
  QuestionTemplateRelationFormProps
> = (props) => {
  return (
    <QuestionTemplateRelationFormShell {...props} validationSchema={null} />
  );
};
