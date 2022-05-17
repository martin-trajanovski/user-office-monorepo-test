import React from 'react';

import SimpleTabs from '../common/TabPanel';
import { TemplateGroupId } from '@user-office-software/shared-types';
import { StyledContainer, StyledPaper } from '../../styles/StyledComponents';

import DefaultTemplatesTable from './DefaultTemplatesTable';
import withMarkTemplateAsActiveAction from './withMarkTemplateAsActiveAction';

export default function FeedbackTemplatesPage() {
  const templateGroup = TemplateGroupId.FEEDBACK;
  const itemCountLabel = '# feedbacks';

  const TableComponent = withMarkTemplateAsActiveAction(DefaultTemplatesTable);

  return (
    <StyledContainer>
      <StyledPaper>
        <SimpleTabs tabNames={['Current', 'Archived']}>
          <TableComponent
            templateGroup={templateGroup}
            itemCountLabel={itemCountLabel}
            isArchived={false}
          />
          <TableComponent
            templateGroup={templateGroup}
            itemCountLabel={itemCountLabel}
            isArchived={true}
          />
        </SimpleTabs>
      </StyledPaper>
    </StyledContainer>
  );
}
