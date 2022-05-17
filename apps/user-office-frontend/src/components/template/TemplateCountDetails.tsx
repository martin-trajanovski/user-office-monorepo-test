import MaterialTable from '@material-table/core';
import { Link } from '@mui/material';
import React, { useMemo } from 'react';

import { GetTemplatesQuery } from '@user-office-software/shared-types';
import { QuestionWithUsage } from '../../template/useQuestions';
import { useTemplates } from '../../template/useTemplates';
import { tableIcons } from '../../materialIcons';

type TemplateTableRowType = NonNullable<GetTemplatesQuery['templates']>[0];
interface TemplateCountDetailsProps {
  question: QuestionWithUsage | null;
}

const columns = [
  {
    title: 'Name',
    field: 'name',
    render: (rowData: TemplateTableRowType) => (
      <Link
        title={rowData.name}
        href={`/QuestionaryEditor/${rowData.templateId}`}
      >
        {rowData.name}
      </Link>
    ),
  },
  { title: 'Description', field: 'description' },
  { title: 'Is Archived', field: 'isArchived' },
];

function TemplateCountDetails({ question }: TemplateCountDetailsProps) {
  const templateIds = useMemo(
    () => question?.templates.map((template) => template.templateId),
    [question]
  );
  const { templates } = useTemplates({ templateIds });
  if (!templates) {
    return null;
  }

  // fix for MaterialTable requiring rows to have an 'id' property
  const templatesWithId = templates.map((template) => ({
    id: template.templateId,
    ...template,
  }));

  return (
    <MaterialTable
      style={{ width: '100%' }}
      icons={tableIcons}
      columns={columns}
      data={templatesWithId}
      title="Templates"
      options={{ paging: false }}
    />
  );
}

export default TemplateCountDetails;
