import {
  BasicUserDetailsFragment,
  GetUsersQueryVariables,
} from '@user-office-software-libs/shared-types';
import { useEffect, useState } from 'react';

import { getCurrentUser } from '../../context/UserContextProvider';
import { useDataApi } from '../common/useDataApi';

export function usePrevColabs(
  usersFilter: GetUsersQueryVariables & { refreshData?: boolean }
) {
  const { filter, offset, first, subtractUsers, userRole, refreshData } =
    usersFilter;
  const userId = getCurrentUser()?.user.id as number;

  const [prevColabUsers, setPrevColabUsers] = useState<{
    totalCount: number;
    users: Array<BasicUserDetailsFragment>;
  }>({
    totalCount: 0,
    users: [],
  });
  const [loadingUsersData, setLoading] = useState(true);

  const api = useDataApi();
  useEffect(() => {
    let unmounted = false;

    setLoading(true);
    api()
      .getPreviousCollaborators({
        userId,
        filter,
        offset,
        subtractUsers,
        first,
        userRole,
      })
      .then((data) => {
        if (unmounted) {
          return;
        }

        setPrevColabUsers(
          data.previousCollaborators || { totalCount: 0, users: [] }
        );
        setLoading(false);
      });

    return () => {
      unmounted = true;
    };
  }, [
    userId,
    filter,
    offset,
    subtractUsers,
    first,
    userRole,
    api,
    refreshData,
  ]);

  return { loadingUsersData, prevColabUsers, setPrevColabUsers };
}
