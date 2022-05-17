import React from 'react';

import UOLoader from '../common/UOLoader';
import { useShipment } from '../../shipment/useShipment';
import { ShipmentCore } from '../../questionary/shipment/ShipmentCore';

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
