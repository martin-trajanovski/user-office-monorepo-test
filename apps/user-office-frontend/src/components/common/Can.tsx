import { UserRole } from '@user-office-software/shared-types';
import { useContext } from 'react';

import { UserContext } from '../../context/UserContextProvider';

export const useCheckAccess = (allowedRoles: UserRole[]) => {
  const { currentRole } = useContext(UserContext);

  if (!currentRole) {
    return false;
  }

  if (allowedRoles.includes(currentRole)) {
    return true;
  }

  return false;
};

type CanProps = {
  allowedRoles: UserRole[];
  yes?: () => JSX.Element | null;
  no?: () => JSX.Element | null;
};

const Can: React.FC<CanProps> = ({ allowedRoles, yes, no }) => {
  const hasAccessRights = useCheckAccess(allowedRoles);

  return hasAccessRights ? (yes ? yes() : null) : no ? no() : null;
};

Can.defaultProps = {
  yes: () => null,
  no: () => null,
};

export default Can;
