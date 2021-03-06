import {
  GetQuestionsQuery,
  QuestionsFilter,
} from '@user-office-software-libs/shared-types';
import { useEffect, useState } from 'react';

import { useDataApi } from '../common/useDataApi';

export type QuestionWithUsage = GetQuestionsQuery['questions'][number];

export function useQuestions(filter?: QuestionsFilter) {
  const [questionsFilter, setQuestionsFilter] = useState(filter);
  const [questions, setQuestions] = useState<QuestionWithUsage[]>([]);
  const [loadingQuestions, setLoadingQuestions] = useState(true);

  const api = useDataApi();

  useEffect(() => {
    let unmounted = false;

    setLoadingQuestions(true);
    api()
      .getQuestions({ filter: questionsFilter })
      .then((data) => {
        if (unmounted) {
          return;
        }
        if (data.questions) {
          setQuestions(data.questions);
        }
        setLoadingQuestions(false);
      });

    return () => {
      unmounted = true;
    };
  }, [api, questionsFilter]);

  return {
    loadingQuestions,
    questions,
    setQuestions,
    setQuestionsFilter,
  };
}
