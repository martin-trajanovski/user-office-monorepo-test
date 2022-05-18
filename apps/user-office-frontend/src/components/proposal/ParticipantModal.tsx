import AddBox from '@mui/icons-material/AddBox';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import {
  UserRole,
  BasicUserDetails,
} from '@user-office-software-libs/shared-types';
import React from 'react';

import { useCheckAccess } from '../common/Can';
import PeopleTable from '../user/PeopleTable';
import ProposalPeopleTable from '../user/ProposalsPeopleTable';

function ParticipantModal(props: {
  title: string;
  addParticipants: (data: BasicUserDetails[]) => void;
  show: boolean;
  close: () => void;
  selection?: boolean;
  selectedUsers?: number[];
  userRole?: UserRole;
  invitationUserRole?: UserRole;
  participant?: boolean;
}) {
  const addUser = (rowData: BasicUserDetails | BasicUserDetails[]) => {
    const addedUserDetails = rowData as BasicUserDetails;

    props.addParticipants([addedUserDetails]);
  };

  const userTableProps = {
    title: props.title,
    action: {
      fn: addUser,
      actionText: 'Select user',
      actionIcon: <AddBox data-cy="select-user" />,
    },
    selectedUsers: props.selectedUsers,
    userRole: props.userRole || ('' as UserRole),
    emailInvite: true,
    selection: !!props.selection,
    onUpdate: (data: BasicUserDetails[]) => props.addParticipants(data),
    invitationUserRole: props.invitationUserRole || props.userRole,
  };

  const isUserOfficer = useCheckAccess([UserRole.USER_OFFICER]);

  const peopleTable = <PeopleTable {...userTableProps} />;

  const proposalPeopleTable = <ProposalPeopleTable {...userTableProps} />;

  return (
    <Dialog
      aria-labelledby="simple-modal-title"
      aria-describedby="simple-modal-description"
      open={props.show}
      onClose={() => props.close()}
      maxWidth="sm"
      fullWidth
    >
      <DialogContent>
        {props.participant && !isUserOfficer
          ? proposalPeopleTable
          : peopleTable}
      </DialogContent>
    </Dialog>
  );
}

export default ParticipantModal;
