import { useEffect, useState } from 'react';

import { SampleCore } from '../../models/questionary/sample/SampleCore';
import { useDataApi } from '../common/useDataApi';

export function useProposalSamples(proposalPk: number | null) {
  const [samples, setSamples] = useState<SampleCore[]>([]);

  const [loadingSamples, setLoadingSamples] = useState(false);
  const api = useDataApi();

  useEffect(() => {
    if (!proposalPk) {
      setSamples([]);

      return;
    }
    setLoadingSamples(true);
    api()
      .getSamplesWithQuestionaryStatus({ filter: { proposalPk } })
      .then((data) => {
        if (data.samples) {
          setSamples(data.samples);
        }
        setLoadingSamples(false);
      });
  }, [api, proposalPk]);

  return { samples, loadingSamples, setSamples };
}
