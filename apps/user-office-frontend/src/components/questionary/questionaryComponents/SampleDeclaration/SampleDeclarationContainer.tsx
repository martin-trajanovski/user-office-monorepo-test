/* eslint-disable @typescript-eslint/no-use-before-define */
import { default as React, useState } from 'react';

import Questionary from '../questionary/Questionary';
import {
  QuestionaryContext,
  QuestionaryContextType,
} from '../questionary/QuestionaryContext';
import { TemplateGroupId } from '@user-office-software/shared-types';
import createCustomEventHandlers from '../../questionary/createCustomEventHandlers';
import {
  Event,
  QuestionarySubmissionModel,
} from '../../questionary/QuestionarySubmissionState';
import { SampleSubmissionState } from '../../questionary/sample/SampleSubmissionState';
import { SampleWithQuestionary } from '../../questionary/sample/SampleWithQuestionary';
import useEventHandlers from '../../questionary/useEventHandlers';

export interface SampleContextType extends QuestionaryContextType {
  state: SampleSubmissionState | null;
}

export function SampleDeclarationContainer(props: {
  sample: SampleWithQuestionary;
  sampleCreated?: (sample: SampleWithQuestionary) => void;
  sampleUpdated?: (sample: SampleWithQuestionary) => void;
  sampleEditDone?: () => void;
}) {
  const [initialState] = useState(new SampleSubmissionState(props.sample));

  const eventHandlers = useEventHandlers(TemplateGroupId.SAMPLE);

  const customEventHandlers = createCustomEventHandlers(
    (state: SampleSubmissionState, action: Event) => {
      switch (action.type) {
        case 'ITEM_WITH_QUESTIONARY_MODIFIED':
          props.sampleUpdated?.({
            ...state.sample,
            ...action.itemWithQuestionary,
          });
          break;
        case 'ITEM_WITH_QUESTIONARY_CREATED':
          props.sampleCreated?.(
            action.itemWithQuestionary as SampleWithQuestionary
          );
          break;
        case 'ITEM_WITH_QUESTIONARY_SUBMITTED':
          props.sampleEditDone?.();
          break;
      }
    }
  );

  const { state, dispatch } = QuestionarySubmissionModel(initialState, [
    eventHandlers,
    customEventHandlers,
  ]);

  return (
    <QuestionaryContext.Provider value={{ state, dispatch }}>
      <Questionary title={state.sample.title || 'New Sample'} />
    </QuestionaryContext.Provider>
  );
}
