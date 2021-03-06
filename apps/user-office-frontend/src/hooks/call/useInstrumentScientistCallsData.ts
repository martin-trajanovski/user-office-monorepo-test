import { Call } from '@user-office-software-libs/shared-types';
import { useEffect, useState } from 'react';

import { useDataApi } from '../common/useDataApi';

export function useInstrumentScientistCallsData(scientistId: number) {
  const [calls, setCalls] = useState<Call[]>([]);
  const [loadingCalls, setLoadingCalls] = useState(true);

  const api = useDataApi();

  useEffect(() => {
    let unmounted = false;

    setLoadingCalls(true);
    api()
      .getCallsByInstrumentScientist({ scientistId })
      .then((data) => {
        if (unmounted) {
          return;
        }

        if (data.callsByInstrumentScientist) {
          setCalls(data.callsByInstrumentScientist as Call[]);
        }
        setLoadingCalls(false);
      });

    return () => {
      unmounted = true;
    };
  }, [scientistId, api]);

  return { loadingCalls, calls };
}
