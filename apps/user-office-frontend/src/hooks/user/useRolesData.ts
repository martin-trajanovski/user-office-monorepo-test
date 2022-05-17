import { useEffect, useState } from 'react';

import { GetRolesQuery } from '@user-office-software/shared-types';
import { useDataApi } from '../../common/useDataApi';

export function useRolesData() {
  const api = useDataApi();
  const [rolesData, setRolesData] = useState<GetRolesQuery['roles']>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let unmounted = false;

    setLoading(true);
    api()
      .getRoles()
      .then((data) => {
        if (unmounted) {
          return;
        }

        setRolesData(data.roles);
        setLoading(false);
      });

    return () => {
      unmounted = true;
    };
  }, [api]);

  return { loading, rolesData, setRolesData } as const;
}
