import {
  BasicUserDetails,
  Call,
  QuestionaryStep,
} from '@user-office-software-libs/shared-types';
import React, { useContext } from 'react';
import { useParams } from 'react-router';

import { UserContext } from '../../context/UserContextProvider';
import { useCallData } from '../../hooks/call/useCallData';
import { useBlankQuestionaryStepsData } from '../../hooks/questionary/useBlankQuestionaryStepsData';
import { useBasicUserData } from '../../hooks/user/useUserData';
import { ProposalWithQuestionary } from '../../models/questionary/proposal/ProposalWithQuestionary';
import UOLoader from '../common/UOLoader';
import ProposalContainer from './ProposalContainer';

function createProposalStub(
  callId: number,
  templateId: number,
  questionarySteps: QuestionaryStep[],
  proposer: BasicUserDetails,
  call: Call | null
): ProposalWithQuestionary {
  return {
    primaryKey: 0,
    title: '',
    abstract: '',
    callId: callId,
    proposer: proposer,
    questionary: {
      questionaryId: 0,
      isCompleted: false,
      templateId: templateId,
      created: new Date(),
      steps: questionarySteps,
    },
    questionaryId: 0,
    proposalId: '',
    status: {
      id: 0,
      shortCode: 'DRAFT',
      description: '',
      name: '',
      isDefault: true,
    },
    submitted: false,
    users: [],
    samples: [],
    genericTemplates: [],
    call: call,
  };
}

export default function ProposalCreate() {
  const { user } = useContext(UserContext);
  const { callId, templateId } = useParams<{
    callId: string;
    templateId: string;
  }>();
  const { questionarySteps } = useBlankQuestionaryStepsData(
    parseInt(templateId as string)
  );

  // get call using api
  const { call } = useCallData(+callId);
  const { userData } = useBasicUserData(user.id);
  if (!questionarySteps || !call || !userData) {
    return <UOLoader style={{ marginLeft: '50%', marginTop: '100px' }} />;
  }

  return (
    <ProposalContainer
      proposal={createProposalStub(
        parseInt(callId as string),
        parseInt(templateId as string),
        questionarySteps,
        userData,
        call as Call
      )}
    />
  );
}
