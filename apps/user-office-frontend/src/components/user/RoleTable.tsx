import MaterialTable from '@material-table/core';
import Button from '@mui/material/Button';
import React, { useState } from 'react';

import { ActionButtonContainer } from '../common/ActionButtonContainer';
import { Role } from '@user-office-software/shared-types';
import { useRolesData } from '../../user/useRolesData';
import { tableIcons } from '../../materialIcons';

type RoleTableProps = {
  add: (values: Role[]) => void;
  activeRoles?: Role[];
};

const columns = [{ title: 'Role', field: 'title' }];

const RoleTable: React.FC<RoleTableProps> = ({ add, activeRoles }) => {
  const { rolesData, loading } = useRolesData();
  const [selectedRoles, setSelectedRoles] = useState<Role[]>([]);

  const inactiveRoles = rolesData?.filter(
    (role) => !activeRoles?.find((activeRole) => activeRole.id === role.id)
  );

  return (
    <>
      <MaterialTable
        icons={tableIcons}
        title="Add Roles"
        columns={columns}
        data={inactiveRoles as Role[]}
        isLoading={loading}
        onSelectionChange={(data) => setSelectedRoles(data)}
        options={{
          search: true,
          headerSelectionProps: {
            inputProps: { 'aria-label': 'Select All Rows' },
          },
          selection: true,
          selectionProps: (rowData: Role) => ({
            inputProps: {
              'aria-label': `${rowData.title}-select`,
            },
          }),
        }}
        localization={{
          toolbar: {
            nRowsSelected: (numberOfSelectedRoles) =>
              `${numberOfSelectedRoles} selected`,
          },
        }}
      />
      <ActionButtonContainer>
        <Button
          type="button"
          onClick={() => add(selectedRoles)}
          disabled={selectedRoles.length === 0 || loading}
          data-cy="assign-instrument-to-call"
        >
          Update
        </Button>
      </ActionButtonContainer>
    </>
  );
};

export default RoleTable;
