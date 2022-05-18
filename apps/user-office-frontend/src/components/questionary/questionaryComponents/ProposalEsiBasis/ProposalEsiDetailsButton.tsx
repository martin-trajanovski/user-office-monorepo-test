import React from 'react';

import ButtonWithDialog from '../../../../hooks/common/ButtonWithDialog';
import ProposalEsiDetails from '../../../proposalEsi/ProposalEsiDetails';

interface ProposalEsiDetailsButtonProps {
  esiId: number;
}
function ProposalEsiDetailsButton(props: ProposalEsiDetailsButtonProps) {
  return (
    <ButtonWithDialog label="View ESI">
      <ProposalEsiDetails esiId={props.esiId} />
    </ButtonWithDialog>
  );
}

export default ProposalEsiDetailsButton;
