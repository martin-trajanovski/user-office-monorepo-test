"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleFragmentDoc = exports.SampleEsiFragmentDoc = exports.CoreReviewFragmentDoc = exports.QuestionaryFragmentDoc = exports.QuestionaryStepFragmentDoc = exports.AnswerFragmentDoc = exports.FieldConditionFragmentDoc = exports.QuestionFragmentDoc = exports.FieldConfigFragmentDoc = exports.UnitFragmentDoc = exports.TopicFragmentDoc = exports.ProposalFragmentDoc = exports.SepMeetingDecisionFragmentDoc = exports.ProposalStatusFragmentDoc = exports.CoreTechnicalReviewFragmentDoc = exports.InstrumentFragmentDoc = exports.GenericTemplateFragmentDoc = exports.FeedbackFragmentDoc = exports.EsiFragmentDoc = exports.CallFragmentDoc = exports.BasicUserDetailsFragmentDoc = exports.RejectionFragmentDoc = exports.CountryFragmentDoc = exports.VisitStatus = exports.UserRole = exports.TrainingStatus = exports.TemplateGroupId = exports.TemplateCategoryId = exports.TechnicalReviewStatus = exports.ShipmentStatus = exports.SettingsId = exports.ScheduledEventBookingType = exports.SampleStatus = exports.ReviewerFilter = exports.ReviewStatus = exports.QuestionFilterCompareOperator = exports.QuestionComparisonStatus = exports.ProposalPublicStatus = exports.ProposalEndStatus = exports.ProposalBookingStatusCore = exports.PageName = exports.NumberValueConstraint = exports.FeedbackStatus = exports.FeatureId = exports.Event = exports.EvaluatorOperator = exports.DependenciesLogicOperator = exports.DataType = exports.ConflictResolutionStrategy = exports.AllocationTimeUnits = void 0;
exports.CreateCallDocument = exports.AssignInstrumentsToCallDocument = exports.UpdateInstitutionDocument = exports.UpdateApiAccessTokenDocument = exports.SetPageContentDocument = exports.PrepareDbDocument = exports.MergeInstitutionsDocument = exports.GetSettingsDocument = exports.GetQuantitiesDocument = exports.GetPageContentDocument = exports.GetInstitutionsWithCountryDocument = exports.GetInstitutionsDocument = exports.GetFeaturesDocument = exports.GetAllQueriesAndMutationsDocument = exports.GetAllApiAccessTokensAndPermissionsDocument = exports.DeleteInstitutionDocument = exports.DeleteApiAccessTokenDocument = exports.CreateInstitutionDocument = exports.CreateApiAccessTokenDocument = exports.AddClientLogDocument = exports.UpdateSepTimeAllocationDocument = exports.UpdateSepDocument = exports.SaveSepMeetingDecisionDocument = exports.ReorderSepMeetingDecisionProposalsDocument = exports.RemoveMemberFromSepProposalDocument = exports.RemoveMemberFromSepDocument = exports.RemoveProposalsFromSepDocument = exports.GetSePsDocument = exports.GetSepReviewersDocument = exports.SepProposalsByInstrumentDocument = exports.GetSepProposalsDocument = exports.GetSepProposalDocument = exports.GetSepMembersDocument = exports.GetSepDocument = exports.GetUserSepsDocument = exports.GetInstrumentsBySepDocument = exports.DeleteSepDocument = exports.CreateSepDocument = exports.AssignSepReviewersToProposalDocument = exports.AssignChairOrSecretaryDocument = exports.AssignReviewersToSepDocument = exports.AssignProposalsToSepDocument = exports.VisitRegistrationFragmentDoc = exports.VisitFragmentDoc = exports.TemplateStepFragmentDoc = exports.TemplateMetadataFragmentDoc = exports.TemplateFragmentDoc = exports.QuestionTemplateRelationFragmentDoc = exports.ShipmentFragmentDoc = exports.ScheduledEventCoreFragmentDoc = void 0;
exports.GetFileMetadataDocument = exports.GetBlankQuestionaryStepsDocument = exports.GetBlankQuestionaryDocument = exports.CreateQuestionaryDocument = exports.AnswerTopicDocument = exports.GetUserProposalBookingsWithEventsDocument = exports.UpdateProposalDocument = exports.SubmitProposalDocument = exports.NotifyProposalDocument = exports.GetProposalsCoreDocument = exports.GetProposalsDocument = exports.GetProposalDocument = exports.GetMyProposalsDocument = exports.GetInstrumentScientistProposalsDocument = exports.DeleteProposalDocument = exports.CreateProposalDocument = exports.CloneProposalsDocument = exports.ChangeProposalsStatusDocument = exports.AdministrationProposalDocument = exports.UpdateInstrumentDocument = exports.SubmitInstrumentDocument = exports.SetInstrumentAvailabilityTimeDocument = exports.RemoveScientistFromInstrumentDocument = exports.RemoveProposalsFromInstrumentDocument = exports.GetUserInstrumentsDocument = exports.GetInstrumentsDocument = exports.DeleteInstrumentDocument = exports.CreateInstrumentDocument = exports.AssignScientistsToInstrumentDocument = exports.AssignProposalsToInstrumentDocument = exports.UpdateGenericTemplateDocument = exports.GetGenericTemplatesWithQuestionaryStatusDocument = exports.GetGenericTemplatesWithProposalDataDocument = exports.GetGenericTemplateDocument = exports.DeleteGenericTemplateDocument = exports.CreateGenericTemplateDocument = exports.CloneGenericTemplateDocument = exports.UpdateFeedbackDocument = exports.GetFeedbackDocument = exports.CreateFeedbackDocument = exports.GetEventLogsDocument = exports.UpdateEsiDocument = exports.GetEsiDocument = exports.CreateEsiDocument = exports.UpdateCallDocument = exports.RemoveAssignedInstrumentFromCallDocument = exports.GetCallsByInstrumentScientistDocument = exports.GetCallsDocument = exports.GetCallDocument = exports.DeleteCallDocument = void 0;
exports.ImportTemplateDocument = exports.UpdateShipmentDocument = exports.SubmitShipmentDocument = exports.SetActiveTemplateDocument = exports.GetShipmentsDocument = exports.GetShipmentDocument = exports.GetMyShipmentsDocument = exports.DeleteShipmentDocument = exports.CreateShipmentDocument = exports.AddSamplesToShipmentDocument = exports.UpdateProposalWorkflowDocument = exports.UpdateProposalStatusDocument = exports.MoveProposalWorkflowStatusDocument = exports.GetProposalWorkflowsDocument = exports.GetProposalWorkflowDocument = exports.GetProposalStatusesDocument = exports.GetProposalEventsDocument = exports.DeleteProposalWorkflowStatusDocument = exports.DeleteProposalWorkflowDocument = exports.DeleteProposalStatusDocument = exports.CreateProposalWorkflowDocument = exports.CreateProposalStatusDocument = exports.AddStatusChangingEventsToConnectionDocument = exports.AddProposalWorkflowStatusDocument = exports.GetScheduledEventsCoreDocument = exports.GetScheduledEventCoreDocument = exports.UpdateSampleDocument = exports.GetSamplesWithQuestionaryStatusDocument = exports.GetSamplesWithProposalDataDocument = exports.GetSamplesByCallIdDocument = exports.GetSampleDocument = exports.DeleteSampleDocument = exports.CreateSampleDocument = exports.CloneSampleDocument = exports.UpdateSampleEsiDocument = exports.GetSampleEsiDocument = exports.DeleteSampleEsiDocument = exports.CreateSampleEsiDocument = exports.CloneSampleEsiDocument = exports.UserWithReviewsDocument = exports.UpdateReviewDocument = exports.SubmitTechnicalReviewsDocument = exports.SubmitProposalsReviewDocument = exports.RemoveUserForReviewDocument = exports.GetReviewDocument = exports.GetProposalReviewsDocument = exports.UpdateTechnicalReviewAssigneeDocument = exports.AddUserForReviewDocument = exports.AddTechnicalReviewDocument = exports.GetQuestionaryDocument = void 0;
exports.LogoutDocument = exports.LoginDocument = exports.GetUsersDocument = exports.GetUserWithRolesDocument = exports.GetUserProposalsDocument = exports.GetUserMeDocument = exports.GetUserDocument = exports.GetTokenForUserDocument = exports.GetTokenDocument = exports.GetRolesDocument = exports.GetPreviousCollaboratorsDocument = exports.GetOrcIdInformationDocument = exports.GetMyRolesDocument = exports.GetFieldsDocument = exports.GetBasicUserDetailsByEmailDocument = exports.GetBasicUserDetailsDocument = exports.ExternalTokenLoginDocument = exports.DeleteUserDocument = exports.CreateUserByEmailInviteDocument = exports.CreateUserDocument = exports.CheckTokenDocument = exports.ValidateUnitsImportDocument = exports.ImportUnitsDocument = exports.GetUnitsAsJsonDocument = exports.GetUnitsDocument = exports.DeleteUnitDocument = exports.CreateUnitDocument = exports.ValidateTemplateImportDocument = exports.UpdateTopicDocument = exports.UpdateTemplateDocument = exports.UpdateQuestionTemplateRelationSettingsDocument = exports.UpdateQuestionTemplateRelationDocument = exports.UpdateQuestionDocument = exports.GetTemplatesDocument = exports.GetTemplateExportDocument = exports.GetTemplateCategoriesDocument = exports.GetTemplateDocument = exports.GetQuestionsDocument = exports.GetProposalTemplatesDocument = exports.GetIsNaturalKeyPresentDocument = exports.GetActiveTemplateIdDocument = exports.DeleteTopicDocument = exports.DeleteTemplateDocument = exports.DeleteQuestionTemplateRelationDocument = exports.DeleteQuestionDocument = exports.CreateTopicDocument = exports.CreateTemplateDocument = exports.CreateQuestionTemplateRelationDocument = exports.CreateQuestionDocument = exports.CloneTemplateDocument = void 0;
exports.getSdk = exports.UpdateVisitRegistrationDocument = exports.GetVisitRegistrationDocument = exports.CreateVisitRegistrationDocument = exports.UpdateVisitDocument = exports.GetVisitsDocument = exports.GetVisitDocument = exports.DeleteVisitDocument = exports.CreateVisitDocument = exports.VerifyEmailDocument = exports.UpdateUserRolesDocument = exports.UpdateUserDocument = exports.UpdatePasswordDocument = exports.SetUserNotPlaceholderDocument = exports.SetUserEmailVerifiedDocument = exports.SelectRoleDocument = exports.ResetPasswordEmailDocument = exports.ResetPasswordDocument = void 0;
const graphql_tag_1 = __importDefault(require("graphql-tag"));
var AllocationTimeUnits;
(function (AllocationTimeUnits) {
    AllocationTimeUnits["DAY"] = "Day";
    AllocationTimeUnits["HOUR"] = "Hour";
})(AllocationTimeUnits = exports.AllocationTimeUnits || (exports.AllocationTimeUnits = {}));
var ConflictResolutionStrategy;
(function (ConflictResolutionStrategy) {
    ConflictResolutionStrategy["UNRESOLVED"] = "UNRESOLVED";
    ConflictResolutionStrategy["USE_EXISTING"] = "USE_EXISTING";
    ConflictResolutionStrategy["USE_NEW"] = "USE_NEW";
})(ConflictResolutionStrategy = exports.ConflictResolutionStrategy || (exports.ConflictResolutionStrategy = {}));
var DataType;
(function (DataType) {
    DataType["BOOLEAN"] = "BOOLEAN";
    DataType["DATE"] = "DATE";
    DataType["EMBELLISHMENT"] = "EMBELLISHMENT";
    DataType["FEEDBACK_BASIS"] = "FEEDBACK_BASIS";
    DataType["FILE_UPLOAD"] = "FILE_UPLOAD";
    DataType["GENERIC_TEMPLATE"] = "GENERIC_TEMPLATE";
    DataType["GENERIC_TEMPLATE_BASIS"] = "GENERIC_TEMPLATE_BASIS";
    DataType["INTERVAL"] = "INTERVAL";
    DataType["NUMBER_INPUT"] = "NUMBER_INPUT";
    DataType["PROPOSAL_BASIS"] = "PROPOSAL_BASIS";
    DataType["PROPOSAL_ESI_BASIS"] = "PROPOSAL_ESI_BASIS";
    DataType["RICH_TEXT_INPUT"] = "RICH_TEXT_INPUT";
    DataType["SAMPLE_BASIS"] = "SAMPLE_BASIS";
    DataType["SAMPLE_DECLARATION"] = "SAMPLE_DECLARATION";
    DataType["SAMPLE_ESI_BASIS"] = "SAMPLE_ESI_BASIS";
    DataType["SELECTION_FROM_OPTIONS"] = "SELECTION_FROM_OPTIONS";
    DataType["SHIPMENT_BASIS"] = "SHIPMENT_BASIS";
    DataType["TEXT_INPUT"] = "TEXT_INPUT";
    DataType["VISIT_BASIS"] = "VISIT_BASIS";
})(DataType = exports.DataType || (exports.DataType = {}));
var DependenciesLogicOperator;
(function (DependenciesLogicOperator) {
    DependenciesLogicOperator["AND"] = "AND";
    DependenciesLogicOperator["OR"] = "OR";
})(DependenciesLogicOperator = exports.DependenciesLogicOperator || (exports.DependenciesLogicOperator = {}));
var EvaluatorOperator;
(function (EvaluatorOperator) {
    EvaluatorOperator["EQ"] = "eq";
    EvaluatorOperator["NEQ"] = "neq";
})(EvaluatorOperator = exports.EvaluatorOperator || (exports.EvaluatorOperator = {}));
var Event;
(function (Event) {
    Event["CALL_CREATED"] = "CALL_CREATED";
    Event["CALL_ENDED"] = "CALL_ENDED";
    Event["CALL_REVIEW_ENDED"] = "CALL_REVIEW_ENDED";
    Event["CALL_SEP_REVIEW_ENDED"] = "CALL_SEP_REVIEW_ENDED";
    Event["EMAIL_INVITE"] = "EMAIL_INVITE";
    Event["INSTRUMENT_DELETED"] = "INSTRUMENT_DELETED";
    Event["PROPOSAL_ACCEPTED"] = "PROPOSAL_ACCEPTED";
    Event["PROPOSAL_ALL_SEP_REVIEWERS_SELECTED"] = "PROPOSAL_ALL_SEP_REVIEWERS_SELECTED";
    Event["PROPOSAL_ALL_SEP_REVIEWS_SUBMITTED"] = "PROPOSAL_ALL_SEP_REVIEWS_SUBMITTED";
    Event["PROPOSAL_BOOKING_TIME_ACTIVATED"] = "PROPOSAL_BOOKING_TIME_ACTIVATED";
    Event["PROPOSAL_BOOKING_TIME_COMPLETED"] = "PROPOSAL_BOOKING_TIME_COMPLETED";
    Event["PROPOSAL_BOOKING_TIME_REOPENED"] = "PROPOSAL_BOOKING_TIME_REOPENED";
    Event["PROPOSAL_BOOKING_TIME_SLOTS_REMOVED"] = "PROPOSAL_BOOKING_TIME_SLOTS_REMOVED";
    Event["PROPOSAL_BOOKING_TIME_SLOT_ADDED"] = "PROPOSAL_BOOKING_TIME_SLOT_ADDED";
    Event["PROPOSAL_BOOKING_TIME_UPDATED"] = "PROPOSAL_BOOKING_TIME_UPDATED";
    Event["PROPOSAL_CLONED"] = "PROPOSAL_CLONED";
    Event["PROPOSAL_CREATED"] = "PROPOSAL_CREATED";
    Event["PROPOSAL_DELETED"] = "PROPOSAL_DELETED";
    Event["PROPOSAL_FEASIBILITY_REVIEW_SUBMITTED"] = "PROPOSAL_FEASIBILITY_REVIEW_SUBMITTED";
    Event["PROPOSAL_FEASIBILITY_REVIEW_UPDATED"] = "PROPOSAL_FEASIBILITY_REVIEW_UPDATED";
    Event["PROPOSAL_FEASIBLE"] = "PROPOSAL_FEASIBLE";
    Event["PROPOSAL_INSTRUMENT_SELECTED"] = "PROPOSAL_INSTRUMENT_SELECTED";
    Event["PROPOSAL_INSTRUMENT_SUBMITTED"] = "PROPOSAL_INSTRUMENT_SUBMITTED";
    Event["PROPOSAL_MANAGEMENT_DECISION_SUBMITTED"] = "PROPOSAL_MANAGEMENT_DECISION_SUBMITTED";
    Event["PROPOSAL_MANAGEMENT_DECISION_UPDATED"] = "PROPOSAL_MANAGEMENT_DECISION_UPDATED";
    Event["PROPOSAL_NOTIFIED"] = "PROPOSAL_NOTIFIED";
    Event["PROPOSAL_REJECTED"] = "PROPOSAL_REJECTED";
    Event["PROPOSAL_RESERVED"] = "PROPOSAL_RESERVED";
    Event["PROPOSAL_SAMPLE_REVIEW_SUBMITTED"] = "PROPOSAL_SAMPLE_REVIEW_SUBMITTED";
    Event["PROPOSAL_SAMPLE_SAFE"] = "PROPOSAL_SAMPLE_SAFE";
    Event["PROPOSAL_SEP_MEETING_RANKING_OVERWRITTEN"] = "PROPOSAL_SEP_MEETING_RANKING_OVERWRITTEN";
    Event["PROPOSAL_SEP_MEETING_REORDER"] = "PROPOSAL_SEP_MEETING_REORDER";
    Event["PROPOSAL_SEP_MEETING_SAVED"] = "PROPOSAL_SEP_MEETING_SAVED";
    Event["PROPOSAL_SEP_MEETING_SUBMITTED"] = "PROPOSAL_SEP_MEETING_SUBMITTED";
    Event["PROPOSAL_SEP_REVIEW_SUBMITTED"] = "PROPOSAL_SEP_REVIEW_SUBMITTED";
    Event["PROPOSAL_SEP_REVIEW_UPDATED"] = "PROPOSAL_SEP_REVIEW_UPDATED";
    Event["PROPOSAL_SEP_SELECTED"] = "PROPOSAL_SEP_SELECTED";
    Event["PROPOSAL_STATUS_CHANGED_BY_USER"] = "PROPOSAL_STATUS_CHANGED_BY_USER";
    Event["PROPOSAL_STATUS_CHANGED_BY_WORKFLOW"] = "PROPOSAL_STATUS_CHANGED_BY_WORKFLOW";
    Event["PROPOSAL_STATUS_UPDATED"] = "PROPOSAL_STATUS_UPDATED";
    Event["PROPOSAL_SUBMITTED"] = "PROPOSAL_SUBMITTED";
    Event["PROPOSAL_UNFEASIBLE"] = "PROPOSAL_UNFEASIBLE";
    Event["PROPOSAL_UPDATED"] = "PROPOSAL_UPDATED";
    Event["SEP_CREATED"] = "SEP_CREATED";
    Event["SEP_MEMBERS_ASSIGNED"] = "SEP_MEMBERS_ASSIGNED";
    Event["SEP_MEMBER_ASSIGNED_TO_PROPOSAL"] = "SEP_MEMBER_ASSIGNED_TO_PROPOSAL";
    Event["SEP_MEMBER_REMOVED"] = "SEP_MEMBER_REMOVED";
    Event["SEP_MEMBER_REMOVED_FROM_PROPOSAL"] = "SEP_MEMBER_REMOVED_FROM_PROPOSAL";
    Event["SEP_PROPOSAL_REMOVED"] = "SEP_PROPOSAL_REMOVED";
    Event["SEP_UPDATED"] = "SEP_UPDATED";
    Event["TOPIC_ANSWERED"] = "TOPIC_ANSWERED";
    Event["USER_CREATED"] = "USER_CREATED";
    Event["USER_DELETED"] = "USER_DELETED";
    Event["USER_PASSWORD_RESET_EMAIL"] = "USER_PASSWORD_RESET_EMAIL";
    Event["USER_ROLE_UPDATED"] = "USER_ROLE_UPDATED";
    Event["USER_UPDATED"] = "USER_UPDATED";
})(Event = exports.Event || (exports.Event = {}));
var FeatureId;
(function (FeatureId) {
    FeatureId["EMAIL_INVITE"] = "EMAIL_INVITE";
    FeatureId["EMAIL_SEARCH"] = "EMAIL_SEARCH";
    FeatureId["EXTERNAL_AUTH"] = "EXTERNAL_AUTH";
    FeatureId["INSTRUMENT_MANAGEMENT"] = "INSTRUMENT_MANAGEMENT";
    FeatureId["RISK_ASSESSMENT"] = "RISK_ASSESSMENT";
    FeatureId["SAMPLE_SAFETY"] = "SAMPLE_SAFETY";
    FeatureId["SCHEDULER"] = "SCHEDULER";
    FeatureId["SEP_REVIEW"] = "SEP_REVIEW";
    FeatureId["SHIPPING"] = "SHIPPING";
    FeatureId["TECHNICAL_REVIEW"] = "TECHNICAL_REVIEW";
    FeatureId["USER_MANAGEMENT"] = "USER_MANAGEMENT";
    FeatureId["VISIT_MANAGEMENT"] = "VISIT_MANAGEMENT";
})(FeatureId = exports.FeatureId || (exports.FeatureId = {}));
var FeedbackStatus;
(function (FeedbackStatus) {
    FeedbackStatus["DRAFT"] = "DRAFT";
    FeedbackStatus["SUBMITTED"] = "SUBMITTED";
})(FeedbackStatus = exports.FeedbackStatus || (exports.FeedbackStatus = {}));
var NumberValueConstraint;
(function (NumberValueConstraint) {
    NumberValueConstraint["NONE"] = "NONE";
    NumberValueConstraint["ONLY_NEGATIVE"] = "ONLY_NEGATIVE";
    NumberValueConstraint["ONLY_POSITIVE"] = "ONLY_POSITIVE";
})(NumberValueConstraint = exports.NumberValueConstraint || (exports.NumberValueConstraint = {}));
var PageName;
(function (PageName) {
    PageName["COOKIEPAGE"] = "COOKIEPAGE";
    PageName["FOOTERCONTENT"] = "FOOTERCONTENT";
    PageName["GRADEGUIDEPAGE"] = "GRADEGUIDEPAGE";
    PageName["HELPPAGE"] = "HELPPAGE";
    PageName["HOMEPAGE"] = "HOMEPAGE";
    PageName["LOGINHELPPAGE"] = "LOGINHELPPAGE";
    PageName["PRIVACYPAGE"] = "PRIVACYPAGE";
    PageName["REVIEWPAGE"] = "REVIEWPAGE";
})(PageName = exports.PageName || (exports.PageName = {}));
var ProposalBookingStatusCore;
(function (ProposalBookingStatusCore) {
    ProposalBookingStatusCore["ACTIVE"] = "ACTIVE";
    ProposalBookingStatusCore["COMPLETED"] = "COMPLETED";
    ProposalBookingStatusCore["DRAFT"] = "DRAFT";
})(ProposalBookingStatusCore = exports.ProposalBookingStatusCore || (exports.ProposalBookingStatusCore = {}));
var ProposalEndStatus;
(function (ProposalEndStatus) {
    ProposalEndStatus["ACCEPTED"] = "ACCEPTED";
    ProposalEndStatus["REJECTED"] = "REJECTED";
    ProposalEndStatus["RESERVED"] = "RESERVED";
    ProposalEndStatus["UNSET"] = "UNSET";
})(ProposalEndStatus = exports.ProposalEndStatus || (exports.ProposalEndStatus = {}));
var ProposalPublicStatus;
(function (ProposalPublicStatus) {
    ProposalPublicStatus["ACCEPTED"] = "accepted";
    ProposalPublicStatus["DRAFT"] = "draft";
    ProposalPublicStatus["REJECTED"] = "rejected";
    ProposalPublicStatus["RESERVED"] = "reserved";
    ProposalPublicStatus["SUBMITTED"] = "submitted";
    ProposalPublicStatus["UNKNOWN"] = "unknown";
})(ProposalPublicStatus = exports.ProposalPublicStatus || (exports.ProposalPublicStatus = {}));
var QuestionComparisonStatus;
(function (QuestionComparisonStatus) {
    QuestionComparisonStatus["DIFFERENT"] = "DIFFERENT";
    QuestionComparisonStatus["NEW"] = "NEW";
    QuestionComparisonStatus["SAME"] = "SAME";
})(QuestionComparisonStatus = exports.QuestionComparisonStatus || (exports.QuestionComparisonStatus = {}));
var QuestionFilterCompareOperator;
(function (QuestionFilterCompareOperator) {
    QuestionFilterCompareOperator["EQUALS"] = "EQUALS";
    QuestionFilterCompareOperator["EXISTS"] = "EXISTS";
    QuestionFilterCompareOperator["GREATER_THAN"] = "GREATER_THAN";
    QuestionFilterCompareOperator["INCLUDES"] = "INCLUDES";
    QuestionFilterCompareOperator["LESS_THAN"] = "LESS_THAN";
})(QuestionFilterCompareOperator = exports.QuestionFilterCompareOperator || (exports.QuestionFilterCompareOperator = {}));
var ReviewStatus;
(function (ReviewStatus) {
    ReviewStatus["DRAFT"] = "DRAFT";
    ReviewStatus["SUBMITTED"] = "SUBMITTED";
})(ReviewStatus = exports.ReviewStatus || (exports.ReviewStatus = {}));
var ReviewerFilter;
(function (ReviewerFilter) {
    ReviewerFilter["ALL"] = "ALL";
    ReviewerFilter["ME"] = "ME";
})(ReviewerFilter = exports.ReviewerFilter || (exports.ReviewerFilter = {}));
var SampleStatus;
(function (SampleStatus) {
    SampleStatus["ELEVATED_RISK"] = "ELEVATED_RISK";
    SampleStatus["HIGH_RISK"] = "HIGH_RISK";
    SampleStatus["LOW_RISK"] = "LOW_RISK";
    SampleStatus["PENDING_EVALUATION"] = "PENDING_EVALUATION";
})(SampleStatus = exports.SampleStatus || (exports.SampleStatus = {}));
var ScheduledEventBookingType;
(function (ScheduledEventBookingType) {
    ScheduledEventBookingType["EQUIPMENT"] = "EQUIPMENT";
    ScheduledEventBookingType["MAINTENANCE"] = "MAINTENANCE";
    ScheduledEventBookingType["SHUTDOWN"] = "SHUTDOWN";
    ScheduledEventBookingType["USER_OPERATIONS"] = "USER_OPERATIONS";
})(ScheduledEventBookingType = exports.ScheduledEventBookingType || (exports.ScheduledEventBookingType = {}));
var SettingsId;
(function (SettingsId) {
    SettingsId["DATE_FORMAT"] = "DATE_FORMAT";
    SettingsId["DATE_TIME_FORMAT"] = "DATE_TIME_FORMAT";
    SettingsId["EXTERNAL_AUTH_LOGIN_URL"] = "EXTERNAL_AUTH_LOGIN_URL";
    SettingsId["FEEDBACK_EXHAUST_DAYS"] = "FEEDBACK_EXHAUST_DAYS";
    SettingsId["FEEDBACK_FREQUENCY_DAYS"] = "FEEDBACK_FREQUENCY_DAYS";
    SettingsId["FEEDBACK_MAX_REQUESTS"] = "FEEDBACK_MAX_REQUESTS";
    SettingsId["HEADER_LOGO_FILENAME"] = "HEADER_LOGO_FILENAME";
    SettingsId["PALETTE_ERROR_MAIN"] = "PALETTE_ERROR_MAIN";
    SettingsId["PALETTE_INFO_MAIN"] = "PALETTE_INFO_MAIN";
    SettingsId["PALETTE_PRIMARY_ACCENT"] = "PALETTE_PRIMARY_ACCENT";
    SettingsId["PALETTE_PRIMARY_CONTRAST"] = "PALETTE_PRIMARY_CONTRAST";
    SettingsId["PALETTE_PRIMARY_DARK"] = "PALETTE_PRIMARY_DARK";
    SettingsId["PALETTE_PRIMARY_LIGHT"] = "PALETTE_PRIMARY_LIGHT";
    SettingsId["PALETTE_PRIMARY_MAIN"] = "PALETTE_PRIMARY_MAIN";
    SettingsId["PALETTE_SECONDARY_CONTRAST"] = "PALETTE_SECONDARY_CONTRAST";
    SettingsId["PALETTE_SECONDARY_DARK"] = "PALETTE_SECONDARY_DARK";
    SettingsId["PALETTE_SECONDARY_LIGHT"] = "PALETTE_SECONDARY_LIGHT";
    SettingsId["PALETTE_SECONDARY_MAIN"] = "PALETTE_SECONDARY_MAIN";
    SettingsId["PALETTE_SUCCESS_MAIN"] = "PALETTE_SUCCESS_MAIN";
    SettingsId["PALETTE_WARNING_MAIN"] = "PALETTE_WARNING_MAIN";
    SettingsId["PROFILE_PAGE_LINK"] = "PROFILE_PAGE_LINK";
    SettingsId["TIMEZONE"] = "TIMEZONE";
})(SettingsId = exports.SettingsId || (exports.SettingsId = {}));
var ShipmentStatus;
(function (ShipmentStatus) {
    ShipmentStatus["DRAFT"] = "DRAFT";
    ShipmentStatus["SUBMITTED"] = "SUBMITTED";
})(ShipmentStatus = exports.ShipmentStatus || (exports.ShipmentStatus = {}));
var TechnicalReviewStatus;
(function (TechnicalReviewStatus) {
    TechnicalReviewStatus["FEASIBLE"] = "FEASIBLE";
    TechnicalReviewStatus["PARTIALLY_FEASIBLE"] = "PARTIALLY_FEASIBLE";
    TechnicalReviewStatus["UNFEASIBLE"] = "UNFEASIBLE";
})(TechnicalReviewStatus = exports.TechnicalReviewStatus || (exports.TechnicalReviewStatus = {}));
var TemplateCategoryId;
(function (TemplateCategoryId) {
    TemplateCategoryId["FEEDBACK"] = "FEEDBACK";
    TemplateCategoryId["GENERIC_TEMPLATE"] = "GENERIC_TEMPLATE";
    TemplateCategoryId["PROPOSAL_QUESTIONARY"] = "PROPOSAL_QUESTIONARY";
    TemplateCategoryId["SAMPLE_DECLARATION"] = "SAMPLE_DECLARATION";
    TemplateCategoryId["SHIPMENT_DECLARATION"] = "SHIPMENT_DECLARATION";
    TemplateCategoryId["VISIT_REGISTRATION"] = "VISIT_REGISTRATION";
})(TemplateCategoryId = exports.TemplateCategoryId || (exports.TemplateCategoryId = {}));
var TemplateGroupId;
(function (TemplateGroupId) {
    TemplateGroupId["FEEDBACK"] = "FEEDBACK";
    TemplateGroupId["GENERIC_TEMPLATE"] = "GENERIC_TEMPLATE";
    TemplateGroupId["PROPOSAL"] = "PROPOSAL";
    TemplateGroupId["PROPOSAL_ESI"] = "PROPOSAL_ESI";
    TemplateGroupId["SAMPLE"] = "SAMPLE";
    TemplateGroupId["SAMPLE_ESI"] = "SAMPLE_ESI";
    TemplateGroupId["SHIPMENT"] = "SHIPMENT";
    TemplateGroupId["VISIT_REGISTRATION"] = "VISIT_REGISTRATION";
})(TemplateGroupId = exports.TemplateGroupId || (exports.TemplateGroupId = {}));
var TrainingStatus;
(function (TrainingStatus) {
    TrainingStatus["ACTIVE"] = "ACTIVE";
    TrainingStatus["EXPIRED"] = "EXPIRED";
    TrainingStatus["NONE"] = "NONE";
})(TrainingStatus = exports.TrainingStatus || (exports.TrainingStatus = {}));
var UserRole;
(function (UserRole) {
    UserRole["INSTRUMENT_SCIENTIST"] = "INSTRUMENT_SCIENTIST";
    UserRole["SAMPLE_SAFETY_REVIEWER"] = "SAMPLE_SAFETY_REVIEWER";
    UserRole["SEP_CHAIR"] = "SEP_CHAIR";
    UserRole["SEP_REVIEWER"] = "SEP_REVIEWER";
    UserRole["SEP_SECRETARY"] = "SEP_SECRETARY";
    UserRole["USER"] = "USER";
    UserRole["USER_OFFICER"] = "USER_OFFICER";
})(UserRole = exports.UserRole || (exports.UserRole = {}));
var VisitStatus;
(function (VisitStatus) {
    VisitStatus["ACCEPTED"] = "ACCEPTED";
    VisitStatus["DRAFT"] = "DRAFT";
    VisitStatus["SUBMITTED"] = "SUBMITTED";
})(VisitStatus = exports.VisitStatus || (exports.VisitStatus = {}));
exports.CountryFragmentDoc = (0, graphql_tag_1.default) `
    fragment country on Entry {
  id
  value
}
    `;
exports.RejectionFragmentDoc = (0, graphql_tag_1.default) `
    fragment rejection on Rejection {
  reason
  context
  exception
}
    `;
exports.BasicUserDetailsFragmentDoc = (0, graphql_tag_1.default) `
    fragment basicUserDetails on BasicUserDetails {
  id
  firstname
  lastname
  preferredname
  organisation
  position
  created
  placeholder
}
    `;
exports.CallFragmentDoc = (0, graphql_tag_1.default) `
    fragment call on Call {
  id
  shortCode
  startCall
  endCall
  startReview
  endReview
  startSEPReview
  endSEPReview
  startNotify
  endNotify
  startCycle
  endCycle
  cycleComment
  surveyComment
  referenceNumberFormat
  proposalWorkflowId
  templateId
  esiTemplateId
  allocationTimeUnit
  instruments {
    id
    name
    shortCode
    description
    availabilityTime
    submitted
    scientists {
      ...basicUserDetails
    }
  }
  proposalWorkflow {
    id
    name
    description
  }
  template {
    templateId
    name
    isArchived
  }
  proposalCount
  title
  description
  submissionMessage
}
    ${exports.BasicUserDetailsFragmentDoc}`;
exports.EsiFragmentDoc = (0, graphql_tag_1.default) `
    fragment esi on ExperimentSafetyInput {
  id
  creatorId
  questionaryId
  isSubmitted
  created
}
    `;
exports.FeedbackFragmentDoc = (0, graphql_tag_1.default) `
    fragment feedback on Feedback {
  id
  scheduledEventId
  status
  questionaryId
  creatorId
}
    `;
exports.GenericTemplateFragmentDoc = (0, graphql_tag_1.default) `
    fragment genericTemplate on GenericTemplate {
  id
  title
  creatorId
  questionaryId
  created
  proposalPk
  questionId
}
    `;
exports.InstrumentFragmentDoc = (0, graphql_tag_1.default) `
    fragment instrument on Instrument {
  id
  name
  shortCode
  description
  managerUserId
  scientists {
    ...basicUserDetails
  }
}
    ${exports.BasicUserDetailsFragmentDoc}`;
exports.CoreTechnicalReviewFragmentDoc = (0, graphql_tag_1.default) `
    fragment coreTechnicalReview on TechnicalReview {
  id
  comment
  publicComment
  timeAllocation
  status
  proposalPk
  submitted
  files
  technicalReviewAssigneeId
  technicalReviewAssignee {
    id
    firstname
    lastname
  }
}
    `;
exports.ProposalStatusFragmentDoc = (0, graphql_tag_1.default) `
    fragment proposalStatus on ProposalStatus {
  id
  shortCode
  name
  description
  isDefault
}
    `;
exports.SepMeetingDecisionFragmentDoc = (0, graphql_tag_1.default) `
    fragment sepMeetingDecision on SepMeetingDecision {
  proposalPk
  recommendation
  commentForUser
  commentForManagement
  rankOrder
  submitted
  submittedBy
}
    `;
exports.ProposalFragmentDoc = (0, graphql_tag_1.default) `
    fragment proposal on Proposal {
  primaryKey
  title
  abstract
  statusId
  status {
    ...proposalStatus
  }
  publicStatus
  proposalId
  finalStatus
  commentForUser
  commentForManagement
  created
  updated
  callId
  questionaryId
  notified
  submitted
  managementTimeAllocation
  managementDecisionSubmitted
  sepMeetingDecision {
    ...sepMeetingDecision
  }
}
    ${exports.ProposalStatusFragmentDoc}
${exports.SepMeetingDecisionFragmentDoc}`;
exports.TopicFragmentDoc = (0, graphql_tag_1.default) `
    fragment topic on Topic {
  title
  id
  templateId
  sortOrder
  isEnabled
}
    `;
exports.UnitFragmentDoc = (0, graphql_tag_1.default) `
    fragment unit on Unit {
  id
  unit
  quantity
  symbol
  siConversionFormula
}
    `;
exports.FieldConfigFragmentDoc = (0, graphql_tag_1.default) `
    fragment fieldConfig on FieldConfig {
  ... on BooleanConfig {
    small_label
    required
    tooltip
  }
  ... on DateConfig {
    small_label
    required
    tooltip
    minDate
    maxDate
    defaultDate
    includeTime
  }
  ... on EmbellishmentConfig {
    html
    plain
    omitFromPdf
  }
  ... on FileUploadConfig {
    file_type
    max_files
    small_label
    required
    tooltip
  }
  ... on IntervalConfig {
    units {
      ...unit
    }
    small_label
    required
    tooltip
  }
  ... on NumberInputConfig {
    units {
      ...unit
    }
    numberValueConstraint
    small_label
    required
    tooltip
  }
  ... on ProposalBasisConfig {
    tooltip
  }
  ... on ProposalEsiBasisConfig {
    tooltip
  }
  ... on SampleEsiBasisConfig {
    tooltip
  }
  ... on SampleBasisConfig {
    titlePlaceholder
  }
  ... on SampleDeclarationConfig {
    addEntryButtonLabel
    minEntries
    maxEntries
    templateId
    esiTemplateId
    templateCategory
    required
    small_label
  }
  ... on SubTemplateConfig {
    addEntryButtonLabel
    minEntries
    maxEntries
    templateId
    templateCategory
    required
    small_label
  }
  ... on SelectionFromOptionsConfig {
    variant
    options
    isMultipleSelect
    small_label
    required
    tooltip
  }
  ... on TextInputConfig {
    min
    max
    multiline
    placeholder
    small_label
    required
    tooltip
    htmlQuestion
    isHtmlQuestion
    isCounterHidden
  }
  ... on ShipmentBasisConfig {
    small_label
    required
    tooltip
  }
  ... on RichTextInputConfig {
    small_label
    required
    tooltip
    max
  }
  ... on VisitBasisConfig {
    small_label
    required
    tooltip
  }
  ... on GenericTemplateBasisConfig {
    titlePlaceholder
    questionLabel
  }
  ... on FeedbackBasisConfig {
    small_label
    required
    tooltip
  }
}
    ${exports.UnitFragmentDoc}`;
exports.QuestionFragmentDoc = (0, graphql_tag_1.default) `
    fragment question on Question {
  id
  question
  naturalKey
  dataType
  categoryId
  config {
    ...fieldConfig
  }
}
    ${exports.FieldConfigFragmentDoc}`;
exports.FieldConditionFragmentDoc = (0, graphql_tag_1.default) `
    fragment fieldCondition on FieldCondition {
  condition
  params
}
    `;
exports.AnswerFragmentDoc = (0, graphql_tag_1.default) `
    fragment answer on Answer {
  answerId
  question {
    ...question
  }
  sortOrder
  topicId
  config {
    ...fieldConfig
  }
  dependencies {
    questionId
    dependencyId
    dependencyNaturalKey
    condition {
      ...fieldCondition
    }
  }
  dependenciesOperator
  value
}
    ${exports.QuestionFragmentDoc}
${exports.FieldConfigFragmentDoc}
${exports.FieldConditionFragmentDoc}`;
exports.QuestionaryStepFragmentDoc = (0, graphql_tag_1.default) `
    fragment questionaryStep on QuestionaryStep {
  topic {
    ...topic
  }
  isCompleted
  fields {
    ...answer
  }
}
    ${exports.TopicFragmentDoc}
${exports.AnswerFragmentDoc}`;
exports.QuestionaryFragmentDoc = (0, graphql_tag_1.default) `
    fragment questionary on Questionary {
  questionaryId
  templateId
  created
  steps {
    ...questionaryStep
  }
}
    ${exports.QuestionaryStepFragmentDoc}`;
exports.CoreReviewFragmentDoc = (0, graphql_tag_1.default) `
    fragment coreReview on Review {
  id
  userID
  status
  comment
  grade
  sepID
}
    `;
exports.SampleEsiFragmentDoc = (0, graphql_tag_1.default) `
    fragment sampleEsi on SampleExperimentSafetyInput {
  sampleId
  esiId
  questionaryId
  isSubmitted
}
    `;
exports.SampleFragmentDoc = (0, graphql_tag_1.default) `
    fragment sample on Sample {
  id
  title
  creatorId
  questionaryId
  safetyStatus
  safetyComment
  isPostProposalSubmission
  created
  proposalPk
  questionId
}
    `;
exports.ScheduledEventCoreFragmentDoc = (0, graphql_tag_1.default) `
    fragment scheduledEventCore on ScheduledEventCore {
  id
  proposalPk
  bookingType
  startsAt
  endsAt
  status
  localContactId
}
    `;
exports.ShipmentFragmentDoc = (0, graphql_tag_1.default) `
    fragment shipment on Shipment {
  id
  title
  proposalPk
  status
  externalRef
  questionaryId
  scheduledEventId
  creatorId
  created
  proposal {
    proposalId
  }
}
    `;
exports.QuestionTemplateRelationFragmentDoc = (0, graphql_tag_1.default) `
    fragment questionTemplateRelation on QuestionTemplateRelation {
  question {
    ...question
  }
  sortOrder
  topicId
  config {
    ...fieldConfig
  }
  dependencies {
    questionId
    dependencyId
    dependencyNaturalKey
    condition {
      ...fieldCondition
    }
  }
  dependenciesOperator
}
    ${exports.QuestionFragmentDoc}
${exports.FieldConfigFragmentDoc}
${exports.FieldConditionFragmentDoc}`;
exports.TemplateFragmentDoc = (0, graphql_tag_1.default) `
    fragment template on Template {
  steps {
    topic {
      ...topic
    }
    fields {
      ...questionTemplateRelation
    }
  }
  isArchived
  questionaryCount
  templateId
  groupId
  name
  description
  complementaryQuestions {
    ...question
  }
  group {
    groupId
    categoryId
  }
}
    ${exports.TopicFragmentDoc}
${exports.QuestionTemplateRelationFragmentDoc}
${exports.QuestionFragmentDoc}`;
exports.TemplateMetadataFragmentDoc = (0, graphql_tag_1.default) `
    fragment templateMetadata on Template {
  templateId
  name
  description
  isArchived
  steps {
    topic {
      ...topic
    }
  }
}
    ${exports.TopicFragmentDoc}`;
exports.TemplateStepFragmentDoc = (0, graphql_tag_1.default) `
    fragment templateStep on TemplateStep {
  topic {
    title
    id
    sortOrder
    isEnabled
  }
  fields {
    ...questionTemplateRelation
  }
}
    ${exports.QuestionTemplateRelationFragmentDoc}`;
exports.VisitFragmentDoc = (0, graphql_tag_1.default) `
    fragment visit on Visit {
  id
  proposalPk
  status
  creatorId
}
    `;
exports.VisitRegistrationFragmentDoc = (0, graphql_tag_1.default) `
    fragment visitRegistration on VisitRegistration {
  userId
  visitId
  registrationQuestionaryId
  isRegistrationSubmitted
  trainingExpiryDate
  startsAt
  endsAt
}
    `;
exports.AssignProposalsToSepDocument = (0, graphql_tag_1.default) `
    mutation assignProposalsToSep($proposals: [ProposalPkWithCallId!]!, $sepId: Int!) {
  assignProposalsToSep(proposals: $proposals, sepId: $sepId) {
    rejection {
      ...rejection
    }
    nextProposalStatus {
      id
      shortCode
      name
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.AssignReviewersToSepDocument = (0, graphql_tag_1.default) `
    mutation assignReviewersToSEP($memberIds: [Int!]!, $sepId: Int!) {
  assignReviewersToSEP(memberIds: $memberIds, sepId: $sepId) {
    rejection {
      ...rejection
    }
    sep {
      id
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.AssignChairOrSecretaryDocument = (0, graphql_tag_1.default) `
    mutation assignChairOrSecretary($assignChairOrSecretaryToSEPInput: AssignChairOrSecretaryToSEPInput!) {
  assignChairOrSecretary(
    assignChairOrSecretaryToSEPInput: $assignChairOrSecretaryToSEPInput
  ) {
    rejection {
      ...rejection
    }
    sep {
      id
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.AssignSepReviewersToProposalDocument = (0, graphql_tag_1.default) `
    mutation assignSepReviewersToProposal($memberIds: [Int!]!, $sepId: Int!, $proposalPk: Int!) {
  assignSepReviewersToProposal(
    memberIds: $memberIds
    sepId: $sepId
    proposalPk: $proposalPk
  ) {
    rejection {
      ...rejection
    }
    sep {
      id
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.CreateSepDocument = (0, graphql_tag_1.default) `
    mutation createSEP($code: String!, $description: String!, $numberRatingsRequired: Int!, $active: Boolean!) {
  createSEP(
    code: $code
    description: $description
    numberRatingsRequired: $numberRatingsRequired
    active: $active
  ) {
    sep {
      id
      code
      description
      numberRatingsRequired
      active
      sepChair {
        ...basicUserDetails
      }
      sepSecretary {
        ...basicUserDetails
      }
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.BasicUserDetailsFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.DeleteSepDocument = (0, graphql_tag_1.default) `
    mutation deleteSEP($id: Int!) {
  deleteSEP(id: $id) {
    rejection {
      ...rejection
    }
    sep {
      id
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.GetInstrumentsBySepDocument = (0, graphql_tag_1.default) `
    query getInstrumentsBySEP($sepId: Int!, $callId: Int!) {
  instrumentsBySep(sepId: $sepId, callId: $callId) {
    id
    name
    shortCode
    description
    availabilityTime
    submitted
    scientists {
      ...basicUserDetails
    }
  }
}
    ${exports.BasicUserDetailsFragmentDoc}`;
exports.GetUserSepsDocument = (0, graphql_tag_1.default) `
    query getUserSeps {
  me {
    seps {
      id
      code
      description
      numberRatingsRequired
      active
      sepChair {
        ...basicUserDetails
      }
      sepSecretary {
        ...basicUserDetails
      }
    }
  }
}
    ${exports.BasicUserDetailsFragmentDoc}`;
exports.GetSepDocument = (0, graphql_tag_1.default) `
    query getSEP($id: Int!) {
  sep(id: $id) {
    id
    code
    description
    numberRatingsRequired
    active
    sepChair {
      ...basicUserDetails
    }
    sepSecretary {
      ...basicUserDetails
    }
  }
}
    ${exports.BasicUserDetailsFragmentDoc}`;
exports.GetSepMembersDocument = (0, graphql_tag_1.default) `
    query getSEPMembers($sepId: Int!) {
  sepMembers(sepId: $sepId) {
    userId
    sepId
    role {
      id
      shortCode
      title
    }
    user {
      ...basicUserDetails
    }
  }
}
    ${exports.BasicUserDetailsFragmentDoc}`;
exports.GetSepProposalDocument = (0, graphql_tag_1.default) `
    query getSEPProposal($sepId: Int!, $proposalPk: Int!) {
  sepProposal(sepId: $sepId, proposalPk: $proposalPk) {
    proposalPk
    sepId
    sepTimeAllocation
    instrumentSubmitted
    proposal {
      ...proposal
      proposer {
        ...basicUserDetails
      }
      users {
        ...basicUserDetails
      }
      questionary {
        ...questionary
      }
      technicalReview {
        ...coreTechnicalReview
        reviewer {
          ...basicUserDetails
        }
      }
      reviews {
        id
        grade
        comment
        status
        userID
        sepID
        reviewer {
          firstname
          lastname
          id
        }
      }
      instrument {
        id
        name
        shortCode
      }
      call {
        id
        shortCode
        allocationTimeUnit
      }
    }
  }
}
    ${exports.ProposalFragmentDoc}
${exports.BasicUserDetailsFragmentDoc}
${exports.QuestionaryFragmentDoc}
${exports.CoreTechnicalReviewFragmentDoc}`;
exports.GetSepProposalsDocument = (0, graphql_tag_1.default) `
    query getSEPProposals($sepId: Int!, $callId: Int) {
  sepProposals(sepId: $sepId, callId: $callId) {
    proposalPk
    dateAssigned
    sepId
    sepTimeAllocation
    proposal {
      title
      primaryKey
      proposalId
      status {
        ...proposalStatus
      }
    }
    assignments {
      sepMemberUserId
      dateAssigned
      user {
        ...basicUserDetails
      }
      role {
        id
        shortCode
        title
      }
      review {
        id
        status
        comment
        grade
        sepID
      }
    }
  }
}
    ${exports.ProposalStatusFragmentDoc}
${exports.BasicUserDetailsFragmentDoc}`;
exports.SepProposalsByInstrumentDocument = (0, graphql_tag_1.default) `
    query sepProposalsByInstrument($instrumentId: Int!, $sepId: Int!, $callId: Int!) {
  sepProposalsByInstrument(
    instrumentId: $instrumentId
    sepId: $sepId
    callId: $callId
  ) {
    sepTimeAllocation
    proposal {
      primaryKey
      title
      proposalId
      status {
        ...proposalStatus
      }
      sepMeetingDecision {
        ...sepMeetingDecision
      }
      reviews {
        id
        comment
        grade
        status
      }
      technicalReview {
        publicComment
        status
        timeAllocation
      }
    }
    assignments {
      sepMemberUserId
    }
  }
}
    ${exports.ProposalStatusFragmentDoc}
${exports.SepMeetingDecisionFragmentDoc}`;
exports.GetSepReviewersDocument = (0, graphql_tag_1.default) `
    query getSEPReviewers($sepId: Int!) {
  sepReviewers(sepId: $sepId) {
    userId
    sepId
    role {
      id
      shortCode
      title
    }
    user {
      ...basicUserDetails
    }
  }
}
    ${exports.BasicUserDetailsFragmentDoc}`;
exports.GetSePsDocument = (0, graphql_tag_1.default) `
    query getSEPs($filter: String!, $active: Boolean) {
  seps(filter: $filter, active: $active) {
    seps {
      id
      code
      description
      numberRatingsRequired
      active
      sepChair {
        ...basicUserDetails
      }
      sepSecretary {
        ...basicUserDetails
      }
    }
    totalCount
  }
}
    ${exports.BasicUserDetailsFragmentDoc}`;
exports.RemoveProposalsFromSepDocument = (0, graphql_tag_1.default) `
    mutation removeProposalsFromSep($proposalPks: [Int!]!, $sepId: Int!) {
  removeProposalsFromSep(proposalPks: $proposalPks, sepId: $sepId) {
    rejection {
      ...rejection
    }
    sep {
      id
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.RemoveMemberFromSepDocument = (0, graphql_tag_1.default) `
    mutation removeMemberFromSep($memberId: Int!, $sepId: Int!, $roleId: UserRole!) {
  removeMemberFromSep(memberId: $memberId, sepId: $sepId, roleId: $roleId) {
    rejection {
      ...rejection
    }
    sep {
      id
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.RemoveMemberFromSepProposalDocument = (0, graphql_tag_1.default) `
    mutation removeMemberFromSEPProposal($memberId: Int!, $sepId: Int!, $proposalPk: Int!) {
  removeMemberFromSEPProposal(
    memberId: $memberId
    sepId: $sepId
    proposalPk: $proposalPk
  ) {
    rejection {
      ...rejection
    }
    sep {
      id
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.ReorderSepMeetingDecisionProposalsDocument = (0, graphql_tag_1.default) `
    mutation reorderSepMeetingDecisionProposals($reorderSepMeetingDecisionProposalsInput: ReorderSepMeetingDecisionProposalsInput!) {
  reorderSepMeetingDecisionProposals(
    reorderSepMeetingDecisionProposalsInput: $reorderSepMeetingDecisionProposalsInput
  ) {
    rejection {
      ...rejection
    }
    sepMeetingDecision {
      proposalPk
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.SaveSepMeetingDecisionDocument = (0, graphql_tag_1.default) `
    mutation saveSepMeetingDecision($saveSepMeetingDecisionInput: SaveSEPMeetingDecisionInput!) {
  saveSepMeetingDecision(
    saveSepMeetingDecisionInput: $saveSepMeetingDecisionInput
  ) {
    rejection {
      ...rejection
    }
    sepMeetingDecision {
      proposalPk
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.UpdateSepDocument = (0, graphql_tag_1.default) `
    mutation updateSEP($id: Int!, $code: String!, $description: String!, $numberRatingsRequired: Int!, $active: Boolean!) {
  updateSEP(
    id: $id
    code: $code
    description: $description
    numberRatingsRequired: $numberRatingsRequired
    active: $active
  ) {
    sep {
      id
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.UpdateSepTimeAllocationDocument = (0, graphql_tag_1.default) `
    mutation updateSEPTimeAllocation($sepId: Int!, $proposalPk: Int!, $sepTimeAllocation: Int) {
  updateSEPTimeAllocation(
    sepId: $sepId
    proposalPk: $proposalPk
    sepTimeAllocation: $sepTimeAllocation
  ) {
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.AddClientLogDocument = (0, graphql_tag_1.default) `
    mutation addClientLog($error: String!) {
  addClientLog(error: $error) {
    isSuccess
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.CreateApiAccessTokenDocument = (0, graphql_tag_1.default) `
    mutation createApiAccessToken($name: String!, $accessPermissions: String!) {
  createApiAccessToken(
    createApiAccessTokenInput: {name: $name, accessPermissions: $accessPermissions}
  ) {
    rejection {
      ...rejection
    }
    apiAccessToken {
      id
      name
      accessToken
      accessPermissions
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.CreateInstitutionDocument = (0, graphql_tag_1.default) `
    mutation createInstitution($name: String!, $country: Int!, $verified: Boolean!) {
  createInstitution(name: $name, country: $country, verified: $verified) {
    institution {
      id
      name
      country {
        ...country
      }
      verified
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.CountryFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.DeleteApiAccessTokenDocument = (0, graphql_tag_1.default) `
    mutation deleteApiAccessToken($accessTokenId: String!) {
  deleteApiAccessToken(deleteApiAccessTokenInput: {accessTokenId: $accessTokenId}) {
    rejection {
      ...rejection
    }
    isSuccess
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.DeleteInstitutionDocument = (0, graphql_tag_1.default) `
    mutation deleteInstitution($id: Int!) {
  deleteInstitution(id: $id) {
    institution {
      id
      verified
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.GetAllApiAccessTokensAndPermissionsDocument = (0, graphql_tag_1.default) `
    query getAllApiAccessTokensAndPermissions {
  allAccessTokensAndPermissions {
    id
    name
    accessToken
    accessPermissions
  }
}
    `;
exports.GetAllQueriesAndMutationsDocument = (0, graphql_tag_1.default) `
    query getAllQueriesAndMutations {
  queriesAndMutations {
    queries
    mutations
  }
}
    `;
exports.GetFeaturesDocument = (0, graphql_tag_1.default) `
    query getFeatures {
  features {
    id
    isEnabled
    description
  }
}
    `;
exports.GetInstitutionsDocument = (0, graphql_tag_1.default) `
    query getInstitutions($filter: InstitutionsFilter) {
  institutions(filter: $filter) {
    id
    name
    verified
  }
}
    `;
exports.GetInstitutionsWithCountryDocument = (0, graphql_tag_1.default) `
    query getInstitutionsWithCountry($filter: InstitutionsFilter) {
  institutions(filter: $filter) {
    id
    name
    verified
    country {
      ...country
    }
  }
}
    ${exports.CountryFragmentDoc}`;
exports.GetPageContentDocument = (0, graphql_tag_1.default) `
    query getPageContent($id: PageName!) {
  getPageContent(id: $id)
}
    `;
exports.GetQuantitiesDocument = (0, graphql_tag_1.default) `
    query getQuantities {
  quantities {
    id
  }
}
    `;
exports.GetSettingsDocument = (0, graphql_tag_1.default) `
    query getSettings {
  settings {
    id
    settingsValue
    description
  }
}
    `;
exports.MergeInstitutionsDocument = (0, graphql_tag_1.default) `
    mutation mergeInstitutions($institutionIdFrom: Int!, $institutionIdInto: Int!, $newTitle: String!) {
  mergeInstitutions(
    institutionIdFrom: $institutionIdFrom
    institutionIdInto: $institutionIdInto
    newTitle: $newTitle
  ) {
    institution {
      id
      verified
      name
      country {
        ...country
      }
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.CountryFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.PrepareDbDocument = (0, graphql_tag_1.default) `
    mutation prepareDB($includeSeeds: Boolean!) {
  prepareDB(includeSeeds: $includeSeeds) {
    log
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.SetPageContentDocument = (0, graphql_tag_1.default) `
    mutation setPageContent($id: PageName!, $text: String!) {
  setPageContent(id: $id, text: $text) {
    page {
      id
      content
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.UpdateApiAccessTokenDocument = (0, graphql_tag_1.default) `
    mutation updateApiAccessToken($accessTokenId: String!, $name: String!, $accessPermissions: String!) {
  updateApiAccessToken(
    updateApiAccessTokenInput: {accessTokenId: $accessTokenId, name: $name, accessPermissions: $accessPermissions}
  ) {
    rejection {
      ...rejection
    }
    apiAccessToken {
      id
      name
      accessToken
      accessPermissions
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.UpdateInstitutionDocument = (0, graphql_tag_1.default) `
    mutation updateInstitution($id: Int!, $name: String!, $country: Int!, $verified: Boolean!) {
  updateInstitution(id: $id, name: $name, country: $country, verified: $verified) {
    institution {
      id
      verified
      name
      country {
        ...country
      }
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.CountryFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.AssignInstrumentsToCallDocument = (0, graphql_tag_1.default) `
    mutation assignInstrumentsToCall($instrumentIds: [Int!]!, $callId: Int!) {
  assignInstrumentsToCall(
    assignInstrumentsToCallInput: {instrumentIds: $instrumentIds, callId: $callId}
  ) {
    rejection {
      ...rejection
    }
    call {
      id
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.CreateCallDocument = (0, graphql_tag_1.default) `
    mutation createCall($shortCode: String!, $startCall: DateTime!, $endCall: DateTime!, $startReview: DateTime!, $endReview: DateTime!, $startSEPReview: DateTime, $endSEPReview: DateTime, $startNotify: DateTime!, $endNotify: DateTime!, $startCycle: DateTime!, $endCycle: DateTime!, $cycleComment: String!, $submissionMessage: String, $surveyComment: String!, $allocationTimeUnit: AllocationTimeUnits!, $referenceNumberFormat: String, $proposalWorkflowId: Int!, $templateId: Int!, $esiTemplateId: Int, $title: String, $description: String) {
  createCall(
    createCallInput: {shortCode: $shortCode, startCall: $startCall, endCall: $endCall, startReview: $startReview, endReview: $endReview, startSEPReview: $startSEPReview, endSEPReview: $endSEPReview, startNotify: $startNotify, endNotify: $endNotify, startCycle: $startCycle, endCycle: $endCycle, cycleComment: $cycleComment, submissionMessage: $submissionMessage, surveyComment: $surveyComment, allocationTimeUnit: $allocationTimeUnit, referenceNumberFormat: $referenceNumberFormat, proposalWorkflowId: $proposalWorkflowId, templateId: $templateId, esiTemplateId: $esiTemplateId, title: $title, description: $description}
  ) {
    rejection {
      ...rejection
    }
    call {
      ...call
    }
  }
}
    ${exports.RejectionFragmentDoc}
${exports.CallFragmentDoc}`;
exports.DeleteCallDocument = (0, graphql_tag_1.default) `
    mutation deleteCall($id: Int!) {
  deleteCall(id: $id) {
    rejection {
      ...rejection
    }
    call {
      id
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.GetCallDocument = (0, graphql_tag_1.default) `
    query getCall($id: Int!) {
  call(id: $id) {
    ...call
  }
}
    ${exports.CallFragmentDoc}`;
exports.GetCallsDocument = (0, graphql_tag_1.default) `
    query getCalls($filter: CallsFilter) {
  calls(filter: $filter) {
    ...call
  }
}
    ${exports.CallFragmentDoc}`;
exports.GetCallsByInstrumentScientistDocument = (0, graphql_tag_1.default) `
    query getCallsByInstrumentScientist($scientistId: Int!) {
  callsByInstrumentScientist(scientistId: $scientistId) {
    ...call
  }
}
    ${exports.CallFragmentDoc}`;
exports.RemoveAssignedInstrumentFromCallDocument = (0, graphql_tag_1.default) `
    mutation removeAssignedInstrumentFromCall($instrumentId: Int!, $callId: Int!) {
  removeAssignedInstrumentFromCall(
    removeAssignedInstrumentFromCallInput: {instrumentId: $instrumentId, callId: $callId}
  ) {
    rejection {
      ...rejection
    }
    call {
      id
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.UpdateCallDocument = (0, graphql_tag_1.default) `
    mutation updateCall($id: Int!, $shortCode: String!, $startCall: DateTime!, $endCall: DateTime!, $startReview: DateTime!, $endReview: DateTime!, $startSEPReview: DateTime, $endSEPReview: DateTime, $startNotify: DateTime!, $endNotify: DateTime!, $startCycle: DateTime!, $endCycle: DateTime!, $cycleComment: String!, $submissionMessage: String, $surveyComment: String!, $allocationTimeUnit: AllocationTimeUnits!, $referenceNumberFormat: String, $proposalWorkflowId: Int!, $templateId: Int!, $esiTemplateId: Int, $title: String, $description: String) {
  updateCall(
    updateCallInput: {id: $id, shortCode: $shortCode, startCall: $startCall, endCall: $endCall, startReview: $startReview, endReview: $endReview, startSEPReview: $startSEPReview, endSEPReview: $endSEPReview, startNotify: $startNotify, endNotify: $endNotify, startCycle: $startCycle, endCycle: $endCycle, cycleComment: $cycleComment, submissionMessage: $submissionMessage, surveyComment: $surveyComment, allocationTimeUnit: $allocationTimeUnit, referenceNumberFormat: $referenceNumberFormat, proposalWorkflowId: $proposalWorkflowId, templateId: $templateId, esiTemplateId: $esiTemplateId, title: $title, description: $description}
  ) {
    rejection {
      ...rejection
    }
    call {
      ...call
    }
  }
}
    ${exports.RejectionFragmentDoc}
${exports.CallFragmentDoc}`;
exports.CreateEsiDocument = (0, graphql_tag_1.default) `
    mutation createEsi($scheduledEventId: Int!) {
  createEsi(scheduledEventId: $scheduledEventId) {
    esi {
      ...esi
      questionary {
        isCompleted
        ...questionary
      }
      sampleEsis {
        sample {
          ...sample
        }
        ...sampleEsi
        questionary {
          isCompleted
        }
      }
      proposal {
        primaryKey
        proposalId
        title
        samples {
          ...sample
        }
        questionary {
          ...questionary
        }
      }
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.EsiFragmentDoc}
${exports.QuestionaryFragmentDoc}
${exports.SampleFragmentDoc}
${exports.SampleEsiFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.GetEsiDocument = (0, graphql_tag_1.default) `
    query getEsi($esiId: Int!) {
  esi(esiId: $esiId) {
    ...esi
    questionary {
      isCompleted
      ...questionary
    }
    sampleEsis {
      sample {
        ...sample
      }
      ...sampleEsi
      questionary {
        isCompleted
      }
    }
    proposal {
      primaryKey
      proposalId
      title
      samples {
        ...sample
      }
      questionary {
        ...questionary
      }
    }
  }
}
    ${exports.EsiFragmentDoc}
${exports.QuestionaryFragmentDoc}
${exports.SampleFragmentDoc}
${exports.SampleEsiFragmentDoc}`;
exports.UpdateEsiDocument = (0, graphql_tag_1.default) `
    mutation updateEsi($esiId: Int!, $isSubmitted: Boolean) {
  updateEsi(esiId: $esiId, isSubmitted: $isSubmitted) {
    esi {
      ...esi
      questionary {
        isCompleted
        ...questionary
      }
      sampleEsis {
        sample {
          ...sample
        }
        ...sampleEsi
        questionary {
          isCompleted
        }
      }
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.EsiFragmentDoc}
${exports.QuestionaryFragmentDoc}
${exports.SampleFragmentDoc}
${exports.SampleEsiFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.GetEventLogsDocument = (0, graphql_tag_1.default) `
    query getEventLogs($eventType: String!, $changedObjectId: String!) {
  eventLogs(eventType: $eventType, changedObjectId: $changedObjectId) {
    id
    eventType
    changedBy {
      id
      firstname
      lastname
      email
    }
    eventTStamp
    rowData
    changedObjectId
  }
}
    `;
exports.CreateFeedbackDocument = (0, graphql_tag_1.default) `
    mutation createFeedback($scheduledEventId: Int!) {
  createFeedback(scheduledEventId: $scheduledEventId) {
    feedback {
      ...feedback
      questionary {
        ...questionary
        isCompleted
      }
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.FeedbackFragmentDoc}
${exports.QuestionaryFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.GetFeedbackDocument = (0, graphql_tag_1.default) `
    query getFeedback($feedbackId: Int!) {
  feedback(feedbackId: $feedbackId) {
    ...feedback
    questionary {
      ...questionary
      isCompleted
    }
  }
}
    ${exports.FeedbackFragmentDoc}
${exports.QuestionaryFragmentDoc}`;
exports.UpdateFeedbackDocument = (0, graphql_tag_1.default) `
    mutation updateFeedback($feedbackId: Int!, $status: FeedbackStatus) {
  updateFeedback(feedbackId: $feedbackId, status: $status) {
    feedback {
      ...feedback
      questionary {
        ...questionary
        isCompleted
      }
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.FeedbackFragmentDoc}
${exports.QuestionaryFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.CloneGenericTemplateDocument = (0, graphql_tag_1.default) `
    mutation cloneGenericTemplate($genericTemplateId: Int!, $title: String) {
  cloneGenericTemplate(genericTemplateId: $genericTemplateId, title: $title) {
    genericTemplate {
      ...genericTemplate
      questionary {
        isCompleted
        ...questionary
      }
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.GenericTemplateFragmentDoc}
${exports.QuestionaryFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.CreateGenericTemplateDocument = (0, graphql_tag_1.default) `
    mutation createGenericTemplate($title: String!, $templateId: Int!, $proposalPk: Int!, $questionId: String!) {
  createGenericTemplate(
    title: $title
    templateId: $templateId
    proposalPk: $proposalPk
    questionId: $questionId
  ) {
    genericTemplate {
      ...genericTemplate
      questionary {
        isCompleted
        ...questionary
      }
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.GenericTemplateFragmentDoc}
${exports.QuestionaryFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.DeleteGenericTemplateDocument = (0, graphql_tag_1.default) `
    mutation deleteGenericTemplate($genericTemplateId: Int!) {
  deleteGenericTemplate(genericTemplateId: $genericTemplateId) {
    genericTemplate {
      ...genericTemplate
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.GenericTemplateFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.GetGenericTemplateDocument = (0, graphql_tag_1.default) `
    query getGenericTemplate($genericTemplateId: Int!) {
  genericTemplate(genericTemplateId: $genericTemplateId) {
    ...genericTemplate
    questionary {
      isCompleted
      ...questionary
    }
  }
}
    ${exports.GenericTemplateFragmentDoc}
${exports.QuestionaryFragmentDoc}`;
exports.GetGenericTemplatesWithProposalDataDocument = (0, graphql_tag_1.default) `
    query getGenericTemplatesWithProposalData($filter: GenericTemplatesFilter) {
  genericTemplates(filter: $filter) {
    ...genericTemplate
    proposal {
      primaryKey
      proposalId
    }
  }
}
    ${exports.GenericTemplateFragmentDoc}`;
exports.GetGenericTemplatesWithQuestionaryStatusDocument = (0, graphql_tag_1.default) `
    query getGenericTemplatesWithQuestionaryStatus($filter: GenericTemplatesFilter) {
  genericTemplates(filter: $filter) {
    ...genericTemplate
    questionary {
      isCompleted
    }
  }
}
    ${exports.GenericTemplateFragmentDoc}`;
exports.UpdateGenericTemplateDocument = (0, graphql_tag_1.default) `
    mutation updateGenericTemplate($genericTemplateId: Int!, $title: String) {
  updateGenericTemplate(genericTemplateId: $genericTemplateId, title: $title) {
    genericTemplate {
      ...genericTemplate
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.GenericTemplateFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.AssignProposalsToInstrumentDocument = (0, graphql_tag_1.default) `
    mutation assignProposalsToInstrument($proposals: [ProposalPkWithCallId!]!, $instrumentId: Int!) {
  assignProposalsToInstrument(proposals: $proposals, instrumentId: $instrumentId) {
    rejection {
      ...rejection
    }
    isSuccess
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.AssignScientistsToInstrumentDocument = (0, graphql_tag_1.default) `
    mutation assignScientistsToInstrument($scientistIds: [Int!]!, $instrumentId: Int!) {
  assignScientistsToInstrument(
    scientistIds: $scientistIds
    instrumentId: $instrumentId
  ) {
    rejection {
      ...rejection
    }
    isSuccess
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.CreateInstrumentDocument = (0, graphql_tag_1.default) `
    mutation createInstrument($name: String!, $shortCode: String!, $description: String!, $managerUserId: Int!) {
  createInstrument(
    name: $name
    shortCode: $shortCode
    description: $description
    managerUserId: $managerUserId
  ) {
    instrument {
      ...instrument
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.InstrumentFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.DeleteInstrumentDocument = (0, graphql_tag_1.default) `
    mutation deleteInstrument($id: Int!) {
  deleteInstrument(id: $id) {
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.GetInstrumentsDocument = (0, graphql_tag_1.default) `
    query getInstruments($callIds: [Int!]) {
  instruments(callIds: $callIds) {
    instruments {
      ...instrument
    }
    totalCount
  }
}
    ${exports.InstrumentFragmentDoc}`;
exports.GetUserInstrumentsDocument = (0, graphql_tag_1.default) `
    query getUserInstruments {
  me {
    instruments {
      ...instrument
    }
  }
}
    ${exports.InstrumentFragmentDoc}`;
exports.RemoveProposalsFromInstrumentDocument = (0, graphql_tag_1.default) `
    mutation removeProposalsFromInstrument($proposalPks: [Int!]!) {
  removeProposalsFromInstrument(proposalPks: $proposalPks) {
    rejection {
      ...rejection
    }
    isSuccess
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.RemoveScientistFromInstrumentDocument = (0, graphql_tag_1.default) `
    mutation removeScientistFromInstrument($scientistId: Int!, $instrumentId: Int!) {
  removeScientistFromInstrument(
    scientistId: $scientistId
    instrumentId: $instrumentId
  ) {
    rejection {
      ...rejection
    }
    isSuccess
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.SetInstrumentAvailabilityTimeDocument = (0, graphql_tag_1.default) `
    mutation setInstrumentAvailabilityTime($callId: Int!, $instrumentId: Int!, $availabilityTime: Int!) {
  setInstrumentAvailabilityTime(
    callId: $callId
    instrumentId: $instrumentId
    availabilityTime: $availabilityTime
  ) {
    rejection {
      ...rejection
    }
    isSuccess
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.SubmitInstrumentDocument = (0, graphql_tag_1.default) `
    mutation submitInstrument($callId: Int!, $instrumentId: Int!, $sepId: Int!) {
  submitInstrument(callId: $callId, instrumentId: $instrumentId, sepId: $sepId) {
    rejection {
      ...rejection
    }
    isSuccess
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.UpdateInstrumentDocument = (0, graphql_tag_1.default) `
    mutation updateInstrument($id: Int!, $name: String!, $shortCode: String!, $description: String!, $managerUserId: Int!) {
  updateInstrument(
    id: $id
    name: $name
    shortCode: $shortCode
    description: $description
    managerUserId: $managerUserId
  ) {
    instrument {
      ...instrument
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.InstrumentFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.AdministrationProposalDocument = (0, graphql_tag_1.default) `
    mutation administrationProposal($proposalPk: Int!, $finalStatus: ProposalEndStatus, $statusId: Int, $commentForUser: String, $commentForManagement: String, $managementTimeAllocation: Int, $managementDecisionSubmitted: Boolean) {
  administrationProposal(
    proposalPk: $proposalPk
    finalStatus: $finalStatus
    statusId: $statusId
    commentForUser: $commentForUser
    commentForManagement: $commentForManagement
    managementTimeAllocation: $managementTimeAllocation
    managementDecisionSubmitted: $managementDecisionSubmitted
  ) {
    proposal {
      primaryKey
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.ChangeProposalsStatusDocument = (0, graphql_tag_1.default) `
    mutation changeProposalsStatus($proposals: [ProposalPkWithCallId!]!, $statusId: Int!) {
  changeProposalsStatus(
    changeProposalsStatusInput: {proposals: $proposals, statusId: $statusId}
  ) {
    rejection {
      ...rejection
    }
    isSuccess
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.CloneProposalsDocument = (0, graphql_tag_1.default) `
    mutation cloneProposals($proposalsToClonePk: [Int!]!, $callId: Int!) {
  cloneProposals(
    cloneProposalsInput: {proposalsToClonePk: $proposalsToClonePk, callId: $callId}
  ) {
    proposals {
      ...proposal
      proposer {
        ...basicUserDetails
      }
      users {
        ...basicUserDetails
      }
      questionary {
        ...questionary
        isCompleted
      }
      technicalReview {
        ...coreTechnicalReview
      }
      reviews {
        id
        grade
        comment
        status
        userID
        sepID
        reviewer {
          firstname
          lastname
          id
        }
      }
      instrument {
        id
        name
        shortCode
      }
      call {
        id
        shortCode
        isActive
        referenceNumberFormat
      }
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.ProposalFragmentDoc}
${exports.BasicUserDetailsFragmentDoc}
${exports.QuestionaryFragmentDoc}
${exports.CoreTechnicalReviewFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.CreateProposalDocument = (0, graphql_tag_1.default) `
    mutation createProposal($callId: Int!) {
  createProposal(callId: $callId) {
    proposal {
      primaryKey
      status {
        ...proposalStatus
      }
      proposalId
      questionaryId
      questionary {
        ...questionary
        isCompleted
      }
      proposer {
        ...basicUserDetails
      }
      users {
        ...basicUserDetails
      }
      samples {
        ...sample
        questionary {
          isCompleted
        }
      }
      genericTemplates {
        ...genericTemplate
        questionary {
          isCompleted
        }
      }
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.ProposalStatusFragmentDoc}
${exports.QuestionaryFragmentDoc}
${exports.BasicUserDetailsFragmentDoc}
${exports.SampleFragmentDoc}
${exports.GenericTemplateFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.DeleteProposalDocument = (0, graphql_tag_1.default) `
    mutation deleteProposal($proposalPk: Int!) {
  deleteProposal(proposalPk: $proposalPk) {
    rejection {
      ...rejection
    }
    proposal {
      primaryKey
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.GetInstrumentScientistProposalsDocument = (0, graphql_tag_1.default) `
    query getInstrumentScientistProposals($filter: ProposalsFilter, $offset: Int, $first: Int) {
  instrumentScientistProposals(filter: $filter, offset: $offset, first: $first) {
    proposals {
      primaryKey
      proposalId
      title
      submitted
      finalStatus
      technicalReviewAssigneeId
      technicalReviewAssigneeFirstName
      technicalReviewAssigneeLastName
      technicalStatus
      technicalTimeAllocation
      statusName
      technicalReviewSubmitted
      instrumentId
      instrumentName
      allocationTimeUnit
      callShortCode
      statusName
      sepCode
    }
    totalCount
  }
}
    `;
exports.GetMyProposalsDocument = (0, graphql_tag_1.default) `
    query getMyProposals($filter: UserProposalsFilter) {
  me {
    proposals(filter: $filter) {
      ...proposal
    }
  }
}
    ${exports.ProposalFragmentDoc}`;
exports.GetProposalDocument = (0, graphql_tag_1.default) `
    query getProposal($primaryKey: Int!) {
  proposal(primaryKey: $primaryKey) {
    ...proposal
    proposer {
      ...basicUserDetails
    }
    users {
      ...basicUserDetails
    }
    questionary {
      ...questionary
      isCompleted
    }
    technicalReview {
      ...coreTechnicalReview
      reviewer {
        ...basicUserDetails
      }
    }
    reviews {
      id
      grade
      comment
      status
      userID
      sepID
      reviewer {
        firstname
        lastname
        id
      }
    }
    instrument {
      id
      name
      shortCode
      beamlineManager {
        id
        firstname
        lastname
      }
      scientists {
        id
        firstname
        lastname
      }
    }
    call {
      id
      shortCode
      isActive
      allocationTimeUnit
      referenceNumberFormat
    }
    sep {
      id
      code
    }
    samples {
      ...sample
      questionary {
        isCompleted
      }
    }
    genericTemplates {
      ...genericTemplate
      questionary {
        isCompleted
      }
    }
  }
}
    ${exports.ProposalFragmentDoc}
${exports.BasicUserDetailsFragmentDoc}
${exports.QuestionaryFragmentDoc}
${exports.CoreTechnicalReviewFragmentDoc}
${exports.SampleFragmentDoc}
${exports.GenericTemplateFragmentDoc}`;
exports.GetProposalsDocument = (0, graphql_tag_1.default) `
    query getProposals($filter: ProposalsFilter) {
  proposals(filter: $filter) {
    proposals {
      ...proposal
      proposer {
        ...basicUserDetails
      }
      reviews {
        id
        grade
        comment
        status
        userID
        sepID
        reviewer {
          firstname
          lastname
          id
        }
      }
      users {
        ...basicUserDetails
      }
      technicalReview {
        ...coreTechnicalReview
        reviewer {
          ...basicUserDetails
        }
      }
      instrument {
        id
        name
      }
      call {
        id
        shortCode
      }
      sep {
        id
        code
      }
    }
    totalCount
  }
}
    ${exports.ProposalFragmentDoc}
${exports.BasicUserDetailsFragmentDoc}
${exports.CoreTechnicalReviewFragmentDoc}`;
exports.GetProposalsCoreDocument = (0, graphql_tag_1.default) `
    query getProposalsCore($filter: ProposalsFilter, $first: Int, $offset: Int, $sortField: String, $sortDirection: String, $searchText: String) {
  proposalsView(
    filter: $filter
    first: $first
    offset: $offset
    sortField: $sortField
    sortDirection: $sortDirection
    searchText: $searchText
  ) {
    proposalViews {
      primaryKey
      title
      statusId
      statusName
      statusDescription
      proposalId
      rankOrder
      finalStatus
      notified
      managementTimeAllocation
      technicalTimeAllocation
      technicalReviewAssigneeId
      technicalReviewAssigneeFirstName
      technicalReviewAssigneeLastName
      technicalStatus
      instrumentName
      callShortCode
      sepCode
      sepId
      reviewAverage
      reviewDeviation
      instrumentId
      callId
      submitted
      allocationTimeUnit
    }
    totalCount
  }
}
    `;
exports.NotifyProposalDocument = (0, graphql_tag_1.default) `
    mutation notifyProposal($proposalPk: Int!) {
  notifyProposal(proposalPk: $proposalPk) {
    proposal {
      primaryKey
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.SubmitProposalDocument = (0, graphql_tag_1.default) `
    mutation submitProposal($proposalPk: Int!) {
  submitProposal(proposalPk: $proposalPk) {
    proposal {
      ...proposal
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.ProposalFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.UpdateProposalDocument = (0, graphql_tag_1.default) `
    mutation updateProposal($proposalPk: Int!, $title: String, $abstract: String, $users: [Int!], $proposerId: Int) {
  updateProposal(
    proposalPk: $proposalPk
    title: $title
    abstract: $abstract
    users: $users
    proposerId: $proposerId
  ) {
    proposal {
      primaryKey
      title
      abstract
      proposer {
        ...basicUserDetails
      }
      users {
        ...basicUserDetails
      }
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.BasicUserDetailsFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.GetUserProposalBookingsWithEventsDocument = (0, graphql_tag_1.default) `
    query getUserProposalBookingsWithEvents($endsAfter: DateTime, $status: [ProposalBookingStatusCore!], $instrumentId: Int) {
  me {
    proposals(filter: {instrumentId: $instrumentId}) {
      primaryKey
      title
      proposalId
      finalStatus
      managementDecisionSubmitted
      proposer {
        ...basicUserDetails
      }
      users {
        ...basicUserDetails
      }
      proposalBookingCore(filter: {status: $status}) {
        scheduledEvents(filter: {endsAfter: $endsAfter, status: $status}) {
          id
          startsAt
          endsAt
          bookingType
          status
          visit {
            ...visit
            teamLead {
              ...basicUserDetails
            }
            registrations {
              ...visitRegistration
              user {
                ...basicUserDetails
              }
            }
          }
          esi {
            ...esi
          }
          feedback {
            ...feedback
          }
          shipments {
            ...shipment
          }
          localContact {
            ...basicUserDetails
          }
        }
      }
      visits {
        ...visit
      }
      instrument {
        id
        name
      }
    }
  }
}
    ${exports.BasicUserDetailsFragmentDoc}
${exports.VisitFragmentDoc}
${exports.VisitRegistrationFragmentDoc}
${exports.EsiFragmentDoc}
${exports.FeedbackFragmentDoc}
${exports.ShipmentFragmentDoc}`;
exports.AnswerTopicDocument = (0, graphql_tag_1.default) `
    mutation answerTopic($questionaryId: Int!, $topicId: Int!, $answers: [AnswerInput!]!, $isPartialSave: Boolean) {
  answerTopic(
    questionaryId: $questionaryId
    topicId: $topicId
    answers: $answers
    isPartialSave: $isPartialSave
  ) {
    questionaryStep {
      ...questionaryStep
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.QuestionaryStepFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.CreateQuestionaryDocument = (0, graphql_tag_1.default) `
    mutation createQuestionary($templateId: Int!) {
  createQuestionary(templateId: $templateId) {
    questionary {
      ...questionary
      isCompleted
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.QuestionaryFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.GetBlankQuestionaryDocument = (0, graphql_tag_1.default) `
    query getBlankQuestionary($templateId: Int!) {
  blankQuestionary(templateId: $templateId) {
    isCompleted
    ...questionary
  }
}
    ${exports.QuestionaryFragmentDoc}`;
exports.GetBlankQuestionaryStepsDocument = (0, graphql_tag_1.default) `
    query getBlankQuestionarySteps($templateId: Int!) {
  blankQuestionarySteps(templateId: $templateId) {
    ...questionaryStep
  }
}
    ${exports.QuestionaryStepFragmentDoc}`;
exports.GetFileMetadataDocument = (0, graphql_tag_1.default) `
    query getFileMetadata($fileIds: [String!]!) {
  fileMetadata(fileIds: $fileIds) {
    fileId
    originalFileName
    mimeType
    sizeInBytes
    createdDate
  }
}
    `;
exports.GetQuestionaryDocument = (0, graphql_tag_1.default) `
    query getQuestionary($questionaryId: Int!) {
  questionary(questionaryId: $questionaryId) {
    ...questionary
  }
}
    ${exports.QuestionaryFragmentDoc}`;
exports.AddTechnicalReviewDocument = (0, graphql_tag_1.default) `
    mutation addTechnicalReview($proposalPk: Int!, $timeAllocation: Int, $comment: String, $publicComment: String, $status: TechnicalReviewStatus, $submitted: Boolean!, $reviewerId: Int!, $files: String) {
  addTechnicalReview(
    addTechnicalReviewInput: {proposalPk: $proposalPk, timeAllocation: $timeAllocation, comment: $comment, publicComment: $publicComment, status: $status, submitted: $submitted, reviewerId: $reviewerId, files: $files}
  ) {
    rejection {
      ...rejection
    }
    technicalReview {
      id
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.AddUserForReviewDocument = (0, graphql_tag_1.default) `
    mutation addUserForReview($userID: Int!, $proposalPk: Int!, $sepID: Int!) {
  addUserForReview(userID: $userID, proposalPk: $proposalPk, sepID: $sepID) {
    rejection {
      ...rejection
    }
    review {
      id
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.UpdateTechnicalReviewAssigneeDocument = (0, graphql_tag_1.default) `
    mutation updateTechnicalReviewAssignee($proposalPks: [Int!]!, $userId: Int!) {
  updateTechnicalReviewAssignee(proposalPks: $proposalPks, userId: $userId) {
    technicalReviews {
      ...coreTechnicalReview
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.CoreTechnicalReviewFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.GetProposalReviewsDocument = (0, graphql_tag_1.default) `
    query getProposalReviews($proposalPk: Int!) {
  proposalReviews(proposalPk: $proposalPk) {
    id
    userID
    comment
    grade
    status
    sepID
  }
}
    `;
exports.GetReviewDocument = (0, graphql_tag_1.default) `
    query getReview($reviewId: Int!) {
  review(reviewId: $reviewId) {
    ...coreReview
    proposal {
      primaryKey
      title
      abstract
      proposer {
        id
      }
    }
    reviewer {
      ...basicUserDetails
    }
  }
}
    ${exports.CoreReviewFragmentDoc}
${exports.BasicUserDetailsFragmentDoc}`;
exports.RemoveUserForReviewDocument = (0, graphql_tag_1.default) `
    mutation removeUserForReview($reviewId: Int!, $sepId: Int!) {
  removeUserForReview(reviewId: $reviewId, sepId: $sepId) {
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.SubmitProposalsReviewDocument = (0, graphql_tag_1.default) `
    mutation submitProposalsReview($proposals: [ProposalPkWithReviewId!]!) {
  submitProposalsReview(submitProposalsReviewInput: {proposals: $proposals}) {
    rejection {
      ...rejection
    }
    isSuccess
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.SubmitTechnicalReviewsDocument = (0, graphql_tag_1.default) `
    mutation submitTechnicalReviews($technicalReviews: [SubmitTechnicalReviewInput!]!) {
  submitTechnicalReviews(
    submitTechnicalReviewsInput: {technicalReviews: $technicalReviews}
  ) {
    rejection {
      ...rejection
    }
    isSuccess
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.UpdateReviewDocument = (0, graphql_tag_1.default) `
    mutation updateReview($reviewID: Int!, $grade: Int!, $comment: String!, $status: ReviewStatus!, $sepID: Int!) {
  updateReview(
    reviewID: $reviewID
    grade: $grade
    comment: $comment
    status: $status
    sepID: $sepID
  ) {
    rejection {
      ...rejection
    }
    review {
      id
      userID
      status
      comment
      grade
      sepID
      nextProposalStatus {
        id
        shortCode
        name
      }
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.UserWithReviewsDocument = (0, graphql_tag_1.default) `
    query userWithReviews($callId: Int, $instrumentId: Int, $status: ReviewStatus, $reviewer: ReviewerFilter) {
  me {
    id
    firstname
    lastname
    organisation
    reviews(
      callId: $callId
      instrumentId: $instrumentId
      status: $status
      reviewer: $reviewer
    ) {
      id
      grade
      comment
      status
      sepID
      proposal {
        primaryKey
        title
        proposalId
        call {
          shortCode
        }
        instrument {
          shortCode
        }
      }
    }
  }
}
    `;
exports.CloneSampleEsiDocument = (0, graphql_tag_1.default) `
    mutation cloneSampleEsi($esiId: Int!, $sampleId: Int!, $newSampleTitle: String) {
  cloneSampleEsi(
    esiId: $esiId
    sampleId: $sampleId
    newSampleTitle: $newSampleTitle
  ) {
    esi {
      ...sampleEsi
      questionary {
        isCompleted
        ...questionary
      }
      sample {
        ...sample
      }
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.SampleEsiFragmentDoc}
${exports.QuestionaryFragmentDoc}
${exports.SampleFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.CreateSampleEsiDocument = (0, graphql_tag_1.default) `
    mutation createSampleEsi($sampleId: Int!, $esiId: Int!) {
  createSampleEsi(sampleId: $sampleId, esiId: $esiId) {
    esi {
      ...sampleEsi
      questionary {
        isCompleted
        ...questionary
      }
      sample {
        ...sample
      }
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.SampleEsiFragmentDoc}
${exports.QuestionaryFragmentDoc}
${exports.SampleFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.DeleteSampleEsiDocument = (0, graphql_tag_1.default) `
    mutation deleteSampleEsi($sampleId: Int!, $esiId: Int!) {
  deleteSampleEsi(sampleId: $sampleId, esiId: $esiId) {
    esi {
      ...sampleEsi
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.SampleEsiFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.GetSampleEsiDocument = (0, graphql_tag_1.default) `
    query getSampleEsi($sampleId: Int!, $esiId: Int!) {
  sampleEsi(sampleId: $sampleId, esiId: $esiId) {
    ...sampleEsi
    questionary {
      isCompleted
      ...questionary
    }
    sample {
      ...sample
    }
  }
}
    ${exports.SampleEsiFragmentDoc}
${exports.QuestionaryFragmentDoc}
${exports.SampleFragmentDoc}`;
exports.UpdateSampleEsiDocument = (0, graphql_tag_1.default) `
    mutation updateSampleEsi($esiId: Int!, $sampleId: Int!, $isSubmitted: Boolean) {
  updateSampleEsi(sampleId: $sampleId, esiId: $esiId, isSubmitted: $isSubmitted) {
    esi {
      ...sampleEsi
      questionary {
        isCompleted
        ...questionary
      }
      sample {
        ...sample
      }
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.SampleEsiFragmentDoc}
${exports.QuestionaryFragmentDoc}
${exports.SampleFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.CloneSampleDocument = (0, graphql_tag_1.default) `
    mutation cloneSample($sampleId: Int!, $title: String, $isPostProposalSubmission: Boolean) {
  cloneSample(
    sampleId: $sampleId
    title: $title
    isPostProposalSubmission: $isPostProposalSubmission
  ) {
    sample {
      ...sample
      questionary {
        isCompleted
        ...questionary
      }
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.SampleFragmentDoc}
${exports.QuestionaryFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.CreateSampleDocument = (0, graphql_tag_1.default) `
    mutation createSample($title: String!, $templateId: Int!, $proposalPk: Int!, $questionId: String!, $isPostProposalSubmission: Boolean) {
  createSample(
    title: $title
    templateId: $templateId
    proposalPk: $proposalPk
    questionId: $questionId
    isPostProposalSubmission: $isPostProposalSubmission
  ) {
    sample {
      ...sample
      questionary {
        isCompleted
        ...questionary
      }
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.SampleFragmentDoc}
${exports.QuestionaryFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.DeleteSampleDocument = (0, graphql_tag_1.default) `
    mutation deleteSample($sampleId: Int!) {
  deleteSample(sampleId: $sampleId) {
    sample {
      ...sample
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.SampleFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.GetSampleDocument = (0, graphql_tag_1.default) `
    query getSample($sampleId: Int!) {
  sample(sampleId: $sampleId) {
    ...sample
    questionary {
      isCompleted
      ...questionary
    }
  }
}
    ${exports.SampleFragmentDoc}
${exports.QuestionaryFragmentDoc}`;
exports.GetSamplesByCallIdDocument = (0, graphql_tag_1.default) `
    query getSamplesByCallId($callId: Int!) {
  samplesByCallId(callId: $callId) {
    ...sample
    proposal {
      primaryKey
      proposalId
    }
  }
}
    ${exports.SampleFragmentDoc}`;
exports.GetSamplesWithProposalDataDocument = (0, graphql_tag_1.default) `
    query getSamplesWithProposalData($filter: SamplesFilter) {
  samples(filter: $filter) {
    ...sample
    proposal {
      primaryKey
      proposalId
    }
  }
}
    ${exports.SampleFragmentDoc}`;
exports.GetSamplesWithQuestionaryStatusDocument = (0, graphql_tag_1.default) `
    query getSamplesWithQuestionaryStatus($filter: SamplesFilter) {
  samples(filter: $filter) {
    ...sample
    questionary {
      isCompleted
    }
  }
}
    ${exports.SampleFragmentDoc}`;
exports.UpdateSampleDocument = (0, graphql_tag_1.default) `
    mutation updateSample($sampleId: Int!, $title: String, $safetyComment: String, $safetyStatus: SampleStatus) {
  updateSample(
    sampleId: $sampleId
    title: $title
    safetyComment: $safetyComment
    safetyStatus: $safetyStatus
  ) {
    sample {
      ...sample
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.SampleFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.GetScheduledEventCoreDocument = (0, graphql_tag_1.default) `
    query getScheduledEventCore($scheduledEventId: Int!) {
  scheduledEventCore(scheduledEventId: $scheduledEventId) {
    ...scheduledEventCore
  }
}
    ${exports.ScheduledEventCoreFragmentDoc}`;
exports.GetScheduledEventsCoreDocument = (0, graphql_tag_1.default) `
    query getScheduledEventsCore($filter: ScheduledEventsCoreFilter, $first: Int, $offset: Int) {
  scheduledEventsCore(filter: $filter, first: $first, offset: $offset) {
    ...scheduledEventCore
    proposal {
      ...proposal
      proposer {
        ...basicUserDetails
      }
      instrument {
        ...instrument
      }
    }
    esi {
      ...esi
    }
    visit {
      registrations {
        ...visitRegistration
        startsAt
        endsAt
        trainingStatus
        user {
          ...basicUserDetails
        }
      }
      teamLead {
        ...basicUserDetails
      }
    }
  }
}
    ${exports.ScheduledEventCoreFragmentDoc}
${exports.ProposalFragmentDoc}
${exports.BasicUserDetailsFragmentDoc}
${exports.InstrumentFragmentDoc}
${exports.EsiFragmentDoc}
${exports.VisitRegistrationFragmentDoc}`;
exports.AddProposalWorkflowStatusDocument = (0, graphql_tag_1.default) `
    mutation addProposalWorkflowStatus($proposalWorkflowId: Int!, $sortOrder: Int!, $droppableGroupId: String!, $parentDroppableGroupId: String, $proposalStatusId: Int!, $nextProposalStatusId: Int, $prevProposalStatusId: Int) {
  addProposalWorkflowStatus(
    newProposalWorkflowStatusInput: {proposalWorkflowId: $proposalWorkflowId, sortOrder: $sortOrder, droppableGroupId: $droppableGroupId, parentDroppableGroupId: $parentDroppableGroupId, proposalStatusId: $proposalStatusId, nextProposalStatusId: $nextProposalStatusId, prevProposalStatusId: $prevProposalStatusId}
  ) {
    proposalWorkflowConnection {
      id
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.AddStatusChangingEventsToConnectionDocument = (0, graphql_tag_1.default) `
    mutation addStatusChangingEventsToConnection($proposalWorkflowConnectionId: Int!, $statusChangingEvents: [String!]!) {
  addStatusChangingEventsToConnection(
    addStatusChangingEventsToConnectionInput: {proposalWorkflowConnectionId: $proposalWorkflowConnectionId, statusChangingEvents: $statusChangingEvents}
  ) {
    statusChangingEvents {
      statusChangingEventId
      proposalWorkflowConnectionId
      statusChangingEvent
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.CreateProposalStatusDocument = (0, graphql_tag_1.default) `
    mutation createProposalStatus($shortCode: String!, $name: String!, $description: String!) {
  createProposalStatus(
    newProposalStatusInput: {shortCode: $shortCode, name: $name, description: $description}
  ) {
    proposalStatus {
      ...proposalStatus
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.ProposalStatusFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.CreateProposalWorkflowDocument = (0, graphql_tag_1.default) `
    mutation createProposalWorkflow($name: String!, $description: String!) {
  createProposalWorkflow(
    newProposalWorkflowInput: {name: $name, description: $description}
  ) {
    proposalWorkflow {
      id
      name
      description
      proposalWorkflowConnectionGroups {
        groupId
        parentGroupId
        connections {
          id
          sortOrder
          proposalWorkflowId
          proposalStatusId
          proposalStatus {
            ...proposalStatus
          }
          nextProposalStatusId
          prevProposalStatusId
          droppableGroupId
          statusChangingEvents {
            statusChangingEventId
            proposalWorkflowConnectionId
            statusChangingEvent
          }
        }
      }
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.ProposalStatusFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.DeleteProposalStatusDocument = (0, graphql_tag_1.default) `
    mutation deleteProposalStatus($id: Int!) {
  deleteProposalStatus(id: $id) {
    proposalStatus {
      ...proposalStatus
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.ProposalStatusFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.DeleteProposalWorkflowDocument = (0, graphql_tag_1.default) `
    mutation deleteProposalWorkflow($id: Int!) {
  deleteProposalWorkflow(id: $id) {
    proposalWorkflow {
      id
      name
      description
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.DeleteProposalWorkflowStatusDocument = (0, graphql_tag_1.default) `
    mutation deleteProposalWorkflowStatus($proposalStatusId: Int!, $proposalWorkflowId: Int!, $sortOrder: Int!) {
  deleteProposalWorkflowStatus(
    deleteProposalWorkflowStatusInput: {proposalStatusId: $proposalStatusId, proposalWorkflowId: $proposalWorkflowId, sortOrder: $sortOrder}
  ) {
    isSuccess
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.GetProposalEventsDocument = (0, graphql_tag_1.default) `
    query getProposalEvents {
  proposalEvents {
    name
    description
  }
}
    `;
exports.GetProposalStatusesDocument = (0, graphql_tag_1.default) `
    query getProposalStatuses {
  proposalStatuses {
    ...proposalStatus
  }
}
    ${exports.ProposalStatusFragmentDoc}`;
exports.GetProposalWorkflowDocument = (0, graphql_tag_1.default) `
    query getProposalWorkflow($id: Int!) {
  proposalWorkflow(id: $id) {
    id
    name
    description
    proposalWorkflowConnectionGroups {
      groupId
      parentGroupId
      connections {
        id
        sortOrder
        proposalWorkflowId
        proposalStatusId
        proposalStatus {
          ...proposalStatus
        }
        nextProposalStatusId
        prevProposalStatusId
        droppableGroupId
        statusChangingEvents {
          statusChangingEventId
          proposalWorkflowConnectionId
          statusChangingEvent
        }
      }
    }
  }
}
    ${exports.ProposalStatusFragmentDoc}`;
exports.GetProposalWorkflowsDocument = (0, graphql_tag_1.default) `
    query getProposalWorkflows {
  proposalWorkflows {
    id
    name
    description
  }
}
    `;
exports.MoveProposalWorkflowStatusDocument = (0, graphql_tag_1.default) `
    mutation moveProposalWorkflowStatus($from: IndexWithGroupId!, $to: IndexWithGroupId!, $proposalWorkflowId: Int!) {
  moveProposalWorkflowStatus(
    moveProposalWorkflowStatusInput: {from: $from, to: $to, proposalWorkflowId: $proposalWorkflowId}
  ) {
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.UpdateProposalStatusDocument = (0, graphql_tag_1.default) `
    mutation updateProposalStatus($id: Int!, $shortCode: String!, $name: String!, $description: String!) {
  updateProposalStatus(
    updatedProposalStatusInput: {id: $id, shortCode: $shortCode, name: $name, description: $description}
  ) {
    proposalStatus {
      ...proposalStatus
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.ProposalStatusFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.UpdateProposalWorkflowDocument = (0, graphql_tag_1.default) `
    mutation updateProposalWorkflow($id: Int!, $name: String!, $description: String!) {
  updateProposalWorkflow(
    updatedProposalWorkflowInput: {id: $id, name: $name, description: $description}
  ) {
    proposalWorkflow {
      id
      name
      description
      proposalWorkflowConnectionGroups {
        groupId
        parentGroupId
        connections {
          id
          sortOrder
          proposalWorkflowId
          proposalStatusId
          proposalStatus {
            id
            name
            description
          }
          nextProposalStatusId
          prevProposalStatusId
          droppableGroupId
          statusChangingEvents {
            statusChangingEventId
            proposalWorkflowConnectionId
            statusChangingEvent
          }
        }
      }
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.AddSamplesToShipmentDocument = (0, graphql_tag_1.default) `
    mutation addSamplesToShipment($shipmentId: Int!, $sampleIds: [Int!]!) {
  addSamplesToShipment(shipmentId: $shipmentId, sampleIds: $sampleIds) {
    rejection {
      ...rejection
    }
    shipment {
      ...shipment
      samples {
        ...sample
      }
    }
  }
}
    ${exports.RejectionFragmentDoc}
${exports.ShipmentFragmentDoc}
${exports.SampleFragmentDoc}`;
exports.CreateShipmentDocument = (0, graphql_tag_1.default) `
    mutation createShipment($title: String!, $proposalPk: Int!, $scheduledEventId: Int!) {
  createShipment(
    title: $title
    proposalPk: $proposalPk
    scheduledEventId: $scheduledEventId
  ) {
    shipment {
      ...shipment
      questionary {
        ...questionary
        isCompleted
      }
      samples {
        ...sample
      }
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.ShipmentFragmentDoc}
${exports.QuestionaryFragmentDoc}
${exports.SampleFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.DeleteShipmentDocument = (0, graphql_tag_1.default) `
    mutation deleteShipment($shipmentId: Int!) {
  deleteShipment(shipmentId: $shipmentId) {
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.GetMyShipmentsDocument = (0, graphql_tag_1.default) `
    query getMyShipments {
  myShipments {
    ...shipment
  }
}
    ${exports.ShipmentFragmentDoc}`;
exports.GetShipmentDocument = (0, graphql_tag_1.default) `
    query getShipment($shipmentId: Int!) {
  shipment(shipmentId: $shipmentId) {
    ...shipment
    questionary {
      ...questionary
      isCompleted
    }
    samples {
      ...sample
    }
  }
}
    ${exports.ShipmentFragmentDoc}
${exports.QuestionaryFragmentDoc}
${exports.SampleFragmentDoc}`;
exports.GetShipmentsDocument = (0, graphql_tag_1.default) `
    query getShipments($filter: ShipmentsFilter) {
  shipments(filter: $filter) {
    ...shipment
  }
}
    ${exports.ShipmentFragmentDoc}`;
exports.SetActiveTemplateDocument = (0, graphql_tag_1.default) `
    mutation setActiveTemplate($templateGroupId: TemplateGroupId!, $templateId: Int!) {
  setActiveTemplate(templateId: $templateId, templateGroupId: $templateGroupId) {
    isSuccess
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.SubmitShipmentDocument = (0, graphql_tag_1.default) `
    mutation submitShipment($shipmentId: Int!) {
  submitShipment(shipmentId: $shipmentId) {
    rejection {
      ...rejection
    }
    shipment {
      ...shipment
    }
  }
}
    ${exports.RejectionFragmentDoc}
${exports.ShipmentFragmentDoc}`;
exports.UpdateShipmentDocument = (0, graphql_tag_1.default) `
    mutation updateShipment($shipmentId: Int!, $title: String, $proposalPk: Int, $status: ShipmentStatus) {
  updateShipment(
    shipmentId: $shipmentId
    title: $title
    status: $status
    proposalPk: $proposalPk
  ) {
    rejection {
      ...rejection
    }
    shipment {
      ...shipment
      questionary {
        ...questionary
        isCompleted
      }
    }
  }
}
    ${exports.RejectionFragmentDoc}
${exports.ShipmentFragmentDoc}
${exports.QuestionaryFragmentDoc}`;
exports.ImportTemplateDocument = (0, graphql_tag_1.default) `
    mutation importTemplate($templateAsJson: String!, $conflictResolutions: [ConflictResolution!]!) {
  importTemplate(
    templateAsJson: $templateAsJson
    conflictResolutions: $conflictResolutions
  ) {
    template {
      ...template
    }
    rejection {
      reason
      context
      exception
    }
  }
}
    ${exports.TemplateFragmentDoc}`;
exports.CloneTemplateDocument = (0, graphql_tag_1.default) `
    mutation cloneTemplate($templateId: Int!) {
  cloneTemplate(templateId: $templateId) {
    template {
      ...templateMetadata
      questionaryCount
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.TemplateMetadataFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.CreateQuestionDocument = (0, graphql_tag_1.default) `
    mutation createQuestion($categoryId: TemplateCategoryId!, $dataType: DataType!) {
  createQuestion(categoryId: $categoryId, dataType: $dataType) {
    question {
      ...question
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.QuestionFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.CreateQuestionTemplateRelationDocument = (0, graphql_tag_1.default) `
    mutation createQuestionTemplateRelation($templateId: Int!, $questionId: String!, $topicId: Int!, $sortOrder: Int!) {
  createQuestionTemplateRelation(
    templateId: $templateId
    questionId: $questionId
    topicId: $topicId
    sortOrder: $sortOrder
  ) {
    template {
      ...template
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.TemplateFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.CreateTemplateDocument = (0, graphql_tag_1.default) `
    mutation createTemplate($groupId: TemplateGroupId!, $name: String!, $description: String) {
  createTemplate(groupId: $groupId, name: $name, description: $description) {
    template {
      ...template
      questionaryCount
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.TemplateFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.CreateTopicDocument = (0, graphql_tag_1.default) `
    mutation createTopic($templateId: Int!, $sortOrder: Int!) {
  createTopic(templateId: $templateId, sortOrder: $sortOrder) {
    template {
      ...template
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.TemplateFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.DeleteQuestionDocument = (0, graphql_tag_1.default) `
    mutation deleteQuestion($questionId: String!) {
  deleteQuestion(questionId: $questionId) {
    question {
      ...question
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.QuestionFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.DeleteQuestionTemplateRelationDocument = (0, graphql_tag_1.default) `
    mutation deleteQuestionTemplateRelation($questionId: String!, $templateId: Int!) {
  deleteQuestionTemplateRelation(questionId: $questionId, templateId: $templateId) {
    template {
      ...template
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.TemplateFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.DeleteTemplateDocument = (0, graphql_tag_1.default) `
    mutation deleteTemplate($id: Int!) {
  deleteTemplate(templateId: $id) {
    template {
      templateId
      name
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.DeleteTopicDocument = (0, graphql_tag_1.default) `
    mutation deleteTopic($topicId: Int!) {
  deleteTopic(topicId: $topicId) {
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.GetActiveTemplateIdDocument = (0, graphql_tag_1.default) `
    query getActiveTemplateId($templateGroupId: TemplateGroupId!) {
  activeTemplateId(templateGroupId: $templateGroupId)
}
    `;
exports.GetIsNaturalKeyPresentDocument = (0, graphql_tag_1.default) `
    query getIsNaturalKeyPresent($naturalKey: String!) {
  isNaturalKeyPresent(naturalKey: $naturalKey)
}
    `;
exports.GetProposalTemplatesDocument = (0, graphql_tag_1.default) `
    query getProposalTemplates($filter: ProposalTemplatesFilter) {
  proposalTemplates(filter: $filter) {
    templateId
    name
    description
    isArchived
    questionaryCount
    callCount
  }
}
    `;
exports.GetQuestionsDocument = (0, graphql_tag_1.default) `
    query getQuestions($filter: QuestionsFilter) {
  questions(filter: $filter) {
    id
    question
    naturalKey
    dataType
    categoryId
    config {
      ...fieldConfig
    }
    answers {
      questionaryId
    }
    templates {
      templateId
    }
  }
}
    ${exports.FieldConfigFragmentDoc}`;
exports.GetTemplateDocument = (0, graphql_tag_1.default) `
    query getTemplate($templateId: Int!) {
  template(templateId: $templateId) {
    ...template
  }
}
    ${exports.TemplateFragmentDoc}`;
exports.GetTemplateCategoriesDocument = (0, graphql_tag_1.default) `
    query getTemplateCategories {
  templateCategories {
    categoryId
    name
  }
}
    `;
exports.GetTemplateExportDocument = (0, graphql_tag_1.default) `
    query getTemplateExport($templateId: Int!) {
  template(templateId: $templateId) {
    json
  }
}
    `;
exports.GetTemplatesDocument = (0, graphql_tag_1.default) `
    query getTemplates($filter: TemplatesFilter) {
  templates(filter: $filter) {
    templateId
    name
    description
    isArchived
    questionaryCount
  }
}
    `;
exports.UpdateQuestionDocument = (0, graphql_tag_1.default) `
    mutation updateQuestion($id: String!, $naturalKey: String, $question: String, $config: String) {
  updateQuestion(
    id: $id
    naturalKey: $naturalKey
    question: $question
    config: $config
  ) {
    question {
      ...question
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.QuestionFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.UpdateQuestionTemplateRelationDocument = (0, graphql_tag_1.default) `
    mutation updateQuestionTemplateRelation($questionId: String!, $templateId: Int!, $topicId: Int, $sortOrder: Int!, $config: String) {
  updateQuestionTemplateRelation(
    questionId: $questionId
    templateId: $templateId
    topicId: $topicId
    sortOrder: $sortOrder
    config: $config
  ) {
    template {
      ...template
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.TemplateFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.UpdateQuestionTemplateRelationSettingsDocument = (0, graphql_tag_1.default) `
    mutation updateQuestionTemplateRelationSettings($questionId: String!, $templateId: Int!, $config: String, $dependencies: [FieldDependencyInput!]!, $dependenciesOperator: DependenciesLogicOperator) {
  updateQuestionTemplateRelationSettings(
    questionId: $questionId
    templateId: $templateId
    config: $config
    dependencies: $dependencies
    dependenciesOperator: $dependenciesOperator
  ) {
    template {
      ...template
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.TemplateFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.UpdateTemplateDocument = (0, graphql_tag_1.default) `
    mutation updateTemplate($templateId: Int!, $name: String, $description: String, $isArchived: Boolean) {
  updateTemplate(
    templateId: $templateId
    name: $name
    description: $description
    isArchived: $isArchived
  ) {
    template {
      ...templateMetadata
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.TemplateMetadataFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.UpdateTopicDocument = (0, graphql_tag_1.default) `
    mutation updateTopic($topicId: Int!, $templateId: Int, $title: String, $sortOrder: Int, $isEnabled: Boolean) {
  updateTopic(
    id: $topicId
    templateId: $templateId
    title: $title
    sortOrder: $sortOrder
    isEnabled: $isEnabled
  ) {
    template {
      ...template
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.TemplateFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.ValidateTemplateImportDocument = (0, graphql_tag_1.default) `
    mutation validateTemplateImport($templateAsJson: String!) {
  validateTemplateImport(templateAsJson: $templateAsJson) {
    validationResult {
      json
      version
      exportDate
      isValid
      errors
      questionComparisons {
        existingQuestion {
          ...question
        }
        newQuestion {
          ...question
        }
        status
        conflictResolutionStrategy
      }
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.QuestionFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.CreateUnitDocument = (0, graphql_tag_1.default) `
    mutation createUnit($id: String!, $unit: String!, $quantity: String!, $symbol: String!, $siConversionFormula: String!) {
  createUnit(
    id: $id
    unit: $unit
    quantity: $quantity
    symbol: $symbol
    siConversionFormula: $siConversionFormula
  ) {
    unit {
      ...unit
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.UnitFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.DeleteUnitDocument = (0, graphql_tag_1.default) `
    mutation deleteUnit($id: String!) {
  deleteUnit(id: $id) {
    unit {
      id
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.GetUnitsDocument = (0, graphql_tag_1.default) `
    query getUnits {
  units {
    ...unit
  }
}
    ${exports.UnitFragmentDoc}`;
exports.GetUnitsAsJsonDocument = (0, graphql_tag_1.default) `
    query getUnitsAsJson {
  unitsAsJson
}
    `;
exports.ImportUnitsDocument = (0, graphql_tag_1.default) `
    mutation importUnits($json: String!, $conflictResolutions: [ConflictResolution!]!) {
  importUnits(json: $json, conflictResolutions: $conflictResolutions) {
    units {
      ...unit
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.UnitFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.ValidateUnitsImportDocument = (0, graphql_tag_1.default) `
    mutation validateUnitsImport($unitsAsJson: String!) {
  validateUnitsImport(unitsAsJson: $unitsAsJson) {
    validationResult {
      json
      version
      exportDate
      isValid
      errors
      unitComparisons {
        existingUnit {
          ...unit
        }
        newUnit {
          ...unit
        }
        status
        conflictResolutionStrategy
      }
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.UnitFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.CheckTokenDocument = (0, graphql_tag_1.default) `
    query checkToken($token: String!) {
  checkToken(token: $token) {
    isValid
  }
}
    `;
exports.CreateUserDocument = (0, graphql_tag_1.default) `
    mutation createUser($user_title: String, $firstname: String!, $middlename: String, $lastname: String!, $password: String!, $preferredname: String, $orcid: String!, $orcidHash: String!, $refreshToken: String!, $gender: String!, $nationality: Int!, $birthdate: DateTime!, $organisation: Int!, $department: String!, $position: String!, $email: String!, $telephone: String!, $telephone_alt: String, $otherOrganisation: String, $organizationCountry: Int) {
  createUser(
    user_title: $user_title
    firstname: $firstname
    middlename: $middlename
    lastname: $lastname
    password: $password
    preferredname: $preferredname
    orcid: $orcid
    orcidHash: $orcidHash
    refreshToken: $refreshToken
    gender: $gender
    nationality: $nationality
    birthdate: $birthdate
    organisation: $organisation
    department: $department
    position: $position
    email: $email
    telephone: $telephone
    telephone_alt: $telephone_alt
    otherOrganisation: $otherOrganisation
    organizationCountry: $organizationCountry
  ) {
    user {
      id
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.CreateUserByEmailInviteDocument = (0, graphql_tag_1.default) `
    mutation createUserByEmailInvite($firstname: String!, $lastname: String!, $email: String!, $userRole: UserRole!) {
  createUserByEmailInvite(
    firstname: $firstname
    lastname: $lastname
    email: $email
    userRole: $userRole
  ) {
    rejection {
      ...rejection
    }
    id
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.DeleteUserDocument = (0, graphql_tag_1.default) `
    mutation deleteUser($id: Int!) {
  deleteUser(id: $id) {
    user {
      id
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.ExternalTokenLoginDocument = (0, graphql_tag_1.default) `
    mutation externalTokenLogin($externalToken: String!) {
  externalTokenLogin(externalToken: $externalToken) {
    token
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.GetBasicUserDetailsDocument = (0, graphql_tag_1.default) `
    query getBasicUserDetails($id: Int!) {
  basicUserDetails(id: $id) {
    ...basicUserDetails
  }
}
    ${exports.BasicUserDetailsFragmentDoc}`;
exports.GetBasicUserDetailsByEmailDocument = (0, graphql_tag_1.default) `
    query getBasicUserDetailsByEmail($email: String!, $role: UserRole) {
  basicUserDetailsByEmail(email: $email, role: $role) {
    ...basicUserDetails
  }
}
    ${exports.BasicUserDetailsFragmentDoc}`;
exports.GetFieldsDocument = (0, graphql_tag_1.default) `
    query getFields {
  getFields {
    nationalities {
      id
      value
    }
    countries {
      id
      value
    }
  }
}
    `;
exports.GetMyRolesDocument = (0, graphql_tag_1.default) `
    query getMyRoles {
  me {
    firstname
    lastname
    roles {
      id
      shortCode
      title
    }
  }
}
    `;
exports.GetOrcIdInformationDocument = (0, graphql_tag_1.default) `
    query getOrcIDInformation($authorizationCode: String!) {
  getOrcIDInformation(authorizationCode: $authorizationCode) {
    firstname
    lastname
    orcid
    orcidHash
    refreshToken
    token
  }
}
    `;
exports.GetPreviousCollaboratorsDocument = (0, graphql_tag_1.default) `
    query getPreviousCollaborators($userId: Int!, $filter: String, $first: Int, $offset: Int, $userRole: UserRole, $subtractUsers: [Int!]) {
  previousCollaborators(
    userId: $userId
    filter: $filter
    first: $first
    offset: $offset
    userRole: $userRole
    subtractUsers: $subtractUsers
  ) {
    users {
      ...basicUserDetails
    }
    totalCount
  }
}
    ${exports.BasicUserDetailsFragmentDoc}`;
exports.GetRolesDocument = (0, graphql_tag_1.default) `
    query getRoles {
  roles {
    id
    shortCode
    title
  }
}
    `;
exports.GetTokenDocument = (0, graphql_tag_1.default) `
    mutation getToken($token: String!) {
  token(token: $token) {
    token
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.GetTokenForUserDocument = (0, graphql_tag_1.default) `
    mutation getTokenForUser($userId: Int!) {
  getTokenForUser(userId: $userId) {
    token
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.GetUserDocument = (0, graphql_tag_1.default) `
    query getUser($id: Int!) {
  user(id: $id) {
    user_title
    username
    firstname
    middlename
    lastname
    preferredname
    gender
    nationality
    birthdate
    organisation
    department
    position
    email
    telephone
    telephone_alt
    orcid
    emailVerified
    placeholder
  }
}
    `;
exports.GetUserMeDocument = (0, graphql_tag_1.default) `
    query getUserMe {
  me {
    user_title
    username
    firstname
    middlename
    lastname
    preferredname
    gender
    nationality
    birthdate
    organisation
    department
    position
    email
    telephone
    telephone_alt
    orcid
    emailVerified
    placeholder
  }
}
    `;
exports.GetUserProposalsDocument = (0, graphql_tag_1.default) `
    query getUserProposals {
  me {
    proposals {
      primaryKey
      proposalId
      title
      status {
        ...proposalStatus
      }
      publicStatus
      statusId
      created
      finalStatus
      notified
      submitted
      proposer {
        id
      }
      call {
        id
        shortCode
        isActive
        referenceNumberFormat
      }
    }
  }
}
    ${exports.ProposalStatusFragmentDoc}`;
exports.GetUserWithRolesDocument = (0, graphql_tag_1.default) `
    query getUserWithRoles($id: Int!) {
  user(id: $id) {
    firstname
    lastname
    roles {
      id
      shortCode
      title
    }
  }
}
    `;
exports.GetUsersDocument = (0, graphql_tag_1.default) `
    query getUsers($filter: String, $first: Int, $offset: Int, $userRole: UserRole, $subtractUsers: [Int!], $orderBy: String, $orderDirection: String) {
  users(
    filter: $filter
    first: $first
    offset: $offset
    userRole: $userRole
    subtractUsers: $subtractUsers
    orderBy: $orderBy
    orderDirection: $orderDirection
  ) {
    users {
      ...basicUserDetails
    }
    totalCount
  }
}
    ${exports.BasicUserDetailsFragmentDoc}`;
exports.LoginDocument = (0, graphql_tag_1.default) `
    mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.LogoutDocument = (0, graphql_tag_1.default) `
    mutation logout($token: String!) {
  logout(token: $token) {
    token
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.ResetPasswordDocument = (0, graphql_tag_1.default) `
    mutation resetPassword($token: String!, $password: String!) {
  resetPassword(token: $token, password: $password) {
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.ResetPasswordEmailDocument = (0, graphql_tag_1.default) `
    mutation resetPasswordEmail($email: String!) {
  resetPasswordEmail(email: $email) {
    rejection {
      ...rejection
    }
    isSuccess
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.SelectRoleDocument = (0, graphql_tag_1.default) `
    mutation selectRole($token: String!, $selectedRoleId: Int!) {
  selectRole(token: $token, selectedRoleId: $selectedRoleId) {
    token
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.SetUserEmailVerifiedDocument = (0, graphql_tag_1.default) `
    mutation setUserEmailVerified($id: Int!) {
  setUserEmailVerified(id: $id) {
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.SetUserNotPlaceholderDocument = (0, graphql_tag_1.default) `
    mutation setUserNotPlaceholder($id: Int!) {
  setUserNotPlaceholder(id: $id) {
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.UpdatePasswordDocument = (0, graphql_tag_1.default) `
    mutation updatePassword($id: Int!, $password: String!) {
  updatePassword(id: $id, password: $password) {
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.UpdateUserDocument = (0, graphql_tag_1.default) `
    mutation updateUser($id: Int!, $user_title: String, $firstname: String!, $middlename: String, $lastname: String!, $preferredname: String, $gender: String!, $nationality: Int!, $birthdate: DateTime!, $organisation: Int!, $department: String!, $position: String!, $email: String!, $telephone: String!, $telephone_alt: String, $otherOrganisation: String, $organizationCountry: Int) {
  updateUser(
    id: $id
    user_title: $user_title
    firstname: $firstname
    middlename: $middlename
    lastname: $lastname
    preferredname: $preferredname
    gender: $gender
    nationality: $nationality
    birthdate: $birthdate
    organisation: $organisation
    department: $department
    position: $position
    email: $email
    telephone: $telephone
    telephone_alt: $telephone_alt
    otherOrganisation: $otherOrganisation
    organizationCountry: $organizationCountry
  ) {
    user {
      id
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.UpdateUserRolesDocument = (0, graphql_tag_1.default) `
    mutation updateUserRoles($id: Int!, $roles: [Int!]) {
  updateUserRoles(id: $id, roles: $roles) {
    user {
      id
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.VerifyEmailDocument = (0, graphql_tag_1.default) `
    mutation verifyEmail($token: String!) {
  emailVerification(token: $token) {
    rejection {
      ...rejection
    }
    success
  }
}
    ${exports.RejectionFragmentDoc}`;
exports.CreateVisitDocument = (0, graphql_tag_1.default) `
    mutation createVisit($scheduledEventId: Int!, $team: [Int!]!, $teamLeadUserId: Int!) {
  createVisit(
    scheduledEventId: $scheduledEventId
    team: $team
    teamLeadUserId: $teamLeadUserId
  ) {
    visit {
      ...visit
      teamLead {
        ...basicUserDetails
      }
      registrations {
        ...visitRegistration
        user {
          ...basicUserDetails
        }
      }
      proposal {
        ...proposal
        instrument {
          name
        }
      }
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.VisitFragmentDoc}
${exports.BasicUserDetailsFragmentDoc}
${exports.VisitRegistrationFragmentDoc}
${exports.ProposalFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.DeleteVisitDocument = (0, graphql_tag_1.default) `
    mutation deleteVisit($visitId: Int!) {
  deleteVisit(visitId: $visitId) {
    visit {
      ...visit
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.VisitFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.GetVisitDocument = (0, graphql_tag_1.default) `
    query getVisit($visitId: Int!) {
  visit(visitId: $visitId) {
    ...visit
    registrations {
      ...visitRegistration
      user {
        ...basicUserDetails
      }
    }
    proposal {
      ...proposal
      instrument {
        name
      }
    }
  }
}
    ${exports.VisitFragmentDoc}
${exports.VisitRegistrationFragmentDoc}
${exports.BasicUserDetailsFragmentDoc}
${exports.ProposalFragmentDoc}`;
exports.GetVisitsDocument = (0, graphql_tag_1.default) `
    query getVisits($filter: VisitsFilter) {
  visits(filter: $filter) {
    ...visit
    proposal {
      ...proposal
      instrument {
        name
      }
    }
  }
}
    ${exports.VisitFragmentDoc}
${exports.ProposalFragmentDoc}`;
exports.UpdateVisitDocument = (0, graphql_tag_1.default) `
    mutation updateVisit($visitId: Int!, $team: [Int!], $status: VisitStatus, $teamLeadUserId: Int) {
  updateVisit(
    visitId: $visitId
    team: $team
    status: $status
    teamLeadUserId: $teamLeadUserId
  ) {
    visit {
      ...visit
      teamLead {
        ...basicUserDetails
      }
      registrations {
        ...visitRegistration
        user {
          ...basicUserDetails
        }
      }
      proposal {
        ...proposal
        instrument {
          name
        }
      }
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.VisitFragmentDoc}
${exports.BasicUserDetailsFragmentDoc}
${exports.VisitRegistrationFragmentDoc}
${exports.ProposalFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.CreateVisitRegistrationDocument = (0, graphql_tag_1.default) `
    mutation createVisitRegistration($visitId: Int!) {
  createVisitRegistration(visitId: $visitId) {
    registration {
      ...visitRegistration
      user {
        ...basicUserDetails
      }
      questionary {
        ...questionary
        isCompleted
      }
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.VisitRegistrationFragmentDoc}
${exports.BasicUserDetailsFragmentDoc}
${exports.QuestionaryFragmentDoc}
${exports.RejectionFragmentDoc}`;
exports.GetVisitRegistrationDocument = (0, graphql_tag_1.default) `
    query getVisitRegistration($visitId: Int!) {
  visitRegistration(visitId: $visitId) {
    ...visitRegistration
    user {
      ...basicUserDetails
    }
    questionary {
      ...questionary
      isCompleted
    }
  }
}
    ${exports.VisitRegistrationFragmentDoc}
${exports.BasicUserDetailsFragmentDoc}
${exports.QuestionaryFragmentDoc}`;
exports.UpdateVisitRegistrationDocument = (0, graphql_tag_1.default) `
    mutation updateVisitRegistration($visitId: Int!, $trainingExpiryDate: DateTime, $isRegistrationSubmitted: Boolean, $startsAt: DateTime, $endsAt: DateTime) {
  updateVisitRegistration(
    visitId: $visitId
    trainingExpiryDate: $trainingExpiryDate
    isRegistrationSubmitted: $isRegistrationSubmitted
    startsAt: $startsAt
    endsAt: $endsAt
  ) {
    registration {
      ...visitRegistration
      user {
        ...basicUserDetails
      }
      questionary {
        ...questionary
        isCompleted
      }
    }
    rejection {
      ...rejection
    }
  }
}
    ${exports.VisitRegistrationFragmentDoc}
${exports.BasicUserDetailsFragmentDoc}
${exports.QuestionaryFragmentDoc}
${exports.RejectionFragmentDoc}`;
const defaultWrapper = (action, _operationName, _operationType) => action();
function getSdk(client, withWrapper = defaultWrapper) {
    return {
        assignProposalsToSep(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AssignProposalsToSepDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'assignProposalsToSep', 'mutation');
        },
        assignReviewersToSEP(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AssignReviewersToSepDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'assignReviewersToSEP', 'mutation');
        },
        assignChairOrSecretary(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AssignChairOrSecretaryDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'assignChairOrSecretary', 'mutation');
        },
        assignSepReviewersToProposal(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AssignSepReviewersToProposalDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'assignSepReviewersToProposal', 'mutation');
        },
        createSEP(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateSepDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'createSEP', 'mutation');
        },
        deleteSEP(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteSepDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'deleteSEP', 'mutation');
        },
        getInstrumentsBySEP(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetInstrumentsBySepDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getInstrumentsBySEP', 'query');
        },
        getUserSeps(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetUserSepsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getUserSeps', 'query');
        },
        getSEP(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetSepDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getSEP', 'query');
        },
        getSEPMembers(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetSepMembersDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getSEPMembers', 'query');
        },
        getSEPProposal(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetSepProposalDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getSEPProposal', 'query');
        },
        getSEPProposals(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetSepProposalsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getSEPProposals', 'query');
        },
        sepProposalsByInstrument(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SepProposalsByInstrumentDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'sepProposalsByInstrument', 'query');
        },
        getSEPReviewers(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetSepReviewersDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getSEPReviewers', 'query');
        },
        getSEPs(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetSePsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getSEPs', 'query');
        },
        removeProposalsFromSep(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.RemoveProposalsFromSepDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'removeProposalsFromSep', 'mutation');
        },
        removeMemberFromSep(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.RemoveMemberFromSepDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'removeMemberFromSep', 'mutation');
        },
        removeMemberFromSEPProposal(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.RemoveMemberFromSepProposalDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'removeMemberFromSEPProposal', 'mutation');
        },
        reorderSepMeetingDecisionProposals(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ReorderSepMeetingDecisionProposalsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'reorderSepMeetingDecisionProposals', 'mutation');
        },
        saveSepMeetingDecision(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SaveSepMeetingDecisionDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'saveSepMeetingDecision', 'mutation');
        },
        updateSEP(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateSepDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateSEP', 'mutation');
        },
        updateSEPTimeAllocation(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateSepTimeAllocationDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateSEPTimeAllocation', 'mutation');
        },
        addClientLog(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AddClientLogDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'addClientLog', 'mutation');
        },
        createApiAccessToken(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateApiAccessTokenDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'createApiAccessToken', 'mutation');
        },
        createInstitution(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateInstitutionDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'createInstitution', 'mutation');
        },
        deleteApiAccessToken(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteApiAccessTokenDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'deleteApiAccessToken', 'mutation');
        },
        deleteInstitution(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteInstitutionDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'deleteInstitution', 'mutation');
        },
        getAllApiAccessTokensAndPermissions(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetAllApiAccessTokensAndPermissionsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getAllApiAccessTokensAndPermissions', 'query');
        },
        getAllQueriesAndMutations(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetAllQueriesAndMutationsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getAllQueriesAndMutations', 'query');
        },
        getFeatures(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetFeaturesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getFeatures', 'query');
        },
        getInstitutions(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetInstitutionsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getInstitutions', 'query');
        },
        getInstitutionsWithCountry(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetInstitutionsWithCountryDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getInstitutionsWithCountry', 'query');
        },
        getPageContent(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetPageContentDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getPageContent', 'query');
        },
        getQuantities(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetQuantitiesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getQuantities', 'query');
        },
        getSettings(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetSettingsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getSettings', 'query');
        },
        mergeInstitutions(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.MergeInstitutionsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'mergeInstitutions', 'mutation');
        },
        prepareDB(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.PrepareDbDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'prepareDB', 'mutation');
        },
        setPageContent(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SetPageContentDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'setPageContent', 'mutation');
        },
        updateApiAccessToken(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateApiAccessTokenDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateApiAccessToken', 'mutation');
        },
        updateInstitution(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateInstitutionDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateInstitution', 'mutation');
        },
        assignInstrumentsToCall(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AssignInstrumentsToCallDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'assignInstrumentsToCall', 'mutation');
        },
        createCall(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateCallDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'createCall', 'mutation');
        },
        deleteCall(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteCallDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'deleteCall', 'mutation');
        },
        getCall(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetCallDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getCall', 'query');
        },
        getCalls(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetCallsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getCalls', 'query');
        },
        getCallsByInstrumentScientist(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetCallsByInstrumentScientistDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getCallsByInstrumentScientist', 'query');
        },
        removeAssignedInstrumentFromCall(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.RemoveAssignedInstrumentFromCallDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'removeAssignedInstrumentFromCall', 'mutation');
        },
        updateCall(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateCallDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateCall', 'mutation');
        },
        createEsi(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateEsiDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'createEsi', 'mutation');
        },
        getEsi(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetEsiDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getEsi', 'query');
        },
        updateEsi(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateEsiDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateEsi', 'mutation');
        },
        getEventLogs(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetEventLogsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getEventLogs', 'query');
        },
        createFeedback(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateFeedbackDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'createFeedback', 'mutation');
        },
        getFeedback(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetFeedbackDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getFeedback', 'query');
        },
        updateFeedback(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateFeedbackDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateFeedback', 'mutation');
        },
        cloneGenericTemplate(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CloneGenericTemplateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'cloneGenericTemplate', 'mutation');
        },
        createGenericTemplate(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateGenericTemplateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'createGenericTemplate', 'mutation');
        },
        deleteGenericTemplate(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteGenericTemplateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'deleteGenericTemplate', 'mutation');
        },
        getGenericTemplate(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetGenericTemplateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getGenericTemplate', 'query');
        },
        getGenericTemplatesWithProposalData(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetGenericTemplatesWithProposalDataDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getGenericTemplatesWithProposalData', 'query');
        },
        getGenericTemplatesWithQuestionaryStatus(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetGenericTemplatesWithQuestionaryStatusDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getGenericTemplatesWithQuestionaryStatus', 'query');
        },
        updateGenericTemplate(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateGenericTemplateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateGenericTemplate', 'mutation');
        },
        assignProposalsToInstrument(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AssignProposalsToInstrumentDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'assignProposalsToInstrument', 'mutation');
        },
        assignScientistsToInstrument(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AssignScientistsToInstrumentDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'assignScientistsToInstrument', 'mutation');
        },
        createInstrument(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateInstrumentDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'createInstrument', 'mutation');
        },
        deleteInstrument(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteInstrumentDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'deleteInstrument', 'mutation');
        },
        getInstruments(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetInstrumentsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getInstruments', 'query');
        },
        getUserInstruments(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetUserInstrumentsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getUserInstruments', 'query');
        },
        removeProposalsFromInstrument(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.RemoveProposalsFromInstrumentDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'removeProposalsFromInstrument', 'mutation');
        },
        removeScientistFromInstrument(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.RemoveScientistFromInstrumentDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'removeScientistFromInstrument', 'mutation');
        },
        setInstrumentAvailabilityTime(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SetInstrumentAvailabilityTimeDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'setInstrumentAvailabilityTime', 'mutation');
        },
        submitInstrument(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SubmitInstrumentDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'submitInstrument', 'mutation');
        },
        updateInstrument(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateInstrumentDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateInstrument', 'mutation');
        },
        administrationProposal(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AdministrationProposalDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'administrationProposal', 'mutation');
        },
        changeProposalsStatus(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ChangeProposalsStatusDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'changeProposalsStatus', 'mutation');
        },
        cloneProposals(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CloneProposalsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'cloneProposals', 'mutation');
        },
        createProposal(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateProposalDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'createProposal', 'mutation');
        },
        deleteProposal(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteProposalDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'deleteProposal', 'mutation');
        },
        getInstrumentScientistProposals(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetInstrumentScientistProposalsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getInstrumentScientistProposals', 'query');
        },
        getMyProposals(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetMyProposalsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getMyProposals', 'query');
        },
        getProposal(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetProposalDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getProposal', 'query');
        },
        getProposals(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetProposalsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getProposals', 'query');
        },
        getProposalsCore(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetProposalsCoreDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getProposalsCore', 'query');
        },
        notifyProposal(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.NotifyProposalDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'notifyProposal', 'mutation');
        },
        submitProposal(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SubmitProposalDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'submitProposal', 'mutation');
        },
        updateProposal(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateProposalDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateProposal', 'mutation');
        },
        getUserProposalBookingsWithEvents(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetUserProposalBookingsWithEventsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getUserProposalBookingsWithEvents', 'query');
        },
        answerTopic(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AnswerTopicDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'answerTopic', 'mutation');
        },
        createQuestionary(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateQuestionaryDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'createQuestionary', 'mutation');
        },
        getBlankQuestionary(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetBlankQuestionaryDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getBlankQuestionary', 'query');
        },
        getBlankQuestionarySteps(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetBlankQuestionaryStepsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getBlankQuestionarySteps', 'query');
        },
        getFileMetadata(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetFileMetadataDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getFileMetadata', 'query');
        },
        getQuestionary(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetQuestionaryDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getQuestionary', 'query');
        },
        addTechnicalReview(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AddTechnicalReviewDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'addTechnicalReview', 'mutation');
        },
        addUserForReview(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AddUserForReviewDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'addUserForReview', 'mutation');
        },
        updateTechnicalReviewAssignee(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateTechnicalReviewAssigneeDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateTechnicalReviewAssignee', 'mutation');
        },
        getProposalReviews(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetProposalReviewsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getProposalReviews', 'query');
        },
        getReview(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetReviewDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getReview', 'query');
        },
        removeUserForReview(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.RemoveUserForReviewDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'removeUserForReview', 'mutation');
        },
        submitProposalsReview(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SubmitProposalsReviewDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'submitProposalsReview', 'mutation');
        },
        submitTechnicalReviews(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SubmitTechnicalReviewsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'submitTechnicalReviews', 'mutation');
        },
        updateReview(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateReviewDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateReview', 'mutation');
        },
        userWithReviews(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UserWithReviewsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'userWithReviews', 'query');
        },
        cloneSampleEsi(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CloneSampleEsiDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'cloneSampleEsi', 'mutation');
        },
        createSampleEsi(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateSampleEsiDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'createSampleEsi', 'mutation');
        },
        deleteSampleEsi(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteSampleEsiDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'deleteSampleEsi', 'mutation');
        },
        getSampleEsi(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetSampleEsiDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getSampleEsi', 'query');
        },
        updateSampleEsi(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateSampleEsiDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateSampleEsi', 'mutation');
        },
        cloneSample(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CloneSampleDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'cloneSample', 'mutation');
        },
        createSample(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateSampleDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'createSample', 'mutation');
        },
        deleteSample(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteSampleDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'deleteSample', 'mutation');
        },
        getSample(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetSampleDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getSample', 'query');
        },
        getSamplesByCallId(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetSamplesByCallIdDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getSamplesByCallId', 'query');
        },
        getSamplesWithProposalData(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetSamplesWithProposalDataDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getSamplesWithProposalData', 'query');
        },
        getSamplesWithQuestionaryStatus(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetSamplesWithQuestionaryStatusDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getSamplesWithQuestionaryStatus', 'query');
        },
        updateSample(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateSampleDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateSample', 'mutation');
        },
        getScheduledEventCore(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetScheduledEventCoreDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getScheduledEventCore', 'query');
        },
        getScheduledEventsCore(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetScheduledEventsCoreDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getScheduledEventsCore', 'query');
        },
        addProposalWorkflowStatus(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AddProposalWorkflowStatusDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'addProposalWorkflowStatus', 'mutation');
        },
        addStatusChangingEventsToConnection(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AddStatusChangingEventsToConnectionDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'addStatusChangingEventsToConnection', 'mutation');
        },
        createProposalStatus(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateProposalStatusDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'createProposalStatus', 'mutation');
        },
        createProposalWorkflow(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateProposalWorkflowDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'createProposalWorkflow', 'mutation');
        },
        deleteProposalStatus(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteProposalStatusDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'deleteProposalStatus', 'mutation');
        },
        deleteProposalWorkflow(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteProposalWorkflowDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'deleteProposalWorkflow', 'mutation');
        },
        deleteProposalWorkflowStatus(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteProposalWorkflowStatusDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'deleteProposalWorkflowStatus', 'mutation');
        },
        getProposalEvents(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetProposalEventsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getProposalEvents', 'query');
        },
        getProposalStatuses(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetProposalStatusesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getProposalStatuses', 'query');
        },
        getProposalWorkflow(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetProposalWorkflowDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getProposalWorkflow', 'query');
        },
        getProposalWorkflows(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetProposalWorkflowsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getProposalWorkflows', 'query');
        },
        moveProposalWorkflowStatus(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.MoveProposalWorkflowStatusDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'moveProposalWorkflowStatus', 'mutation');
        },
        updateProposalStatus(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateProposalStatusDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateProposalStatus', 'mutation');
        },
        updateProposalWorkflow(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateProposalWorkflowDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateProposalWorkflow', 'mutation');
        },
        addSamplesToShipment(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.AddSamplesToShipmentDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'addSamplesToShipment', 'mutation');
        },
        createShipment(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateShipmentDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'createShipment', 'mutation');
        },
        deleteShipment(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteShipmentDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'deleteShipment', 'mutation');
        },
        getMyShipments(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetMyShipmentsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getMyShipments', 'query');
        },
        getShipment(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetShipmentDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getShipment', 'query');
        },
        getShipments(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetShipmentsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getShipments', 'query');
        },
        setActiveTemplate(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SetActiveTemplateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'setActiveTemplate', 'mutation');
        },
        submitShipment(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SubmitShipmentDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'submitShipment', 'mutation');
        },
        updateShipment(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateShipmentDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateShipment', 'mutation');
        },
        importTemplate(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ImportTemplateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'importTemplate', 'mutation');
        },
        cloneTemplate(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CloneTemplateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'cloneTemplate', 'mutation');
        },
        createQuestion(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateQuestionDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'createQuestion', 'mutation');
        },
        createQuestionTemplateRelation(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateQuestionTemplateRelationDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'createQuestionTemplateRelation', 'mutation');
        },
        createTemplate(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateTemplateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'createTemplate', 'mutation');
        },
        createTopic(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateTopicDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'createTopic', 'mutation');
        },
        deleteQuestion(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteQuestionDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'deleteQuestion', 'mutation');
        },
        deleteQuestionTemplateRelation(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteQuestionTemplateRelationDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'deleteQuestionTemplateRelation', 'mutation');
        },
        deleteTemplate(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteTemplateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'deleteTemplate', 'mutation');
        },
        deleteTopic(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteTopicDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'deleteTopic', 'mutation');
        },
        getActiveTemplateId(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetActiveTemplateIdDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getActiveTemplateId', 'query');
        },
        getIsNaturalKeyPresent(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetIsNaturalKeyPresentDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getIsNaturalKeyPresent', 'query');
        },
        getProposalTemplates(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetProposalTemplatesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getProposalTemplates', 'query');
        },
        getQuestions(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetQuestionsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getQuestions', 'query');
        },
        getTemplate(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetTemplateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getTemplate', 'query');
        },
        getTemplateCategories(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetTemplateCategoriesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getTemplateCategories', 'query');
        },
        getTemplateExport(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetTemplateExportDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getTemplateExport', 'query');
        },
        getTemplates(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetTemplatesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getTemplates', 'query');
        },
        updateQuestion(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateQuestionDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateQuestion', 'mutation');
        },
        updateQuestionTemplateRelation(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateQuestionTemplateRelationDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateQuestionTemplateRelation', 'mutation');
        },
        updateQuestionTemplateRelationSettings(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateQuestionTemplateRelationSettingsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateQuestionTemplateRelationSettings', 'mutation');
        },
        updateTemplate(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateTemplateDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateTemplate', 'mutation');
        },
        updateTopic(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateTopicDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateTopic', 'mutation');
        },
        validateTemplateImport(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ValidateTemplateImportDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'validateTemplateImport', 'mutation');
        },
        createUnit(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateUnitDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'createUnit', 'mutation');
        },
        deleteUnit(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteUnitDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'deleteUnit', 'mutation');
        },
        getUnits(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetUnitsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getUnits', 'query');
        },
        getUnitsAsJson(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetUnitsAsJsonDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getUnitsAsJson', 'query');
        },
        importUnits(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ImportUnitsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'importUnits', 'mutation');
        },
        validateUnitsImport(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ValidateUnitsImportDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'validateUnitsImport', 'mutation');
        },
        checkToken(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CheckTokenDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'checkToken', 'query');
        },
        createUser(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateUserDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'createUser', 'mutation');
        },
        createUserByEmailInvite(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateUserByEmailInviteDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'createUserByEmailInvite', 'mutation');
        },
        deleteUser(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteUserDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'deleteUser', 'mutation');
        },
        externalTokenLogin(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ExternalTokenLoginDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'externalTokenLogin', 'mutation');
        },
        getBasicUserDetails(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetBasicUserDetailsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getBasicUserDetails', 'query');
        },
        getBasicUserDetailsByEmail(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetBasicUserDetailsByEmailDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getBasicUserDetailsByEmail', 'query');
        },
        getFields(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetFieldsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getFields', 'query');
        },
        getMyRoles(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetMyRolesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getMyRoles', 'query');
        },
        getOrcIDInformation(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetOrcIdInformationDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getOrcIDInformation', 'query');
        },
        getPreviousCollaborators(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetPreviousCollaboratorsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getPreviousCollaborators', 'query');
        },
        getRoles(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetRolesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getRoles', 'query');
        },
        getToken(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetTokenDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getToken', 'mutation');
        },
        getTokenForUser(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetTokenForUserDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getTokenForUser', 'mutation');
        },
        getUser(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetUserDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getUser', 'query');
        },
        getUserMe(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetUserMeDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getUserMe', 'query');
        },
        getUserProposals(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetUserProposalsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getUserProposals', 'query');
        },
        getUserWithRoles(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetUserWithRolesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getUserWithRoles', 'query');
        },
        getUsers(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetUsersDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getUsers', 'query');
        },
        login(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.LoginDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'login', 'mutation');
        },
        logout(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.LogoutDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'logout', 'mutation');
        },
        resetPassword(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ResetPasswordDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'resetPassword', 'mutation');
        },
        resetPasswordEmail(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.ResetPasswordEmailDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'resetPasswordEmail', 'mutation');
        },
        selectRole(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SelectRoleDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'selectRole', 'mutation');
        },
        setUserEmailVerified(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SetUserEmailVerifiedDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'setUserEmailVerified', 'mutation');
        },
        setUserNotPlaceholder(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.SetUserNotPlaceholderDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'setUserNotPlaceholder', 'mutation');
        },
        updatePassword(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdatePasswordDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updatePassword', 'mutation');
        },
        updateUser(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateUserDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateUser', 'mutation');
        },
        updateUserRoles(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateUserRolesDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateUserRoles', 'mutation');
        },
        verifyEmail(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.VerifyEmailDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'verifyEmail', 'mutation');
        },
        createVisit(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateVisitDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'createVisit', 'mutation');
        },
        deleteVisit(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.DeleteVisitDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'deleteVisit', 'mutation');
        },
        getVisit(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetVisitDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getVisit', 'query');
        },
        getVisits(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetVisitsDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getVisits', 'query');
        },
        updateVisit(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateVisitDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateVisit', 'mutation');
        },
        createVisitRegistration(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.CreateVisitRegistrationDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'createVisitRegistration', 'mutation');
        },
        getVisitRegistration(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.GetVisitRegistrationDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'getVisitRegistration', 'query');
        },
        updateVisitRegistration(variables, requestHeaders) {
            return withWrapper((wrappedRequestHeaders) => client.request(exports.UpdateVisitRegistrationDocument, variables, { ...requestHeaders, ...wrappedRequestHeaders }), 'updateVisitRegistration', 'mutation');
        }
    };
}
exports.getSdk = getSdk;
