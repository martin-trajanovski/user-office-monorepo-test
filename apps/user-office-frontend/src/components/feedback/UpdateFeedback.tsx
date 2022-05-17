import React from 'react';

import { useFeedback } from '../../hooks/feedback/useFeedback';
import UOLoader from '../common/UOLoader';
import FeedbackContainer from './FeedbackContainer';

interface UpdateFeedbackProps {
  feedbackId: number;
}

function UpdateFeedback({ feedbackId }: UpdateFeedbackProps) {
  const { feedback } = useFeedback(feedbackId);

  if (!feedback) {
    return <UOLoader />;
  }

  return <FeedbackContainer feedback={feedback} />;
}

export default UpdateFeedback;
