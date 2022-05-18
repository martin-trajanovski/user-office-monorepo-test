import { Field } from 'formik';
import { CheckboxWithLabel, TextField } from 'formik-mui';
import React, { FC } from 'react';
import * as Yup from 'yup';

import { useNaturalKeySchema } from '../../../../utils/userFieldValidationSchema';
import TitledContainer from '../../../common/TitledContainer';
import { QuestionFormProps } from '../../QuestionaryComponentRegistry';
import { QuestionFormShell } from '../../questionaryComponents/QuestionFormShell';

export const QuestionBooleanForm: FC<QuestionFormProps> = (props) => {
  const field = props.question;
  const naturalKeySchema = useNaturalKeySchema(field.naturalKey);

  return (
    <QuestionFormShell
      {...props}
      validationSchema={Yup.object().shape({
        naturalKey: naturalKeySchema,
        question: Yup.string().required('Question is required'),
        config: Yup.object({
          required: Yup.bool(),
        }),
      })}
    >
      {() => (
        <>
          <Field
            name="naturalKey"
            label="Key"
            type="text"
            component={TextField}
            fullWidth
            inputProps={{ 'data-cy': 'natural_key' }}
            id="boolean-key-input"
          />
          <Field
            name="question"
            label="Question"
            type="text"
            component={TextField}
            fullWidth
            inputProps={{ 'data-cy': 'question' }}
            id="boolean-question-input"
          />

          <TitledContainer label="Constraints">
            <Field
              name="config.required"
              component={CheckboxWithLabel}
              type="checkbox"
              Label={{
                label: 'User must check it to continue',
              }}
              data-cy="required"
            />
          </TitledContainer>
        </>
      )}
    </QuestionFormShell>
  );
};
