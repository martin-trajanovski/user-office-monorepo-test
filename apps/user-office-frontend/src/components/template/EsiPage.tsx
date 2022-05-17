import React from 'react';

import SimpleTabs from '../common/TabPanel';
import { TemplateGroupId } from '@user-office-software/shared-types';
import { StyledContainer, StyledPaper } from 'styles/StyledComponents';

import DefaultTemplatesTable from './DefaultTemplatesTable';

export default function ProposalEsiPage() {
  const templateGroup = TemplateGroupId.PROPOSAL_ESI;
  const itemCountLabel = 'Proposal safety reviews';

  return (
    <StyledContainer>
      <StyledPaper>
        <SimpleTabs tabNames={['Current', 'Archived']}>
          <DefaultTemplatesTable
            templateGroup={templateGroup}
            itemCountLabel={itemCountLabel}
            isArchived={false}
          />
          <DefaultTemplatesTable
            templateGroup={templateGroup}
            itemCountLabel={itemCountLabel}
            isArchived={true}
          />
        </SimpleTabs>
      </StyledPaper>
    </StyledContainer>
  );
}
