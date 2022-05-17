import React from 'react';

import { useSample } from '../../hooks/sample/useSample';
import QuestionaryDetails, {
  TableRowData,
} from '../questionary/QuestionaryDetails';

interface SampleDetailsProps {
  sampleId: number;
}
function SampleDetails(props: SampleDetailsProps) {
  const { sample } = useSample(props.sampleId);

  if (!sample) {
    return <span>loading...</span>;
  }
  const additionalDetails: TableRowData[] = [
    {
      label: 'Title',
      value: sample.title,
    },
  ];

  return (
    <>
      <QuestionaryDetails
        questionaryId={sample.questionaryId}
        additionalDetails={additionalDetails}
        title="Sample information"
      />
    </>
  );
}

export default SampleDetails;
