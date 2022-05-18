import { TemplateGroupId } from '@user-office-software-libs/shared-types';
import React from 'react';

import { StyledContainer, StyledPaper } from '../../styles/StyledComponents';
import SimpleTabs from '../common/TabPanel';
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
