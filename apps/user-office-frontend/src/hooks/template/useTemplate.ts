import { GetTemplateQuery } from '@user-office-software-libs/shared-types';
import { useEffect, useState } from 'react';

import { useDataApi } from '../common/useDataApi';

export function useTemplate(templateId: number) {
  const api = useDataApi();
  const [template, setTemplate] = useState<GetTemplateQuery['template'] | null>(
    null
  );

  const [isLoadingTemplate, setLoadingTemplate] = useState(true);

  useEffect(() => {
    setLoadingTemplate(true);
    api()
      .getTemplate({ templateId })
      .then((data) => {
        if (data.template) {
          setTemplate(data.template);
        }
        setLoadingTemplate(false);
      });
  }, [api, templateId]);

  return { template, isLoadingTemplate };
}
