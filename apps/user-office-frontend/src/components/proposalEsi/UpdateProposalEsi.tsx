import React from 'react';

import { useEsi } from '../../hooks/esi/useEsi';
import UOLoader from '../common/UOLoader';
import ProposalEsiContainer from './ProposalEsiContainer';

interface UpdateProposalEsiProps {
  esiId: number;
}

function UpdateProposalEsi({ esiId }: UpdateProposalEsiProps) {
  const { esi } = useEsi(esiId);

  if (!esi) {
    return <UOLoader />;
  }

  return <ProposalEsiContainer esi={esi} />;
}

export default UpdateProposalEsi;
