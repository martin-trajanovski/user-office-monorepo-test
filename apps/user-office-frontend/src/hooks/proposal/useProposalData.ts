import { GetProposalQuery } from '@user-office-software-libs/shared-types';
import { useEffect, useState } from 'react';

import { useDataApi } from '../common/useDataApi';

export type ProposalData = NonNullable<GetProposalQuery['proposal']>;

export function useProposalData(primaryKey: number | null | undefined) {
  const [proposalData, setProposalData] = useState<ProposalData | null>(null);
  const [loading, setLoading] = useState(true);

  const api = useDataApi();

  useEffect(() => {
    let unmounted = false;

    if (primaryKey) {
      setLoading(true);
      api()
        .getProposal({ primaryKey })
        .then((data) => {
          if (unmounted) {
            return;
          }

          setProposalData(data.proposal);
          setLoading(false);
        });
    }

    return () => {
      unmounted = true;
    };
  }, [primaryKey, api]);

  return { loading, proposalData, setProposalData };
}
