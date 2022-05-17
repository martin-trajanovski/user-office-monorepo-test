import { GenericTemplateFragment } from '@user-office-software/shared-types';
import { useEffect, useState } from 'react';

import { useDataApi } from '../common/useDataApi';

export function useGenericTemplate(genericTemplateId: number) {
  const [genericTemplate, setGenericTemplate] =
    useState<GenericTemplateFragment | null>(null);

  const api = useDataApi();

  useEffect(() => {
    api()
      .getGenericTemplate({ genericTemplateId })
      .then((data) => {
        if (data.genericTemplate) {
          setGenericTemplate(data.genericTemplate);
        }
      });
  }, [api, genericTemplateId]);

  return { genericTemplate };
}
