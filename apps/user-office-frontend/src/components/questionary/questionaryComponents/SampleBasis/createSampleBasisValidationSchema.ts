import * as Yup from 'yup';

import { QuestionaryComponentDefinition } from '../questionary/QuestionaryComponentRegistry';

export const createSampleBasisValidationSchema: QuestionaryComponentDefinition['createYupValidationSchema'] =
  () => {
    let schema = Yup.string();
    schema = schema.required(`This is a required field`);

    return schema;
  };
