import React from 'react';

import ProposalEsiDetails from '../proposalEsi/ProposalEsiDetails';
import ButtonWithDialog from '../../common/ButtonWithDialog';

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
