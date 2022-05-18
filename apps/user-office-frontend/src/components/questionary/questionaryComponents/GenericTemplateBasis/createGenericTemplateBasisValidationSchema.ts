import * as Yup from 'yup';

import { QuestionaryComponentDefinition } from '../../QuestionaryComponentRegistry';

export const createGenericTemplateBasisValidationSchema: QuestionaryComponentDefinition['createYupValidationSchema'] =
  () => {
    let schema = Yup.string();
    schema = schema.required(`This is a required field`);

    return schema;
  };
