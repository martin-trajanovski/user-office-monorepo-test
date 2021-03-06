import { useEffect, useState } from 'react';

import { ProposalEsiWithQuestionary } from '../../models/questionary/proposalEsi/ProposalEsiWithQuestionary';
import { useDataApi } from '../common/useDataApi';

export function useEsi(esiId: number) {
  const [esi, setEsi] = useState<ProposalEsiWithQuestionary | null>(null);
  const [loading, setLoading] = useState(true);

  const api = useDataApi();

  useEffect(() => {
    let cancelled = false;

    if (esiId) {
      setLoading(true);
      api()
        .getEsi({ esiId })
        .then((data) => {
          if (cancelled) {
            return;
          }

          setEsi(data.esi);
          setLoading(false);
        });
    }

    return () => {
      cancelled = true;
    };
  }, [esiId, api]);

  return { loading, esi, setEsi };
}
