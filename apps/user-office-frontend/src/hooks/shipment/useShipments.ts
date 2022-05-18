import { ShipmentsFilter } from '@user-office-software-libs/shared-types';
import { SetStateAction, useEffect, useState } from 'react';

import { ShipmentCore } from '../../models/questionary/shipment/ShipmentCore';
import { useDataApi } from '../common/useDataApi';

export function useShipments(filter?: ShipmentsFilter) {
  const api = useDataApi();
  const [shipmentsFilter, setShipmentsFilter] = useState(filter);
  const [shipments, setShipments] = useState<ShipmentCore[]>([]);
  const [loadingShipments, setLoadingShipments] = useState(true);

  const setShipmentsWithLoading = (data: SetStateAction<ShipmentCore[]>) => {
    setLoadingShipments(true);
    setShipments(data);
    setLoadingShipments(false);
  };

  useEffect(() => {
    let unmounted = false;

    setLoadingShipments(true);
    api()
      .getShipments({ filter: shipmentsFilter })
      .then((data) => {
        if (unmounted) {
          return;
        }

        if (data.shipments) {
          setShipments(data.shipments);
        }
        setLoadingShipments(false);
      });

    return () => {
      unmounted = true;
    };
  }, [api, shipmentsFilter]);

  return {
    loadingShipments,
    shipments,
    setShipments,
    setShipmentsWithLoading,
    setShipmentsFilter,
  };
}
