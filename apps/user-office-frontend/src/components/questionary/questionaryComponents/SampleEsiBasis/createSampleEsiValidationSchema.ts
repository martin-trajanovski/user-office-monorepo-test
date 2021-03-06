import * as Yup from 'yup';

import { CreateYupValidation } from '../../QuestionaryComponentRegistry';

export const createSampleEsiBasisValidationSchema: CreateYupValidation = () => {
  const schema = Yup.object().shape({
    proposalPk: Yup.number().min(1, 'Proposal is required'),
  });

  return schema;
};
