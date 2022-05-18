import {
  QuestionTemplateRelation,
  Template,
} from '@user-office-software-libs/shared-types';
import React from 'react';

import {
  Event,
  EventType,
} from '../../models/questionary/QuestionaryEditorModel';
import StyledModal from '../common/StyledModal';
import { createQuestionTemplateRelationForm } from '../questionary/QuestionaryComponentRegistry';

export default function QuestionTemplateRelationEditor(props: {
  field: QuestionTemplateRelation | null;
  dispatch: React.Dispatch<Event>;
  closeMe: () => void;
  template: Template;
}) {
  if (props.field === null) {
    return null;
  }

  return (
    <StyledModal
      onClose={props.closeMe}
      open={props.field != null}
      data-cy="question-relation-dialogue"
    >
      {createQuestionTemplateRelationForm({
        questionRel: props.field,
        onOpenQuestionClicked: (question) => {
          props.dispatch({
            type: EventType.OPEN_QUESTION_EDITOR,
            payload: question,
          });
        },
        onUpdated: (template) => {
          props.dispatch({
            type: EventType.QUESTION_REL_UPDATED,
            payload: template,
          });
        },
        onDeleted: (template) => {
          props.dispatch({
            type: EventType.QUESTION_REL_DELETED,
            payload: template,
          });
        },
        closeMe: props.closeMe,
        template: props.template,
      })}
    </StyledModal>
  );
}
