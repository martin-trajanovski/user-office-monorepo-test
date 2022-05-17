import React from 'react';

import { useShipment } from '../../hooks/shipment/useShipment';
import { ShipmentCore } from '../../models/questionary/shipment/ShipmentCore';
import UOLoader from '../common/UOLoader';
import ShipmentContainer from './ShipmentContainer';

interface UpdateShipmentProps {
  shipment: ShipmentCore;
  onShipmentSubmitted?: (shipment: ShipmentCore) => void;
}

function UpdateShipment({
  shipment: { id },
  onShipmentSubmitted,
}: UpdateShipmentProps) {
  const { shipment } = useShipment(id);

  if (!shipment) {
    return <UOLoader />;
  }

  return (
    <ShipmentContainer
      shipment={shipment}
      onShipmentSubmitted={onShipmentSubmitted}
    />
  );
}

export default UpdateShipment;
