import React, { useState } from 'react';
import { useQueryParams, NumberParam } from 'use-query-params';

import InstrumentFilter from '../common/proposalFilters/InstrumentFilter';
import { useInstrumentsData } from '../../instrument/useInstrumentsData';
import { useProposalBookingsScheduledEvents } from '../../proposalBooking/useProposalBookingsScheduledEvents';
import { StyledContainer, StyledPaper } from 'styles/StyledComponents';

import ExperimentsTable from './ExperimentTimesTable';

export default function InstrSciUpcomingExperimentTimesTable() {
  const [urlQueryParams] = useQueryParams({
    instrument: NumberParam,
  });

  const { instruments, loadingInstruments } = useInstrumentsData();

  const [selectedInstrumentId, setSelectedInstrumentId] = useState<number>(
    urlQueryParams.instrument ? urlQueryParams.instrument : 0
  );

  const { loading, proposalScheduledEvents } =
    useProposalBookingsScheduledEvents({
      onlyUpcoming: true,
      notDraft: true,
      instrumentId: selectedInstrumentId,
    });

  return (
    <StyledContainer>
      <StyledPaper>
        <InstrumentFilter
          shouldShowAll
          instruments={instruments}
          isLoading={loadingInstruments}
          instrumentId={selectedInstrumentId}
          onChange={(instrumentId) => {
            setSelectedInstrumentId(instrumentId);
          }}
        />
        <ExperimentsTable
          isLoading={loading}
          proposalScheduledEvents={proposalScheduledEvents}
          title="Upcoming experiments"
          options={{
            search: true,
            padding: 'normal',
            emptyRowsWhenPaging: true,
            paging: true,
          }}
        />
      </StyledPaper>
    </StyledContainer>
  );
}
