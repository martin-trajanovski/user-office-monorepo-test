import { Sep } from '@user-office-software/shared-types';
import { useState, useEffect } from 'react';

import { useDataApi } from '../common/useDataApi';

export function useSEPData(id: number) {
  const [loading, setLoading] = useState(true);
  const [sep, setSEP] = useState<Sep | null>(null);
  const api = useDataApi();

  useEffect(() => {
    let unmounted = false;

    setLoading(true);
    api()
      .getSEP({ id })
      .then((data) => {
        if (unmounted) {
          return;
        }

        if (data.sep) {
          setSEP(data.sep);
        }
        setLoading(false);
      });

    return () => {
      unmounted = true;
    };
  }, [id, api]);

  return { loading, sep, setSEP } as const;
}
