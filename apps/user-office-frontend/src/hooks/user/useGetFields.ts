import { useEffect, useState } from 'react';

import { GetFieldsQuery } from '@user-office-software/shared-types';
import { useDataApi } from '../../common/useDataApi';

export function useGetFields() {
  const [fieldContent, setFieldContent] = useState<
    GetFieldsQuery['getFields'] | null
  >(null);

  const api = useDataApi();

  useEffect(() => {
    let unmounted = false;

    api()
      .getFields()
      .then((data) => {
        if (unmounted) {
          return;
        }

        setFieldContent(data.getFields);
      });

    return () => {
      unmounted = true;
    };
  }, [api]);

  return fieldContent;
}
