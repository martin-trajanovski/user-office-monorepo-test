import { Feature } from '@user-office-software-libs/shared-types';
import { useEffect, useState } from 'react';

import { useDataApi } from '../common/useDataApi';

export function useFeatures(): {
  loadingFeatures: boolean;
  features: Feature[];
} {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [loadingFeatures, setLoadingFeatures] = useState(true);

  const api = useDataApi();

  useEffect(() => {
    let unmounted = false;

    setLoadingFeatures(true);
    api()
      .getFeatures()
      .then((data) => {
        if (unmounted) {
          return;
        }

        setFeatures(data.features);
        setLoadingFeatures(false);
      })
      .catch(() => {
        setFeatures([]);
        setLoadingFeatures(false);
      });

    return () => {
      unmounted = true;
    };
  }, [api]);

  return { loadingFeatures, features };
}
