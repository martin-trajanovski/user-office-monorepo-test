import {
  PageName,
  UserRole,
  FeatureId,
} from '@user-office-software-libs/shared-types';
import parse from 'html-react-parser';
import React, { useContext } from 'react';

import { FeatureContext } from '../../context/FeatureContextProvider';
import { useGetPageContent } from '../../hooks/admin/useGetPageContent';
import { StyledContainer, StyledPaper } from '../../styles/StyledComponents';
import ProposalTableInstrumentScientist from '../proposal/ProposalTableInstrumentScientist';
import ProposalTableUser from '../proposal/ProposalTableUser';
import UserUpcomingExperimentsTable from '../proposalBooking/UserUpcomingExperimentsTable';
import ProposalTableReviewer from '../review/ProposalTableReviewer';

const PaperContainer: React.FC = ({ children }) => (
  <StyledPaper>{children}</StyledPaper>
);

export default function OverviewPage(props: { userRole: UserRole }) {
  const [loadingContent, pageContent] = useGetPageContent(
    props.userRole === UserRole.USER ? PageName.HOMEPAGE : PageName.REVIEWPAGE
  );
  const { features } = useContext(FeatureContext);
  const isSchedulerEnabled = features.get(FeatureId.SCHEDULER)?.isEnabled;

  let roleBasedOverView = (
    <PaperContainer>
      <ProposalTableReviewer />
    </PaperContainer>
  );

  switch (props.userRole) {
    case UserRole.USER:
      roleBasedOverView = (
        <>
          {isSchedulerEnabled && <UserUpcomingExperimentsTable />}
          <PaperContainer>
            <ProposalTableUser />
          </PaperContainer>
        </>
      );
      break;
    case UserRole.INSTRUMENT_SCIENTIST:
      roleBasedOverView = (
        <PaperContainer>
          <ProposalTableInstrumentScientist />
        </PaperContainer>
      );
      break;
  }

  return (
    <StyledContainer>
      {props.userRole !== UserRole.INSTRUMENT_SCIENTIST && (
        <StyledPaper margin={[0, 0, 2, 0]}>
          {loadingContent ? (
            <div>Loading...</div>
          ) : (
            parse(pageContent as string)
          )}
        </StyledPaper>
      )}
      {roleBasedOverView}
    </StyledContainer>
  );
}
