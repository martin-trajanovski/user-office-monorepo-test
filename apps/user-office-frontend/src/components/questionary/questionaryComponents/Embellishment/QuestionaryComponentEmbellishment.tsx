import React from 'react';

import { BasicComponentProps } from '../proposal/IBasicComponentProps';
import { EmbellishmentConfig } from '@user-office-software/shared-types';

export function QuestionaryComponentEmbellishment(props: BasicComponentProps) {
  const config = props.answer.config as EmbellishmentConfig;

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: config.html,
      }}
    ></div>
  );
}
