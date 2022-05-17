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
import { SampleEsiSubmissionState } from '../../questionary/sampleEsi/SampleEsiSubmissionState';
import { SampleEsiWithQuestionary } from '../../questionary/sampleEsi/SampleEsiWithQuestionary';
import useEventHandlers from '../../questionary/useEventHandlers';

export interface SampleEsiContextType extends QuestionaryContextType {
  state: SampleEsiSubmissionState | null;
}

export interface SampleEsiContainerProps {
  esi: SampleEsiWithQuestionary;
  onUpdate?: (esi: SampleEsiWithQuestionary) => void;
  onSubmitted?: (esi: SampleEsiWithQuestionary) => void;
}
export default function SampleEsiContainer(props: SampleEsiContainerProps) {
  const [initialState] = useState(new SampleEsiSubmissionState(props.esi));

  const eventHandlers = useEventHandlers(TemplateGroupId.SAMPLE_ESI);

  const customEventHandlers = createCustomEventHandlers(
    (state: SampleEsiSubmissionState, action: Event) => {
      switch (action.type) {
        case 'ITEM_WITH_QUESTIONARY_MODIFIED':
          props.onUpdate?.(state.esi);
          break;

        case 'ITEM_WITH_QUESTIONARY_SUBMITTED':
          props.onSubmitted?.(state.esi);
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
      <Questionary title={state.esi.sample.title} />
    </QuestionaryContext.Provider>
  );
}
