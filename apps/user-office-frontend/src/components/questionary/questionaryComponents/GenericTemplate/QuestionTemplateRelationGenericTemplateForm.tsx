import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Link from '@mui/material/Link';
import MenuItem from '@mui/material/MenuItem';
import {
  SubTemplateConfig,
  TemplateGroupId,
} from '@user-office-software-libs/shared-types';
import { Field } from 'formik';
import { Select, TextField } from 'formik-mui';
import { default as React, FC } from 'react';
import * as Yup from 'yup';

import { useTemplates } from '../../../../hooks/template/useTemplates';
import TitledContainer from '../../../common/TitledContainer';
import { QuestionTemplateRelationFormProps } from '../../QuestionaryComponentRegistry';
import QuestionDependencyList from '../QuestionDependencyList';
import { QuestionExcerpt } from '../QuestionExcerpt';
import { QuestionTemplateRelationFormShell } from '../QuestionTemplateRelationFormShell';

export const QuestionTemplateRelationGenericTemplateForm: FC<
  QuestionTemplateRelationFormProps
> = (props) => {
  const templateId = (props.questionRel.question.config as SubTemplateConfig)
    .templateId;
  const { templates } = useTemplates({
    isArchived: false,
    group: TemplateGroupId.GENERIC_TEMPLATE,
    templateIds: templateId ? [templateId] : null,
  });

  if (!templates) {
    return null;
  }

  return (
    <QuestionTemplateRelationFormShell
      {...props}
      validationSchema={Yup.object().shape({
        question: Yup.object({
          config: Yup.object({
            addEntryButtonLabel: Yup.string(),
            maxEntries: Yup.number().nullable(),
            templateId: Yup.number().required('Template is required'),
          }),
        }),
      })}
    >
      {(formikProps) => (
        <>
          <QuestionExcerpt question={props.questionRel.question} />
          <TitledContainer label="Options">
            <Field
              name="config.addEntryButtonLabel"
              label="Add button label"
              id="add-button-input"
              placeholder='(e.g. "add new")'
              type="text"
              component={TextField}
              fullWidth
              data-cy="addEntryButtonLabel"
            />
          </TitledContainer>

          <TitledContainer label="Constraints">
            <Field
              name="config.minEntries"
              label="Min entries"
              id="Min-input"
              placeholder="(e.g. 1, leave blank for unlimited)"
              type="text"
              component={TextField}
              fullWidth
              data-cy="min-entries"
            />
            <Field
              name="config.maxEntries"
              label="Max entries"
              id="Max-input"
              type="text"
              component={TextField}
              fullWidth
              data-cy="max-entries"
            />
          </TitledContainer>

          <TitledContainer label="Options">
            <FormControl fullWidth>
              <InputLabel>Template name</InputLabel>
              <Field
                name="config.templateId"
                type="text"
                component={Select}
                data-cy="templateId"
                defaultValue={''}
              >
                {templates.length ? (
                  templates.map((template) => {
                    return (
                      <MenuItem
                        value={template.templateId}
                        key={template.templateId}
                      >
                        {template.name}
                      </MenuItem>
                    );
                  })
                ) : (
                  <MenuItem value="noTemplates" key="noTemplates" disabled>
                    No active templates
                  </MenuItem>
                )}
              </Field>
              <Link href="/GenericTemplates/" target="blank">
                View all templates
              </Link>
            </FormControl>
          </TitledContainer>

          <TitledContainer label="Dependencies">
            <QuestionDependencyList
              form={formikProps}
              template={props.template}
            />
          </TitledContainer>
        </>
      )}
    </QuestionTemplateRelationFormShell>
  );
};
