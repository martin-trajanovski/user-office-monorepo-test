import { CreateEsiMutation } from '@user-office-software-libs/shared-types';
import React, { useEffect, useState } from 'react';

import useDataApiWithFeedback from '../../utils/useDataApiWithFeedback';
import UOLoader from '../common/UOLoader';
import ProposalEsiContainer from './ProposalEsiContainer';

interface CreateProposalEsiProps {
  scheduledEventId: number;
}
function CreateProposalEsi({ scheduledEventId }: CreateProposalEsiProps) {
  const { api } = useDataApiWithFeedback();
  const [esi, setEsi] = useState<CreateEsiMutation['createEsi']['esi']>(null);

  useEffect(() => {
    api()
      .createEsi({ scheduledEventId })
      .then((result) => {
        if (result.createEsi.esi) {
          setEsi(result.createEsi.esi);
        }
      });
  }, [scheduledEventId, api]);

  if (!esi) {
    return <UOLoader />;
  }

  return <ProposalEsiContainer esi={esi} />;
}

export default CreateProposalEsi;
