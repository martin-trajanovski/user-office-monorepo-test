import React from 'react';

import UOLoader from '../common/UOLoader';
import { useVisitRegistration } from '../../visit/useVisitRegistration';
import { VisitRegistrationCore } from '../../questionary/visit/VisitRegistrationCore';

import VisitRegistrationContainer from './VisitRegistrationContainer';

interface UpdateVisitRegistrationProps {
  visitRegistration: VisitRegistrationCore;
  onSubmitted?: (registration: VisitRegistrationCore) => void;
}

function UpdateVisitRegistration({
  visitRegistration,
  onSubmitted,
}: UpdateVisitRegistrationProps) {
  const { registration } = useVisitRegistration(visitRegistration.visitId);

  if (!registration) {
    return <UOLoader />;
  }

  return (
    <VisitRegistrationContainer
      registration={registration}
      onSubmitted={onSubmitted}
    />
  );
}

export default UpdateVisitRegistration;
