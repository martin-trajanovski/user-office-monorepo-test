import React from 'react';

import { useVisitRegistration } from '../../hooks/visit/useVisitRegistration';
import { VisitRegistrationCore } from '../../models/questionary/visit/VisitRegistrationCore';
import UOLoader from '../common/UOLoader';
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
