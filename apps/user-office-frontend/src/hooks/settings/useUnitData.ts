import { useEffect, useState, SetStateAction, Dispatch } from 'react';

import { Unit } from '@user-office-software/shared-types';
import { useDataApi } from '../../common/useDataApi';

export function useUnitsData(): {
  loadingUnits: boolean;
  units: Unit[];
  setUnitsWithLoading: Dispatch<SetStateAction<Unit[]>>;
} {
  const [units, setUnits] = useState<Unit[]>([]);
  const [loadingUnits, setLoadingUnits] = useState(true);

  const api = useDataApi();

  const setUnitsWithLoading = (data: SetStateAction<Unit[]>) => {
    setLoadingUnits(true);
    setUnits(data);
    setLoadingUnits(false);
  };

  useEffect(() => {
    let unmounted = false;

    setLoadingUnits(true);
    api()
      .getUnits()
      .then((data) => {
        if (unmounted) {
          return;
        }

        if (data.units) {
          setUnits(data.units as Unit[]);
        }
        setLoadingUnits(false);
      });

    return () => {
      unmounted = true;
    };
  }, [api]);

  return {
    loadingUnits,
    units,
    setUnitsWithLoading,
  };
}
