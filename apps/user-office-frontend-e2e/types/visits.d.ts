import { CreateVisitMutationVariables } from '@user-office-software/shared-types';

declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Defines experiment team
       *
       * @returns {typeof createVisit}
       * @memberof Chainable
       * @example
       * cy.createVisit({
       *    proposalTitle: proposalTitle,
       *    usersEmails: ['ben@inbox.com'],
       *    teamLead: 'Carlsson',
       * });
       */
      createVisit: (createVisitInput: CreateVisitMutationVariables) => void;
    }
  }
}

export {};
