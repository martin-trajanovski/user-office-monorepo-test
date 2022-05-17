import React from 'react';

import UOLoader from '../common/UOLoader';
import { useEsi } from '../../esi/useEsi';

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
