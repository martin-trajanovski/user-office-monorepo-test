import {
  QuestionFilterCompareOperator,
  QuestionTemplateRelationFragment,
} from '@user-office-software/shared-types';

import { SearchCriteria } from '../components/common/proposalFilters/QuestionaryFilter';

export interface SearchCriteriaInputProps {
  searchCriteria: SearchCriteria | null;
  onChange: (
    comparator: QuestionFilterCompareOperator,
    value: string | number | boolean | unknown[] | null
  ) => unknown;
  questionTemplateRelation: QuestionTemplateRelationFragment;
}
