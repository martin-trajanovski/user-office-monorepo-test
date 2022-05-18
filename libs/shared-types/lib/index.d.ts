import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
export declare type Maybe<T> = T | null;
export declare type InputMaybe<T> = Maybe<T>;
export declare type Exact<T extends {
    [key: string]: unknown;
}> = {
    [K in keyof T]: T[K];
};
export declare type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]?: Maybe<T[SubKey]>;
};
export declare type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
    [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export declare type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** The javascript `Date` as string. Type represents date and time as the ISO Date string. */
    DateTime: any;
    IntStringDateBoolArray: any;
    _Any: any;
};
export declare type AddProposalWorkflowStatusInput = {
    droppableGroupId: Scalars['String'];
    nextProposalStatusId?: InputMaybe<Scalars['Int']>;
    parentDroppableGroupId?: InputMaybe<Scalars['String']>;
    prevProposalStatusId?: InputMaybe<Scalars['Int']>;
    proposalStatusId: Scalars['Int'];
    proposalWorkflowId: Scalars['Int'];
    sortOrder: Scalars['Int'];
};
export declare type AddStatusChangingEventsToConnectionInput = {
    proposalWorkflowConnectionId: Scalars['Int'];
    statusChangingEvents: Array<Scalars['String']>;
};
export declare type AddTechnicalReviewInput = {
    comment?: InputMaybe<Scalars['String']>;
    files?: InputMaybe<Scalars['String']>;
    proposalPk: Scalars['Int'];
    publicComment?: InputMaybe<Scalars['String']>;
    reviewerId?: InputMaybe<Scalars['Int']>;
    status?: InputMaybe<TechnicalReviewStatus>;
    submitted?: InputMaybe<Scalars['Boolean']>;
    timeAllocation?: InputMaybe<Scalars['Int']>;
};
export declare type AddUserRoleResponseWrap = {
    rejection: Maybe<Rejection>;
    success: Maybe<Scalars['Boolean']>;
};
export declare enum AllocationTimeUnits {
    DAY = "Day",
    HOUR = "Hour"
}
export declare type Answer = {
    answerId: Maybe<Scalars['Int']>;
    config: FieldConfig;
    dependencies: Array<FieldDependency>;
    dependenciesOperator: Maybe<DependenciesLogicOperator>;
    question: Question;
    sortOrder: Scalars['Int'];
    topicId: Scalars['Int'];
    value: Maybe<Scalars['IntStringDateBoolArray']>;
};
export declare type AnswerBasic = {
    answer: Scalars['IntStringDateBoolArray'];
    answerId: Maybe<Scalars['Int']>;
    createdAt: Scalars['DateTime'];
    questionId: Scalars['String'];
    questionaryId: Scalars['Int'];
};
export declare type AnswerInput = {
    questionId: Scalars['String'];
    value?: InputMaybe<Scalars['String']>;
};
export declare type ApiAccessTokenResponseWrap = {
    apiAccessToken: Maybe<PermissionsWithAccessToken>;
    rejection: Maybe<Rejection>;
};
export declare type AssignChairOrSecretaryToSepInput = {
    roleId: UserRole;
    sepId: Scalars['Int'];
    userId: Scalars['Int'];
};
export declare type AssignInstrumentsToCallInput = {
    callId: Scalars['Int'];
    instrumentIds: Array<Scalars['Int']>;
};
export declare type AuthJwtApiTokenPayload = {
    accessTokenId: Scalars['String'];
};
export declare type AuthJwtPayload = {
    currentRole: Role;
    roles: Array<Role>;
    user: User;
};
export declare type BasicUserDetails = {
    created: Maybe<Scalars['DateTime']>;
    firstname: Scalars['String'];
    id: Scalars['Int'];
    lastname: Scalars['String'];
    organisation: Scalars['String'];
    placeholder: Maybe<Scalars['Boolean']>;
    position: Scalars['String'];
    preferredname: Maybe<Scalars['String']>;
};
export declare type BasicUserDetailsResponseWrap = {
    rejection: Maybe<Rejection>;
    user: Maybe<BasicUserDetails>;
};
export declare type BooleanConfig = {
    required: Scalars['Boolean'];
    small_label: Scalars['String'];
    tooltip: Scalars['String'];
};
export declare type Call = {
    allocationTimeUnit: AllocationTimeUnits;
    cycleComment: Scalars['String'];
    description: Maybe<Scalars['String']>;
    endCall: Scalars['DateTime'];
    endCycle: Scalars['DateTime'];
    endNotify: Scalars['DateTime'];
    endReview: Scalars['DateTime'];
    endSEPReview: Maybe<Scalars['DateTime']>;
    esiTemplateId: Maybe<Scalars['Int']>;
    id: Scalars['Int'];
    instruments: Array<InstrumentWithAvailabilityTime>;
    isActive: Scalars['Boolean'];
    proposalCount: Scalars['Int'];
    proposalSequence: Maybe<Scalars['Int']>;
    proposalWorkflow: Maybe<ProposalWorkflow>;
    proposalWorkflowId: Maybe<Scalars['Int']>;
    referenceNumberFormat: Maybe<Scalars['String']>;
    shortCode: Scalars['String'];
    startCall: Scalars['DateTime'];
    startCycle: Scalars['DateTime'];
    startNotify: Scalars['DateTime'];
    startReview: Scalars['DateTime'];
    startSEPReview: Maybe<Scalars['DateTime']>;
    submissionMessage: Maybe<Scalars['String']>;
    surveyComment: Scalars['String'];
    template: Template;
    templateId: Scalars['Int'];
    title: Maybe<Scalars['String']>;
};
export declare type CallResponseWrap = {
    call: Maybe<Call>;
    rejection: Maybe<Rejection>;
};
export declare type CallsFilter = {
    isActive?: InputMaybe<Scalars['Boolean']>;
    isEnded?: InputMaybe<Scalars['Boolean']>;
    isReviewEnded?: InputMaybe<Scalars['Boolean']>;
    isSEPReviewEnded?: InputMaybe<Scalars['Boolean']>;
    templateIds?: InputMaybe<Array<Scalars['Int']>>;
};
export declare type ChangeProposalsStatusInput = {
    proposals: Array<ProposalPkWithCallId>;
    statusId: Scalars['Int'];
};
export declare type CloneProposalsInput = {
    callId: Scalars['Int'];
    proposalsToClonePk: Array<Scalars['Int']>;
};
export declare type ConflictResolution = {
    itemId: Scalars['String'];
    strategy: ConflictResolutionStrategy;
};
export declare enum ConflictResolutionStrategy {
    UNRESOLVED = "UNRESOLVED",
    USE_EXISTING = "USE_EXISTING",
    USE_NEW = "USE_NEW"
}
export declare type CreateApiAccessTokenInput = {
    accessPermissions: Scalars['String'];
    name: Scalars['String'];
};
export declare type CreateCallInput = {
    allocationTimeUnit: AllocationTimeUnits;
    cycleComment: Scalars['String'];
    description?: InputMaybe<Scalars['String']>;
    endCall: Scalars['DateTime'];
    endCycle: Scalars['DateTime'];
    endNotify: Scalars['DateTime'];
    endReview: Scalars['DateTime'];
    endSEPReview?: InputMaybe<Scalars['DateTime']>;
    esiTemplateId?: InputMaybe<Scalars['Int']>;
    proposalSequence?: InputMaybe<Scalars['Int']>;
    proposalWorkflowId: Scalars['Int'];
    referenceNumberFormat?: InputMaybe<Scalars['String']>;
    shortCode: Scalars['String'];
    startCall: Scalars['DateTime'];
    startCycle: Scalars['DateTime'];
    startNotify: Scalars['DateTime'];
    startReview: Scalars['DateTime'];
    startSEPReview?: InputMaybe<Scalars['DateTime']>;
    submissionMessage?: InputMaybe<Scalars['String']>;
    surveyComment: Scalars['String'];
    templateId: Scalars['Int'];
    title?: InputMaybe<Scalars['String']>;
};
export declare type CreateProposalStatusInput = {
    description: Scalars['String'];
    name: Scalars['String'];
    shortCode: Scalars['String'];
};
export declare type CreateProposalWorkflowInput = {
    description: Scalars['String'];
    name: Scalars['String'];
};
export declare type CreateUserByEmailInviteResponseWrap = {
    id: Maybe<Scalars['Int']>;
    rejection: Maybe<Rejection>;
};
export declare enum DataType {
    BOOLEAN = "BOOLEAN",
    DATE = "DATE",
    EMBELLISHMENT = "EMBELLISHMENT",
    FEEDBACK_BASIS = "FEEDBACK_BASIS",
    FILE_UPLOAD = "FILE_UPLOAD",
    GENERIC_TEMPLATE = "GENERIC_TEMPLATE",
    GENERIC_TEMPLATE_BASIS = "GENERIC_TEMPLATE_BASIS",
    INTERVAL = "INTERVAL",
    NUMBER_INPUT = "NUMBER_INPUT",
    PROPOSAL_BASIS = "PROPOSAL_BASIS",
    PROPOSAL_ESI_BASIS = "PROPOSAL_ESI_BASIS",
    RICH_TEXT_INPUT = "RICH_TEXT_INPUT",
    SAMPLE_BASIS = "SAMPLE_BASIS",
    SAMPLE_DECLARATION = "SAMPLE_DECLARATION",
    SAMPLE_ESI_BASIS = "SAMPLE_ESI_BASIS",
    SELECTION_FROM_OPTIONS = "SELECTION_FROM_OPTIONS",
    SHIPMENT_BASIS = "SHIPMENT_BASIS",
    TEXT_INPUT = "TEXT_INPUT",
    VISIT_BASIS = "VISIT_BASIS"
}
export declare type DateConfig = {
    defaultDate: Maybe<Scalars['String']>;
    includeTime: Scalars['Boolean'];
    maxDate: Maybe<Scalars['String']>;
    minDate: Maybe<Scalars['String']>;
    required: Scalars['Boolean'];
    small_label: Scalars['String'];
    tooltip: Scalars['String'];
};
export declare type DeleteApiAccessTokenInput = {
    accessTokenId: Scalars['String'];
};
export declare type DeleteProposalWorkflowStatusInput = {
    proposalStatusId: Scalars['Int'];
    proposalWorkflowId: Scalars['Int'];
    sortOrder: Scalars['Int'];
};
export declare enum DependenciesLogicOperator {
    AND = "AND",
    OR = "OR"
}
export declare type EmailVerificationResponseWrap = {
    rejection: Maybe<Rejection>;
    success: Maybe<Scalars['Boolean']>;
};
export declare type EmbellishmentConfig = {
    html: Scalars['String'];
    omitFromPdf: Scalars['Boolean'];
    plain: Scalars['String'];
};
export declare type Entry = {
    id: Scalars['Int'];
    value: Scalars['String'];
};
export declare type EsiResponseWrap = {
    esi: Maybe<ExperimentSafetyInput>;
    rejection: Maybe<Rejection>;
};
export declare enum EvaluatorOperator {
    EQ = "eq",
    NEQ = "neq"
}
export declare enum Event {
    CALL_CREATED = "CALL_CREATED",
    CALL_ENDED = "CALL_ENDED",
    CALL_REVIEW_ENDED = "CALL_REVIEW_ENDED",
    CALL_SEP_REVIEW_ENDED = "CALL_SEP_REVIEW_ENDED",
    EMAIL_INVITE = "EMAIL_INVITE",
    INSTRUMENT_DELETED = "INSTRUMENT_DELETED",
    PROPOSAL_ACCEPTED = "PROPOSAL_ACCEPTED",
    PROPOSAL_ALL_SEP_REVIEWERS_SELECTED = "PROPOSAL_ALL_SEP_REVIEWERS_SELECTED",
    PROPOSAL_ALL_SEP_REVIEWS_SUBMITTED = "PROPOSAL_ALL_SEP_REVIEWS_SUBMITTED",
    PROPOSAL_BOOKING_TIME_ACTIVATED = "PROPOSAL_BOOKING_TIME_ACTIVATED",
    PROPOSAL_BOOKING_TIME_COMPLETED = "PROPOSAL_BOOKING_TIME_COMPLETED",
    PROPOSAL_BOOKING_TIME_REOPENED = "PROPOSAL_BOOKING_TIME_REOPENED",
    PROPOSAL_BOOKING_TIME_SLOTS_REMOVED = "PROPOSAL_BOOKING_TIME_SLOTS_REMOVED",
    PROPOSAL_BOOKING_TIME_SLOT_ADDED = "PROPOSAL_BOOKING_TIME_SLOT_ADDED",
    PROPOSAL_BOOKING_TIME_UPDATED = "PROPOSAL_BOOKING_TIME_UPDATED",
    PROPOSAL_CLONED = "PROPOSAL_CLONED",
    PROPOSAL_CREATED = "PROPOSAL_CREATED",
    PROPOSAL_DELETED = "PROPOSAL_DELETED",
    PROPOSAL_FEASIBILITY_REVIEW_SUBMITTED = "PROPOSAL_FEASIBILITY_REVIEW_SUBMITTED",
    PROPOSAL_FEASIBILITY_REVIEW_UPDATED = "PROPOSAL_FEASIBILITY_REVIEW_UPDATED",
    PROPOSAL_FEASIBLE = "PROPOSAL_FEASIBLE",
    PROPOSAL_INSTRUMENT_SELECTED = "PROPOSAL_INSTRUMENT_SELECTED",
    PROPOSAL_INSTRUMENT_SUBMITTED = "PROPOSAL_INSTRUMENT_SUBMITTED",
    PROPOSAL_MANAGEMENT_DECISION_SUBMITTED = "PROPOSAL_MANAGEMENT_DECISION_SUBMITTED",
    PROPOSAL_MANAGEMENT_DECISION_UPDATED = "PROPOSAL_MANAGEMENT_DECISION_UPDATED",
    PROPOSAL_NOTIFIED = "PROPOSAL_NOTIFIED",
    PROPOSAL_REJECTED = "PROPOSAL_REJECTED",
    PROPOSAL_RESERVED = "PROPOSAL_RESERVED",
    PROPOSAL_SAMPLE_REVIEW_SUBMITTED = "PROPOSAL_SAMPLE_REVIEW_SUBMITTED",
    PROPOSAL_SAMPLE_SAFE = "PROPOSAL_SAMPLE_SAFE",
    PROPOSAL_SEP_MEETING_RANKING_OVERWRITTEN = "PROPOSAL_SEP_MEETING_RANKING_OVERWRITTEN",
    PROPOSAL_SEP_MEETING_REORDER = "PROPOSAL_SEP_MEETING_REORDER",
    PROPOSAL_SEP_MEETING_SAVED = "PROPOSAL_SEP_MEETING_SAVED",
    PROPOSAL_SEP_MEETING_SUBMITTED = "PROPOSAL_SEP_MEETING_SUBMITTED",
    PROPOSAL_SEP_REVIEW_SUBMITTED = "PROPOSAL_SEP_REVIEW_SUBMITTED",
    PROPOSAL_SEP_REVIEW_UPDATED = "PROPOSAL_SEP_REVIEW_UPDATED",
    PROPOSAL_SEP_SELECTED = "PROPOSAL_SEP_SELECTED",
    PROPOSAL_STATUS_CHANGED_BY_USER = "PROPOSAL_STATUS_CHANGED_BY_USER",
    PROPOSAL_STATUS_CHANGED_BY_WORKFLOW = "PROPOSAL_STATUS_CHANGED_BY_WORKFLOW",
    PROPOSAL_STATUS_UPDATED = "PROPOSAL_STATUS_UPDATED",
    PROPOSAL_SUBMITTED = "PROPOSAL_SUBMITTED",
    PROPOSAL_UNFEASIBLE = "PROPOSAL_UNFEASIBLE",
    PROPOSAL_UPDATED = "PROPOSAL_UPDATED",
    SEP_CREATED = "SEP_CREATED",
    SEP_MEMBERS_ASSIGNED = "SEP_MEMBERS_ASSIGNED",
    SEP_MEMBER_ASSIGNED_TO_PROPOSAL = "SEP_MEMBER_ASSIGNED_TO_PROPOSAL",
    SEP_MEMBER_REMOVED = "SEP_MEMBER_REMOVED",
    SEP_MEMBER_REMOVED_FROM_PROPOSAL = "SEP_MEMBER_REMOVED_FROM_PROPOSAL",
    SEP_PROPOSAL_REMOVED = "SEP_PROPOSAL_REMOVED",
    SEP_UPDATED = "SEP_UPDATED",
    TOPIC_ANSWERED = "TOPIC_ANSWERED",
    USER_CREATED = "USER_CREATED",
    USER_DELETED = "USER_DELETED",
    USER_PASSWORD_RESET_EMAIL = "USER_PASSWORD_RESET_EMAIL",
    USER_ROLE_UPDATED = "USER_ROLE_UPDATED",
    USER_UPDATED = "USER_UPDATED"
}
export declare type EventLog = {
    changedBy: User;
    changedObjectId: Scalars['String'];
    eventTStamp: Scalars['DateTime'];
    eventType: Scalars['String'];
    id: Scalars['Int'];
    rowData: Scalars['String'];
};
export declare type ExperimentSafetyInput = {
    created: Scalars['DateTime'];
    creatorId: Scalars['Int'];
    id: Scalars['Int'];
    isSubmitted: Scalars['Boolean'];
    proposal: Proposal;
    questionary: Questionary;
    questionaryId: Scalars['Int'];
    sampleEsis: Array<SampleExperimentSafetyInput>;
    scheduledEventId: Scalars['Int'];
};
export declare type ExternalTokenLoginWrap = {
    rejection: Maybe<Rejection>;
    token: Maybe<Scalars['String']>;
};
export declare type Feature = {
    description: Scalars['String'];
    id: FeatureId;
    isEnabled: Scalars['Boolean'];
};
export declare enum FeatureId {
    EMAIL_INVITE = "EMAIL_INVITE",
    EMAIL_SEARCH = "EMAIL_SEARCH",
    EXTERNAL_AUTH = "EXTERNAL_AUTH",
    INSTRUMENT_MANAGEMENT = "INSTRUMENT_MANAGEMENT",
    RISK_ASSESSMENT = "RISK_ASSESSMENT",
    SAMPLE_SAFETY = "SAMPLE_SAFETY",
    SCHEDULER = "SCHEDULER",
    SEP_REVIEW = "SEP_REVIEW",
    SHIPPING = "SHIPPING",
    TECHNICAL_REVIEW = "TECHNICAL_REVIEW",
    USER_MANAGEMENT = "USER_MANAGEMENT",
    VISIT_MANAGEMENT = "VISIT_MANAGEMENT"
}
export declare type Feedback = {
    createdAt: Scalars['DateTime'];
    creatorId: Scalars['Int'];
    id: Scalars['Int'];
    questionary: Questionary;
    questionaryId: Scalars['Int'];
    scheduledEventId: Scalars['Int'];
    status: FeedbackStatus;
    submittedAt: Maybe<Scalars['DateTime']>;
};
export declare type FeedbackBasisConfig = {
    required: Scalars['Boolean'];
    small_label: Scalars['String'];
    tooltip: Scalars['String'];
};
export declare type FeedbackRequest = {
    id: Scalars['Int'];
    requestedAt: Scalars['DateTime'];
    scheduledEventId: Scalars['Int'];
};
export declare type FeedbackRequestWrap = {
    rejection: Maybe<Rejection>;
    request: Maybe<FeedbackRequest>;
};
export declare type FeedbackResponseWrap = {
    feedback: Maybe<Feedback>;
    rejection: Maybe<Rejection>;
};
export declare enum FeedbackStatus {
    DRAFT = "DRAFT",
    SUBMITTED = "SUBMITTED"
}
export declare type FeedbacksFilter = {
    creatorId?: InputMaybe<Scalars['Int']>;
    scheduledEventId?: InputMaybe<Scalars['Int']>;
};
export declare type FieldCondition = {
    condition: EvaluatorOperator;
    params: Scalars['IntStringDateBoolArray'];
};
export declare type FieldConditionInput = {
    condition: EvaluatorOperator;
    params: Scalars['String'];
};
export declare type FieldConfig = BooleanConfig | DateConfig | EmbellishmentConfig | FeedbackBasisConfig | FileUploadConfig | GenericTemplateBasisConfig | IntervalConfig | NumberInputConfig | ProposalBasisConfig | ProposalEsiBasisConfig | RichTextInputConfig | SampleBasisConfig | SampleDeclarationConfig | SampleEsiBasisConfig | SelectionFromOptionsConfig | ShipmentBasisConfig | SubTemplateConfig | TextInputConfig | VisitBasisConfig;
export declare type FieldDependency = {
    condition: FieldCondition;
    dependencyId: Scalars['String'];
    dependencyNaturalKey: Scalars['String'];
    questionId: Scalars['String'];
};
export declare type FieldDependencyInput = {
    condition: FieldConditionInput;
    dependencyId: Scalars['String'];
};
export declare type Fields = {
    countries: Array<Entry>;
    nationalities: Array<Entry>;
};
export declare type FileMetadata = {
    createdDate: Scalars['DateTime'];
    fileId: Scalars['String'];
    mimeType: Scalars['String'];
    originalFileName: Scalars['String'];
    sizeInBytes: Scalars['Int'];
};
export declare type FileUploadConfig = {
    file_type: Array<Scalars['String']>;
    max_files: Scalars['Int'];
    required: Scalars['Boolean'];
    small_label: Scalars['String'];
    tooltip: Scalars['String'];
};
export declare type GenericTemplate = {
    created: Scalars['DateTime'];
    creatorId: Scalars['Int'];
    id: Scalars['Int'];
    proposal: Proposal;
    proposalPk: Scalars['Int'];
    questionId: Scalars['String'];
    questionary: Questionary;
    questionaryId: Scalars['Int'];
    title: Scalars['String'];
};
export declare type GenericTemplateBasisConfig = {
    questionLabel: Scalars['String'];
    titlePlaceholder: Scalars['String'];
};
export declare type GenericTemplateResponseWrap = {
    genericTemplate: Maybe<GenericTemplate>;
    rejection: Maybe<Rejection>;
};
export declare type GenericTemplatesFilter = {
    creatorId?: InputMaybe<Scalars['Int']>;
    genericTemplateIds?: InputMaybe<Array<Scalars['Int']>>;
    proposalPk?: InputMaybe<Scalars['Int']>;
    questionId?: InputMaybe<Scalars['String']>;
    questionaryIds?: InputMaybe<Array<Scalars['Int']>>;
    title?: InputMaybe<Scalars['String']>;
};
export declare type IndexWithGroupId = {
    droppableId: Scalars['String'];
    index: Scalars['Int'];
};
export declare type Institution = {
    country: Maybe<Entry>;
    id: Scalars['Int'];
    name: Scalars['String'];
    verified: Scalars['Boolean'];
};
export declare type InstitutionResponseWrap = {
    institution: Maybe<Institution>;
    rejection: Maybe<Rejection>;
};
export declare type InstitutionsFilter = {
    isVerified?: InputMaybe<Scalars['Boolean']>;
};
export declare type Instrument = {
    beamlineManager: BasicUserDetails;
    description: Scalars['String'];
    id: Scalars['Int'];
    managerUserId: Scalars['Int'];
    name: Scalars['String'];
    scientists: Array<BasicUserDetails>;
    shortCode: Scalars['String'];
};
export declare type InstrumentResponseWrap = {
    instrument: Maybe<Instrument>;
    rejection: Maybe<Rejection>;
};
export declare type InstrumentWithAvailabilityTime = {
    availabilityTime: Maybe<Scalars['Int']>;
    beamlineManager: BasicUserDetails;
    description: Scalars['String'];
    id: Scalars['Int'];
    managerUserId: Scalars['Int'];
    name: Scalars['String'];
    scientists: Array<BasicUserDetails>;
    shortCode: Scalars['String'];
    submitted: Maybe<Scalars['Boolean']>;
};
export declare type InstrumentsQueryResult = {
    instruments: Array<Instrument>;
    totalCount: Scalars['Int'];
};
export declare type IntervalConfig = {
    required: Scalars['Boolean'];
    small_label: Scalars['String'];
    tooltip: Scalars['String'];
    units: Array<Unit>;
};
export declare type LogoutTokenWrap = {
    rejection: Maybe<Rejection>;
    token: Maybe<Scalars['String']>;
};
export declare type MoveProposalWorkflowStatusInput = {
    from: IndexWithGroupId;
    proposalWorkflowId: Scalars['Int'];
    to: IndexWithGroupId;
};
export declare type Mutation = {
    addClientLog: SuccessResponseWrap;
    addProposalWorkflowStatus: ProposalWorkflowConnectionResponseWrap;
    addSamplesToShipment: ShipmentResponseWrap;
    addStatusChangingEventsToConnection: ProposalStatusChangingEventResponseWrap;
    addTechnicalReview: TechnicalReviewResponseWrap;
    addUserForReview: ReviewResponseWrap;
    addUserRole: AddUserRoleResponseWrap;
    administrationProposal: ProposalResponseWrap;
    answerTopic: QuestionaryStepResponseWrap;
    applyPatches: PrepareDbResponseWrap;
    assignChairOrSecretary: SepResponseWrap;
    assignInstrumentsToCall: CallResponseWrap;
    assignProposalsToInstrument: SuccessResponseWrap;
    assignProposalsToSep: NextProposalStatusResponseWrap;
    assignReviewersToSEP: SepResponseWrap;
    assignScientistsToInstrument: SuccessResponseWrap;
    assignSepReviewersToProposal: SepResponseWrap;
    changeProposalsStatus: SuccessResponseWrap;
    cloneGenericTemplate: GenericTemplateResponseWrap;
    cloneProposals: ProposalsResponseWrap;
    cloneSample: SampleResponseWrap;
    cloneSampleEsi: SampleEsiResponseWrap;
    cloneTemplate: TemplateResponseWrap;
    createApiAccessToken: ApiAccessTokenResponseWrap;
    createCall: CallResponseWrap;
    createEsi: EsiResponseWrap;
    createFeedback: FeedbackResponseWrap;
    createGenericTemplate: GenericTemplateResponseWrap;
    createInstitution: InstitutionResponseWrap;
    createInstrument: InstrumentResponseWrap;
    createProposal: ProposalResponseWrap;
    createProposalStatus: ProposalStatusResponseWrap;
    createProposalWorkflow: ProposalWorkflowResponseWrap;
    createQuestion: QuestionResponseWrap;
    createQuestionTemplateRelation: TemplateResponseWrap;
    createQuestionary: QuestionaryResponseWrap;
    createSEP: SepResponseWrap;
    createSample: SampleResponseWrap;
    createSampleEsi: SampleEsiResponseWrap;
    createShipment: ShipmentResponseWrap;
    createTemplate: TemplateResponseWrap;
    createTopic: TemplateResponseWrap;
    createUnit: UnitResponseWrap;
    createUser: UserResponseWrap;
    createUserByEmailInvite: CreateUserByEmailInviteResponseWrap;
    createVisit: VisitResponseWrap;
    createVisitRegistration: VisitRegistrationResponseWrap;
    deleteApiAccessToken: SuccessResponseWrap;
    deleteCall: CallResponseWrap;
    deleteFeedback: FeedbackResponseWrap;
    deleteGenericTemplate: GenericTemplateResponseWrap;
    deleteInstitution: InstitutionResponseWrap;
    deleteInstrument: InstrumentResponseWrap;
    deleteProposal: ProposalResponseWrap;
    deleteProposalStatus: ProposalStatusResponseWrap;
    deleteProposalWorkflow: ProposalWorkflowResponseWrap;
    deleteProposalWorkflowStatus: SuccessResponseWrap;
    deleteQuestion: QuestionResponseWrap;
    deleteQuestionTemplateRelation: TemplateResponseWrap;
    deleteSEP: SepResponseWrap;
    deleteSample: SampleResponseWrap;
    deleteSampleEsi: SampleEsiResponseWrap;
    deleteShipment: ShipmentResponseWrap;
    deleteTemplate: TemplateResponseWrap;
    deleteTopic: TemplateResponseWrap;
    deleteUnit: UnitResponseWrap;
    deleteUser: UserResponseWrap;
    deleteVisit: VisitResponseWrap;
    emailVerification: EmailVerificationResponseWrap;
    externalTokenLogin: ExternalTokenLoginWrap;
    getTokenForUser: TokenResponseWrap;
    importProposal: ProposalResponseWrap;
    importTemplate: TemplateResponseWrap;
    importUnits: UnitsResponseWrap;
    login: TokenResponseWrap;
    logout: LogoutTokenWrap;
    mergeInstitutions: InstitutionResponseWrap;
    moveProposalWorkflowStatus: ProposalWorkflowConnectionResponseWrap;
    notifyProposal: ProposalResponseWrap;
    prepareDB: PrepareDbResponseWrap;
    removeAssignedInstrumentFromCall: CallResponseWrap;
    removeMemberFromSEPProposal: SepResponseWrap;
    removeMemberFromSep: SepResponseWrap;
    removeProposalsFromInstrument: SuccessResponseWrap;
    removeProposalsFromSep: SepResponseWrap;
    removeScientistFromInstrument: SuccessResponseWrap;
    removeUserForReview: ReviewResponseWrap;
    reorderSepMeetingDecisionProposals: SepMeetingDecisionResponseWrap;
    requestFeedback: FeedbackRequestWrap;
    resetPassword: BasicUserDetailsResponseWrap;
    resetPasswordEmail: SuccessResponseWrap;
    saveSepMeetingDecision: SepMeetingDecisionResponseWrap;
    selectRole: TokenResponseWrap;
    setActiveTemplate: SuccessResponseWrap;
    setInstrumentAvailabilityTime: SuccessResponseWrap;
    setPageContent: PageResponseWrap;
    setUserEmailVerified: UserResponseWrap;
    setUserNotPlaceholder: UserResponseWrap;
    submitInstrument: SuccessResponseWrap;
    submitProposal: ProposalResponseWrap;
    submitProposalsReview: SuccessResponseWrap;
    submitShipment: ShipmentResponseWrap;
    submitTechnicalReviews: SuccessResponseWrap;
    token: TokenResponseWrap;
    updateAnswer: UpdateAnswerResponseWrap;
    updateApiAccessToken: ApiAccessTokenResponseWrap;
    updateCall: CallResponseWrap;
    updateEsi: EsiResponseWrap;
    updateFeedback: FeedbackResponseWrap;
    updateGenericTemplate: GenericTemplateResponseWrap;
    updateInstitution: InstitutionResponseWrap;
    updateInstrument: InstrumentResponseWrap;
    updatePassword: BasicUserDetailsResponseWrap;
    updateProposal: ProposalResponseWrap;
    updateProposalStatus: ProposalStatusResponseWrap;
    updateProposalWorkflow: ProposalWorkflowResponseWrap;
    updateQuestion: QuestionResponseWrap;
    updateQuestionTemplateRelation: TemplateResponseWrap;
    updateQuestionTemplateRelationSettings: TemplateResponseWrap;
    updateReview: ReviewWithNextStatusResponseWrap;
    updateSEP: SepResponseWrap;
    updateSEPTimeAllocation: SepProposalResponseWrap;
    updateSample: SampleResponseWrap;
    updateSampleEsi: SampleEsiResponseWrap;
    updateShipment: ShipmentResponseWrap;
    updateTechnicalReviewAssignee: TechnicalReviewsResponseWrap;
    updateTemplate: TemplateResponseWrap;
    updateTopic: TemplateResponseWrap;
    updateUser: UserResponseWrap;
    updateUserRoles: UserResponseWrap;
    updateVisit: VisitResponseWrap;
    updateVisitRegistration: VisitRegistrationResponseWrap;
    validateTemplateImport: TemplateImportWithValidationWrap;
    validateUnitsImport: UnitsImportWithValidationWrap;
};
export declare type MutationAddClientLogArgs = {
    error: Scalars['String'];
};
export declare type MutationAddProposalWorkflowStatusArgs = {
    newProposalWorkflowStatusInput: AddProposalWorkflowStatusInput;
};
export declare type MutationAddSamplesToShipmentArgs = {
    sampleIds: Array<Scalars['Int']>;
    shipmentId: Scalars['Int'];
};
export declare type MutationAddStatusChangingEventsToConnectionArgs = {
    addStatusChangingEventsToConnectionInput: AddStatusChangingEventsToConnectionInput;
};
export declare type MutationAddTechnicalReviewArgs = {
    addTechnicalReviewInput: AddTechnicalReviewInput;
};
export declare type MutationAddUserForReviewArgs = {
    proposalPk: Scalars['Int'];
    sepID: Scalars['Int'];
    userID: Scalars['Int'];
};
export declare type MutationAddUserRoleArgs = {
    roleID: Scalars['Int'];
    userID: Scalars['Int'];
};
export declare type MutationAdministrationProposalArgs = {
    commentForManagement?: InputMaybe<Scalars['String']>;
    commentForUser?: InputMaybe<Scalars['String']>;
    finalStatus?: InputMaybe<ProposalEndStatus>;
    managementDecisionSubmitted?: InputMaybe<Scalars['Boolean']>;
    managementTimeAllocation?: InputMaybe<Scalars['Int']>;
    proposalPk: Scalars['Int'];
    statusId?: InputMaybe<Scalars['Int']>;
};
export declare type MutationAnswerTopicArgs = {
    answers: Array<AnswerInput>;
    isPartialSave?: InputMaybe<Scalars['Boolean']>;
    questionaryId: Scalars['Int'];
    topicId: Scalars['Int'];
};
export declare type MutationAssignChairOrSecretaryArgs = {
    assignChairOrSecretaryToSEPInput: AssignChairOrSecretaryToSepInput;
};
export declare type MutationAssignInstrumentsToCallArgs = {
    assignInstrumentsToCallInput: AssignInstrumentsToCallInput;
};
export declare type MutationAssignProposalsToInstrumentArgs = {
    instrumentId: Scalars['Int'];
    proposals: Array<ProposalPkWithCallId>;
};
export declare type MutationAssignProposalsToSepArgs = {
    proposals: Array<ProposalPkWithCallId>;
    sepId: Scalars['Int'];
};
export declare type MutationAssignReviewersToSepArgs = {
    memberIds: Array<Scalars['Int']>;
    sepId: Scalars['Int'];
};
export declare type MutationAssignScientistsToInstrumentArgs = {
    instrumentId: Scalars['Int'];
    scientistIds: Array<Scalars['Int']>;
};
export declare type MutationAssignSepReviewersToProposalArgs = {
    memberIds: Array<Scalars['Int']>;
    proposalPk: Scalars['Int'];
    sepId: Scalars['Int'];
};
export declare type MutationChangeProposalsStatusArgs = {
    changeProposalsStatusInput: ChangeProposalsStatusInput;
};
export declare type MutationCloneGenericTemplateArgs = {
    genericTemplateId: Scalars['Int'];
    title?: InputMaybe<Scalars['String']>;
};
export declare type MutationCloneProposalsArgs = {
    cloneProposalsInput: CloneProposalsInput;
};
export declare type MutationCloneSampleArgs = {
    isPostProposalSubmission?: InputMaybe<Scalars['Boolean']>;
    sampleId: Scalars['Int'];
    title?: InputMaybe<Scalars['String']>;
};
export declare type MutationCloneSampleEsiArgs = {
    esiId: Scalars['Int'];
    newSampleTitle?: InputMaybe<Scalars['String']>;
    sampleId: Scalars['Int'];
};
export declare type MutationCloneTemplateArgs = {
    templateId: Scalars['Int'];
};
export declare type MutationCreateApiAccessTokenArgs = {
    createApiAccessTokenInput: CreateApiAccessTokenInput;
};
export declare type MutationCreateCallArgs = {
    createCallInput: CreateCallInput;
};
export declare type MutationCreateEsiArgs = {
    scheduledEventId: Scalars['Int'];
};
export declare type MutationCreateFeedbackArgs = {
    scheduledEventId: Scalars['Int'];
};
export declare type MutationCreateGenericTemplateArgs = {
    proposalPk: Scalars['Int'];
    questionId: Scalars['String'];
    templateId: Scalars['Int'];
    title: Scalars['String'];
};
export declare type MutationCreateInstitutionArgs = {
    country: Scalars['Int'];
    name: Scalars['String'];
    verified: Scalars['Boolean'];
};
export declare type MutationCreateInstrumentArgs = {
    description: Scalars['String'];
    managerUserId: Scalars['Int'];
    name: Scalars['String'];
    shortCode: Scalars['String'];
};
export declare type MutationCreateProposalArgs = {
    callId: Scalars['Int'];
};
export declare type MutationCreateProposalStatusArgs = {
    newProposalStatusInput: CreateProposalStatusInput;
};
export declare type MutationCreateProposalWorkflowArgs = {
    newProposalWorkflowInput: CreateProposalWorkflowInput;
};
export declare type MutationCreateQuestionArgs = {
    categoryId: TemplateCategoryId;
    dataType: DataType;
};
export declare type MutationCreateQuestionTemplateRelationArgs = {
    questionId: Scalars['String'];
    sortOrder: Scalars['Int'];
    templateId: Scalars['Int'];
    topicId: Scalars['Int'];
};
export declare type MutationCreateQuestionaryArgs = {
    templateId: Scalars['Int'];
};
export declare type MutationCreateSepArgs = {
    active: Scalars['Boolean'];
    code: Scalars['String'];
    description: Scalars['String'];
    numberRatingsRequired?: InputMaybe<Scalars['Int']>;
};
export declare type MutationCreateSampleArgs = {
    isPostProposalSubmission?: InputMaybe<Scalars['Boolean']>;
    proposalPk: Scalars['Int'];
    questionId: Scalars['String'];
    templateId: Scalars['Int'];
    title: Scalars['String'];
};
export declare type MutationCreateSampleEsiArgs = {
    esiId: Scalars['Int'];
    sampleId: Scalars['Int'];
};
export declare type MutationCreateShipmentArgs = {
    proposalPk: Scalars['Int'];
    scheduledEventId: Scalars['Int'];
    title: Scalars['String'];
};
export declare type MutationCreateTemplateArgs = {
    description?: InputMaybe<Scalars['String']>;
    groupId: TemplateGroupId;
    name: Scalars['String'];
};
export declare type MutationCreateTopicArgs = {
    sortOrder?: InputMaybe<Scalars['Int']>;
    templateId: Scalars['Int'];
    title?: InputMaybe<Scalars['Int']>;
};
export declare type MutationCreateUnitArgs = {
    id: Scalars['String'];
    quantity: Scalars['String'];
    siConversionFormula: Scalars['String'];
    symbol: Scalars['String'];
    unit: Scalars['String'];
};
export declare type MutationCreateUserArgs = {
    birthdate: Scalars['DateTime'];
    department: Scalars['String'];
    email: Scalars['String'];
    firstname: Scalars['String'];
    gender: Scalars['String'];
    lastname: Scalars['String'];
    middlename?: InputMaybe<Scalars['String']>;
    nationality: Scalars['Int'];
    orcid: Scalars['String'];
    orcidHash: Scalars['String'];
    organisation: Scalars['Int'];
    organizationCountry?: InputMaybe<Scalars['Int']>;
    otherOrganisation?: InputMaybe<Scalars['String']>;
    password: Scalars['String'];
    position: Scalars['String'];
    preferredname?: InputMaybe<Scalars['String']>;
    refreshToken: Scalars['String'];
    telephone: Scalars['String'];
    telephone_alt?: InputMaybe<Scalars['String']>;
    user_title?: InputMaybe<Scalars['String']>;
};
export declare type MutationCreateUserByEmailInviteArgs = {
    email: Scalars['String'];
    firstname: Scalars['String'];
    lastname: Scalars['String'];
    userRole: UserRole;
};
export declare type MutationCreateVisitArgs = {
    scheduledEventId: Scalars['Int'];
    team: Array<Scalars['Int']>;
    teamLeadUserId: Scalars['Int'];
};
export declare type MutationCreateVisitRegistrationArgs = {
    visitId: Scalars['Int'];
};
export declare type MutationDeleteApiAccessTokenArgs = {
    deleteApiAccessTokenInput: DeleteApiAccessTokenInput;
};
export declare type MutationDeleteCallArgs = {
    id: Scalars['Int'];
};
export declare type MutationDeleteFeedbackArgs = {
    feedbackId: Scalars['Int'];
};
export declare type MutationDeleteGenericTemplateArgs = {
    genericTemplateId: Scalars['Int'];
};
export declare type MutationDeleteInstitutionArgs = {
    id: Scalars['Int'];
};
export declare type MutationDeleteInstrumentArgs = {
    id: Scalars['Int'];
};
export declare type MutationDeleteProposalArgs = {
    proposalPk: Scalars['Int'];
};
export declare type MutationDeleteProposalStatusArgs = {
    id: Scalars['Int'];
};
export declare type MutationDeleteProposalWorkflowArgs = {
    id: Scalars['Int'];
};
export declare type MutationDeleteProposalWorkflowStatusArgs = {
    deleteProposalWorkflowStatusInput: DeleteProposalWorkflowStatusInput;
};
export declare type MutationDeleteQuestionArgs = {
    questionId: Scalars['String'];
};
export declare type MutationDeleteQuestionTemplateRelationArgs = {
    questionId: Scalars['String'];
    templateId: Scalars['Int'];
};
export declare type MutationDeleteSepArgs = {
    id: Scalars['Int'];
};
export declare type MutationDeleteSampleArgs = {
    sampleId: Scalars['Int'];
};
export declare type MutationDeleteSampleEsiArgs = {
    esiId: Scalars['Int'];
    sampleId: Scalars['Int'];
};
export declare type MutationDeleteShipmentArgs = {
    shipmentId: Scalars['Int'];
};
export declare type MutationDeleteTemplateArgs = {
    templateId: Scalars['Int'];
};
export declare type MutationDeleteTopicArgs = {
    topicId: Scalars['Int'];
};
export declare type MutationDeleteUnitArgs = {
    id: Scalars['String'];
};
export declare type MutationDeleteUserArgs = {
    id: Scalars['Int'];
};
export declare type MutationDeleteVisitArgs = {
    visitId: Scalars['Int'];
};
export declare type MutationEmailVerificationArgs = {
    token: Scalars['String'];
};
export declare type MutationExternalTokenLoginArgs = {
    externalToken: Scalars['String'];
};
export declare type MutationGetTokenForUserArgs = {
    userId: Scalars['Int'];
};
export declare type MutationImportProposalArgs = {
    abstract?: InputMaybe<Scalars['String']>;
    callId: Scalars['Int'];
    proposerId?: InputMaybe<Scalars['Int']>;
    referenceNumber: Scalars['Int'];
    submitterId: Scalars['Int'];
    title?: InputMaybe<Scalars['String']>;
    users?: InputMaybe<Array<Scalars['Int']>>;
};
export declare type MutationImportTemplateArgs = {
    conflictResolutions: Array<ConflictResolution>;
    templateAsJson: Scalars['String'];
};
export declare type MutationImportUnitsArgs = {
    conflictResolutions: Array<ConflictResolution>;
    json: Scalars['String'];
};
export declare type MutationLoginArgs = {
    email: Scalars['String'];
    password: Scalars['String'];
};
export declare type MutationLogoutArgs = {
    token: Scalars['String'];
};
export declare type MutationMergeInstitutionsArgs = {
    institutionIdFrom: Scalars['Int'];
    institutionIdInto: Scalars['Int'];
    newTitle: Scalars['String'];
};
export declare type MutationMoveProposalWorkflowStatusArgs = {
    moveProposalWorkflowStatusInput: MoveProposalWorkflowStatusInput;
};
export declare type MutationNotifyProposalArgs = {
    proposalPk: Scalars['Int'];
};
export declare type MutationPrepareDbArgs = {
    includeSeeds?: InputMaybe<Scalars['Boolean']>;
};
export declare type MutationRemoveAssignedInstrumentFromCallArgs = {
    removeAssignedInstrumentFromCallInput: RemoveAssignedInstrumentFromCallInput;
};
export declare type MutationRemoveMemberFromSepProposalArgs = {
    memberId: Scalars['Int'];
    proposalPk: Scalars['Int'];
    sepId: Scalars['Int'];
};
export declare type MutationRemoveMemberFromSepArgs = {
    memberId: Scalars['Int'];
    roleId: UserRole;
    sepId: Scalars['Int'];
};
export declare type MutationRemoveProposalsFromInstrumentArgs = {
    proposalPks: Array<Scalars['Int']>;
};
export declare type MutationRemoveProposalsFromSepArgs = {
    proposalPks: Array<Scalars['Int']>;
    sepId: Scalars['Int'];
};
export declare type MutationRemoveScientistFromInstrumentArgs = {
    instrumentId: Scalars['Int'];
    scientistId: Scalars['Int'];
};
export declare type MutationRemoveUserForReviewArgs = {
    reviewId: Scalars['Int'];
    sepId: Scalars['Int'];
};
export declare type MutationReorderSepMeetingDecisionProposalsArgs = {
    reorderSepMeetingDecisionProposalsInput: ReorderSepMeetingDecisionProposalsInput;
};
export declare type MutationRequestFeedbackArgs = {
    scheduledEventId: Scalars['Int'];
};
export declare type MutationResetPasswordArgs = {
    password: Scalars['String'];
    token: Scalars['String'];
};
export declare type MutationResetPasswordEmailArgs = {
    email: Scalars['String'];
};
export declare type MutationSaveSepMeetingDecisionArgs = {
    saveSepMeetingDecisionInput: SaveSepMeetingDecisionInput;
};
export declare type MutationSelectRoleArgs = {
    selectedRoleId?: InputMaybe<Scalars['Int']>;
    token: Scalars['String'];
};
export declare type MutationSetActiveTemplateArgs = {
    templateGroupId: TemplateGroupId;
    templateId: Scalars['Int'];
};
export declare type MutationSetInstrumentAvailabilityTimeArgs = {
    availabilityTime: Scalars['Int'];
    callId: Scalars['Int'];
    instrumentId: Scalars['Int'];
};
export declare type MutationSetPageContentArgs = {
    id: PageName;
    text: Scalars['String'];
};
export declare type MutationSetUserEmailVerifiedArgs = {
    id: Scalars['Int'];
};
export declare type MutationSetUserNotPlaceholderArgs = {
    id: Scalars['Int'];
};
export declare type MutationSubmitInstrumentArgs = {
    callId: Scalars['Int'];
    instrumentId: Scalars['Int'];
    sepId: Scalars['Int'];
};
export declare type MutationSubmitProposalArgs = {
    proposalPk: Scalars['Int'];
};
export declare type MutationSubmitProposalsReviewArgs = {
    submitProposalsReviewInput: SubmitProposalsReviewInput;
};
export declare type MutationSubmitShipmentArgs = {
    shipmentId: Scalars['Int'];
};
export declare type MutationSubmitTechnicalReviewsArgs = {
    submitTechnicalReviewsInput: SubmitTechnicalReviewsInput;
};
export declare type MutationTokenArgs = {
    token: Scalars['String'];
};
export declare type MutationUpdateAnswerArgs = {
    answer: AnswerInput;
    questionaryId: Scalars['Int'];
};
export declare type MutationUpdateApiAccessTokenArgs = {
    updateApiAccessTokenInput: UpdateApiAccessTokenInput;
};
export declare type MutationUpdateCallArgs = {
    updateCallInput: UpdateCallInput;
};
export declare type MutationUpdateEsiArgs = {
    esiId: Scalars['Int'];
    isSubmitted?: InputMaybe<Scalars['Boolean']>;
};
export declare type MutationUpdateFeedbackArgs = {
    feedbackId: Scalars['Int'];
    status?: InputMaybe<FeedbackStatus>;
};
export declare type MutationUpdateGenericTemplateArgs = {
    genericTemplateId: Scalars['Int'];
    safetyComment?: InputMaybe<Scalars['String']>;
    title?: InputMaybe<Scalars['String']>;
};
export declare type MutationUpdateInstitutionArgs = {
    country: Scalars['Int'];
    id: Scalars['Int'];
    name?: InputMaybe<Scalars['String']>;
    verified?: InputMaybe<Scalars['Boolean']>;
};
export declare type MutationUpdateInstrumentArgs = {
    description: Scalars['String'];
    id: Scalars['Int'];
    managerUserId: Scalars['Int'];
    name: Scalars['String'];
    shortCode: Scalars['String'];
};
export declare type MutationUpdatePasswordArgs = {
    id: Scalars['Int'];
    password: Scalars['String'];
};
export declare type MutationUpdateProposalArgs = {
    abstract?: InputMaybe<Scalars['String']>;
    proposalPk: Scalars['Int'];
    proposerId?: InputMaybe<Scalars['Int']>;
    title?: InputMaybe<Scalars['String']>;
    users?: InputMaybe<Array<Scalars['Int']>>;
};
export declare type MutationUpdateProposalStatusArgs = {
    updatedProposalStatusInput: UpdateProposalStatusInput;
};
export declare type MutationUpdateProposalWorkflowArgs = {
    updatedProposalWorkflowInput: UpdateProposalWorkflowInput;
};
export declare type MutationUpdateQuestionArgs = {
    config?: InputMaybe<Scalars['String']>;
    id: Scalars['String'];
    naturalKey?: InputMaybe<Scalars['String']>;
    question?: InputMaybe<Scalars['String']>;
};
export declare type MutationUpdateQuestionTemplateRelationArgs = {
    config?: InputMaybe<Scalars['String']>;
    questionId: Scalars['String'];
    sortOrder: Scalars['Int'];
    templateId: Scalars['Int'];
    topicId?: InputMaybe<Scalars['Int']>;
};
export declare type MutationUpdateQuestionTemplateRelationSettingsArgs = {
    config?: InputMaybe<Scalars['String']>;
    dependencies: Array<FieldDependencyInput>;
    dependenciesOperator?: InputMaybe<DependenciesLogicOperator>;
    questionId: Scalars['String'];
    templateId: Scalars['Int'];
};
export declare type MutationUpdateReviewArgs = {
    comment: Scalars['String'];
    grade: Scalars['Int'];
    reviewID: Scalars['Int'];
    sepID: Scalars['Int'];
    status: ReviewStatus;
};
export declare type MutationUpdateSepArgs = {
    active: Scalars['Boolean'];
    code: Scalars['String'];
    description: Scalars['String'];
    id: Scalars['Int'];
    numberRatingsRequired?: InputMaybe<Scalars['Int']>;
};
export declare type MutationUpdateSepTimeAllocationArgs = {
    proposalPk: Scalars['Int'];
    sepId: Scalars['Int'];
    sepTimeAllocation?: InputMaybe<Scalars['Int']>;
};
export declare type MutationUpdateSampleArgs = {
    safetyComment?: InputMaybe<Scalars['String']>;
    safetyStatus?: InputMaybe<SampleStatus>;
    sampleId: Scalars['Int'];
    title?: InputMaybe<Scalars['String']>;
};
export declare type MutationUpdateSampleEsiArgs = {
    esiId: Scalars['Int'];
    isSubmitted?: InputMaybe<Scalars['Boolean']>;
    sampleId: Scalars['Int'];
};
export declare type MutationUpdateShipmentArgs = {
    externalRef?: InputMaybe<Scalars['String']>;
    proposalPk?: InputMaybe<Scalars['Int']>;
    shipmentId: Scalars['Int'];
    status?: InputMaybe<ShipmentStatus>;
    title?: InputMaybe<Scalars['String']>;
};
export declare type MutationUpdateTechnicalReviewAssigneeArgs = {
    proposalPks: Array<Scalars['Int']>;
    userId: Scalars['Int'];
};
export declare type MutationUpdateTemplateArgs = {
    description?: InputMaybe<Scalars['String']>;
    isArchived?: InputMaybe<Scalars['Boolean']>;
    name?: InputMaybe<Scalars['String']>;
    templateId: Scalars['Int'];
};
export declare type MutationUpdateTopicArgs = {
    id: Scalars['Int'];
    isEnabled?: InputMaybe<Scalars['Boolean']>;
    sortOrder?: InputMaybe<Scalars['Int']>;
    templateId?: InputMaybe<Scalars['Int']>;
    title?: InputMaybe<Scalars['String']>;
};
export declare type MutationUpdateUserArgs = {
    birthdate?: InputMaybe<Scalars['DateTime']>;
    department?: InputMaybe<Scalars['String']>;
    email?: InputMaybe<Scalars['String']>;
    firstname?: InputMaybe<Scalars['String']>;
    gender?: InputMaybe<Scalars['String']>;
    id: Scalars['Int'];
    lastname?: InputMaybe<Scalars['String']>;
    middlename?: InputMaybe<Scalars['String']>;
    nationality?: InputMaybe<Scalars['Int']>;
    orcid?: InputMaybe<Scalars['String']>;
    organisation?: InputMaybe<Scalars['Int']>;
    organizationCountry?: InputMaybe<Scalars['Int']>;
    otherOrganisation?: InputMaybe<Scalars['String']>;
    placeholder?: InputMaybe<Scalars['String']>;
    position?: InputMaybe<Scalars['String']>;
    preferredname?: InputMaybe<Scalars['String']>;
    refreshToken?: InputMaybe<Scalars['String']>;
    roles?: InputMaybe<Array<Scalars['Int']>>;
    telephone?: InputMaybe<Scalars['String']>;
    telephone_alt?: InputMaybe<Scalars['String']>;
    user_title?: InputMaybe<Scalars['String']>;
    username?: InputMaybe<Scalars['String']>;
};
export declare type MutationUpdateUserRolesArgs = {
    id: Scalars['Int'];
    roles?: InputMaybe<Array<Scalars['Int']>>;
};
export declare type MutationUpdateVisitArgs = {
    status?: InputMaybe<VisitStatus>;
    team?: InputMaybe<Array<Scalars['Int']>>;
    teamLeadUserId?: InputMaybe<Scalars['Int']>;
    visitId: Scalars['Int'];
};
export declare type MutationUpdateVisitRegistrationArgs = {
    endsAt?: InputMaybe<Scalars['DateTime']>;
    isRegistrationSubmitted?: InputMaybe<Scalars['Boolean']>;
    startsAt?: InputMaybe<Scalars['DateTime']>;
    trainingExpiryDate?: InputMaybe<Scalars['DateTime']>;
    visitId: Scalars['Int'];
};
export declare type MutationValidateTemplateImportArgs = {
    templateAsJson: Scalars['String'];
};
export declare type MutationValidateUnitsImportArgs = {
    unitsAsJson: Scalars['String'];
};
export declare type NextProposalStatus = {
    description: Maybe<Scalars['String']>;
    id: Maybe<Scalars['Int']>;
    isDefault: Maybe<Scalars['Boolean']>;
    name: Maybe<Scalars['String']>;
    shortCode: Maybe<Scalars['String']>;
};
export declare type NextProposalStatusResponseWrap = {
    nextProposalStatus: Maybe<NextProposalStatus>;
    rejection: Maybe<Rejection>;
};
export declare type NumberInputConfig = {
    numberValueConstraint: Maybe<NumberValueConstraint>;
    required: Scalars['Boolean'];
    small_label: Scalars['String'];
    tooltip: Scalars['String'];
    units: Array<Unit>;
};
export declare enum NumberValueConstraint {
    NONE = "NONE",
    ONLY_NEGATIVE = "ONLY_NEGATIVE",
    ONLY_POSITIVE = "ONLY_POSITIVE"
}
export declare type OrcIdInformation = {
    firstname: Maybe<Scalars['String']>;
    lastname: Maybe<Scalars['String']>;
    orcid: Maybe<Scalars['String']>;
    orcidHash: Maybe<Scalars['String']>;
    refreshToken: Maybe<Scalars['String']>;
    token: Maybe<Scalars['String']>;
};
export declare type Page = {
    content: Maybe<Scalars['String']>;
    id: Scalars['Int'];
};
export declare enum PageName {
    COOKIEPAGE = "COOKIEPAGE",
    FOOTERCONTENT = "FOOTERCONTENT",
    GRADEGUIDEPAGE = "GRADEGUIDEPAGE",
    HELPPAGE = "HELPPAGE",
    HOMEPAGE = "HOMEPAGE",
    LOGINHELPPAGE = "LOGINHELPPAGE",
    PRIVACYPAGE = "PRIVACYPAGE",
    REVIEWPAGE = "REVIEWPAGE"
}
export declare type PageResponseWrap = {
    page: Maybe<Page>;
    rejection: Maybe<Rejection>;
};
export declare type PermissionsWithAccessToken = {
    accessPermissions: Scalars['String'];
    accessToken: Scalars['String'];
    id: Scalars['String'];
    name: Scalars['String'];
};
export declare type PrepareDbResponseWrap = {
    log: Maybe<Scalars['String']>;
    rejection: Maybe<Rejection>;
};
export declare type Proposal = {
    abstract: Scalars['String'];
    call: Maybe<Call>;
    callId: Scalars['Int'];
    commentForManagement: Maybe<Scalars['String']>;
    commentForUser: Maybe<Scalars['String']>;
    created: Scalars['DateTime'];
    finalStatus: Maybe<ProposalEndStatus>;
    genericTemplates: Maybe<Array<GenericTemplate>>;
    instrument: Maybe<Instrument>;
    managementDecisionSubmitted: Scalars['Boolean'];
    managementTimeAllocation: Maybe<Scalars['Int']>;
    notified: Scalars['Boolean'];
    primaryKey: Scalars['Int'];
    proposalBookingCore: Maybe<ProposalBookingCore>;
    proposalId: Scalars['String'];
    proposer: Maybe<BasicUserDetails>;
    publicStatus: ProposalPublicStatus;
    questionary: Questionary;
    questionaryId: Scalars['Int'];
    reviews: Maybe<Array<Review>>;
    samples: Maybe<Array<Sample>>;
    sep: Maybe<Sep>;
    sepMeetingDecision: Maybe<SepMeetingDecision>;
    status: Maybe<ProposalStatus>;
    statusId: Scalars['Int'];
    submitted: Scalars['Boolean'];
    technicalReview: Maybe<TechnicalReview>;
    title: Scalars['String'];
    updated: Scalars['DateTime'];
    users: Array<BasicUserDetails>;
    visits: Maybe<Array<Visit>>;
};
export declare type ProposalProposalBookingCoreArgs = {
    filter?: InputMaybe<ProposalBookingFilter>;
};
export declare type ProposalBasisConfig = {
    tooltip: Scalars['String'];
};
export declare type ProposalBookingCore = {
    id: Scalars['Int'];
    scheduledEvents: Array<ScheduledEventCore>;
};
export declare type ProposalBookingCoreScheduledEventsArgs = {
    filter: ProposalBookingScheduledEventFilterCore;
};
export declare type ProposalBookingFilter = {
    status?: InputMaybe<Array<ProposalBookingStatusCore>>;
};
export declare type ProposalBookingScheduledEventFilterCore = {
    bookingType?: InputMaybe<ScheduledEventBookingType>;
    endsAfter?: InputMaybe<Scalars['DateTime']>;
    endsBefore?: InputMaybe<Scalars['DateTime']>;
    status?: InputMaybe<Array<ProposalBookingStatusCore>>;
};
export declare enum ProposalBookingStatusCore {
    ACTIVE = "ACTIVE",
    COMPLETED = "COMPLETED",
    DRAFT = "DRAFT"
}
export declare enum ProposalEndStatus {
    ACCEPTED = "ACCEPTED",
    REJECTED = "REJECTED",
    RESERVED = "RESERVED",
    UNSET = "UNSET"
}
export declare type ProposalEsiBasisConfig = {
    tooltip: Scalars['String'];
};
export declare type ProposalEvent = {
    description: Maybe<Scalars['String']>;
    name: Event;
};
export declare type ProposalPkWithCallId = {
    callId: Scalars['Int'];
    primaryKey: Scalars['Int'];
};
export declare type ProposalPkWithRankOrder = {
    proposalPk: Scalars['Int'];
    rankOrder: Scalars['Int'];
};
export declare type ProposalPkWithReviewId = {
    proposalPk: Scalars['Int'];
    reviewId: Scalars['Int'];
};
export declare enum ProposalPublicStatus {
    ACCEPTED = "accepted",
    DRAFT = "draft",
    REJECTED = "rejected",
    RESERVED = "reserved",
    SUBMITTED = "submitted",
    UNKNOWN = "unknown"
}
export declare type ProposalResponseWrap = {
    proposal: Maybe<Proposal>;
    rejection: Maybe<Rejection>;
};
export declare type ProposalStatus = {
    description: Scalars['String'];
    id: Scalars['Int'];
    isDefault: Scalars['Boolean'];
    name: Scalars['String'];
    shortCode: Scalars['String'];
};
export declare type ProposalStatusChangingEventResponseWrap = {
    rejection: Maybe<Rejection>;
    statusChangingEvents: Maybe<Array<StatusChangingEvent>>;
};
export declare type ProposalStatusResponseWrap = {
    proposalStatus: Maybe<ProposalStatus>;
    rejection: Maybe<Rejection>;
};
export declare type ProposalTemplate = {
    callCount: Scalars['Int'];
    complementaryQuestions: Array<Question>;
    description: Maybe<Scalars['String']>;
    group: TemplateGroup;
    groupId: TemplateGroupId;
    isArchived: Scalars['Boolean'];
    json: Scalars['String'];
    name: Scalars['String'];
    questionaryCount: Scalars['Int'];
    steps: Array<TemplateStep>;
    templateId: Scalars['Int'];
};
export declare type ProposalTemplatesFilter = {
    isArchived?: InputMaybe<Scalars['Boolean']>;
    templateIds?: InputMaybe<Array<Scalars['Int']>>;
};
export declare type ProposalView = {
    allocationTimeUnit: AllocationTimeUnits;
    callId: Scalars['Int'];
    callShortCode: Maybe<Scalars['String']>;
    finalStatus: Maybe<ProposalEndStatus>;
    instrumentId: Maybe<Scalars['Int']>;
    instrumentName: Maybe<Scalars['String']>;
    managementTimeAllocation: Maybe<Scalars['Int']>;
    notified: Scalars['Boolean'];
    primaryKey: Scalars['Int'];
    proposalId: Scalars['String'];
    rankOrder: Maybe<Scalars['Int']>;
    reviewAverage: Maybe<Scalars['Float']>;
    reviewDeviation: Maybe<Scalars['Float']>;
    sepCode: Maybe<Scalars['String']>;
    sepId: Maybe<Scalars['Int']>;
    statusDescription: Scalars['String'];
    statusId: Scalars['Int'];
    statusName: Scalars['String'];
    submitted: Scalars['Boolean'];
    technicalReviewAssigneeFirstName: Maybe<Scalars['String']>;
    technicalReviewAssigneeId: Maybe<Scalars['Int']>;
    technicalReviewAssigneeLastName: Maybe<Scalars['String']>;
    technicalReviewSubmitted: Maybe<Scalars['Int']>;
    technicalStatus: Maybe<TechnicalReviewStatus>;
    technicalTimeAllocation: Maybe<Scalars['Int']>;
    title: Scalars['String'];
};
export declare type ProposalWorkflow = {
    description: Scalars['String'];
    id: Scalars['Int'];
    name: Scalars['String'];
    proposalWorkflowConnectionGroups: Array<ProposalWorkflowConnectionGroup>;
};
export declare type ProposalWorkflowConnection = {
    droppableGroupId: Scalars['String'];
    id: Scalars['Int'];
    nextProposalStatusId: Maybe<Scalars['Int']>;
    prevProposalStatusId: Maybe<Scalars['Int']>;
    proposalStatus: ProposalStatus;
    proposalStatusId: Scalars['Int'];
    proposalWorkflowId: Scalars['Int'];
    sortOrder: Scalars['Int'];
    statusChangingEvents: Maybe<Array<StatusChangingEvent>>;
};
export declare type ProposalWorkflowConnectionGroup = {
    connections: Array<ProposalWorkflowConnection>;
    groupId: Scalars['String'];
    parentGroupId: Maybe<Scalars['String']>;
};
export declare type ProposalWorkflowConnectionResponseWrap = {
    proposalWorkflowConnection: Maybe<ProposalWorkflowConnection>;
    rejection: Maybe<Rejection>;
};
export declare type ProposalWorkflowResponseWrap = {
    proposalWorkflow: Maybe<ProposalWorkflow>;
    rejection: Maybe<Rejection>;
};
export declare type ProposalsFilter = {
    callId?: InputMaybe<Scalars['Int']>;
    instrumentId?: InputMaybe<Scalars['Int']>;
    proposalStatusId?: InputMaybe<Scalars['Int']>;
    questionFilter?: InputMaybe<QuestionFilterInput>;
    questionaryIds?: InputMaybe<Array<Scalars['Int']>>;
    referenceNumbers?: InputMaybe<Array<Scalars['String']>>;
    reviewer?: InputMaybe<ReviewerFilter>;
    shortCodes?: InputMaybe<Array<Scalars['String']>>;
    text?: InputMaybe<Scalars['String']>;
};
export declare type ProposalsQueryResult = {
    proposals: Array<Proposal>;
    totalCount: Scalars['Int'];
};
export declare type ProposalsResponseWrap = {
    proposals: Maybe<Array<Proposal>>;
    rejection: Maybe<Rejection>;
};
export declare type ProposalsViewQueryResult = {
    proposalViews: Array<ProposalView>;
    totalCount: Scalars['Int'];
};
export declare type ProposalsViewResult = {
    proposals: Array<ProposalView>;
    totalCount: Scalars['Int'];
};
export declare type Quantity = {
    id: Scalars['String'];
};
export declare type QueriesAndMutations = {
    mutations: Array<Scalars['String']>;
    queries: Array<Scalars['String']>;
};
export declare type Query = {
    _entities: Array<Maybe<_Entity>>;
    _service: _Service;
    accessTokenAndPermissions: Maybe<PermissionsWithAccessToken>;
    activeTemplateId: Maybe<Scalars['Int']>;
    allAccessTokensAndPermissions: Maybe<Array<PermissionsWithAccessToken>>;
    basicUserDetails: Maybe<BasicUserDetails>;
    basicUserDetailsByEmail: Maybe<BasicUserDetails>;
    blankQuestionary: Questionary;
    blankQuestionarySteps: Maybe<Array<QuestionaryStep>>;
    call: Maybe<Call>;
    calls: Maybe<Array<Call>>;
    callsByInstrumentScientist: Maybe<Array<Call>>;
    checkEmailExist: Maybe<Scalars['Boolean']>;
    checkToken: TokenResult;
    esi: Maybe<ExperimentSafetyInput>;
    eventLogs: Maybe<Array<EventLog>>;
    factoryVersion: Scalars['String'];
    features: Array<Feature>;
    feedback: Maybe<Feedback>;
    feedbacks: Array<Feedback>;
    fileMetadata: Maybe<Array<FileMetadata>>;
    genericTemplate: Maybe<GenericTemplate>;
    genericTemplates: Maybe<Array<GenericTemplate>>;
    getFields: Maybe<Fields>;
    getOrcIDInformation: Maybe<OrcIdInformation>;
    getPageContent: Maybe<Scalars['String']>;
    institutions: Maybe<Array<Institution>>;
    instrument: Maybe<Instrument>;
    instrumentScientistHasAccess: Maybe<Scalars['Boolean']>;
    instrumentScientistHasInstrument: Maybe<Scalars['Boolean']>;
    instrumentScientistProposals: Maybe<ProposalsViewResult>;
    instruments: Maybe<InstrumentsQueryResult>;
    instrumentsBySep: Maybe<Array<InstrumentWithAvailabilityTime>>;
    isNaturalKeyPresent: Maybe<Scalars['Boolean']>;
    me: Maybe<User>;
    myShipments: Maybe<Array<Shipment>>;
    myVisits: Array<Visit>;
    previousCollaborators: Maybe<UserQueryResult>;
    proposal: Maybe<Proposal>;
    proposalEvents: Maybe<Array<ProposalEvent>>;
    proposalReviews: Maybe<Array<Review>>;
    proposalStatus: Maybe<ProposalStatus>;
    proposalStatuses: Maybe<Array<ProposalStatus>>;
    proposalTemplates: Maybe<Array<ProposalTemplate>>;
    proposalWorkflow: Maybe<ProposalWorkflow>;
    proposalWorkflows: Maybe<Array<ProposalWorkflow>>;
    proposals: Maybe<ProposalsQueryResult>;
    proposalsView: Maybe<ProposalsViewQueryResult>;
    quantities: Array<Quantity>;
    queriesAndMutations: Maybe<QueriesAndMutations>;
    questionary: Maybe<Questionary>;
    questions: Array<QuestionWithUsage>;
    review: Maybe<Review>;
    roles: Maybe<Array<Role>>;
    sample: Maybe<Sample>;
    sampleEsi: Maybe<SampleExperimentSafetyInput>;
    samples: Maybe<Array<Sample>>;
    samplesByCallId: Maybe<Array<Sample>>;
    scheduledEventCore: Maybe<ScheduledEventCore>;
    scheduledEventsCore: Array<ScheduledEventCore>;
    sep: Maybe<Sep>;
    sepMembers: Maybe<Array<SepReviewer>>;
    sepProposal: Maybe<SepProposal>;
    sepProposals: Maybe<Array<SepProposal>>;
    sepProposalsByInstrument: Maybe<Array<SepProposal>>;
    sepReviewers: Maybe<Array<SepReviewer>>;
    seps: Maybe<SePsQueryResult>;
    settings: Array<Settings>;
    shipment: Maybe<Shipment>;
    shipments: Maybe<Array<Shipment>>;
    template: Maybe<Template>;
    templateCategories: Maybe<Array<TemplateCategory>>;
    templates: Maybe<Array<Template>>;
    units: Maybe<Array<Unit>>;
    unitsAsJson: Maybe<Scalars['String']>;
    user: Maybe<User>;
    userHasAccessToProposal: Maybe<Scalars['Boolean']>;
    userInstruments: Maybe<InstrumentsQueryResult>;
    users: Maybe<UserQueryResult>;
    version: Scalars['String'];
    visit: Maybe<Visit>;
    visitRegistration: Maybe<VisitRegistration>;
    visits: Array<Visit>;
};
export declare type Query_EntitiesArgs = {
    representations: Array<Scalars['_Any']>;
};
export declare type QueryAccessTokenAndPermissionsArgs = {
    accessTokenId: Scalars['String'];
};
export declare type QueryActiveTemplateIdArgs = {
    templateGroupId: TemplateGroupId;
};
export declare type QueryBasicUserDetailsArgs = {
    id: Scalars['Int'];
};
export declare type QueryBasicUserDetailsByEmailArgs = {
    email: Scalars['String'];
    role?: InputMaybe<UserRole>;
};
export declare type QueryBlankQuestionaryArgs = {
    templateId: Scalars['Int'];
};
export declare type QueryBlankQuestionaryStepsArgs = {
    templateId: Scalars['Int'];
};
export declare type QueryCallArgs = {
    id: Scalars['Int'];
};
export declare type QueryCallsArgs = {
    filter?: InputMaybe<CallsFilter>;
};
export declare type QueryCallsByInstrumentScientistArgs = {
    scientistId: Scalars['Int'];
};
export declare type QueryCheckEmailExistArgs = {
    email: Scalars['String'];
};
export declare type QueryCheckTokenArgs = {
    token: Scalars['String'];
};
export declare type QueryEsiArgs = {
    esiId: Scalars['Int'];
};
export declare type QueryEventLogsArgs = {
    changedObjectId: Scalars['String'];
    eventType: Scalars['String'];
};
export declare type QueryFeedbackArgs = {
    feedbackId: Scalars['Int'];
};
export declare type QueryFeedbacksArgs = {
    filter?: InputMaybe<FeedbacksFilter>;
};
export declare type QueryFileMetadataArgs = {
    fileIds: Array<Scalars['String']>;
};
export declare type QueryGenericTemplateArgs = {
    genericTemplateId: Scalars['Int'];
};
export declare type QueryGenericTemplatesArgs = {
    filter?: InputMaybe<GenericTemplatesFilter>;
};
export declare type QueryGetOrcIdInformationArgs = {
    authorizationCode: Scalars['String'];
};
export declare type QueryGetPageContentArgs = {
    id: PageName;
};
export declare type QueryInstitutionsArgs = {
    filter?: InputMaybe<InstitutionsFilter>;
};
export declare type QueryInstrumentArgs = {
    instrumentId: Scalars['Int'];
};
export declare type QueryInstrumentScientistHasAccessArgs = {
    instrumentId: Scalars['Int'];
    proposalPk: Scalars['Int'];
};
export declare type QueryInstrumentScientistHasInstrumentArgs = {
    instrumentId: Scalars['Int'];
};
export declare type QueryInstrumentScientistProposalsArgs = {
    filter?: InputMaybe<ProposalsFilter>;
    first?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
};
export declare type QueryInstrumentsArgs = {
    callIds?: InputMaybe<Array<Scalars['Int']>>;
};
export declare type QueryInstrumentsBySepArgs = {
    callId: Scalars['Int'];
    sepId: Scalars['Int'];
};
export declare type QueryIsNaturalKeyPresentArgs = {
    naturalKey: Scalars['String'];
};
export declare type QueryPreviousCollaboratorsArgs = {
    filter?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Scalars['String']>;
    orderDirection?: InputMaybe<Scalars['String']>;
    subtractUsers?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    userId: Scalars['Int'];
    userRole?: InputMaybe<UserRole>;
};
export declare type QueryProposalArgs = {
    primaryKey: Scalars['Int'];
};
export declare type QueryProposalReviewsArgs = {
    proposalPk: Scalars['Int'];
};
export declare type QueryProposalStatusArgs = {
    id: Scalars['Int'];
};
export declare type QueryProposalTemplatesArgs = {
    filter?: InputMaybe<ProposalTemplatesFilter>;
};
export declare type QueryProposalWorkflowArgs = {
    id: Scalars['Int'];
};
export declare type QueryProposalsArgs = {
    filter?: InputMaybe<ProposalsFilter>;
    first?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
};
export declare type QueryProposalsViewArgs = {
    filter?: InputMaybe<ProposalsFilter>;
    first?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    searchText?: InputMaybe<Scalars['String']>;
    sortDirection?: InputMaybe<Scalars['String']>;
    sortField?: InputMaybe<Scalars['String']>;
};
export declare type QueryQuestionaryArgs = {
    questionaryId: Scalars['Int'];
};
export declare type QueryQuestionsArgs = {
    filter?: InputMaybe<QuestionsFilter>;
};
export declare type QueryReviewArgs = {
    reviewId: Scalars['Int'];
};
export declare type QuerySampleArgs = {
    sampleId: Scalars['Int'];
};
export declare type QuerySampleEsiArgs = {
    esiId: Scalars['Int'];
    sampleId: Scalars['Int'];
};
export declare type QuerySamplesArgs = {
    filter?: InputMaybe<SamplesFilter>;
};
export declare type QuerySamplesByCallIdArgs = {
    callId: Scalars['Int'];
};
export declare type QueryScheduledEventCoreArgs = {
    scheduledEventId: Scalars['Int'];
};
export declare type QueryScheduledEventsCoreArgs = {
    filter?: InputMaybe<ScheduledEventsCoreFilter>;
    first?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
};
export declare type QuerySepArgs = {
    id: Scalars['Int'];
};
export declare type QuerySepMembersArgs = {
    sepId: Scalars['Int'];
};
export declare type QuerySepProposalArgs = {
    proposalPk: Scalars['Int'];
    sepId: Scalars['Int'];
};
export declare type QuerySepProposalsArgs = {
    callId?: InputMaybe<Scalars['Int']>;
    sepId: Scalars['Int'];
};
export declare type QuerySepProposalsByInstrumentArgs = {
    callId: Scalars['Int'];
    instrumentId: Scalars['Int'];
    sepId: Scalars['Int'];
};
export declare type QuerySepReviewersArgs = {
    sepId: Scalars['Int'];
};
export declare type QuerySepsArgs = {
    active?: InputMaybe<Scalars['Boolean']>;
    filter?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
};
export declare type QueryShipmentArgs = {
    shipmentId: Scalars['Int'];
};
export declare type QueryShipmentsArgs = {
    filter?: InputMaybe<ShipmentsFilter>;
};
export declare type QueryTemplateArgs = {
    templateId: Scalars['Int'];
};
export declare type QueryTemplatesArgs = {
    filter?: InputMaybe<TemplatesFilter>;
};
export declare type QueryUserArgs = {
    id: Scalars['Int'];
};
export declare type QueryUserHasAccessToProposalArgs = {
    proposalPk: Scalars['Int'];
};
export declare type QueryUsersArgs = {
    filter?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    orderBy?: InputMaybe<Scalars['String']>;
    orderDirection?: InputMaybe<Scalars['String']>;
    subtractUsers?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
    userRole?: InputMaybe<UserRole>;
};
export declare type QueryVisitArgs = {
    visitId: Scalars['Int'];
};
export declare type QueryVisitRegistrationArgs = {
    visitId: Scalars['Int'];
};
export declare type QueryVisitsArgs = {
    filter?: InputMaybe<VisitsFilter>;
};
export declare type Question = {
    categoryId: TemplateCategoryId;
    config: FieldConfig;
    dataType: DataType;
    id: Scalars['String'];
    naturalKey: Scalars['String'];
    question: Scalars['String'];
};
export declare type QuestionComparison = {
    conflictResolutionStrategy: ConflictResolutionStrategy;
    existingQuestion: Maybe<Question>;
    newQuestion: Question;
    status: QuestionComparisonStatus;
};
export declare enum QuestionComparisonStatus {
    DIFFERENT = "DIFFERENT",
    NEW = "NEW",
    SAME = "SAME"
}
export declare enum QuestionFilterCompareOperator {
    EQUALS = "EQUALS",
    EXISTS = "EXISTS",
    GREATER_THAN = "GREATER_THAN",
    INCLUDES = "INCLUDES",
    LESS_THAN = "LESS_THAN"
}
export declare type QuestionFilterInput = {
    compareOperator: QuestionFilterCompareOperator;
    dataType: DataType;
    questionId: Scalars['String'];
    value: Scalars['String'];
};
export declare type QuestionResponseWrap = {
    question: Maybe<Question>;
    rejection: Maybe<Rejection>;
};
export declare type QuestionTemplateRelation = {
    config: FieldConfig;
    dependencies: Array<FieldDependency>;
    dependenciesOperator: Maybe<DependenciesLogicOperator>;
    question: Question;
    sortOrder: Scalars['Int'];
    topicId: Scalars['Int'];
};
export declare type QuestionWithUsage = {
    answers: Array<AnswerBasic>;
    categoryId: TemplateCategoryId;
    config: FieldConfig;
    dataType: DataType;
    id: Scalars['String'];
    naturalKey: Scalars['String'];
    question: Scalars['String'];
    templates: Array<Template>;
};
export declare type Questionary = {
    created: Scalars['DateTime'];
    isCompleted: Scalars['Boolean'];
    questionaryId: Scalars['Int'];
    steps: Array<QuestionaryStep>;
    templateId: Scalars['Int'];
};
export declare type QuestionaryResponseWrap = {
    questionary: Maybe<Questionary>;
    rejection: Maybe<Rejection>;
};
export declare type QuestionaryStep = {
    fields: Array<Answer>;
    isCompleted: Scalars['Boolean'];
    topic: Topic;
};
export declare type QuestionaryStepResponseWrap = {
    questionaryStep: Maybe<QuestionaryStep>;
    rejection: Maybe<Rejection>;
};
export declare type QuestionsFilter = {
    category?: InputMaybe<TemplateCategoryId>;
    dataType?: InputMaybe<Array<DataType>>;
    excludeDataType?: InputMaybe<Array<DataType>>;
    questionIds?: InputMaybe<Array<Scalars['String']>>;
    text?: InputMaybe<Scalars['String']>;
};
export declare type Rejection = {
    context: Maybe<Scalars['String']>;
    exception: Maybe<Scalars['String']>;
    reason: Scalars['String'];
};
export declare type RemoveAssignedInstrumentFromCallInput = {
    callId: Scalars['Int'];
    instrumentId: Scalars['Int'];
};
export declare type ReorderSepMeetingDecisionProposalsInput = {
    proposals: Array<ProposalPkWithRankOrder>;
};
export declare type Review = {
    comment: Maybe<Scalars['String']>;
    grade: Maybe<Scalars['Int']>;
    id: Scalars['Int'];
    proposal: Maybe<Proposal>;
    reviewer: Maybe<BasicUserDetails>;
    sepID: Scalars['Int'];
    status: ReviewStatus;
    userID: Scalars['Int'];
};
export declare type ReviewResponseWrap = {
    rejection: Maybe<Rejection>;
    review: Maybe<Review>;
};
export declare enum ReviewStatus {
    DRAFT = "DRAFT",
    SUBMITTED = "SUBMITTED"
}
export declare type ReviewWithNextProposalStatus = {
    comment: Maybe<Scalars['String']>;
    grade: Maybe<Scalars['Int']>;
    id: Scalars['Int'];
    nextProposalStatus: Maybe<NextProposalStatus>;
    proposal: Maybe<Proposal>;
    reviewer: Maybe<BasicUserDetails>;
    sepID: Scalars['Int'];
    status: ReviewStatus;
    userID: Scalars['Int'];
};
export declare type ReviewWithNextStatusResponseWrap = {
    rejection: Maybe<Rejection>;
    review: Maybe<ReviewWithNextProposalStatus>;
};
export declare enum ReviewerFilter {
    ALL = "ALL",
    ME = "ME"
}
export declare type RichTextInputConfig = {
    max: Maybe<Scalars['Int']>;
    required: Scalars['Boolean'];
    small_label: Scalars['String'];
    tooltip: Scalars['String'];
};
export declare type Role = {
    id: Scalars['Int'];
    shortCode: Scalars['String'];
    title: Scalars['String'];
};
export declare type Sep = {
    active: Scalars['Boolean'];
    code: Scalars['String'];
    description: Scalars['String'];
    id: Scalars['Int'];
    numberRatingsRequired: Scalars['Float'];
    sepChair: Maybe<BasicUserDetails>;
    sepSecretary: Maybe<BasicUserDetails>;
};
export declare type SepAssignment = {
    dateAssigned: Scalars['DateTime'];
    dateReassigned: Maybe<Scalars['DateTime']>;
    emailSent: Scalars['Boolean'];
    proposal: Proposal;
    proposalPk: Scalars['Int'];
    reassigned: Scalars['Boolean'];
    review: Maybe<Review>;
    role: Maybe<Role>;
    sepId: Scalars['Int'];
    sepMemberUserId: Maybe<Scalars['Int']>;
    user: Maybe<BasicUserDetails>;
};
export declare type SepProposal = {
    assignments: Maybe<Array<SepAssignment>>;
    dateAssigned: Scalars['DateTime'];
    instrumentSubmitted: Scalars['Boolean'];
    proposal: Proposal;
    proposalPk: Scalars['Int'];
    sepId: Scalars['Int'];
    sepTimeAllocation: Maybe<Scalars['Int']>;
};
export declare type SepProposalResponseWrap = {
    rejection: Maybe<Rejection>;
    sepProposal: Maybe<SepProposal>;
};
export declare type SepResponseWrap = {
    rejection: Maybe<Rejection>;
    sep: Maybe<Sep>;
};
export declare type SepReviewer = {
    role: Maybe<Role>;
    sepId: Scalars['Int'];
    user: BasicUserDetails;
    userId: Scalars['Int'];
};
export declare type SePsQueryResult = {
    seps: Array<Sep>;
    totalCount: Scalars['Int'];
};
export declare type Sample = {
    created: Scalars['DateTime'];
    creatorId: Scalars['Int'];
    id: Scalars['Int'];
    isPostProposalSubmission: Scalars['Boolean'];
    proposal: Proposal;
    proposalPk: Scalars['Int'];
    questionId: Scalars['String'];
    questionary: Questionary;
    questionaryId: Scalars['Int'];
    safetyComment: Scalars['String'];
    safetyStatus: SampleStatus;
    title: Scalars['String'];
};
export declare type SampleBasisConfig = {
    titlePlaceholder: Scalars['String'];
};
export declare type SampleDeclarationConfig = {
    addEntryButtonLabel: Scalars['String'];
    esiTemplateId: Maybe<Scalars['Int']>;
    maxEntries: Maybe<Scalars['Int']>;
    minEntries: Maybe<Scalars['Int']>;
    required: Scalars['Boolean'];
    small_label: Scalars['String'];
    templateCategory: Scalars['String'];
    templateId: Maybe<Scalars['Int']>;
};
export declare type SampleEsiBasisConfig = {
    tooltip: Scalars['String'];
};
export declare type SampleEsiResponseWrap = {
    esi: Maybe<SampleExperimentSafetyInput>;
    rejection: Maybe<Rejection>;
};
export declare type SampleExperimentSafetyInput = {
    esiId: Scalars['Int'];
    isSubmitted: Scalars['Boolean'];
    questionary: Questionary;
    questionaryId: Scalars['Int'];
    sample: Sample;
    sampleId: Scalars['Int'];
};
export declare type SampleResponseWrap = {
    rejection: Maybe<Rejection>;
    sample: Maybe<Sample>;
};
export declare enum SampleStatus {
    ELEVATED_RISK = "ELEVATED_RISK",
    HIGH_RISK = "HIGH_RISK",
    LOW_RISK = "LOW_RISK",
    PENDING_EVALUATION = "PENDING_EVALUATION"
}
export declare type SamplesFilter = {
    creatorId?: InputMaybe<Scalars['Int']>;
    proposalPk?: InputMaybe<Scalars['Int']>;
    questionId?: InputMaybe<Scalars['String']>;
    questionaryIds?: InputMaybe<Array<Scalars['Int']>>;
    sampleIds?: InputMaybe<Array<Scalars['Int']>>;
    status?: InputMaybe<SampleStatus>;
    title?: InputMaybe<Scalars['String']>;
    visitId?: InputMaybe<Scalars['Int']>;
};
export declare type SaveSepMeetingDecisionInput = {
    commentForManagement?: InputMaybe<Scalars['String']>;
    commentForUser?: InputMaybe<Scalars['String']>;
    proposalPk: Scalars['Int'];
    rankOrder?: InputMaybe<Scalars['Int']>;
    recommendation?: InputMaybe<ProposalEndStatus>;
    submitted?: InputMaybe<Scalars['Boolean']>;
};
export declare enum ScheduledEventBookingType {
    EQUIPMENT = "EQUIPMENT",
    MAINTENANCE = "MAINTENANCE",
    SHUTDOWN = "SHUTDOWN",
    USER_OPERATIONS = "USER_OPERATIONS"
}
export declare type ScheduledEventCore = {
    bookingType: ScheduledEventBookingType;
    endsAt: Scalars['DateTime'];
    esi: Maybe<ExperimentSafetyInput>;
    feedback: Maybe<Feedback>;
    feedbackRequests: Array<FeedbackRequest>;
    id: Scalars['Int'];
    localContact: Maybe<BasicUserDetails>;
    localContactId: Maybe<Scalars['Int']>;
    proposal: Proposal;
    proposalPk: Maybe<Scalars['Int']>;
    shipments: Array<Shipment>;
    startsAt: Scalars['DateTime'];
    status: ProposalBookingStatusCore;
    visit: Maybe<Visit>;
};
export declare type ScheduledEventsCoreFilter = {
    callId?: InputMaybe<Scalars['Int']>;
    endsAfter?: InputMaybe<Scalars['DateTime']>;
    endsBefore?: InputMaybe<Scalars['DateTime']>;
    instrumentId?: InputMaybe<Scalars['Int']>;
    overlaps?: InputMaybe<TimeSpan>;
    startsAfter?: InputMaybe<Scalars['DateTime']>;
    startsBefore?: InputMaybe<Scalars['DateTime']>;
};
export declare type SelectionFromOptionsConfig = {
    isMultipleSelect: Scalars['Boolean'];
    options: Array<Scalars['String']>;
    required: Scalars['Boolean'];
    small_label: Scalars['String'];
    tooltip: Scalars['String'];
    variant: Scalars['String'];
};
export declare type SepMeetingDecision = {
    commentForManagement: Maybe<Scalars['String']>;
    commentForUser: Maybe<Scalars['String']>;
    proposalPk: Scalars['Int'];
    rankOrder: Maybe<Scalars['Int']>;
    recommendation: Maybe<ProposalEndStatus>;
    submitted: Scalars['Boolean'];
    submittedBy: Maybe<Scalars['Int']>;
};
export declare type SepMeetingDecisionResponseWrap = {
    rejection: Maybe<Rejection>;
    sepMeetingDecision: Maybe<SepMeetingDecision>;
};
export declare type Settings = {
    description: Maybe<Scalars['String']>;
    id: SettingsId;
    settingsValue: Maybe<Scalars['String']>;
};
export declare enum SettingsId {
    DATE_FORMAT = "DATE_FORMAT",
    DATE_TIME_FORMAT = "DATE_TIME_FORMAT",
    EXTERNAL_AUTH_LOGIN_URL = "EXTERNAL_AUTH_LOGIN_URL",
    FEEDBACK_EXHAUST_DAYS = "FEEDBACK_EXHAUST_DAYS",
    FEEDBACK_FREQUENCY_DAYS = "FEEDBACK_FREQUENCY_DAYS",
    FEEDBACK_MAX_REQUESTS = "FEEDBACK_MAX_REQUESTS",
    HEADER_LOGO_FILENAME = "HEADER_LOGO_FILENAME",
    PALETTE_ERROR_MAIN = "PALETTE_ERROR_MAIN",
    PALETTE_INFO_MAIN = "PALETTE_INFO_MAIN",
    PALETTE_PRIMARY_ACCENT = "PALETTE_PRIMARY_ACCENT",
    PALETTE_PRIMARY_CONTRAST = "PALETTE_PRIMARY_CONTRAST",
    PALETTE_PRIMARY_DARK = "PALETTE_PRIMARY_DARK",
    PALETTE_PRIMARY_LIGHT = "PALETTE_PRIMARY_LIGHT",
    PALETTE_PRIMARY_MAIN = "PALETTE_PRIMARY_MAIN",
    PALETTE_SECONDARY_CONTRAST = "PALETTE_SECONDARY_CONTRAST",
    PALETTE_SECONDARY_DARK = "PALETTE_SECONDARY_DARK",
    PALETTE_SECONDARY_LIGHT = "PALETTE_SECONDARY_LIGHT",
    PALETTE_SECONDARY_MAIN = "PALETTE_SECONDARY_MAIN",
    PALETTE_SUCCESS_MAIN = "PALETTE_SUCCESS_MAIN",
    PALETTE_WARNING_MAIN = "PALETTE_WARNING_MAIN",
    PROFILE_PAGE_LINK = "PROFILE_PAGE_LINK",
    TIMEZONE = "TIMEZONE"
}
export declare type Shipment = {
    created: Scalars['DateTime'];
    creatorId: Scalars['Int'];
    externalRef: Maybe<Scalars['String']>;
    id: Scalars['Int'];
    proposal: Proposal;
    proposalPk: Scalars['Int'];
    questionary: Questionary;
    questionaryId: Scalars['Int'];
    samples: Array<Sample>;
    scheduledEventId: Scalars['Int'];
    status: ShipmentStatus;
    title: Scalars['String'];
};
export declare type ShipmentBasisConfig = {
    required: Scalars['Boolean'];
    small_label: Scalars['String'];
    tooltip: Scalars['String'];
};
export declare type ShipmentResponseWrap = {
    rejection: Maybe<Rejection>;
    shipment: Maybe<Shipment>;
};
export declare enum ShipmentStatus {
    DRAFT = "DRAFT",
    SUBMITTED = "SUBMITTED"
}
export declare type ShipmentsFilter = {
    creatorId?: InputMaybe<Scalars['Int']>;
    externalRef?: InputMaybe<Scalars['String']>;
    proposalPk?: InputMaybe<Scalars['Int']>;
    questionaryIds?: InputMaybe<Array<Scalars['Int']>>;
    scheduledEventId?: InputMaybe<Scalars['Int']>;
    shipmentIds?: InputMaybe<Array<Scalars['Int']>>;
    status?: InputMaybe<ShipmentStatus>;
    title?: InputMaybe<Scalars['String']>;
};
export declare type StatusChangingEvent = {
    proposalWorkflowConnectionId: Scalars['Int'];
    statusChangingEvent: Scalars['String'];
    statusChangingEventId: Scalars['Int'];
};
export declare type SubTemplateConfig = {
    addEntryButtonLabel: Scalars['String'];
    maxEntries: Maybe<Scalars['Int']>;
    minEntries: Maybe<Scalars['Int']>;
    required: Scalars['Boolean'];
    small_label: Scalars['String'];
    templateCategory: Scalars['String'];
    templateId: Maybe<Scalars['Int']>;
};
export declare type SubmitProposalsReviewInput = {
    proposals: Array<ProposalPkWithReviewId>;
};
export declare type SubmitTechnicalReviewInput = {
    comment?: InputMaybe<Scalars['String']>;
    files?: InputMaybe<Scalars['String']>;
    proposalPk: Scalars['Int'];
    publicComment?: InputMaybe<Scalars['String']>;
    reviewerId: Scalars['Int'];
    status?: InputMaybe<TechnicalReviewStatus>;
    submitted: Scalars['Boolean'];
    timeAllocation?: InputMaybe<Scalars['Int']>;
};
export declare type SubmitTechnicalReviewsInput = {
    technicalReviews: Array<SubmitTechnicalReviewInput>;
};
export declare type SuccessResponseWrap = {
    isSuccess: Maybe<Scalars['Boolean']>;
    rejection: Maybe<Rejection>;
};
export declare type TechnicalReview = {
    comment: Maybe<Scalars['String']>;
    files: Maybe<Scalars['String']>;
    id: Scalars['Int'];
    proposal: Maybe<Proposal>;
    proposalPk: Scalars['Int'];
    publicComment: Maybe<Scalars['String']>;
    reviewer: Maybe<BasicUserDetails>;
    reviewerId: Scalars['Int'];
    status: Maybe<TechnicalReviewStatus>;
    submitted: Scalars['Boolean'];
    technicalReviewAssignee: Maybe<BasicUserDetails>;
    technicalReviewAssigneeId: Maybe<Scalars['Int']>;
    timeAllocation: Maybe<Scalars['Int']>;
};
export declare type TechnicalReviewResponseWrap = {
    rejection: Maybe<Rejection>;
    technicalReview: Maybe<TechnicalReview>;
};
export declare enum TechnicalReviewStatus {
    FEASIBLE = "FEASIBLE",
    PARTIALLY_FEASIBLE = "PARTIALLY_FEASIBLE",
    UNFEASIBLE = "UNFEASIBLE"
}
export declare type TechnicalReviewsResponseWrap = {
    rejection: Maybe<Rejection>;
    technicalReviews: Maybe<Array<TechnicalReview>>;
};
export declare type Template = {
    complementaryQuestions: Array<Question>;
    description: Maybe<Scalars['String']>;
    group: TemplateGroup;
    groupId: TemplateGroupId;
    isArchived: Scalars['Boolean'];
    json: Scalars['String'];
    name: Scalars['String'];
    questionaryCount: Scalars['Int'];
    steps: Array<TemplateStep>;
    templateId: Scalars['Int'];
};
export declare type TemplateCategory = {
    categoryId: TemplateCategoryId;
    name: Scalars['String'];
};
export declare enum TemplateCategoryId {
    FEEDBACK = "FEEDBACK",
    GENERIC_TEMPLATE = "GENERIC_TEMPLATE",
    PROPOSAL_QUESTIONARY = "PROPOSAL_QUESTIONARY",
    SAMPLE_DECLARATION = "SAMPLE_DECLARATION",
    SHIPMENT_DECLARATION = "SHIPMENT_DECLARATION",
    VISIT_REGISTRATION = "VISIT_REGISTRATION"
}
export declare type TemplateGroup = {
    categoryId: TemplateCategoryId;
    groupId: TemplateGroupId;
};
export declare enum TemplateGroupId {
    FEEDBACK = "FEEDBACK",
    GENERIC_TEMPLATE = "GENERIC_TEMPLATE",
    PROPOSAL = "PROPOSAL",
    PROPOSAL_ESI = "PROPOSAL_ESI",
    SAMPLE = "SAMPLE",
    SAMPLE_ESI = "SAMPLE_ESI",
    SHIPMENT = "SHIPMENT",
    VISIT_REGISTRATION = "VISIT_REGISTRATION"
}
export declare type TemplateImportWithValidation = {
    errors: Array<Scalars['String']>;
    exportDate: Scalars['DateTime'];
    isValid: Scalars['Boolean'];
    json: Scalars['String'];
    questionComparisons: Array<QuestionComparison>;
    version: Scalars['String'];
};
export declare type TemplateImportWithValidationWrap = {
    rejection: Maybe<Rejection>;
    validationResult: Maybe<TemplateImportWithValidation>;
};
export declare type TemplateResponseWrap = {
    rejection: Maybe<Rejection>;
    template: Maybe<Template>;
};
export declare type TemplateStep = {
    fields: Array<QuestionTemplateRelation>;
    topic: Topic;
};
export declare type TemplatesFilter = {
    group?: InputMaybe<TemplateGroupId>;
    isArchived?: InputMaybe<Scalars['Boolean']>;
    templateIds?: InputMaybe<Array<Scalars['Int']>>;
};
export declare type TextInputConfig = {
    htmlQuestion: Maybe<Scalars['String']>;
    isCounterHidden: Scalars['Boolean'];
    isHtmlQuestion: Scalars['Boolean'];
    max: Maybe<Scalars['Int']>;
    min: Maybe<Scalars['Int']>;
    multiline: Scalars['Boolean'];
    placeholder: Scalars['String'];
    required: Scalars['Boolean'];
    small_label: Scalars['String'];
    tooltip: Scalars['String'];
};
export declare type TimeSpan = {
    from?: InputMaybe<Scalars['DateTime']>;
    to?: InputMaybe<Scalars['DateTime']>;
};
export declare type TokenPayloadUnion = AuthJwtApiTokenPayload | AuthJwtPayload;
export declare type TokenResponseWrap = {
    rejection: Maybe<Rejection>;
    token: Maybe<Scalars['String']>;
};
export declare type TokenResult = {
    isValid: Scalars['Boolean'];
    payload: Maybe<TokenPayloadUnion>;
};
export declare type Topic = {
    id: Scalars['Int'];
    isEnabled: Scalars['Boolean'];
    sortOrder: Scalars['Int'];
    templateId: Scalars['Int'];
    title: Scalars['String'];
};
export declare enum TrainingStatus {
    ACTIVE = "ACTIVE",
    EXPIRED = "EXPIRED",
    NONE = "NONE"
}
export declare type Unit = {
    id: Scalars['String'];
    quantity: Scalars['String'];
    siConversionFormula: Scalars['String'];
    symbol: Scalars['String'];
    unit: Scalars['String'];
};
export declare type UnitComparison = {
    conflictResolutionStrategy: ConflictResolutionStrategy;
    existingUnit: Maybe<Unit>;
    newUnit: Unit;
    status: QuestionComparisonStatus;
};
export declare type UnitResponseWrap = {
    rejection: Maybe<Rejection>;
    unit: Maybe<Unit>;
};
export declare type UnitsImportWithValidation = {
    errors: Array<Scalars['String']>;
    exportDate: Scalars['DateTime'];
    isValid: Scalars['Boolean'];
    json: Scalars['String'];
    unitComparisons: Array<UnitComparison>;
    version: Scalars['String'];
};
export declare type UnitsImportWithValidationWrap = {
    rejection: Maybe<Rejection>;
    validationResult: Maybe<UnitsImportWithValidation>;
};
export declare type UnitsResponseWrap = {
    rejection: Maybe<Rejection>;
    units: Maybe<Array<Unit>>;
};
export declare type UpdateAnswerResponseWrap = {
    questionId: Maybe<Scalars['String']>;
    rejection: Maybe<Rejection>;
};
export declare type UpdateApiAccessTokenInput = {
    accessPermissions: Scalars['String'];
    accessTokenId: Scalars['String'];
    name: Scalars['String'];
};
export declare type UpdateCallInput = {
    allocationTimeUnit: AllocationTimeUnits;
    callEnded?: InputMaybe<Scalars['Int']>;
    callReviewEnded?: InputMaybe<Scalars['Int']>;
    callSEPReviewEnded?: InputMaybe<Scalars['Int']>;
    cycleComment: Scalars['String'];
    description?: InputMaybe<Scalars['String']>;
    endCall: Scalars['DateTime'];
    endCycle: Scalars['DateTime'];
    endNotify: Scalars['DateTime'];
    endReview: Scalars['DateTime'];
    endSEPReview?: InputMaybe<Scalars['DateTime']>;
    esiTemplateId?: InputMaybe<Scalars['Int']>;
    id: Scalars['Int'];
    proposalSequence?: InputMaybe<Scalars['Int']>;
    proposalWorkflowId: Scalars['Int'];
    referenceNumberFormat?: InputMaybe<Scalars['String']>;
    shortCode: Scalars['String'];
    startCall: Scalars['DateTime'];
    startCycle: Scalars['DateTime'];
    startNotify: Scalars['DateTime'];
    startReview: Scalars['DateTime'];
    startSEPReview?: InputMaybe<Scalars['DateTime']>;
    submissionMessage?: InputMaybe<Scalars['String']>;
    surveyComment: Scalars['String'];
    templateId: Scalars['Int'];
    title?: InputMaybe<Scalars['String']>;
};
export declare type UpdateProposalStatusInput = {
    description: Scalars['String'];
    id: Scalars['Int'];
    isDefault?: InputMaybe<Scalars['Boolean']>;
    name: Scalars['String'];
    shortCode?: InputMaybe<Scalars['String']>;
};
export declare type UpdateProposalWorkflowInput = {
    description: Scalars['String'];
    id: Scalars['Int'];
    name: Scalars['String'];
};
export declare type User = {
    birthdate: Scalars['DateTime'];
    created: Scalars['String'];
    department: Scalars['String'];
    email: Scalars['String'];
    emailVerified: Scalars['Boolean'];
    firstname: Scalars['String'];
    gender: Scalars['String'];
    id: Scalars['Int'];
    instruments: Array<Instrument>;
    lastname: Scalars['String'];
    middlename: Maybe<Scalars['String']>;
    nationality: Maybe<Scalars['Int']>;
    orcid: Scalars['String'];
    organisation: Scalars['Int'];
    placeholder: Scalars['Boolean'];
    position: Scalars['String'];
    preferredname: Maybe<Scalars['String']>;
    proposals: Array<Proposal>;
    refreshToken: Scalars['String'];
    reviews: Array<Review>;
    roles: Array<Role>;
    seps: Array<Sep>;
    telephone: Scalars['String'];
    telephone_alt: Maybe<Scalars['String']>;
    updated: Scalars['String'];
    user_title: Scalars['String'];
    username: Scalars['String'];
};
export declare type UserProposalsArgs = {
    filter?: InputMaybe<UserProposalsFilter>;
};
export declare type UserReviewsArgs = {
    callId?: InputMaybe<Scalars['Int']>;
    instrumentId?: InputMaybe<Scalars['Int']>;
    reviewer?: InputMaybe<ReviewerFilter>;
    status?: InputMaybe<ReviewStatus>;
};
export declare type UserProposalsFilter = {
    finalStatus?: InputMaybe<ProposalEndStatus>;
    instrumentId?: InputMaybe<Scalars['Int']>;
    managementDecisionSubmitted?: InputMaybe<Scalars['Boolean']>;
};
export declare type UserQueryResult = {
    totalCount: Scalars['Int'];
    users: Array<BasicUserDetails>;
};
export declare type UserResponseWrap = {
    rejection: Maybe<Rejection>;
    user: Maybe<User>;
};
export declare enum UserRole {
    INSTRUMENT_SCIENTIST = "INSTRUMENT_SCIENTIST",
    SAMPLE_SAFETY_REVIEWER = "SAMPLE_SAFETY_REVIEWER",
    SEP_CHAIR = "SEP_CHAIR",
    SEP_REVIEWER = "SEP_REVIEWER",
    SEP_SECRETARY = "SEP_SECRETARY",
    USER = "USER",
    USER_OFFICER = "USER_OFFICER"
}
export declare type Visit = {
    creatorId: Scalars['Int'];
    id: Scalars['Int'];
    proposal: Proposal;
    proposalPk: Scalars['Int'];
    registrations: Array<VisitRegistration>;
    samples: Array<Sample>;
    scheduledEventId: Scalars['Int'];
    status: VisitStatus;
    teamLead: BasicUserDetails;
    teamLeadUserId: Scalars['Int'];
};
export declare type VisitBasisConfig = {
    required: Scalars['Boolean'];
    small_label: Scalars['String'];
    tooltip: Scalars['String'];
};
export declare type VisitRegistration = {
    endsAt: Maybe<Scalars['DateTime']>;
    isRegistrationSubmitted: Scalars['Boolean'];
    questionary: Questionary;
    registrationQuestionaryId: Maybe<Scalars['Int']>;
    startsAt: Maybe<Scalars['DateTime']>;
    trainingExpiryDate: Maybe<Scalars['DateTime']>;
    trainingStatus: TrainingStatus;
    user: BasicUserDetails;
    userId: Scalars['Int'];
    visitId: Scalars['Int'];
};
export declare type VisitRegistrationResponseWrap = {
    registration: Maybe<VisitRegistration>;
    rejection: Maybe<Rejection>;
};
export declare type VisitResponseWrap = {
    rejection: Maybe<Rejection>;
    visit: Maybe<Visit>;
};
export declare enum VisitStatus {
    ACCEPTED = "ACCEPTED",
    DRAFT = "DRAFT",
    SUBMITTED = "SUBMITTED"
}
export declare type VisitsFilter = {
    creatorId?: InputMaybe<Scalars['Int']>;
    proposalPk?: InputMaybe<Scalars['Int']>;
    scheduledEventId?: InputMaybe<Scalars['Int']>;
};
export declare type _Entity = BasicUserDetails | Call | Instrument | Proposal | Rejection | User;
export declare type _Service = {
    /** The sdl representing the federated service capabilities. Includes federation directives, removes federation types, and includes rest of full schema after schema directives have been applied */
    sdl: Maybe<Scalars['String']>;
};
export declare type AssignProposalsToSepMutationVariables = Exact<{
    proposals: Array<ProposalPkWithCallId> | ProposalPkWithCallId;
    sepId: Scalars['Int'];
}>;
export declare type AssignProposalsToSepMutation = {
    assignProposalsToSep: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
        nextProposalStatus: {
            id: number | null;
            shortCode: string | null;
            name: string | null;
        } | null;
    };
};
export declare type AssignReviewersToSepMutationVariables = Exact<{
    memberIds: Array<Scalars['Int']> | Scalars['Int'];
    sepId: Scalars['Int'];
}>;
export declare type AssignReviewersToSepMutation = {
    assignReviewersToSEP: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
        sep: {
            id: number;
        } | null;
    };
};
export declare type AssignChairOrSecretaryMutationVariables = Exact<{
    assignChairOrSecretaryToSEPInput: AssignChairOrSecretaryToSepInput;
}>;
export declare type AssignChairOrSecretaryMutation = {
    assignChairOrSecretary: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
        sep: {
            id: number;
        } | null;
    };
};
export declare type AssignSepReviewersToProposalMutationVariables = Exact<{
    memberIds: Array<Scalars['Int']> | Scalars['Int'];
    sepId: Scalars['Int'];
    proposalPk: Scalars['Int'];
}>;
export declare type AssignSepReviewersToProposalMutation = {
    assignSepReviewersToProposal: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
        sep: {
            id: number;
        } | null;
    };
};
export declare type CreateSepMutationVariables = Exact<{
    code: Scalars['String'];
    description: Scalars['String'];
    numberRatingsRequired: Scalars['Int'];
    active: Scalars['Boolean'];
}>;
export declare type CreateSepMutation = {
    createSEP: {
        sep: {
            id: number;
            code: string;
            description: string;
            numberRatingsRequired: number;
            active: boolean;
            sepChair: {
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            } | null;
            sepSecretary: {
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            } | null;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type DeleteSepMutationVariables = Exact<{
    id: Scalars['Int'];
}>;
export declare type DeleteSepMutation = {
    deleteSEP: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
        sep: {
            id: number;
        } | null;
    };
};
export declare type SepMeetingDecisionFragment = {
    proposalPk: number;
    recommendation: ProposalEndStatus | null;
    commentForUser: string | null;
    commentForManagement: string | null;
    rankOrder: number | null;
    submitted: boolean;
    submittedBy: number | null;
};
export declare type GetInstrumentsBySepQueryVariables = Exact<{
    sepId: Scalars['Int'];
    callId: Scalars['Int'];
}>;
export declare type GetInstrumentsBySepQuery = {
    instrumentsBySep: Array<{
        id: number;
        name: string;
        shortCode: string;
        description: string;
        availabilityTime: number | null;
        submitted: boolean | null;
        scientists: Array<{
            id: number;
            firstname: string;
            lastname: string;
            preferredname: string | null;
            organisation: string;
            position: string;
            created: any | null;
            placeholder: boolean | null;
        }>;
    }> | null;
};
export declare type GetUserSepsQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetUserSepsQuery = {
    me: {
        seps: Array<{
            id: number;
            code: string;
            description: string;
            numberRatingsRequired: number;
            active: boolean;
            sepChair: {
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            } | null;
            sepSecretary: {
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            } | null;
        }>;
    } | null;
};
export declare type GetSepQueryVariables = Exact<{
    id: Scalars['Int'];
}>;
export declare type GetSepQuery = {
    sep: {
        id: number;
        code: string;
        description: string;
        numberRatingsRequired: number;
        active: boolean;
        sepChair: {
            id: number;
            firstname: string;
            lastname: string;
            preferredname: string | null;
            organisation: string;
            position: string;
            created: any | null;
            placeholder: boolean | null;
        } | null;
        sepSecretary: {
            id: number;
            firstname: string;
            lastname: string;
            preferredname: string | null;
            organisation: string;
            position: string;
            created: any | null;
            placeholder: boolean | null;
        } | null;
    } | null;
};
export declare type GetSepMembersQueryVariables = Exact<{
    sepId: Scalars['Int'];
}>;
export declare type GetSepMembersQuery = {
    sepMembers: Array<{
        userId: number;
        sepId: number;
        role: {
            id: number;
            shortCode: string;
            title: string;
        } | null;
        user: {
            id: number;
            firstname: string;
            lastname: string;
            preferredname: string | null;
            organisation: string;
            position: string;
            created: any | null;
            placeholder: boolean | null;
        };
    }> | null;
};
export declare type GetSepProposalQueryVariables = Exact<{
    sepId: Scalars['Int'];
    proposalPk: Scalars['Int'];
}>;
export declare type GetSepProposalQuery = {
    sepProposal: {
        proposalPk: number;
        sepId: number;
        sepTimeAllocation: number | null;
        instrumentSubmitted: boolean;
        proposal: {
            primaryKey: number;
            title: string;
            abstract: string;
            statusId: number;
            publicStatus: ProposalPublicStatus;
            proposalId: string;
            finalStatus: ProposalEndStatus | null;
            commentForUser: string | null;
            commentForManagement: string | null;
            created: any;
            updated: any;
            callId: number;
            questionaryId: number;
            notified: boolean;
            submitted: boolean;
            managementTimeAllocation: number | null;
            managementDecisionSubmitted: boolean;
            proposer: {
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            } | null;
            users: Array<{
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            }>;
            questionary: {
                questionaryId: number;
                templateId: number;
                created: any;
                steps: Array<{
                    isCompleted: boolean;
                    topic: {
                        title: string;
                        id: number;
                        templateId: number;
                        sortOrder: number;
                        isEnabled: boolean;
                    };
                    fields: Array<{
                        answerId: number | null;
                        sortOrder: number;
                        topicId: number;
                        dependenciesOperator: DependenciesLogicOperator | null;
                        value: any | null;
                        question: {
                            id: string;
                            question: string;
                            naturalKey: string;
                            dataType: DataType;
                            categoryId: TemplateCategoryId;
                            config: {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                minDate: string | null;
                                maxDate: string | null;
                                defaultDate: string | null;
                                includeTime: boolean;
                            } | {
                                html: string;
                                plain: string;
                                omitFromPdf: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                file_type: Array<string>;
                                max_files: number;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                titlePlaceholder: string;
                                questionLabel: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                numberValueConstraint: NumberValueConstraint | null;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                tooltip: string;
                            } | {
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                max: number | null;
                            } | {
                                titlePlaceholder: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                esiTemplateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                tooltip: string;
                            } | {
                                variant: string;
                                options: Array<string>;
                                isMultipleSelect: boolean;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                min: number | null;
                                max: number | null;
                                multiline: boolean;
                                placeholder: string;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                htmlQuestion: string | null;
                                isHtmlQuestion: boolean;
                                isCounterHidden: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            };
                        };
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                        dependencies: Array<{
                            questionId: string;
                            dependencyId: string;
                            dependencyNaturalKey: string;
                            condition: {
                                condition: EvaluatorOperator;
                                params: any;
                            };
                        }>;
                    }>;
                }>;
            };
            technicalReview: {
                id: number;
                comment: string | null;
                publicComment: string | null;
                timeAllocation: number | null;
                status: TechnicalReviewStatus | null;
                proposalPk: number;
                submitted: boolean;
                files: string | null;
                technicalReviewAssigneeId: number | null;
                reviewer: {
                    id: number;
                    firstname: string;
                    lastname: string;
                    preferredname: string | null;
                    organisation: string;
                    position: string;
                    created: any | null;
                    placeholder: boolean | null;
                } | null;
                technicalReviewAssignee: {
                    id: number;
                    firstname: string;
                    lastname: string;
                } | null;
            } | null;
            reviews: Array<{
                id: number;
                grade: number | null;
                comment: string | null;
                status: ReviewStatus;
                userID: number;
                sepID: number;
                reviewer: {
                    firstname: string;
                    lastname: string;
                    id: number;
                } | null;
            }> | null;
            instrument: {
                id: number;
                name: string;
                shortCode: string;
            } | null;
            call: {
                id: number;
                shortCode: string;
                allocationTimeUnit: AllocationTimeUnits;
            } | null;
            status: {
                id: number;
                shortCode: string;
                name: string;
                description: string;
                isDefault: boolean;
            } | null;
            sepMeetingDecision: {
                proposalPk: number;
                recommendation: ProposalEndStatus | null;
                commentForUser: string | null;
                commentForManagement: string | null;
                rankOrder: number | null;
                submitted: boolean;
                submittedBy: number | null;
            } | null;
        };
    } | null;
};
export declare type GetSepProposalsQueryVariables = Exact<{
    sepId: Scalars['Int'];
    callId?: InputMaybe<Scalars['Int']>;
}>;
export declare type GetSepProposalsQuery = {
    sepProposals: Array<{
        proposalPk: number;
        dateAssigned: any;
        sepId: number;
        sepTimeAllocation: number | null;
        proposal: {
            title: string;
            primaryKey: number;
            proposalId: string;
            status: {
                id: number;
                shortCode: string;
                name: string;
                description: string;
                isDefault: boolean;
            } | null;
        };
        assignments: Array<{
            sepMemberUserId: number | null;
            dateAssigned: any;
            user: {
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            } | null;
            role: {
                id: number;
                shortCode: string;
                title: string;
            } | null;
            review: {
                id: number;
                status: ReviewStatus;
                comment: string | null;
                grade: number | null;
                sepID: number;
            } | null;
        }> | null;
    }> | null;
};
export declare type SepProposalsByInstrumentQueryVariables = Exact<{
    instrumentId: Scalars['Int'];
    sepId: Scalars['Int'];
    callId: Scalars['Int'];
}>;
export declare type SepProposalsByInstrumentQuery = {
    sepProposalsByInstrument: Array<{
        sepTimeAllocation: number | null;
        proposal: {
            primaryKey: number;
            title: string;
            proposalId: string;
            status: {
                id: number;
                shortCode: string;
                name: string;
                description: string;
                isDefault: boolean;
            } | null;
            sepMeetingDecision: {
                proposalPk: number;
                recommendation: ProposalEndStatus | null;
                commentForUser: string | null;
                commentForManagement: string | null;
                rankOrder: number | null;
                submitted: boolean;
                submittedBy: number | null;
            } | null;
            reviews: Array<{
                id: number;
                comment: string | null;
                grade: number | null;
                status: ReviewStatus;
            }> | null;
            technicalReview: {
                publicComment: string | null;
                status: TechnicalReviewStatus | null;
                timeAllocation: number | null;
            } | null;
        };
        assignments: Array<{
            sepMemberUserId: number | null;
        }> | null;
    }> | null;
};
export declare type GetSepReviewersQueryVariables = Exact<{
    sepId: Scalars['Int'];
}>;
export declare type GetSepReviewersQuery = {
    sepReviewers: Array<{
        userId: number;
        sepId: number;
        role: {
            id: number;
            shortCode: string;
            title: string;
        } | null;
        user: {
            id: number;
            firstname: string;
            lastname: string;
            preferredname: string | null;
            organisation: string;
            position: string;
            created: any | null;
            placeholder: boolean | null;
        };
    }> | null;
};
export declare type GetSePsQueryVariables = Exact<{
    filter: Scalars['String'];
    active?: InputMaybe<Scalars['Boolean']>;
}>;
export declare type GetSePsQuery = {
    seps: {
        totalCount: number;
        seps: Array<{
            id: number;
            code: string;
            description: string;
            numberRatingsRequired: number;
            active: boolean;
            sepChair: {
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            } | null;
            sepSecretary: {
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            } | null;
        }>;
    } | null;
};
export declare type RemoveProposalsFromSepMutationVariables = Exact<{
    proposalPks: Array<Scalars['Int']> | Scalars['Int'];
    sepId: Scalars['Int'];
}>;
export declare type RemoveProposalsFromSepMutation = {
    removeProposalsFromSep: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
        sep: {
            id: number;
        } | null;
    };
};
export declare type RemoveMemberFromSepMutationVariables = Exact<{
    memberId: Scalars['Int'];
    sepId: Scalars['Int'];
    roleId: UserRole;
}>;
export declare type RemoveMemberFromSepMutation = {
    removeMemberFromSep: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
        sep: {
            id: number;
        } | null;
    };
};
export declare type RemoveMemberFromSepProposalMutationVariables = Exact<{
    memberId: Scalars['Int'];
    sepId: Scalars['Int'];
    proposalPk: Scalars['Int'];
}>;
export declare type RemoveMemberFromSepProposalMutation = {
    removeMemberFromSEPProposal: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
        sep: {
            id: number;
        } | null;
    };
};
export declare type ReorderSepMeetingDecisionProposalsMutationVariables = Exact<{
    reorderSepMeetingDecisionProposalsInput: ReorderSepMeetingDecisionProposalsInput;
}>;
export declare type ReorderSepMeetingDecisionProposalsMutation = {
    reorderSepMeetingDecisionProposals: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
        sepMeetingDecision: {
            proposalPk: number;
        } | null;
    };
};
export declare type SaveSepMeetingDecisionMutationVariables = Exact<{
    saveSepMeetingDecisionInput: SaveSepMeetingDecisionInput;
}>;
export declare type SaveSepMeetingDecisionMutation = {
    saveSepMeetingDecision: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
        sepMeetingDecision: {
            proposalPk: number;
        } | null;
    };
};
export declare type UpdateSepMutationVariables = Exact<{
    id: Scalars['Int'];
    code: Scalars['String'];
    description: Scalars['String'];
    numberRatingsRequired: Scalars['Int'];
    active: Scalars['Boolean'];
}>;
export declare type UpdateSepMutation = {
    updateSEP: {
        sep: {
            id: number;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type UpdateSepTimeAllocationMutationVariables = Exact<{
    sepId: Scalars['Int'];
    proposalPk: Scalars['Int'];
    sepTimeAllocation?: InputMaybe<Scalars['Int']>;
}>;
export declare type UpdateSepTimeAllocationMutation = {
    updateSEPTimeAllocation: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type AddClientLogMutationVariables = Exact<{
    error: Scalars['String'];
}>;
export declare type AddClientLogMutation = {
    addClientLog: {
        isSuccess: boolean | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type CountryFragment = {
    id: number;
    value: string;
};
export declare type CreateApiAccessTokenMutationVariables = Exact<{
    name: Scalars['String'];
    accessPermissions: Scalars['String'];
}>;
export declare type CreateApiAccessTokenMutation = {
    createApiAccessToken: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
        apiAccessToken: {
            id: string;
            name: string;
            accessToken: string;
            accessPermissions: string;
        } | null;
    };
};
export declare type CreateInstitutionMutationVariables = Exact<{
    name: Scalars['String'];
    country: Scalars['Int'];
    verified: Scalars['Boolean'];
}>;
export declare type CreateInstitutionMutation = {
    createInstitution: {
        institution: {
            id: number;
            name: string;
            verified: boolean;
            country: {
                id: number;
                value: string;
            } | null;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type DeleteApiAccessTokenMutationVariables = Exact<{
    accessTokenId: Scalars['String'];
}>;
export declare type DeleteApiAccessTokenMutation = {
    deleteApiAccessToken: {
        isSuccess: boolean | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type DeleteInstitutionMutationVariables = Exact<{
    id: Scalars['Int'];
}>;
export declare type DeleteInstitutionMutation = {
    deleteInstitution: {
        institution: {
            id: number;
            verified: boolean;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type UnitFragment = {
    id: string;
    unit: string;
    quantity: string;
    symbol: string;
    siConversionFormula: string;
};
export declare type GetAllApiAccessTokensAndPermissionsQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetAllApiAccessTokensAndPermissionsQuery = {
    allAccessTokensAndPermissions: Array<{
        id: string;
        name: string;
        accessToken: string;
        accessPermissions: string;
    }> | null;
};
export declare type GetAllQueriesAndMutationsQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetAllQueriesAndMutationsQuery = {
    queriesAndMutations: {
        queries: Array<string>;
        mutations: Array<string>;
    } | null;
};
export declare type GetFeaturesQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetFeaturesQuery = {
    features: Array<{
        id: FeatureId;
        isEnabled: boolean;
        description: string;
    }>;
};
export declare type GetInstitutionsQueryVariables = Exact<{
    filter?: InputMaybe<InstitutionsFilter>;
}>;
export declare type GetInstitutionsQuery = {
    institutions: Array<{
        id: number;
        name: string;
        verified: boolean;
    }> | null;
};
export declare type GetInstitutionsWithCountryQueryVariables = Exact<{
    filter?: InputMaybe<InstitutionsFilter>;
}>;
export declare type GetInstitutionsWithCountryQuery = {
    institutions: Array<{
        id: number;
        name: string;
        verified: boolean;
        country: {
            id: number;
            value: string;
        } | null;
    }> | null;
};
export declare type GetPageContentQueryVariables = Exact<{
    id: PageName;
}>;
export declare type GetPageContentQuery = {
    getPageContent: string | null;
};
export declare type GetQuantitiesQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetQuantitiesQuery = {
    quantities: Array<{
        id: string;
    }>;
};
export declare type GetSettingsQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetSettingsQuery = {
    settings: Array<{
        id: SettingsId;
        settingsValue: string | null;
        description: string | null;
    }>;
};
export declare type MergeInstitutionsMutationVariables = Exact<{
    institutionIdFrom: Scalars['Int'];
    institutionIdInto: Scalars['Int'];
    newTitle: Scalars['String'];
}>;
export declare type MergeInstitutionsMutation = {
    mergeInstitutions: {
        institution: {
            id: number;
            verified: boolean;
            name: string;
            country: {
                id: number;
                value: string;
            } | null;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type PrepareDbMutationVariables = Exact<{
    includeSeeds: Scalars['Boolean'];
}>;
export declare type PrepareDbMutation = {
    prepareDB: {
        log: string | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type RejectionFragment = {
    reason: string;
    context: string | null;
    exception: string | null;
};
export declare type SetPageContentMutationVariables = Exact<{
    id: PageName;
    text: Scalars['String'];
}>;
export declare type SetPageContentMutation = {
    setPageContent: {
        page: {
            id: number;
            content: string | null;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type UpdateApiAccessTokenMutationVariables = Exact<{
    accessTokenId: Scalars['String'];
    name: Scalars['String'];
    accessPermissions: Scalars['String'];
}>;
export declare type UpdateApiAccessTokenMutation = {
    updateApiAccessToken: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
        apiAccessToken: {
            id: string;
            name: string;
            accessToken: string;
            accessPermissions: string;
        } | null;
    };
};
export declare type UpdateInstitutionMutationVariables = Exact<{
    id: Scalars['Int'];
    name: Scalars['String'];
    country: Scalars['Int'];
    verified: Scalars['Boolean'];
}>;
export declare type UpdateInstitutionMutation = {
    updateInstitution: {
        institution: {
            id: number;
            verified: boolean;
            name: string;
            country: {
                id: number;
                value: string;
            } | null;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type AssignInstrumentsToCallMutationVariables = Exact<{
    instrumentIds: Array<Scalars['Int']> | Scalars['Int'];
    callId: Scalars['Int'];
}>;
export declare type AssignInstrumentsToCallMutation = {
    assignInstrumentsToCall: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
        call: {
            id: number;
        } | null;
    };
};
export declare type CreateCallMutationVariables = Exact<{
    shortCode: Scalars['String'];
    startCall: Scalars['DateTime'];
    endCall: Scalars['DateTime'];
    startReview: Scalars['DateTime'];
    endReview: Scalars['DateTime'];
    startSEPReview?: InputMaybe<Scalars['DateTime']>;
    endSEPReview?: InputMaybe<Scalars['DateTime']>;
    startNotify: Scalars['DateTime'];
    endNotify: Scalars['DateTime'];
    startCycle: Scalars['DateTime'];
    endCycle: Scalars['DateTime'];
    cycleComment: Scalars['String'];
    submissionMessage?: InputMaybe<Scalars['String']>;
    surveyComment: Scalars['String'];
    allocationTimeUnit: AllocationTimeUnits;
    referenceNumberFormat?: InputMaybe<Scalars['String']>;
    proposalWorkflowId: Scalars['Int'];
    templateId: Scalars['Int'];
    esiTemplateId?: InputMaybe<Scalars['Int']>;
    title?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
}>;
export declare type CreateCallMutation = {
    createCall: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
        call: {
            id: number;
            shortCode: string;
            startCall: any;
            endCall: any;
            startReview: any;
            endReview: any;
            startSEPReview: any | null;
            endSEPReview: any | null;
            startNotify: any;
            endNotify: any;
            startCycle: any;
            endCycle: any;
            cycleComment: string;
            surveyComment: string;
            referenceNumberFormat: string | null;
            proposalWorkflowId: number | null;
            templateId: number;
            esiTemplateId: number | null;
            allocationTimeUnit: AllocationTimeUnits;
            proposalCount: number;
            title: string | null;
            description: string | null;
            submissionMessage: string | null;
            instruments: Array<{
                id: number;
                name: string;
                shortCode: string;
                description: string;
                availabilityTime: number | null;
                submitted: boolean | null;
                scientists: Array<{
                    id: number;
                    firstname: string;
                    lastname: string;
                    preferredname: string | null;
                    organisation: string;
                    position: string;
                    created: any | null;
                    placeholder: boolean | null;
                }>;
            }>;
            proposalWorkflow: {
                id: number;
                name: string;
                description: string;
            } | null;
            template: {
                templateId: number;
                name: string;
                isArchived: boolean;
            };
        } | null;
    };
};
export declare type DeleteCallMutationVariables = Exact<{
    id: Scalars['Int'];
}>;
export declare type DeleteCallMutation = {
    deleteCall: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
        call: {
            id: number;
        } | null;
    };
};
export declare type CallFragment = {
    id: number;
    shortCode: string;
    startCall: any;
    endCall: any;
    startReview: any;
    endReview: any;
    startSEPReview: any | null;
    endSEPReview: any | null;
    startNotify: any;
    endNotify: any;
    startCycle: any;
    endCycle: any;
    cycleComment: string;
    surveyComment: string;
    referenceNumberFormat: string | null;
    proposalWorkflowId: number | null;
    templateId: number;
    esiTemplateId: number | null;
    allocationTimeUnit: AllocationTimeUnits;
    proposalCount: number;
    title: string | null;
    description: string | null;
    submissionMessage: string | null;
    instruments: Array<{
        id: number;
        name: string;
        shortCode: string;
        description: string;
        availabilityTime: number | null;
        submitted: boolean | null;
        scientists: Array<{
            id: number;
            firstname: string;
            lastname: string;
            preferredname: string | null;
            organisation: string;
            position: string;
            created: any | null;
            placeholder: boolean | null;
        }>;
    }>;
    proposalWorkflow: {
        id: number;
        name: string;
        description: string;
    } | null;
    template: {
        templateId: number;
        name: string;
        isArchived: boolean;
    };
};
export declare type GetCallQueryVariables = Exact<{
    id: Scalars['Int'];
}>;
export declare type GetCallQuery = {
    call: {
        id: number;
        shortCode: string;
        startCall: any;
        endCall: any;
        startReview: any;
        endReview: any;
        startSEPReview: any | null;
        endSEPReview: any | null;
        startNotify: any;
        endNotify: any;
        startCycle: any;
        endCycle: any;
        cycleComment: string;
        surveyComment: string;
        referenceNumberFormat: string | null;
        proposalWorkflowId: number | null;
        templateId: number;
        esiTemplateId: number | null;
        allocationTimeUnit: AllocationTimeUnits;
        proposalCount: number;
        title: string | null;
        description: string | null;
        submissionMessage: string | null;
        instruments: Array<{
            id: number;
            name: string;
            shortCode: string;
            description: string;
            availabilityTime: number | null;
            submitted: boolean | null;
            scientists: Array<{
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            }>;
        }>;
        proposalWorkflow: {
            id: number;
            name: string;
            description: string;
        } | null;
        template: {
            templateId: number;
            name: string;
            isArchived: boolean;
        };
    } | null;
};
export declare type GetCallsQueryVariables = Exact<{
    filter?: InputMaybe<CallsFilter>;
}>;
export declare type GetCallsQuery = {
    calls: Array<{
        id: number;
        shortCode: string;
        startCall: any;
        endCall: any;
        startReview: any;
        endReview: any;
        startSEPReview: any | null;
        endSEPReview: any | null;
        startNotify: any;
        endNotify: any;
        startCycle: any;
        endCycle: any;
        cycleComment: string;
        surveyComment: string;
        referenceNumberFormat: string | null;
        proposalWorkflowId: number | null;
        templateId: number;
        esiTemplateId: number | null;
        allocationTimeUnit: AllocationTimeUnits;
        proposalCount: number;
        title: string | null;
        description: string | null;
        submissionMessage: string | null;
        instruments: Array<{
            id: number;
            name: string;
            shortCode: string;
            description: string;
            availabilityTime: number | null;
            submitted: boolean | null;
            scientists: Array<{
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            }>;
        }>;
        proposalWorkflow: {
            id: number;
            name: string;
            description: string;
        } | null;
        template: {
            templateId: number;
            name: string;
            isArchived: boolean;
        };
    }> | null;
};
export declare type GetCallsByInstrumentScientistQueryVariables = Exact<{
    scientistId: Scalars['Int'];
}>;
export declare type GetCallsByInstrumentScientistQuery = {
    callsByInstrumentScientist: Array<{
        id: number;
        shortCode: string;
        startCall: any;
        endCall: any;
        startReview: any;
        endReview: any;
        startSEPReview: any | null;
        endSEPReview: any | null;
        startNotify: any;
        endNotify: any;
        startCycle: any;
        endCycle: any;
        cycleComment: string;
        surveyComment: string;
        referenceNumberFormat: string | null;
        proposalWorkflowId: number | null;
        templateId: number;
        esiTemplateId: number | null;
        allocationTimeUnit: AllocationTimeUnits;
        proposalCount: number;
        title: string | null;
        description: string | null;
        submissionMessage: string | null;
        instruments: Array<{
            id: number;
            name: string;
            shortCode: string;
            description: string;
            availabilityTime: number | null;
            submitted: boolean | null;
            scientists: Array<{
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            }>;
        }>;
        proposalWorkflow: {
            id: number;
            name: string;
            description: string;
        } | null;
        template: {
            templateId: number;
            name: string;
            isArchived: boolean;
        };
    }> | null;
};
export declare type RemoveAssignedInstrumentFromCallMutationVariables = Exact<{
    instrumentId: Scalars['Int'];
    callId: Scalars['Int'];
}>;
export declare type RemoveAssignedInstrumentFromCallMutation = {
    removeAssignedInstrumentFromCall: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
        call: {
            id: number;
        } | null;
    };
};
export declare type UpdateCallMutationVariables = Exact<{
    id: Scalars['Int'];
    shortCode: Scalars['String'];
    startCall: Scalars['DateTime'];
    endCall: Scalars['DateTime'];
    startReview: Scalars['DateTime'];
    endReview: Scalars['DateTime'];
    startSEPReview?: InputMaybe<Scalars['DateTime']>;
    endSEPReview?: InputMaybe<Scalars['DateTime']>;
    startNotify: Scalars['DateTime'];
    endNotify: Scalars['DateTime'];
    startCycle: Scalars['DateTime'];
    endCycle: Scalars['DateTime'];
    cycleComment: Scalars['String'];
    submissionMessage?: InputMaybe<Scalars['String']>;
    surveyComment: Scalars['String'];
    allocationTimeUnit: AllocationTimeUnits;
    referenceNumberFormat?: InputMaybe<Scalars['String']>;
    proposalWorkflowId: Scalars['Int'];
    templateId: Scalars['Int'];
    esiTemplateId?: InputMaybe<Scalars['Int']>;
    title?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
}>;
export declare type UpdateCallMutation = {
    updateCall: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
        call: {
            id: number;
            shortCode: string;
            startCall: any;
            endCall: any;
            startReview: any;
            endReview: any;
            startSEPReview: any | null;
            endSEPReview: any | null;
            startNotify: any;
            endNotify: any;
            startCycle: any;
            endCycle: any;
            cycleComment: string;
            surveyComment: string;
            referenceNumberFormat: string | null;
            proposalWorkflowId: number | null;
            templateId: number;
            esiTemplateId: number | null;
            allocationTimeUnit: AllocationTimeUnits;
            proposalCount: number;
            title: string | null;
            description: string | null;
            submissionMessage: string | null;
            instruments: Array<{
                id: number;
                name: string;
                shortCode: string;
                description: string;
                availabilityTime: number | null;
                submitted: boolean | null;
                scientists: Array<{
                    id: number;
                    firstname: string;
                    lastname: string;
                    preferredname: string | null;
                    organisation: string;
                    position: string;
                    created: any | null;
                    placeholder: boolean | null;
                }>;
            }>;
            proposalWorkflow: {
                id: number;
                name: string;
                description: string;
            } | null;
            template: {
                templateId: number;
                name: string;
                isArchived: boolean;
            };
        } | null;
    };
};
export declare type CreateEsiMutationVariables = Exact<{
    scheduledEventId: Scalars['Int'];
}>;
export declare type CreateEsiMutation = {
    createEsi: {
        esi: {
            id: number;
            creatorId: number;
            questionaryId: number;
            isSubmitted: boolean;
            created: any;
            questionary: {
                isCompleted: boolean;
                questionaryId: number;
                templateId: number;
                created: any;
                steps: Array<{
                    isCompleted: boolean;
                    topic: {
                        title: string;
                        id: number;
                        templateId: number;
                        sortOrder: number;
                        isEnabled: boolean;
                    };
                    fields: Array<{
                        answerId: number | null;
                        sortOrder: number;
                        topicId: number;
                        dependenciesOperator: DependenciesLogicOperator | null;
                        value: any | null;
                        question: {
                            id: string;
                            question: string;
                            naturalKey: string;
                            dataType: DataType;
                            categoryId: TemplateCategoryId;
                            config: {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                minDate: string | null;
                                maxDate: string | null;
                                defaultDate: string | null;
                                includeTime: boolean;
                            } | {
                                html: string;
                                plain: string;
                                omitFromPdf: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                file_type: Array<string>;
                                max_files: number;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                titlePlaceholder: string;
                                questionLabel: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                numberValueConstraint: NumberValueConstraint | null;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                tooltip: string;
                            } | {
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                max: number | null;
                            } | {
                                titlePlaceholder: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                esiTemplateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                tooltip: string;
                            } | {
                                variant: string;
                                options: Array<string>;
                                isMultipleSelect: boolean;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                min: number | null;
                                max: number | null;
                                multiline: boolean;
                                placeholder: string;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                htmlQuestion: string | null;
                                isHtmlQuestion: boolean;
                                isCounterHidden: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            };
                        };
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                        dependencies: Array<{
                            questionId: string;
                            dependencyId: string;
                            dependencyNaturalKey: string;
                            condition: {
                                condition: EvaluatorOperator;
                                params: any;
                            };
                        }>;
                    }>;
                }>;
            };
            sampleEsis: Array<{
                sampleId: number;
                esiId: number;
                questionaryId: number;
                isSubmitted: boolean;
                sample: {
                    id: number;
                    title: string;
                    creatorId: number;
                    questionaryId: number;
                    safetyStatus: SampleStatus;
                    safetyComment: string;
                    isPostProposalSubmission: boolean;
                    created: any;
                    proposalPk: number;
                    questionId: string;
                };
                questionary: {
                    isCompleted: boolean;
                };
            }>;
            proposal: {
                primaryKey: number;
                proposalId: string;
                title: string;
                samples: Array<{
                    id: number;
                    title: string;
                    creatorId: number;
                    questionaryId: number;
                    safetyStatus: SampleStatus;
                    safetyComment: string;
                    isPostProposalSubmission: boolean;
                    created: any;
                    proposalPk: number;
                    questionId: string;
                }> | null;
                questionary: {
                    questionaryId: number;
                    templateId: number;
                    created: any;
                    steps: Array<{
                        isCompleted: boolean;
                        topic: {
                            title: string;
                            id: number;
                            templateId: number;
                            sortOrder: number;
                            isEnabled: boolean;
                        };
                        fields: Array<{
                            answerId: number | null;
                            sortOrder: number;
                            topicId: number;
                            dependenciesOperator: DependenciesLogicOperator | null;
                            value: any | null;
                            question: {
                                id: string;
                                question: string;
                                naturalKey: string;
                                dataType: DataType;
                                categoryId: TemplateCategoryId;
                                config: {
                                    small_label: string;
                                    required: boolean;
                                    tooltip: string;
                                } | {
                                    small_label: string;
                                    required: boolean;
                                    tooltip: string;
                                    minDate: string | null;
                                    maxDate: string | null;
                                    defaultDate: string | null;
                                    includeTime: boolean;
                                } | {
                                    html: string;
                                    plain: string;
                                    omitFromPdf: boolean;
                                } | {
                                    small_label: string;
                                    required: boolean;
                                    tooltip: string;
                                } | {
                                    file_type: Array<string>;
                                    max_files: number;
                                    small_label: string;
                                    required: boolean;
                                    tooltip: string;
                                } | {
                                    titlePlaceholder: string;
                                    questionLabel: string;
                                } | {
                                    small_label: string;
                                    required: boolean;
                                    tooltip: string;
                                    units: Array<{
                                        id: string;
                                        unit: string;
                                        quantity: string;
                                        symbol: string;
                                        siConversionFormula: string;
                                    }>;
                                } | {
                                    numberValueConstraint: NumberValueConstraint | null;
                                    small_label: string;
                                    required: boolean;
                                    tooltip: string;
                                    units: Array<{
                                        id: string;
                                        unit: string;
                                        quantity: string;
                                        symbol: string;
                                        siConversionFormula: string;
                                    }>;
                                } | {
                                    tooltip: string;
                                } | {
                                    tooltip: string;
                                } | {
                                    small_label: string;
                                    required: boolean;
                                    tooltip: string;
                                    max: number | null;
                                } | {
                                    titlePlaceholder: string;
                                } | {
                                    addEntryButtonLabel: string;
                                    minEntries: number | null;
                                    maxEntries: number | null;
                                    templateId: number | null;
                                    esiTemplateId: number | null;
                                    templateCategory: string;
                                    required: boolean;
                                    small_label: string;
                                } | {
                                    tooltip: string;
                                } | {
                                    variant: string;
                                    options: Array<string>;
                                    isMultipleSelect: boolean;
                                    small_label: string;
                                    required: boolean;
                                    tooltip: string;
                                } | {
                                    small_label: string;
                                    required: boolean;
                                    tooltip: string;
                                } | {
                                    addEntryButtonLabel: string;
                                    minEntries: number | null;
                                    maxEntries: number | null;
                                    templateId: number | null;
                                    templateCategory: string;
                                    required: boolean;
                                    small_label: string;
                                } | {
                                    min: number | null;
                                    max: number | null;
                                    multiline: boolean;
                                    placeholder: string;
                                    small_label: string;
                                    required: boolean;
                                    tooltip: string;
                                    htmlQuestion: string | null;
                                    isHtmlQuestion: boolean;
                                    isCounterHidden: boolean;
                                } | {
                                    small_label: string;
                                    required: boolean;
                                    tooltip: string;
                                };
                            };
                            config: {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                minDate: string | null;
                                maxDate: string | null;
                                defaultDate: string | null;
                                includeTime: boolean;
                            } | {
                                html: string;
                                plain: string;
                                omitFromPdf: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                file_type: Array<string>;
                                max_files: number;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                titlePlaceholder: string;
                                questionLabel: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                numberValueConstraint: NumberValueConstraint | null;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                tooltip: string;
                            } | {
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                max: number | null;
                            } | {
                                titlePlaceholder: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                esiTemplateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                tooltip: string;
                            } | {
                                variant: string;
                                options: Array<string>;
                                isMultipleSelect: boolean;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                min: number | null;
                                max: number | null;
                                multiline: boolean;
                                placeholder: string;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                htmlQuestion: string | null;
                                isHtmlQuestion: boolean;
                                isCounterHidden: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            };
                            dependencies: Array<{
                                questionId: string;
                                dependencyId: string;
                                dependencyNaturalKey: string;
                                condition: {
                                    condition: EvaluatorOperator;
                                    params: any;
                                };
                            }>;
                        }>;
                    }>;
                };
            };
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type EsiFragment = {
    id: number;
    creatorId: number;
    questionaryId: number;
    isSubmitted: boolean;
    created: any;
};
export declare type GetEsiQueryVariables = Exact<{
    esiId: Scalars['Int'];
}>;
export declare type GetEsiQuery = {
    esi: {
        id: number;
        creatorId: number;
        questionaryId: number;
        isSubmitted: boolean;
        created: any;
        questionary: {
            isCompleted: boolean;
            questionaryId: number;
            templateId: number;
            created: any;
            steps: Array<{
                isCompleted: boolean;
                topic: {
                    title: string;
                    id: number;
                    templateId: number;
                    sortOrder: number;
                    isEnabled: boolean;
                };
                fields: Array<{
                    answerId: number | null;
                    sortOrder: number;
                    topicId: number;
                    dependenciesOperator: DependenciesLogicOperator | null;
                    value: any | null;
                    question: {
                        id: string;
                        question: string;
                        naturalKey: string;
                        dataType: DataType;
                        categoryId: TemplateCategoryId;
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                    };
                    config: {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        minDate: string | null;
                        maxDate: string | null;
                        defaultDate: string | null;
                        includeTime: boolean;
                    } | {
                        html: string;
                        plain: string;
                        omitFromPdf: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        file_type: Array<string>;
                        max_files: number;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        titlePlaceholder: string;
                        questionLabel: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        numberValueConstraint: NumberValueConstraint | null;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        tooltip: string;
                    } | {
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        max: number | null;
                    } | {
                        titlePlaceholder: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        esiTemplateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        tooltip: string;
                    } | {
                        variant: string;
                        options: Array<string>;
                        isMultipleSelect: boolean;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        min: number | null;
                        max: number | null;
                        multiline: boolean;
                        placeholder: string;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        htmlQuestion: string | null;
                        isHtmlQuestion: boolean;
                        isCounterHidden: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    };
                    dependencies: Array<{
                        questionId: string;
                        dependencyId: string;
                        dependencyNaturalKey: string;
                        condition: {
                            condition: EvaluatorOperator;
                            params: any;
                        };
                    }>;
                }>;
            }>;
        };
        sampleEsis: Array<{
            sampleId: number;
            esiId: number;
            questionaryId: number;
            isSubmitted: boolean;
            sample: {
                id: number;
                title: string;
                creatorId: number;
                questionaryId: number;
                safetyStatus: SampleStatus;
                safetyComment: string;
                isPostProposalSubmission: boolean;
                created: any;
                proposalPk: number;
                questionId: string;
            };
            questionary: {
                isCompleted: boolean;
            };
        }>;
        proposal: {
            primaryKey: number;
            proposalId: string;
            title: string;
            samples: Array<{
                id: number;
                title: string;
                creatorId: number;
                questionaryId: number;
                safetyStatus: SampleStatus;
                safetyComment: string;
                isPostProposalSubmission: boolean;
                created: any;
                proposalPk: number;
                questionId: string;
            }> | null;
            questionary: {
                questionaryId: number;
                templateId: number;
                created: any;
                steps: Array<{
                    isCompleted: boolean;
                    topic: {
                        title: string;
                        id: number;
                        templateId: number;
                        sortOrder: number;
                        isEnabled: boolean;
                    };
                    fields: Array<{
                        answerId: number | null;
                        sortOrder: number;
                        topicId: number;
                        dependenciesOperator: DependenciesLogicOperator | null;
                        value: any | null;
                        question: {
                            id: string;
                            question: string;
                            naturalKey: string;
                            dataType: DataType;
                            categoryId: TemplateCategoryId;
                            config: {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                minDate: string | null;
                                maxDate: string | null;
                                defaultDate: string | null;
                                includeTime: boolean;
                            } | {
                                html: string;
                                plain: string;
                                omitFromPdf: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                file_type: Array<string>;
                                max_files: number;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                titlePlaceholder: string;
                                questionLabel: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                numberValueConstraint: NumberValueConstraint | null;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                tooltip: string;
                            } | {
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                max: number | null;
                            } | {
                                titlePlaceholder: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                esiTemplateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                tooltip: string;
                            } | {
                                variant: string;
                                options: Array<string>;
                                isMultipleSelect: boolean;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                min: number | null;
                                max: number | null;
                                multiline: boolean;
                                placeholder: string;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                htmlQuestion: string | null;
                                isHtmlQuestion: boolean;
                                isCounterHidden: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            };
                        };
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                        dependencies: Array<{
                            questionId: string;
                            dependencyId: string;
                            dependencyNaturalKey: string;
                            condition: {
                                condition: EvaluatorOperator;
                                params: any;
                            };
                        }>;
                    }>;
                }>;
            };
        };
    } | null;
};
export declare type UpdateEsiMutationVariables = Exact<{
    esiId: Scalars['Int'];
    isSubmitted?: InputMaybe<Scalars['Boolean']>;
}>;
export declare type UpdateEsiMutation = {
    updateEsi: {
        esi: {
            id: number;
            creatorId: number;
            questionaryId: number;
            isSubmitted: boolean;
            created: any;
            questionary: {
                isCompleted: boolean;
                questionaryId: number;
                templateId: number;
                created: any;
                steps: Array<{
                    isCompleted: boolean;
                    topic: {
                        title: string;
                        id: number;
                        templateId: number;
                        sortOrder: number;
                        isEnabled: boolean;
                    };
                    fields: Array<{
                        answerId: number | null;
                        sortOrder: number;
                        topicId: number;
                        dependenciesOperator: DependenciesLogicOperator | null;
                        value: any | null;
                        question: {
                            id: string;
                            question: string;
                            naturalKey: string;
                            dataType: DataType;
                            categoryId: TemplateCategoryId;
                            config: {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                minDate: string | null;
                                maxDate: string | null;
                                defaultDate: string | null;
                                includeTime: boolean;
                            } | {
                                html: string;
                                plain: string;
                                omitFromPdf: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                file_type: Array<string>;
                                max_files: number;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                titlePlaceholder: string;
                                questionLabel: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                numberValueConstraint: NumberValueConstraint | null;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                tooltip: string;
                            } | {
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                max: number | null;
                            } | {
                                titlePlaceholder: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                esiTemplateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                tooltip: string;
                            } | {
                                variant: string;
                                options: Array<string>;
                                isMultipleSelect: boolean;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                min: number | null;
                                max: number | null;
                                multiline: boolean;
                                placeholder: string;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                htmlQuestion: string | null;
                                isHtmlQuestion: boolean;
                                isCounterHidden: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            };
                        };
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                        dependencies: Array<{
                            questionId: string;
                            dependencyId: string;
                            dependencyNaturalKey: string;
                            condition: {
                                condition: EvaluatorOperator;
                                params: any;
                            };
                        }>;
                    }>;
                }>;
            };
            sampleEsis: Array<{
                sampleId: number;
                esiId: number;
                questionaryId: number;
                isSubmitted: boolean;
                sample: {
                    id: number;
                    title: string;
                    creatorId: number;
                    questionaryId: number;
                    safetyStatus: SampleStatus;
                    safetyComment: string;
                    isPostProposalSubmission: boolean;
                    created: any;
                    proposalPk: number;
                    questionId: string;
                };
                questionary: {
                    isCompleted: boolean;
                };
            }>;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type GetEventLogsQueryVariables = Exact<{
    eventType: Scalars['String'];
    changedObjectId: Scalars['String'];
}>;
export declare type GetEventLogsQuery = {
    eventLogs: Array<{
        id: number;
        eventType: string;
        eventTStamp: any;
        rowData: string;
        changedObjectId: string;
        changedBy: {
            id: number;
            firstname: string;
            lastname: string;
            email: string;
        };
    }> | null;
};
export declare type CreateFeedbackMutationVariables = Exact<{
    scheduledEventId: Scalars['Int'];
}>;
export declare type CreateFeedbackMutation = {
    createFeedback: {
        feedback: {
            id: number;
            scheduledEventId: number;
            status: FeedbackStatus;
            questionaryId: number;
            creatorId: number;
            questionary: {
                isCompleted: boolean;
                questionaryId: number;
                templateId: number;
                created: any;
                steps: Array<{
                    isCompleted: boolean;
                    topic: {
                        title: string;
                        id: number;
                        templateId: number;
                        sortOrder: number;
                        isEnabled: boolean;
                    };
                    fields: Array<{
                        answerId: number | null;
                        sortOrder: number;
                        topicId: number;
                        dependenciesOperator: DependenciesLogicOperator | null;
                        value: any | null;
                        question: {
                            id: string;
                            question: string;
                            naturalKey: string;
                            dataType: DataType;
                            categoryId: TemplateCategoryId;
                            config: {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                minDate: string | null;
                                maxDate: string | null;
                                defaultDate: string | null;
                                includeTime: boolean;
                            } | {
                                html: string;
                                plain: string;
                                omitFromPdf: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                file_type: Array<string>;
                                max_files: number;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                titlePlaceholder: string;
                                questionLabel: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                numberValueConstraint: NumberValueConstraint | null;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                tooltip: string;
                            } | {
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                max: number | null;
                            } | {
                                titlePlaceholder: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                esiTemplateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                tooltip: string;
                            } | {
                                variant: string;
                                options: Array<string>;
                                isMultipleSelect: boolean;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                min: number | null;
                                max: number | null;
                                multiline: boolean;
                                placeholder: string;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                htmlQuestion: string | null;
                                isHtmlQuestion: boolean;
                                isCounterHidden: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            };
                        };
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                        dependencies: Array<{
                            questionId: string;
                            dependencyId: string;
                            dependencyNaturalKey: string;
                            condition: {
                                condition: EvaluatorOperator;
                                params: any;
                            };
                        }>;
                    }>;
                }>;
            };
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type FeedbackFragment = {
    id: number;
    scheduledEventId: number;
    status: FeedbackStatus;
    questionaryId: number;
    creatorId: number;
};
export declare type GetFeedbackQueryVariables = Exact<{
    feedbackId: Scalars['Int'];
}>;
export declare type GetFeedbackQuery = {
    feedback: {
        id: number;
        scheduledEventId: number;
        status: FeedbackStatus;
        questionaryId: number;
        creatorId: number;
        questionary: {
            isCompleted: boolean;
            questionaryId: number;
            templateId: number;
            created: any;
            steps: Array<{
                isCompleted: boolean;
                topic: {
                    title: string;
                    id: number;
                    templateId: number;
                    sortOrder: number;
                    isEnabled: boolean;
                };
                fields: Array<{
                    answerId: number | null;
                    sortOrder: number;
                    topicId: number;
                    dependenciesOperator: DependenciesLogicOperator | null;
                    value: any | null;
                    question: {
                        id: string;
                        question: string;
                        naturalKey: string;
                        dataType: DataType;
                        categoryId: TemplateCategoryId;
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                    };
                    config: {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        minDate: string | null;
                        maxDate: string | null;
                        defaultDate: string | null;
                        includeTime: boolean;
                    } | {
                        html: string;
                        plain: string;
                        omitFromPdf: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        file_type: Array<string>;
                        max_files: number;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        titlePlaceholder: string;
                        questionLabel: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        numberValueConstraint: NumberValueConstraint | null;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        tooltip: string;
                    } | {
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        max: number | null;
                    } | {
                        titlePlaceholder: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        esiTemplateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        tooltip: string;
                    } | {
                        variant: string;
                        options: Array<string>;
                        isMultipleSelect: boolean;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        min: number | null;
                        max: number | null;
                        multiline: boolean;
                        placeholder: string;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        htmlQuestion: string | null;
                        isHtmlQuestion: boolean;
                        isCounterHidden: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    };
                    dependencies: Array<{
                        questionId: string;
                        dependencyId: string;
                        dependencyNaturalKey: string;
                        condition: {
                            condition: EvaluatorOperator;
                            params: any;
                        };
                    }>;
                }>;
            }>;
        };
    } | null;
};
export declare type UpdateFeedbackMutationVariables = Exact<{
    feedbackId: Scalars['Int'];
    status?: InputMaybe<FeedbackStatus>;
}>;
export declare type UpdateFeedbackMutation = {
    updateFeedback: {
        feedback: {
            id: number;
            scheduledEventId: number;
            status: FeedbackStatus;
            questionaryId: number;
            creatorId: number;
            questionary: {
                isCompleted: boolean;
                questionaryId: number;
                templateId: number;
                created: any;
                steps: Array<{
                    isCompleted: boolean;
                    topic: {
                        title: string;
                        id: number;
                        templateId: number;
                        sortOrder: number;
                        isEnabled: boolean;
                    };
                    fields: Array<{
                        answerId: number | null;
                        sortOrder: number;
                        topicId: number;
                        dependenciesOperator: DependenciesLogicOperator | null;
                        value: any | null;
                        question: {
                            id: string;
                            question: string;
                            naturalKey: string;
                            dataType: DataType;
                            categoryId: TemplateCategoryId;
                            config: {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                minDate: string | null;
                                maxDate: string | null;
                                defaultDate: string | null;
                                includeTime: boolean;
                            } | {
                                html: string;
                                plain: string;
                                omitFromPdf: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                file_type: Array<string>;
                                max_files: number;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                titlePlaceholder: string;
                                questionLabel: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                numberValueConstraint: NumberValueConstraint | null;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                tooltip: string;
                            } | {
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                max: number | null;
                            } | {
                                titlePlaceholder: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                esiTemplateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                tooltip: string;
                            } | {
                                variant: string;
                                options: Array<string>;
                                isMultipleSelect: boolean;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                min: number | null;
                                max: number | null;
                                multiline: boolean;
                                placeholder: string;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                htmlQuestion: string | null;
                                isHtmlQuestion: boolean;
                                isCounterHidden: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            };
                        };
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                        dependencies: Array<{
                            questionId: string;
                            dependencyId: string;
                            dependencyNaturalKey: string;
                            condition: {
                                condition: EvaluatorOperator;
                                params: any;
                            };
                        }>;
                    }>;
                }>;
            };
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type CloneGenericTemplateMutationVariables = Exact<{
    genericTemplateId: Scalars['Int'];
    title?: InputMaybe<Scalars['String']>;
}>;
export declare type CloneGenericTemplateMutation = {
    cloneGenericTemplate: {
        genericTemplate: {
            id: number;
            title: string;
            creatorId: number;
            questionaryId: number;
            created: any;
            proposalPk: number;
            questionId: string;
            questionary: {
                isCompleted: boolean;
                questionaryId: number;
                templateId: number;
                created: any;
                steps: Array<{
                    isCompleted: boolean;
                    topic: {
                        title: string;
                        id: number;
                        templateId: number;
                        sortOrder: number;
                        isEnabled: boolean;
                    };
                    fields: Array<{
                        answerId: number | null;
                        sortOrder: number;
                        topicId: number;
                        dependenciesOperator: DependenciesLogicOperator | null;
                        value: any | null;
                        question: {
                            id: string;
                            question: string;
                            naturalKey: string;
                            dataType: DataType;
                            categoryId: TemplateCategoryId;
                            config: {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                minDate: string | null;
                                maxDate: string | null;
                                defaultDate: string | null;
                                includeTime: boolean;
                            } | {
                                html: string;
                                plain: string;
                                omitFromPdf: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                file_type: Array<string>;
                                max_files: number;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                titlePlaceholder: string;
                                questionLabel: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                numberValueConstraint: NumberValueConstraint | null;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                tooltip: string;
                            } | {
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                max: number | null;
                            } | {
                                titlePlaceholder: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                esiTemplateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                tooltip: string;
                            } | {
                                variant: string;
                                options: Array<string>;
                                isMultipleSelect: boolean;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                min: number | null;
                                max: number | null;
                                multiline: boolean;
                                placeholder: string;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                htmlQuestion: string | null;
                                isHtmlQuestion: boolean;
                                isCounterHidden: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            };
                        };
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                        dependencies: Array<{
                            questionId: string;
                            dependencyId: string;
                            dependencyNaturalKey: string;
                            condition: {
                                condition: EvaluatorOperator;
                                params: any;
                            };
                        }>;
                    }>;
                }>;
            };
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type CreateGenericTemplateMutationVariables = Exact<{
    title: Scalars['String'];
    templateId: Scalars['Int'];
    proposalPk: Scalars['Int'];
    questionId: Scalars['String'];
}>;
export declare type CreateGenericTemplateMutation = {
    createGenericTemplate: {
        genericTemplate: {
            id: number;
            title: string;
            creatorId: number;
            questionaryId: number;
            created: any;
            proposalPk: number;
            questionId: string;
            questionary: {
                isCompleted: boolean;
                questionaryId: number;
                templateId: number;
                created: any;
                steps: Array<{
                    isCompleted: boolean;
                    topic: {
                        title: string;
                        id: number;
                        templateId: number;
                        sortOrder: number;
                        isEnabled: boolean;
                    };
                    fields: Array<{
                        answerId: number | null;
                        sortOrder: number;
                        topicId: number;
                        dependenciesOperator: DependenciesLogicOperator | null;
                        value: any | null;
                        question: {
                            id: string;
                            question: string;
                            naturalKey: string;
                            dataType: DataType;
                            categoryId: TemplateCategoryId;
                            config: {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                minDate: string | null;
                                maxDate: string | null;
                                defaultDate: string | null;
                                includeTime: boolean;
                            } | {
                                html: string;
                                plain: string;
                                omitFromPdf: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                file_type: Array<string>;
                                max_files: number;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                titlePlaceholder: string;
                                questionLabel: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                numberValueConstraint: NumberValueConstraint | null;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                tooltip: string;
                            } | {
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                max: number | null;
                            } | {
                                titlePlaceholder: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                esiTemplateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                tooltip: string;
                            } | {
                                variant: string;
                                options: Array<string>;
                                isMultipleSelect: boolean;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                min: number | null;
                                max: number | null;
                                multiline: boolean;
                                placeholder: string;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                htmlQuestion: string | null;
                                isHtmlQuestion: boolean;
                                isCounterHidden: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            };
                        };
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                        dependencies: Array<{
                            questionId: string;
                            dependencyId: string;
                            dependencyNaturalKey: string;
                            condition: {
                                condition: EvaluatorOperator;
                                params: any;
                            };
                        }>;
                    }>;
                }>;
            };
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type DeleteGenericTemplateMutationVariables = Exact<{
    genericTemplateId: Scalars['Int'];
}>;
export declare type DeleteGenericTemplateMutation = {
    deleteGenericTemplate: {
        genericTemplate: {
            id: number;
            title: string;
            creatorId: number;
            questionaryId: number;
            created: any;
            proposalPk: number;
            questionId: string;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type GenericTemplateFragment = {
    id: number;
    title: string;
    creatorId: number;
    questionaryId: number;
    created: any;
    proposalPk: number;
    questionId: string;
};
export declare type GetGenericTemplateQueryVariables = Exact<{
    genericTemplateId: Scalars['Int'];
}>;
export declare type GetGenericTemplateQuery = {
    genericTemplate: {
        id: number;
        title: string;
        creatorId: number;
        questionaryId: number;
        created: any;
        proposalPk: number;
        questionId: string;
        questionary: {
            isCompleted: boolean;
            questionaryId: number;
            templateId: number;
            created: any;
            steps: Array<{
                isCompleted: boolean;
                topic: {
                    title: string;
                    id: number;
                    templateId: number;
                    sortOrder: number;
                    isEnabled: boolean;
                };
                fields: Array<{
                    answerId: number | null;
                    sortOrder: number;
                    topicId: number;
                    dependenciesOperator: DependenciesLogicOperator | null;
                    value: any | null;
                    question: {
                        id: string;
                        question: string;
                        naturalKey: string;
                        dataType: DataType;
                        categoryId: TemplateCategoryId;
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                    };
                    config: {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        minDate: string | null;
                        maxDate: string | null;
                        defaultDate: string | null;
                        includeTime: boolean;
                    } | {
                        html: string;
                        plain: string;
                        omitFromPdf: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        file_type: Array<string>;
                        max_files: number;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        titlePlaceholder: string;
                        questionLabel: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        numberValueConstraint: NumberValueConstraint | null;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        tooltip: string;
                    } | {
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        max: number | null;
                    } | {
                        titlePlaceholder: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        esiTemplateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        tooltip: string;
                    } | {
                        variant: string;
                        options: Array<string>;
                        isMultipleSelect: boolean;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        min: number | null;
                        max: number | null;
                        multiline: boolean;
                        placeholder: string;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        htmlQuestion: string | null;
                        isHtmlQuestion: boolean;
                        isCounterHidden: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    };
                    dependencies: Array<{
                        questionId: string;
                        dependencyId: string;
                        dependencyNaturalKey: string;
                        condition: {
                            condition: EvaluatorOperator;
                            params: any;
                        };
                    }>;
                }>;
            }>;
        };
    } | null;
};
export declare type GetGenericTemplatesWithProposalDataQueryVariables = Exact<{
    filter?: InputMaybe<GenericTemplatesFilter>;
}>;
export declare type GetGenericTemplatesWithProposalDataQuery = {
    genericTemplates: Array<{
        id: number;
        title: string;
        creatorId: number;
        questionaryId: number;
        created: any;
        proposalPk: number;
        questionId: string;
        proposal: {
            primaryKey: number;
            proposalId: string;
        };
    }> | null;
};
export declare type GetGenericTemplatesWithQuestionaryStatusQueryVariables = Exact<{
    filter?: InputMaybe<GenericTemplatesFilter>;
}>;
export declare type GetGenericTemplatesWithQuestionaryStatusQuery = {
    genericTemplates: Array<{
        id: number;
        title: string;
        creatorId: number;
        questionaryId: number;
        created: any;
        proposalPk: number;
        questionId: string;
        questionary: {
            isCompleted: boolean;
        };
    }> | null;
};
export declare type UpdateGenericTemplateMutationVariables = Exact<{
    genericTemplateId: Scalars['Int'];
    title?: InputMaybe<Scalars['String']>;
}>;
export declare type UpdateGenericTemplateMutation = {
    updateGenericTemplate: {
        genericTemplate: {
            id: number;
            title: string;
            creatorId: number;
            questionaryId: number;
            created: any;
            proposalPk: number;
            questionId: string;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type AssignProposalsToInstrumentMutationVariables = Exact<{
    proposals: Array<ProposalPkWithCallId> | ProposalPkWithCallId;
    instrumentId: Scalars['Int'];
}>;
export declare type AssignProposalsToInstrumentMutation = {
    assignProposalsToInstrument: {
        isSuccess: boolean | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type AssignScientistsToInstrumentMutationVariables = Exact<{
    scientistIds: Array<Scalars['Int']> | Scalars['Int'];
    instrumentId: Scalars['Int'];
}>;
export declare type AssignScientistsToInstrumentMutation = {
    assignScientistsToInstrument: {
        isSuccess: boolean | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type CreateInstrumentMutationVariables = Exact<{
    name: Scalars['String'];
    shortCode: Scalars['String'];
    description: Scalars['String'];
    managerUserId: Scalars['Int'];
}>;
export declare type CreateInstrumentMutation = {
    createInstrument: {
        instrument: {
            id: number;
            name: string;
            shortCode: string;
            description: string;
            managerUserId: number;
            scientists: Array<{
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            }>;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type DeleteInstrumentMutationVariables = Exact<{
    id: Scalars['Int'];
}>;
export declare type DeleteInstrumentMutation = {
    deleteInstrument: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type GetInstrumentsQueryVariables = Exact<{
    callIds?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;
export declare type GetInstrumentsQuery = {
    instruments: {
        totalCount: number;
        instruments: Array<{
            id: number;
            name: string;
            shortCode: string;
            description: string;
            managerUserId: number;
            scientists: Array<{
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            }>;
        }>;
    } | null;
};
export declare type GetUserInstrumentsQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetUserInstrumentsQuery = {
    me: {
        instruments: Array<{
            id: number;
            name: string;
            shortCode: string;
            description: string;
            managerUserId: number;
            scientists: Array<{
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            }>;
        }>;
    } | null;
};
export declare type InstrumentFragment = {
    id: number;
    name: string;
    shortCode: string;
    description: string;
    managerUserId: number;
    scientists: Array<{
        id: number;
        firstname: string;
        lastname: string;
        preferredname: string | null;
        organisation: string;
        position: string;
        created: any | null;
        placeholder: boolean | null;
    }>;
};
export declare type RemoveProposalsFromInstrumentMutationVariables = Exact<{
    proposalPks: Array<Scalars['Int']> | Scalars['Int'];
}>;
export declare type RemoveProposalsFromInstrumentMutation = {
    removeProposalsFromInstrument: {
        isSuccess: boolean | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type RemoveScientistFromInstrumentMutationVariables = Exact<{
    scientistId: Scalars['Int'];
    instrumentId: Scalars['Int'];
}>;
export declare type RemoveScientistFromInstrumentMutation = {
    removeScientistFromInstrument: {
        isSuccess: boolean | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type SetInstrumentAvailabilityTimeMutationVariables = Exact<{
    callId: Scalars['Int'];
    instrumentId: Scalars['Int'];
    availabilityTime: Scalars['Int'];
}>;
export declare type SetInstrumentAvailabilityTimeMutation = {
    setInstrumentAvailabilityTime: {
        isSuccess: boolean | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type SubmitInstrumentMutationVariables = Exact<{
    callId: Scalars['Int'];
    instrumentId: Scalars['Int'];
    sepId: Scalars['Int'];
}>;
export declare type SubmitInstrumentMutation = {
    submitInstrument: {
        isSuccess: boolean | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type UpdateInstrumentMutationVariables = Exact<{
    id: Scalars['Int'];
    name: Scalars['String'];
    shortCode: Scalars['String'];
    description: Scalars['String'];
    managerUserId: Scalars['Int'];
}>;
export declare type UpdateInstrumentMutation = {
    updateInstrument: {
        instrument: {
            id: number;
            name: string;
            shortCode: string;
            description: string;
            managerUserId: number;
            scientists: Array<{
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            }>;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type AdministrationProposalMutationVariables = Exact<{
    proposalPk: Scalars['Int'];
    finalStatus?: InputMaybe<ProposalEndStatus>;
    statusId?: InputMaybe<Scalars['Int']>;
    commentForUser?: InputMaybe<Scalars['String']>;
    commentForManagement?: InputMaybe<Scalars['String']>;
    managementTimeAllocation?: InputMaybe<Scalars['Int']>;
    managementDecisionSubmitted?: InputMaybe<Scalars['Boolean']>;
}>;
export declare type AdministrationProposalMutation = {
    administrationProposal: {
        proposal: {
            primaryKey: number;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type ChangeProposalsStatusMutationVariables = Exact<{
    proposals: Array<ProposalPkWithCallId> | ProposalPkWithCallId;
    statusId: Scalars['Int'];
}>;
export declare type ChangeProposalsStatusMutation = {
    changeProposalsStatus: {
        isSuccess: boolean | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type CloneProposalsMutationVariables = Exact<{
    proposalsToClonePk: Array<Scalars['Int']> | Scalars['Int'];
    callId: Scalars['Int'];
}>;
export declare type CloneProposalsMutation = {
    cloneProposals: {
        proposals: Array<{
            primaryKey: number;
            title: string;
            abstract: string;
            statusId: number;
            publicStatus: ProposalPublicStatus;
            proposalId: string;
            finalStatus: ProposalEndStatus | null;
            commentForUser: string | null;
            commentForManagement: string | null;
            created: any;
            updated: any;
            callId: number;
            questionaryId: number;
            notified: boolean;
            submitted: boolean;
            managementTimeAllocation: number | null;
            managementDecisionSubmitted: boolean;
            proposer: {
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            } | null;
            users: Array<{
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            }>;
            questionary: {
                isCompleted: boolean;
                questionaryId: number;
                templateId: number;
                created: any;
                steps: Array<{
                    isCompleted: boolean;
                    topic: {
                        title: string;
                        id: number;
                        templateId: number;
                        sortOrder: number;
                        isEnabled: boolean;
                    };
                    fields: Array<{
                        answerId: number | null;
                        sortOrder: number;
                        topicId: number;
                        dependenciesOperator: DependenciesLogicOperator | null;
                        value: any | null;
                        question: {
                            id: string;
                            question: string;
                            naturalKey: string;
                            dataType: DataType;
                            categoryId: TemplateCategoryId;
                            config: {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                minDate: string | null;
                                maxDate: string | null;
                                defaultDate: string | null;
                                includeTime: boolean;
                            } | {
                                html: string;
                                plain: string;
                                omitFromPdf: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                file_type: Array<string>;
                                max_files: number;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                titlePlaceholder: string;
                                questionLabel: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                numberValueConstraint: NumberValueConstraint | null;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                tooltip: string;
                            } | {
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                max: number | null;
                            } | {
                                titlePlaceholder: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                esiTemplateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                tooltip: string;
                            } | {
                                variant: string;
                                options: Array<string>;
                                isMultipleSelect: boolean;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                min: number | null;
                                max: number | null;
                                multiline: boolean;
                                placeholder: string;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                htmlQuestion: string | null;
                                isHtmlQuestion: boolean;
                                isCounterHidden: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            };
                        };
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                        dependencies: Array<{
                            questionId: string;
                            dependencyId: string;
                            dependencyNaturalKey: string;
                            condition: {
                                condition: EvaluatorOperator;
                                params: any;
                            };
                        }>;
                    }>;
                }>;
            };
            technicalReview: {
                id: number;
                comment: string | null;
                publicComment: string | null;
                timeAllocation: number | null;
                status: TechnicalReviewStatus | null;
                proposalPk: number;
                submitted: boolean;
                files: string | null;
                technicalReviewAssigneeId: number | null;
                technicalReviewAssignee: {
                    id: number;
                    firstname: string;
                    lastname: string;
                } | null;
            } | null;
            reviews: Array<{
                id: number;
                grade: number | null;
                comment: string | null;
                status: ReviewStatus;
                userID: number;
                sepID: number;
                reviewer: {
                    firstname: string;
                    lastname: string;
                    id: number;
                } | null;
            }> | null;
            instrument: {
                id: number;
                name: string;
                shortCode: string;
            } | null;
            call: {
                id: number;
                shortCode: string;
                isActive: boolean;
                referenceNumberFormat: string | null;
            } | null;
            status: {
                id: number;
                shortCode: string;
                name: string;
                description: string;
                isDefault: boolean;
            } | null;
            sepMeetingDecision: {
                proposalPk: number;
                recommendation: ProposalEndStatus | null;
                commentForUser: string | null;
                commentForManagement: string | null;
                rankOrder: number | null;
                submitted: boolean;
                submittedBy: number | null;
            } | null;
        }> | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type CreateProposalMutationVariables = Exact<{
    callId: Scalars['Int'];
}>;
export declare type CreateProposalMutation = {
    createProposal: {
        proposal: {
            primaryKey: number;
            proposalId: string;
            questionaryId: number;
            status: {
                id: number;
                shortCode: string;
                name: string;
                description: string;
                isDefault: boolean;
            } | null;
            questionary: {
                isCompleted: boolean;
                questionaryId: number;
                templateId: number;
                created: any;
                steps: Array<{
                    isCompleted: boolean;
                    topic: {
                        title: string;
                        id: number;
                        templateId: number;
                        sortOrder: number;
                        isEnabled: boolean;
                    };
                    fields: Array<{
                        answerId: number | null;
                        sortOrder: number;
                        topicId: number;
                        dependenciesOperator: DependenciesLogicOperator | null;
                        value: any | null;
                        question: {
                            id: string;
                            question: string;
                            naturalKey: string;
                            dataType: DataType;
                            categoryId: TemplateCategoryId;
                            config: {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                minDate: string | null;
                                maxDate: string | null;
                                defaultDate: string | null;
                                includeTime: boolean;
                            } | {
                                html: string;
                                plain: string;
                                omitFromPdf: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                file_type: Array<string>;
                                max_files: number;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                titlePlaceholder: string;
                                questionLabel: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                numberValueConstraint: NumberValueConstraint | null;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                tooltip: string;
                            } | {
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                max: number | null;
                            } | {
                                titlePlaceholder: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                esiTemplateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                tooltip: string;
                            } | {
                                variant: string;
                                options: Array<string>;
                                isMultipleSelect: boolean;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                min: number | null;
                                max: number | null;
                                multiline: boolean;
                                placeholder: string;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                htmlQuestion: string | null;
                                isHtmlQuestion: boolean;
                                isCounterHidden: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            };
                        };
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                        dependencies: Array<{
                            questionId: string;
                            dependencyId: string;
                            dependencyNaturalKey: string;
                            condition: {
                                condition: EvaluatorOperator;
                                params: any;
                            };
                        }>;
                    }>;
                }>;
            };
            proposer: {
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            } | null;
            users: Array<{
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            }>;
            samples: Array<{
                id: number;
                title: string;
                creatorId: number;
                questionaryId: number;
                safetyStatus: SampleStatus;
                safetyComment: string;
                isPostProposalSubmission: boolean;
                created: any;
                proposalPk: number;
                questionId: string;
                questionary: {
                    isCompleted: boolean;
                };
            }> | null;
            genericTemplates: Array<{
                id: number;
                title: string;
                creatorId: number;
                questionaryId: number;
                created: any;
                proposalPk: number;
                questionId: string;
                questionary: {
                    isCompleted: boolean;
                };
            }> | null;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type DeleteProposalMutationVariables = Exact<{
    proposalPk: Scalars['Int'];
}>;
export declare type DeleteProposalMutation = {
    deleteProposal: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
        proposal: {
            primaryKey: number;
        } | null;
    };
};
export declare type CoreTechnicalReviewFragment = {
    id: number;
    comment: string | null;
    publicComment: string | null;
    timeAllocation: number | null;
    status: TechnicalReviewStatus | null;
    proposalPk: number;
    submitted: boolean;
    files: string | null;
    technicalReviewAssigneeId: number | null;
    technicalReviewAssignee: {
        id: number;
        firstname: string;
        lastname: string;
    } | null;
};
export declare type ProposalFragment = {
    primaryKey: number;
    title: string;
    abstract: string;
    statusId: number;
    publicStatus: ProposalPublicStatus;
    proposalId: string;
    finalStatus: ProposalEndStatus | null;
    commentForUser: string | null;
    commentForManagement: string | null;
    created: any;
    updated: any;
    callId: number;
    questionaryId: number;
    notified: boolean;
    submitted: boolean;
    managementTimeAllocation: number | null;
    managementDecisionSubmitted: boolean;
    status: {
        id: number;
        shortCode: string;
        name: string;
        description: string;
        isDefault: boolean;
    } | null;
    sepMeetingDecision: {
        proposalPk: number;
        recommendation: ProposalEndStatus | null;
        commentForUser: string | null;
        commentForManagement: string | null;
        rankOrder: number | null;
        submitted: boolean;
        submittedBy: number | null;
    } | null;
};
export declare type GetInstrumentScientistProposalsQueryVariables = Exact<{
    filter?: InputMaybe<ProposalsFilter>;
    offset?: InputMaybe<Scalars['Int']>;
    first?: InputMaybe<Scalars['Int']>;
}>;
export declare type GetInstrumentScientistProposalsQuery = {
    instrumentScientistProposals: {
        totalCount: number;
        proposals: Array<{
            primaryKey: number;
            proposalId: string;
            title: string;
            submitted: boolean;
            finalStatus: ProposalEndStatus | null;
            technicalReviewAssigneeId: number | null;
            technicalReviewAssigneeFirstName: string | null;
            technicalReviewAssigneeLastName: string | null;
            technicalStatus: TechnicalReviewStatus | null;
            technicalTimeAllocation: number | null;
            statusName: string;
            technicalReviewSubmitted: number | null;
            instrumentId: number | null;
            instrumentName: string | null;
            allocationTimeUnit: AllocationTimeUnits;
            callShortCode: string | null;
            sepCode: string | null;
        }>;
    } | null;
};
export declare type GetMyProposalsQueryVariables = Exact<{
    filter?: InputMaybe<UserProposalsFilter>;
}>;
export declare type GetMyProposalsQuery = {
    me: {
        proposals: Array<{
            primaryKey: number;
            title: string;
            abstract: string;
            statusId: number;
            publicStatus: ProposalPublicStatus;
            proposalId: string;
            finalStatus: ProposalEndStatus | null;
            commentForUser: string | null;
            commentForManagement: string | null;
            created: any;
            updated: any;
            callId: number;
            questionaryId: number;
            notified: boolean;
            submitted: boolean;
            managementTimeAllocation: number | null;
            managementDecisionSubmitted: boolean;
            status: {
                id: number;
                shortCode: string;
                name: string;
                description: string;
                isDefault: boolean;
            } | null;
            sepMeetingDecision: {
                proposalPk: number;
                recommendation: ProposalEndStatus | null;
                commentForUser: string | null;
                commentForManagement: string | null;
                rankOrder: number | null;
                submitted: boolean;
                submittedBy: number | null;
            } | null;
        }>;
    } | null;
};
export declare type GetProposalQueryVariables = Exact<{
    primaryKey: Scalars['Int'];
}>;
export declare type GetProposalQuery = {
    proposal: {
        primaryKey: number;
        title: string;
        abstract: string;
        statusId: number;
        publicStatus: ProposalPublicStatus;
        proposalId: string;
        finalStatus: ProposalEndStatus | null;
        commentForUser: string | null;
        commentForManagement: string | null;
        created: any;
        updated: any;
        callId: number;
        questionaryId: number;
        notified: boolean;
        submitted: boolean;
        managementTimeAllocation: number | null;
        managementDecisionSubmitted: boolean;
        proposer: {
            id: number;
            firstname: string;
            lastname: string;
            preferredname: string | null;
            organisation: string;
            position: string;
            created: any | null;
            placeholder: boolean | null;
        } | null;
        users: Array<{
            id: number;
            firstname: string;
            lastname: string;
            preferredname: string | null;
            organisation: string;
            position: string;
            created: any | null;
            placeholder: boolean | null;
        }>;
        questionary: {
            isCompleted: boolean;
            questionaryId: number;
            templateId: number;
            created: any;
            steps: Array<{
                isCompleted: boolean;
                topic: {
                    title: string;
                    id: number;
                    templateId: number;
                    sortOrder: number;
                    isEnabled: boolean;
                };
                fields: Array<{
                    answerId: number | null;
                    sortOrder: number;
                    topicId: number;
                    dependenciesOperator: DependenciesLogicOperator | null;
                    value: any | null;
                    question: {
                        id: string;
                        question: string;
                        naturalKey: string;
                        dataType: DataType;
                        categoryId: TemplateCategoryId;
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                    };
                    config: {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        minDate: string | null;
                        maxDate: string | null;
                        defaultDate: string | null;
                        includeTime: boolean;
                    } | {
                        html: string;
                        plain: string;
                        omitFromPdf: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        file_type: Array<string>;
                        max_files: number;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        titlePlaceholder: string;
                        questionLabel: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        numberValueConstraint: NumberValueConstraint | null;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        tooltip: string;
                    } | {
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        max: number | null;
                    } | {
                        titlePlaceholder: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        esiTemplateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        tooltip: string;
                    } | {
                        variant: string;
                        options: Array<string>;
                        isMultipleSelect: boolean;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        min: number | null;
                        max: number | null;
                        multiline: boolean;
                        placeholder: string;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        htmlQuestion: string | null;
                        isHtmlQuestion: boolean;
                        isCounterHidden: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    };
                    dependencies: Array<{
                        questionId: string;
                        dependencyId: string;
                        dependencyNaturalKey: string;
                        condition: {
                            condition: EvaluatorOperator;
                            params: any;
                        };
                    }>;
                }>;
            }>;
        };
        technicalReview: {
            id: number;
            comment: string | null;
            publicComment: string | null;
            timeAllocation: number | null;
            status: TechnicalReviewStatus | null;
            proposalPk: number;
            submitted: boolean;
            files: string | null;
            technicalReviewAssigneeId: number | null;
            reviewer: {
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            } | null;
            technicalReviewAssignee: {
                id: number;
                firstname: string;
                lastname: string;
            } | null;
        } | null;
        reviews: Array<{
            id: number;
            grade: number | null;
            comment: string | null;
            status: ReviewStatus;
            userID: number;
            sepID: number;
            reviewer: {
                firstname: string;
                lastname: string;
                id: number;
            } | null;
        }> | null;
        instrument: {
            id: number;
            name: string;
            shortCode: string;
            beamlineManager: {
                id: number;
                firstname: string;
                lastname: string;
            };
            scientists: Array<{
                id: number;
                firstname: string;
                lastname: string;
            }>;
        } | null;
        call: {
            id: number;
            shortCode: string;
            isActive: boolean;
            allocationTimeUnit: AllocationTimeUnits;
            referenceNumberFormat: string | null;
        } | null;
        sep: {
            id: number;
            code: string;
        } | null;
        samples: Array<{
            id: number;
            title: string;
            creatorId: number;
            questionaryId: number;
            safetyStatus: SampleStatus;
            safetyComment: string;
            isPostProposalSubmission: boolean;
            created: any;
            proposalPk: number;
            questionId: string;
            questionary: {
                isCompleted: boolean;
            };
        }> | null;
        genericTemplates: Array<{
            id: number;
            title: string;
            creatorId: number;
            questionaryId: number;
            created: any;
            proposalPk: number;
            questionId: string;
            questionary: {
                isCompleted: boolean;
            };
        }> | null;
        status: {
            id: number;
            shortCode: string;
            name: string;
            description: string;
            isDefault: boolean;
        } | null;
        sepMeetingDecision: {
            proposalPk: number;
            recommendation: ProposalEndStatus | null;
            commentForUser: string | null;
            commentForManagement: string | null;
            rankOrder: number | null;
            submitted: boolean;
            submittedBy: number | null;
        } | null;
    } | null;
};
export declare type GetProposalsQueryVariables = Exact<{
    filter?: InputMaybe<ProposalsFilter>;
}>;
export declare type GetProposalsQuery = {
    proposals: {
        totalCount: number;
        proposals: Array<{
            primaryKey: number;
            title: string;
            abstract: string;
            statusId: number;
            publicStatus: ProposalPublicStatus;
            proposalId: string;
            finalStatus: ProposalEndStatus | null;
            commentForUser: string | null;
            commentForManagement: string | null;
            created: any;
            updated: any;
            callId: number;
            questionaryId: number;
            notified: boolean;
            submitted: boolean;
            managementTimeAllocation: number | null;
            managementDecisionSubmitted: boolean;
            proposer: {
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            } | null;
            reviews: Array<{
                id: number;
                grade: number | null;
                comment: string | null;
                status: ReviewStatus;
                userID: number;
                sepID: number;
                reviewer: {
                    firstname: string;
                    lastname: string;
                    id: number;
                } | null;
            }> | null;
            users: Array<{
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            }>;
            technicalReview: {
                id: number;
                comment: string | null;
                publicComment: string | null;
                timeAllocation: number | null;
                status: TechnicalReviewStatus | null;
                proposalPk: number;
                submitted: boolean;
                files: string | null;
                technicalReviewAssigneeId: number | null;
                reviewer: {
                    id: number;
                    firstname: string;
                    lastname: string;
                    preferredname: string | null;
                    organisation: string;
                    position: string;
                    created: any | null;
                    placeholder: boolean | null;
                } | null;
                technicalReviewAssignee: {
                    id: number;
                    firstname: string;
                    lastname: string;
                } | null;
            } | null;
            instrument: {
                id: number;
                name: string;
            } | null;
            call: {
                id: number;
                shortCode: string;
            } | null;
            sep: {
                id: number;
                code: string;
            } | null;
            status: {
                id: number;
                shortCode: string;
                name: string;
                description: string;
                isDefault: boolean;
            } | null;
            sepMeetingDecision: {
                proposalPk: number;
                recommendation: ProposalEndStatus | null;
                commentForUser: string | null;
                commentForManagement: string | null;
                rankOrder: number | null;
                submitted: boolean;
                submittedBy: number | null;
            } | null;
        }>;
    } | null;
};
export declare type GetProposalsCoreQueryVariables = Exact<{
    filter?: InputMaybe<ProposalsFilter>;
    first?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    sortField?: InputMaybe<Scalars['String']>;
    sortDirection?: InputMaybe<Scalars['String']>;
    searchText?: InputMaybe<Scalars['String']>;
}>;
export declare type GetProposalsCoreQuery = {
    proposalsView: {
        totalCount: number;
        proposalViews: Array<{
            primaryKey: number;
            title: string;
            statusId: number;
            statusName: string;
            statusDescription: string;
            proposalId: string;
            rankOrder: number | null;
            finalStatus: ProposalEndStatus | null;
            notified: boolean;
            managementTimeAllocation: number | null;
            technicalTimeAllocation: number | null;
            technicalReviewAssigneeId: number | null;
            technicalReviewAssigneeFirstName: string | null;
            technicalReviewAssigneeLastName: string | null;
            technicalStatus: TechnicalReviewStatus | null;
            instrumentName: string | null;
            callShortCode: string | null;
            sepCode: string | null;
            sepId: number | null;
            reviewAverage: number | null;
            reviewDeviation: number | null;
            instrumentId: number | null;
            callId: number;
            submitted: boolean;
            allocationTimeUnit: AllocationTimeUnits;
        }>;
    } | null;
};
export declare type NotifyProposalMutationVariables = Exact<{
    proposalPk: Scalars['Int'];
}>;
export declare type NotifyProposalMutation = {
    notifyProposal: {
        proposal: {
            primaryKey: number;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type SubmitProposalMutationVariables = Exact<{
    proposalPk: Scalars['Int'];
}>;
export declare type SubmitProposalMutation = {
    submitProposal: {
        proposal: {
            primaryKey: number;
            title: string;
            abstract: string;
            statusId: number;
            publicStatus: ProposalPublicStatus;
            proposalId: string;
            finalStatus: ProposalEndStatus | null;
            commentForUser: string | null;
            commentForManagement: string | null;
            created: any;
            updated: any;
            callId: number;
            questionaryId: number;
            notified: boolean;
            submitted: boolean;
            managementTimeAllocation: number | null;
            managementDecisionSubmitted: boolean;
            status: {
                id: number;
                shortCode: string;
                name: string;
                description: string;
                isDefault: boolean;
            } | null;
            sepMeetingDecision: {
                proposalPk: number;
                recommendation: ProposalEndStatus | null;
                commentForUser: string | null;
                commentForManagement: string | null;
                rankOrder: number | null;
                submitted: boolean;
                submittedBy: number | null;
            } | null;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type UpdateProposalMutationVariables = Exact<{
    proposalPk: Scalars['Int'];
    title?: InputMaybe<Scalars['String']>;
    abstract?: InputMaybe<Scalars['String']>;
    users?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
    proposerId?: InputMaybe<Scalars['Int']>;
}>;
export declare type UpdateProposalMutation = {
    updateProposal: {
        proposal: {
            primaryKey: number;
            title: string;
            abstract: string;
            proposer: {
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            } | null;
            users: Array<{
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            }>;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type GetUserProposalBookingsWithEventsQueryVariables = Exact<{
    endsAfter?: InputMaybe<Scalars['DateTime']>;
    status?: InputMaybe<Array<ProposalBookingStatusCore> | ProposalBookingStatusCore>;
    instrumentId?: InputMaybe<Scalars['Int']>;
}>;
export declare type GetUserProposalBookingsWithEventsQuery = {
    me: {
        proposals: Array<{
            primaryKey: number;
            title: string;
            proposalId: string;
            finalStatus: ProposalEndStatus | null;
            managementDecisionSubmitted: boolean;
            proposer: {
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            } | null;
            users: Array<{
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            }>;
            proposalBookingCore: {
                scheduledEvents: Array<{
                    id: number;
                    startsAt: any;
                    endsAt: any;
                    bookingType: ScheduledEventBookingType;
                    status: ProposalBookingStatusCore;
                    visit: {
                        id: number;
                        proposalPk: number;
                        status: VisitStatus;
                        creatorId: number;
                        teamLead: {
                            id: number;
                            firstname: string;
                            lastname: string;
                            preferredname: string | null;
                            organisation: string;
                            position: string;
                            created: any | null;
                            placeholder: boolean | null;
                        };
                        registrations: Array<{
                            userId: number;
                            visitId: number;
                            registrationQuestionaryId: number | null;
                            isRegistrationSubmitted: boolean;
                            trainingExpiryDate: any | null;
                            startsAt: any | null;
                            endsAt: any | null;
                            user: {
                                id: number;
                                firstname: string;
                                lastname: string;
                                preferredname: string | null;
                                organisation: string;
                                position: string;
                                created: any | null;
                                placeholder: boolean | null;
                            };
                        }>;
                    } | null;
                    esi: {
                        id: number;
                        creatorId: number;
                        questionaryId: number;
                        isSubmitted: boolean;
                        created: any;
                    } | null;
                    feedback: {
                        id: number;
                        scheduledEventId: number;
                        status: FeedbackStatus;
                        questionaryId: number;
                        creatorId: number;
                    } | null;
                    shipments: Array<{
                        id: number;
                        title: string;
                        proposalPk: number;
                        status: ShipmentStatus;
                        externalRef: string | null;
                        questionaryId: number;
                        scheduledEventId: number;
                        creatorId: number;
                        created: any;
                        proposal: {
                            proposalId: string;
                        };
                    }>;
                    localContact: {
                        id: number;
                        firstname: string;
                        lastname: string;
                        preferredname: string | null;
                        organisation: string;
                        position: string;
                        created: any | null;
                        placeholder: boolean | null;
                    } | null;
                }>;
            } | null;
            visits: Array<{
                id: number;
                proposalPk: number;
                status: VisitStatus;
                creatorId: number;
            }> | null;
            instrument: {
                id: number;
                name: string;
            } | null;
        }>;
    } | null;
};
export declare type AnswerTopicMutationVariables = Exact<{
    questionaryId: Scalars['Int'];
    topicId: Scalars['Int'];
    answers: Array<AnswerInput> | AnswerInput;
    isPartialSave?: InputMaybe<Scalars['Boolean']>;
}>;
export declare type AnswerTopicMutation = {
    answerTopic: {
        questionaryStep: {
            isCompleted: boolean;
            topic: {
                title: string;
                id: number;
                templateId: number;
                sortOrder: number;
                isEnabled: boolean;
            };
            fields: Array<{
                answerId: number | null;
                sortOrder: number;
                topicId: number;
                dependenciesOperator: DependenciesLogicOperator | null;
                value: any | null;
                question: {
                    id: string;
                    question: string;
                    naturalKey: string;
                    dataType: DataType;
                    categoryId: TemplateCategoryId;
                    config: {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        minDate: string | null;
                        maxDate: string | null;
                        defaultDate: string | null;
                        includeTime: boolean;
                    } | {
                        html: string;
                        plain: string;
                        omitFromPdf: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        file_type: Array<string>;
                        max_files: number;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        titlePlaceholder: string;
                        questionLabel: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        numberValueConstraint: NumberValueConstraint | null;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        tooltip: string;
                    } | {
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        max: number | null;
                    } | {
                        titlePlaceholder: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        esiTemplateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        tooltip: string;
                    } | {
                        variant: string;
                        options: Array<string>;
                        isMultipleSelect: boolean;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        min: number | null;
                        max: number | null;
                        multiline: boolean;
                        placeholder: string;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        htmlQuestion: string | null;
                        isHtmlQuestion: boolean;
                        isCounterHidden: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    };
                };
                config: {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    minDate: string | null;
                    maxDate: string | null;
                    defaultDate: string | null;
                    includeTime: boolean;
                } | {
                    html: string;
                    plain: string;
                    omitFromPdf: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    file_type: Array<string>;
                    max_files: number;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    titlePlaceholder: string;
                    questionLabel: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    numberValueConstraint: NumberValueConstraint | null;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    tooltip: string;
                } | {
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    max: number | null;
                } | {
                    titlePlaceholder: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    esiTemplateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    tooltip: string;
                } | {
                    variant: string;
                    options: Array<string>;
                    isMultipleSelect: boolean;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    min: number | null;
                    max: number | null;
                    multiline: boolean;
                    placeholder: string;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    htmlQuestion: string | null;
                    isHtmlQuestion: boolean;
                    isCounterHidden: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                };
                dependencies: Array<{
                    questionId: string;
                    dependencyId: string;
                    dependencyNaturalKey: string;
                    condition: {
                        condition: EvaluatorOperator;
                        params: any;
                    };
                }>;
            }>;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type CreateQuestionaryMutationVariables = Exact<{
    templateId: Scalars['Int'];
}>;
export declare type CreateQuestionaryMutation = {
    createQuestionary: {
        questionary: {
            isCompleted: boolean;
            questionaryId: number;
            templateId: number;
            created: any;
            steps: Array<{
                isCompleted: boolean;
                topic: {
                    title: string;
                    id: number;
                    templateId: number;
                    sortOrder: number;
                    isEnabled: boolean;
                };
                fields: Array<{
                    answerId: number | null;
                    sortOrder: number;
                    topicId: number;
                    dependenciesOperator: DependenciesLogicOperator | null;
                    value: any | null;
                    question: {
                        id: string;
                        question: string;
                        naturalKey: string;
                        dataType: DataType;
                        categoryId: TemplateCategoryId;
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                    };
                    config: {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        minDate: string | null;
                        maxDate: string | null;
                        defaultDate: string | null;
                        includeTime: boolean;
                    } | {
                        html: string;
                        plain: string;
                        omitFromPdf: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        file_type: Array<string>;
                        max_files: number;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        titlePlaceholder: string;
                        questionLabel: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        numberValueConstraint: NumberValueConstraint | null;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        tooltip: string;
                    } | {
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        max: number | null;
                    } | {
                        titlePlaceholder: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        esiTemplateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        tooltip: string;
                    } | {
                        variant: string;
                        options: Array<string>;
                        isMultipleSelect: boolean;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        min: number | null;
                        max: number | null;
                        multiline: boolean;
                        placeholder: string;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        htmlQuestion: string | null;
                        isHtmlQuestion: boolean;
                        isCounterHidden: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    };
                    dependencies: Array<{
                        questionId: string;
                        dependencyId: string;
                        dependencyNaturalKey: string;
                        condition: {
                            condition: EvaluatorOperator;
                            params: any;
                        };
                    }>;
                }>;
            }>;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type AnswerFragment = {
    answerId: number | null;
    sortOrder: number;
    topicId: number;
    dependenciesOperator: DependenciesLogicOperator | null;
    value: any | null;
    question: {
        id: string;
        question: string;
        naturalKey: string;
        dataType: DataType;
        categoryId: TemplateCategoryId;
        config: {
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
            minDate: string | null;
            maxDate: string | null;
            defaultDate: string | null;
            includeTime: boolean;
        } | {
            html: string;
            plain: string;
            omitFromPdf: boolean;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            file_type: Array<string>;
            max_files: number;
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            titlePlaceholder: string;
            questionLabel: string;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
            units: Array<{
                id: string;
                unit: string;
                quantity: string;
                symbol: string;
                siConversionFormula: string;
            }>;
        } | {
            numberValueConstraint: NumberValueConstraint | null;
            small_label: string;
            required: boolean;
            tooltip: string;
            units: Array<{
                id: string;
                unit: string;
                quantity: string;
                symbol: string;
                siConversionFormula: string;
            }>;
        } | {
            tooltip: string;
        } | {
            tooltip: string;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
            max: number | null;
        } | {
            titlePlaceholder: string;
        } | {
            addEntryButtonLabel: string;
            minEntries: number | null;
            maxEntries: number | null;
            templateId: number | null;
            esiTemplateId: number | null;
            templateCategory: string;
            required: boolean;
            small_label: string;
        } | {
            tooltip: string;
        } | {
            variant: string;
            options: Array<string>;
            isMultipleSelect: boolean;
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            addEntryButtonLabel: string;
            minEntries: number | null;
            maxEntries: number | null;
            templateId: number | null;
            templateCategory: string;
            required: boolean;
            small_label: string;
        } | {
            min: number | null;
            max: number | null;
            multiline: boolean;
            placeholder: string;
            small_label: string;
            required: boolean;
            tooltip: string;
            htmlQuestion: string | null;
            isHtmlQuestion: boolean;
            isCounterHidden: boolean;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
        };
    };
    config: {
        small_label: string;
        required: boolean;
        tooltip: string;
    } | {
        small_label: string;
        required: boolean;
        tooltip: string;
        minDate: string | null;
        maxDate: string | null;
        defaultDate: string | null;
        includeTime: boolean;
    } | {
        html: string;
        plain: string;
        omitFromPdf: boolean;
    } | {
        small_label: string;
        required: boolean;
        tooltip: string;
    } | {
        file_type: Array<string>;
        max_files: number;
        small_label: string;
        required: boolean;
        tooltip: string;
    } | {
        titlePlaceholder: string;
        questionLabel: string;
    } | {
        small_label: string;
        required: boolean;
        tooltip: string;
        units: Array<{
            id: string;
            unit: string;
            quantity: string;
            symbol: string;
            siConversionFormula: string;
        }>;
    } | {
        numberValueConstraint: NumberValueConstraint | null;
        small_label: string;
        required: boolean;
        tooltip: string;
        units: Array<{
            id: string;
            unit: string;
            quantity: string;
            symbol: string;
            siConversionFormula: string;
        }>;
    } | {
        tooltip: string;
    } | {
        tooltip: string;
    } | {
        small_label: string;
        required: boolean;
        tooltip: string;
        max: number | null;
    } | {
        titlePlaceholder: string;
    } | {
        addEntryButtonLabel: string;
        minEntries: number | null;
        maxEntries: number | null;
        templateId: number | null;
        esiTemplateId: number | null;
        templateCategory: string;
        required: boolean;
        small_label: string;
    } | {
        tooltip: string;
    } | {
        variant: string;
        options: Array<string>;
        isMultipleSelect: boolean;
        small_label: string;
        required: boolean;
        tooltip: string;
    } | {
        small_label: string;
        required: boolean;
        tooltip: string;
    } | {
        addEntryButtonLabel: string;
        minEntries: number | null;
        maxEntries: number | null;
        templateId: number | null;
        templateCategory: string;
        required: boolean;
        small_label: string;
    } | {
        min: number | null;
        max: number | null;
        multiline: boolean;
        placeholder: string;
        small_label: string;
        required: boolean;
        tooltip: string;
        htmlQuestion: string | null;
        isHtmlQuestion: boolean;
        isCounterHidden: boolean;
    } | {
        small_label: string;
        required: boolean;
        tooltip: string;
    };
    dependencies: Array<{
        questionId: string;
        dependencyId: string;
        dependencyNaturalKey: string;
        condition: {
            condition: EvaluatorOperator;
            params: any;
        };
    }>;
};
export declare type QuestionaryFragment = {
    questionaryId: number;
    templateId: number;
    created: any;
    steps: Array<{
        isCompleted: boolean;
        topic: {
            title: string;
            id: number;
            templateId: number;
            sortOrder: number;
            isEnabled: boolean;
        };
        fields: Array<{
            answerId: number | null;
            sortOrder: number;
            topicId: number;
            dependenciesOperator: DependenciesLogicOperator | null;
            value: any | null;
            question: {
                id: string;
                question: string;
                naturalKey: string;
                dataType: DataType;
                categoryId: TemplateCategoryId;
                config: {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    minDate: string | null;
                    maxDate: string | null;
                    defaultDate: string | null;
                    includeTime: boolean;
                } | {
                    html: string;
                    plain: string;
                    omitFromPdf: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    file_type: Array<string>;
                    max_files: number;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    titlePlaceholder: string;
                    questionLabel: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    numberValueConstraint: NumberValueConstraint | null;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    tooltip: string;
                } | {
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    max: number | null;
                } | {
                    titlePlaceholder: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    esiTemplateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    tooltip: string;
                } | {
                    variant: string;
                    options: Array<string>;
                    isMultipleSelect: boolean;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    min: number | null;
                    max: number | null;
                    multiline: boolean;
                    placeholder: string;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    htmlQuestion: string | null;
                    isHtmlQuestion: boolean;
                    isCounterHidden: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                };
            };
            config: {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                minDate: string | null;
                maxDate: string | null;
                defaultDate: string | null;
                includeTime: boolean;
            } | {
                html: string;
                plain: string;
                omitFromPdf: boolean;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                file_type: Array<string>;
                max_files: number;
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                titlePlaceholder: string;
                questionLabel: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                units: Array<{
                    id: string;
                    unit: string;
                    quantity: string;
                    symbol: string;
                    siConversionFormula: string;
                }>;
            } | {
                numberValueConstraint: NumberValueConstraint | null;
                small_label: string;
                required: boolean;
                tooltip: string;
                units: Array<{
                    id: string;
                    unit: string;
                    quantity: string;
                    symbol: string;
                    siConversionFormula: string;
                }>;
            } | {
                tooltip: string;
            } | {
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                max: number | null;
            } | {
                titlePlaceholder: string;
            } | {
                addEntryButtonLabel: string;
                minEntries: number | null;
                maxEntries: number | null;
                templateId: number | null;
                esiTemplateId: number | null;
                templateCategory: string;
                required: boolean;
                small_label: string;
            } | {
                tooltip: string;
            } | {
                variant: string;
                options: Array<string>;
                isMultipleSelect: boolean;
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                addEntryButtonLabel: string;
                minEntries: number | null;
                maxEntries: number | null;
                templateId: number | null;
                templateCategory: string;
                required: boolean;
                small_label: string;
            } | {
                min: number | null;
                max: number | null;
                multiline: boolean;
                placeholder: string;
                small_label: string;
                required: boolean;
                tooltip: string;
                htmlQuestion: string | null;
                isHtmlQuestion: boolean;
                isCounterHidden: boolean;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            };
            dependencies: Array<{
                questionId: string;
                dependencyId: string;
                dependencyNaturalKey: string;
                condition: {
                    condition: EvaluatorOperator;
                    params: any;
                };
            }>;
        }>;
    }>;
};
export declare type QuestionaryStepFragment = {
    isCompleted: boolean;
    topic: {
        title: string;
        id: number;
        templateId: number;
        sortOrder: number;
        isEnabled: boolean;
    };
    fields: Array<{
        answerId: number | null;
        sortOrder: number;
        topicId: number;
        dependenciesOperator: DependenciesLogicOperator | null;
        value: any | null;
        question: {
            id: string;
            question: string;
            naturalKey: string;
            dataType: DataType;
            categoryId: TemplateCategoryId;
            config: {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                minDate: string | null;
                maxDate: string | null;
                defaultDate: string | null;
                includeTime: boolean;
            } | {
                html: string;
                plain: string;
                omitFromPdf: boolean;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                file_type: Array<string>;
                max_files: number;
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                titlePlaceholder: string;
                questionLabel: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                units: Array<{
                    id: string;
                    unit: string;
                    quantity: string;
                    symbol: string;
                    siConversionFormula: string;
                }>;
            } | {
                numberValueConstraint: NumberValueConstraint | null;
                small_label: string;
                required: boolean;
                tooltip: string;
                units: Array<{
                    id: string;
                    unit: string;
                    quantity: string;
                    symbol: string;
                    siConversionFormula: string;
                }>;
            } | {
                tooltip: string;
            } | {
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                max: number | null;
            } | {
                titlePlaceholder: string;
            } | {
                addEntryButtonLabel: string;
                minEntries: number | null;
                maxEntries: number | null;
                templateId: number | null;
                esiTemplateId: number | null;
                templateCategory: string;
                required: boolean;
                small_label: string;
            } | {
                tooltip: string;
            } | {
                variant: string;
                options: Array<string>;
                isMultipleSelect: boolean;
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                addEntryButtonLabel: string;
                minEntries: number | null;
                maxEntries: number | null;
                templateId: number | null;
                templateCategory: string;
                required: boolean;
                small_label: string;
            } | {
                min: number | null;
                max: number | null;
                multiline: boolean;
                placeholder: string;
                small_label: string;
                required: boolean;
                tooltip: string;
                htmlQuestion: string | null;
                isHtmlQuestion: boolean;
                isCounterHidden: boolean;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            };
        };
        config: {
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
            minDate: string | null;
            maxDate: string | null;
            defaultDate: string | null;
            includeTime: boolean;
        } | {
            html: string;
            plain: string;
            omitFromPdf: boolean;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            file_type: Array<string>;
            max_files: number;
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            titlePlaceholder: string;
            questionLabel: string;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
            units: Array<{
                id: string;
                unit: string;
                quantity: string;
                symbol: string;
                siConversionFormula: string;
            }>;
        } | {
            numberValueConstraint: NumberValueConstraint | null;
            small_label: string;
            required: boolean;
            tooltip: string;
            units: Array<{
                id: string;
                unit: string;
                quantity: string;
                symbol: string;
                siConversionFormula: string;
            }>;
        } | {
            tooltip: string;
        } | {
            tooltip: string;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
            max: number | null;
        } | {
            titlePlaceholder: string;
        } | {
            addEntryButtonLabel: string;
            minEntries: number | null;
            maxEntries: number | null;
            templateId: number | null;
            esiTemplateId: number | null;
            templateCategory: string;
            required: boolean;
            small_label: string;
        } | {
            tooltip: string;
        } | {
            variant: string;
            options: Array<string>;
            isMultipleSelect: boolean;
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            addEntryButtonLabel: string;
            minEntries: number | null;
            maxEntries: number | null;
            templateId: number | null;
            templateCategory: string;
            required: boolean;
            small_label: string;
        } | {
            min: number | null;
            max: number | null;
            multiline: boolean;
            placeholder: string;
            small_label: string;
            required: boolean;
            tooltip: string;
            htmlQuestion: string | null;
            isHtmlQuestion: boolean;
            isCounterHidden: boolean;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
        };
        dependencies: Array<{
            questionId: string;
            dependencyId: string;
            dependencyNaturalKey: string;
            condition: {
                condition: EvaluatorOperator;
                params: any;
            };
        }>;
    }>;
};
export declare type GetBlankQuestionaryQueryVariables = Exact<{
    templateId: Scalars['Int'];
}>;
export declare type GetBlankQuestionaryQuery = {
    blankQuestionary: {
        isCompleted: boolean;
        questionaryId: number;
        templateId: number;
        created: any;
        steps: Array<{
            isCompleted: boolean;
            topic: {
                title: string;
                id: number;
                templateId: number;
                sortOrder: number;
                isEnabled: boolean;
            };
            fields: Array<{
                answerId: number | null;
                sortOrder: number;
                topicId: number;
                dependenciesOperator: DependenciesLogicOperator | null;
                value: any | null;
                question: {
                    id: string;
                    question: string;
                    naturalKey: string;
                    dataType: DataType;
                    categoryId: TemplateCategoryId;
                    config: {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        minDate: string | null;
                        maxDate: string | null;
                        defaultDate: string | null;
                        includeTime: boolean;
                    } | {
                        html: string;
                        plain: string;
                        omitFromPdf: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        file_type: Array<string>;
                        max_files: number;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        titlePlaceholder: string;
                        questionLabel: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        numberValueConstraint: NumberValueConstraint | null;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        tooltip: string;
                    } | {
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        max: number | null;
                    } | {
                        titlePlaceholder: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        esiTemplateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        tooltip: string;
                    } | {
                        variant: string;
                        options: Array<string>;
                        isMultipleSelect: boolean;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        min: number | null;
                        max: number | null;
                        multiline: boolean;
                        placeholder: string;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        htmlQuestion: string | null;
                        isHtmlQuestion: boolean;
                        isCounterHidden: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    };
                };
                config: {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    minDate: string | null;
                    maxDate: string | null;
                    defaultDate: string | null;
                    includeTime: boolean;
                } | {
                    html: string;
                    plain: string;
                    omitFromPdf: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    file_type: Array<string>;
                    max_files: number;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    titlePlaceholder: string;
                    questionLabel: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    numberValueConstraint: NumberValueConstraint | null;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    tooltip: string;
                } | {
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    max: number | null;
                } | {
                    titlePlaceholder: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    esiTemplateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    tooltip: string;
                } | {
                    variant: string;
                    options: Array<string>;
                    isMultipleSelect: boolean;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    min: number | null;
                    max: number | null;
                    multiline: boolean;
                    placeholder: string;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    htmlQuestion: string | null;
                    isHtmlQuestion: boolean;
                    isCounterHidden: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                };
                dependencies: Array<{
                    questionId: string;
                    dependencyId: string;
                    dependencyNaturalKey: string;
                    condition: {
                        condition: EvaluatorOperator;
                        params: any;
                    };
                }>;
            }>;
        }>;
    };
};
export declare type GetBlankQuestionaryStepsQueryVariables = Exact<{
    templateId: Scalars['Int'];
}>;
export declare type GetBlankQuestionaryStepsQuery = {
    blankQuestionarySteps: Array<{
        isCompleted: boolean;
        topic: {
            title: string;
            id: number;
            templateId: number;
            sortOrder: number;
            isEnabled: boolean;
        };
        fields: Array<{
            answerId: number | null;
            sortOrder: number;
            topicId: number;
            dependenciesOperator: DependenciesLogicOperator | null;
            value: any | null;
            question: {
                id: string;
                question: string;
                naturalKey: string;
                dataType: DataType;
                categoryId: TemplateCategoryId;
                config: {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    minDate: string | null;
                    maxDate: string | null;
                    defaultDate: string | null;
                    includeTime: boolean;
                } | {
                    html: string;
                    plain: string;
                    omitFromPdf: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    file_type: Array<string>;
                    max_files: number;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    titlePlaceholder: string;
                    questionLabel: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    numberValueConstraint: NumberValueConstraint | null;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    tooltip: string;
                } | {
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    max: number | null;
                } | {
                    titlePlaceholder: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    esiTemplateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    tooltip: string;
                } | {
                    variant: string;
                    options: Array<string>;
                    isMultipleSelect: boolean;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    min: number | null;
                    max: number | null;
                    multiline: boolean;
                    placeholder: string;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    htmlQuestion: string | null;
                    isHtmlQuestion: boolean;
                    isCounterHidden: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                };
            };
            config: {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                minDate: string | null;
                maxDate: string | null;
                defaultDate: string | null;
                includeTime: boolean;
            } | {
                html: string;
                plain: string;
                omitFromPdf: boolean;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                file_type: Array<string>;
                max_files: number;
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                titlePlaceholder: string;
                questionLabel: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                units: Array<{
                    id: string;
                    unit: string;
                    quantity: string;
                    symbol: string;
                    siConversionFormula: string;
                }>;
            } | {
                numberValueConstraint: NumberValueConstraint | null;
                small_label: string;
                required: boolean;
                tooltip: string;
                units: Array<{
                    id: string;
                    unit: string;
                    quantity: string;
                    symbol: string;
                    siConversionFormula: string;
                }>;
            } | {
                tooltip: string;
            } | {
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                max: number | null;
            } | {
                titlePlaceholder: string;
            } | {
                addEntryButtonLabel: string;
                minEntries: number | null;
                maxEntries: number | null;
                templateId: number | null;
                esiTemplateId: number | null;
                templateCategory: string;
                required: boolean;
                small_label: string;
            } | {
                tooltip: string;
            } | {
                variant: string;
                options: Array<string>;
                isMultipleSelect: boolean;
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                addEntryButtonLabel: string;
                minEntries: number | null;
                maxEntries: number | null;
                templateId: number | null;
                templateCategory: string;
                required: boolean;
                small_label: string;
            } | {
                min: number | null;
                max: number | null;
                multiline: boolean;
                placeholder: string;
                small_label: string;
                required: boolean;
                tooltip: string;
                htmlQuestion: string | null;
                isHtmlQuestion: boolean;
                isCounterHidden: boolean;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            };
            dependencies: Array<{
                questionId: string;
                dependencyId: string;
                dependencyNaturalKey: string;
                condition: {
                    condition: EvaluatorOperator;
                    params: any;
                };
            }>;
        }>;
    }> | null;
};
export declare type GetFileMetadataQueryVariables = Exact<{
    fileIds: Array<Scalars['String']> | Scalars['String'];
}>;
export declare type GetFileMetadataQuery = {
    fileMetadata: Array<{
        fileId: string;
        originalFileName: string;
        mimeType: string;
        sizeInBytes: number;
        createdDate: any;
    }> | null;
};
export declare type GetQuestionaryQueryVariables = Exact<{
    questionaryId: Scalars['Int'];
}>;
export declare type GetQuestionaryQuery = {
    questionary: {
        questionaryId: number;
        templateId: number;
        created: any;
        steps: Array<{
            isCompleted: boolean;
            topic: {
                title: string;
                id: number;
                templateId: number;
                sortOrder: number;
                isEnabled: boolean;
            };
            fields: Array<{
                answerId: number | null;
                sortOrder: number;
                topicId: number;
                dependenciesOperator: DependenciesLogicOperator | null;
                value: any | null;
                question: {
                    id: string;
                    question: string;
                    naturalKey: string;
                    dataType: DataType;
                    categoryId: TemplateCategoryId;
                    config: {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        minDate: string | null;
                        maxDate: string | null;
                        defaultDate: string | null;
                        includeTime: boolean;
                    } | {
                        html: string;
                        plain: string;
                        omitFromPdf: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        file_type: Array<string>;
                        max_files: number;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        titlePlaceholder: string;
                        questionLabel: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        numberValueConstraint: NumberValueConstraint | null;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        tooltip: string;
                    } | {
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        max: number | null;
                    } | {
                        titlePlaceholder: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        esiTemplateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        tooltip: string;
                    } | {
                        variant: string;
                        options: Array<string>;
                        isMultipleSelect: boolean;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        min: number | null;
                        max: number | null;
                        multiline: boolean;
                        placeholder: string;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        htmlQuestion: string | null;
                        isHtmlQuestion: boolean;
                        isCounterHidden: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    };
                };
                config: {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    minDate: string | null;
                    maxDate: string | null;
                    defaultDate: string | null;
                    includeTime: boolean;
                } | {
                    html: string;
                    plain: string;
                    omitFromPdf: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    file_type: Array<string>;
                    max_files: number;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    titlePlaceholder: string;
                    questionLabel: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    numberValueConstraint: NumberValueConstraint | null;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    tooltip: string;
                } | {
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    max: number | null;
                } | {
                    titlePlaceholder: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    esiTemplateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    tooltip: string;
                } | {
                    variant: string;
                    options: Array<string>;
                    isMultipleSelect: boolean;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    min: number | null;
                    max: number | null;
                    multiline: boolean;
                    placeholder: string;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    htmlQuestion: string | null;
                    isHtmlQuestion: boolean;
                    isCounterHidden: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                };
                dependencies: Array<{
                    questionId: string;
                    dependencyId: string;
                    dependencyNaturalKey: string;
                    condition: {
                        condition: EvaluatorOperator;
                        params: any;
                    };
                }>;
            }>;
        }>;
    } | null;
};
export declare type AddTechnicalReviewMutationVariables = Exact<{
    proposalPk: Scalars['Int'];
    timeAllocation?: InputMaybe<Scalars['Int']>;
    comment?: InputMaybe<Scalars['String']>;
    publicComment?: InputMaybe<Scalars['String']>;
    status?: InputMaybe<TechnicalReviewStatus>;
    submitted: Scalars['Boolean'];
    reviewerId: Scalars['Int'];
    files?: InputMaybe<Scalars['String']>;
}>;
export declare type AddTechnicalReviewMutation = {
    addTechnicalReview: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
        technicalReview: {
            id: number;
        } | null;
    };
};
export declare type AddUserForReviewMutationVariables = Exact<{
    userID: Scalars['Int'];
    proposalPk: Scalars['Int'];
    sepID: Scalars['Int'];
}>;
export declare type AddUserForReviewMutation = {
    addUserForReview: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
        review: {
            id: number;
        } | null;
    };
};
export declare type UpdateTechnicalReviewAssigneeMutationVariables = Exact<{
    proposalPks: Array<Scalars['Int']> | Scalars['Int'];
    userId: Scalars['Int'];
}>;
export declare type UpdateTechnicalReviewAssigneeMutation = {
    updateTechnicalReviewAssignee: {
        technicalReviews: Array<{
            id: number;
            comment: string | null;
            publicComment: string | null;
            timeAllocation: number | null;
            status: TechnicalReviewStatus | null;
            proposalPk: number;
            submitted: boolean;
            files: string | null;
            technicalReviewAssigneeId: number | null;
            technicalReviewAssignee: {
                id: number;
                firstname: string;
                lastname: string;
            } | null;
        }> | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type CoreReviewFragment = {
    id: number;
    userID: number;
    status: ReviewStatus;
    comment: string | null;
    grade: number | null;
    sepID: number;
};
export declare type GetProposalReviewsQueryVariables = Exact<{
    proposalPk: Scalars['Int'];
}>;
export declare type GetProposalReviewsQuery = {
    proposalReviews: Array<{
        id: number;
        userID: number;
        comment: string | null;
        grade: number | null;
        status: ReviewStatus;
        sepID: number;
    }> | null;
};
export declare type GetReviewQueryVariables = Exact<{
    reviewId: Scalars['Int'];
}>;
export declare type GetReviewQuery = {
    review: {
        id: number;
        userID: number;
        status: ReviewStatus;
        comment: string | null;
        grade: number | null;
        sepID: number;
        proposal: {
            primaryKey: number;
            title: string;
            abstract: string;
            proposer: {
                id: number;
            } | null;
        } | null;
        reviewer: {
            id: number;
            firstname: string;
            lastname: string;
            preferredname: string | null;
            organisation: string;
            position: string;
            created: any | null;
            placeholder: boolean | null;
        } | null;
    } | null;
};
export declare type RemoveUserForReviewMutationVariables = Exact<{
    reviewId: Scalars['Int'];
    sepId: Scalars['Int'];
}>;
export declare type RemoveUserForReviewMutation = {
    removeUserForReview: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type SubmitProposalsReviewMutationVariables = Exact<{
    proposals: Array<ProposalPkWithReviewId> | ProposalPkWithReviewId;
}>;
export declare type SubmitProposalsReviewMutation = {
    submitProposalsReview: {
        isSuccess: boolean | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type SubmitTechnicalReviewsMutationVariables = Exact<{
    technicalReviews: Array<SubmitTechnicalReviewInput> | SubmitTechnicalReviewInput;
}>;
export declare type SubmitTechnicalReviewsMutation = {
    submitTechnicalReviews: {
        isSuccess: boolean | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type UpdateReviewMutationVariables = Exact<{
    reviewID: Scalars['Int'];
    grade: Scalars['Int'];
    comment: Scalars['String'];
    status: ReviewStatus;
    sepID: Scalars['Int'];
}>;
export declare type UpdateReviewMutation = {
    updateReview: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
        review: {
            id: number;
            userID: number;
            status: ReviewStatus;
            comment: string | null;
            grade: number | null;
            sepID: number;
            nextProposalStatus: {
                id: number | null;
                shortCode: string | null;
                name: string | null;
            } | null;
        } | null;
    };
};
export declare type UserWithReviewsQueryVariables = Exact<{
    callId?: InputMaybe<Scalars['Int']>;
    instrumentId?: InputMaybe<Scalars['Int']>;
    status?: InputMaybe<ReviewStatus>;
    reviewer?: InputMaybe<ReviewerFilter>;
}>;
export declare type UserWithReviewsQuery = {
    me: {
        id: number;
        firstname: string;
        lastname: string;
        organisation: number;
        reviews: Array<{
            id: number;
            grade: number | null;
            comment: string | null;
            status: ReviewStatus;
            sepID: number;
            proposal: {
                primaryKey: number;
                title: string;
                proposalId: string;
                call: {
                    shortCode: string;
                } | null;
                instrument: {
                    shortCode: string;
                } | null;
            } | null;
        }>;
    } | null;
};
export declare type CloneSampleEsiMutationVariables = Exact<{
    esiId: Scalars['Int'];
    sampleId: Scalars['Int'];
    newSampleTitle?: InputMaybe<Scalars['String']>;
}>;
export declare type CloneSampleEsiMutation = {
    cloneSampleEsi: {
        esi: {
            sampleId: number;
            esiId: number;
            questionaryId: number;
            isSubmitted: boolean;
            questionary: {
                isCompleted: boolean;
                questionaryId: number;
                templateId: number;
                created: any;
                steps: Array<{
                    isCompleted: boolean;
                    topic: {
                        title: string;
                        id: number;
                        templateId: number;
                        sortOrder: number;
                        isEnabled: boolean;
                    };
                    fields: Array<{
                        answerId: number | null;
                        sortOrder: number;
                        topicId: number;
                        dependenciesOperator: DependenciesLogicOperator | null;
                        value: any | null;
                        question: {
                            id: string;
                            question: string;
                            naturalKey: string;
                            dataType: DataType;
                            categoryId: TemplateCategoryId;
                            config: {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                minDate: string | null;
                                maxDate: string | null;
                                defaultDate: string | null;
                                includeTime: boolean;
                            } | {
                                html: string;
                                plain: string;
                                omitFromPdf: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                file_type: Array<string>;
                                max_files: number;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                titlePlaceholder: string;
                                questionLabel: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                numberValueConstraint: NumberValueConstraint | null;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                tooltip: string;
                            } | {
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                max: number | null;
                            } | {
                                titlePlaceholder: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                esiTemplateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                tooltip: string;
                            } | {
                                variant: string;
                                options: Array<string>;
                                isMultipleSelect: boolean;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                min: number | null;
                                max: number | null;
                                multiline: boolean;
                                placeholder: string;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                htmlQuestion: string | null;
                                isHtmlQuestion: boolean;
                                isCounterHidden: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            };
                        };
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                        dependencies: Array<{
                            questionId: string;
                            dependencyId: string;
                            dependencyNaturalKey: string;
                            condition: {
                                condition: EvaluatorOperator;
                                params: any;
                            };
                        }>;
                    }>;
                }>;
            };
            sample: {
                id: number;
                title: string;
                creatorId: number;
                questionaryId: number;
                safetyStatus: SampleStatus;
                safetyComment: string;
                isPostProposalSubmission: boolean;
                created: any;
                proposalPk: number;
                questionId: string;
            };
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type CreateSampleEsiMutationVariables = Exact<{
    sampleId: Scalars['Int'];
    esiId: Scalars['Int'];
}>;
export declare type CreateSampleEsiMutation = {
    createSampleEsi: {
        esi: {
            sampleId: number;
            esiId: number;
            questionaryId: number;
            isSubmitted: boolean;
            questionary: {
                isCompleted: boolean;
                questionaryId: number;
                templateId: number;
                created: any;
                steps: Array<{
                    isCompleted: boolean;
                    topic: {
                        title: string;
                        id: number;
                        templateId: number;
                        sortOrder: number;
                        isEnabled: boolean;
                    };
                    fields: Array<{
                        answerId: number | null;
                        sortOrder: number;
                        topicId: number;
                        dependenciesOperator: DependenciesLogicOperator | null;
                        value: any | null;
                        question: {
                            id: string;
                            question: string;
                            naturalKey: string;
                            dataType: DataType;
                            categoryId: TemplateCategoryId;
                            config: {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                minDate: string | null;
                                maxDate: string | null;
                                defaultDate: string | null;
                                includeTime: boolean;
                            } | {
                                html: string;
                                plain: string;
                                omitFromPdf: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                file_type: Array<string>;
                                max_files: number;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                titlePlaceholder: string;
                                questionLabel: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                numberValueConstraint: NumberValueConstraint | null;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                tooltip: string;
                            } | {
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                max: number | null;
                            } | {
                                titlePlaceholder: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                esiTemplateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                tooltip: string;
                            } | {
                                variant: string;
                                options: Array<string>;
                                isMultipleSelect: boolean;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                min: number | null;
                                max: number | null;
                                multiline: boolean;
                                placeholder: string;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                htmlQuestion: string | null;
                                isHtmlQuestion: boolean;
                                isCounterHidden: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            };
                        };
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                        dependencies: Array<{
                            questionId: string;
                            dependencyId: string;
                            dependencyNaturalKey: string;
                            condition: {
                                condition: EvaluatorOperator;
                                params: any;
                            };
                        }>;
                    }>;
                }>;
            };
            sample: {
                id: number;
                title: string;
                creatorId: number;
                questionaryId: number;
                safetyStatus: SampleStatus;
                safetyComment: string;
                isPostProposalSubmission: boolean;
                created: any;
                proposalPk: number;
                questionId: string;
            };
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type DeleteSampleEsiMutationVariables = Exact<{
    sampleId: Scalars['Int'];
    esiId: Scalars['Int'];
}>;
export declare type DeleteSampleEsiMutation = {
    deleteSampleEsi: {
        esi: {
            sampleId: number;
            esiId: number;
            questionaryId: number;
            isSubmitted: boolean;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type SampleEsiFragment = {
    sampleId: number;
    esiId: number;
    questionaryId: number;
    isSubmitted: boolean;
};
export declare type GetSampleEsiQueryVariables = Exact<{
    sampleId: Scalars['Int'];
    esiId: Scalars['Int'];
}>;
export declare type GetSampleEsiQuery = {
    sampleEsi: {
        sampleId: number;
        esiId: number;
        questionaryId: number;
        isSubmitted: boolean;
        questionary: {
            isCompleted: boolean;
            questionaryId: number;
            templateId: number;
            created: any;
            steps: Array<{
                isCompleted: boolean;
                topic: {
                    title: string;
                    id: number;
                    templateId: number;
                    sortOrder: number;
                    isEnabled: boolean;
                };
                fields: Array<{
                    answerId: number | null;
                    sortOrder: number;
                    topicId: number;
                    dependenciesOperator: DependenciesLogicOperator | null;
                    value: any | null;
                    question: {
                        id: string;
                        question: string;
                        naturalKey: string;
                        dataType: DataType;
                        categoryId: TemplateCategoryId;
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                    };
                    config: {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        minDate: string | null;
                        maxDate: string | null;
                        defaultDate: string | null;
                        includeTime: boolean;
                    } | {
                        html: string;
                        plain: string;
                        omitFromPdf: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        file_type: Array<string>;
                        max_files: number;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        titlePlaceholder: string;
                        questionLabel: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        numberValueConstraint: NumberValueConstraint | null;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        tooltip: string;
                    } | {
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        max: number | null;
                    } | {
                        titlePlaceholder: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        esiTemplateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        tooltip: string;
                    } | {
                        variant: string;
                        options: Array<string>;
                        isMultipleSelect: boolean;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        min: number | null;
                        max: number | null;
                        multiline: boolean;
                        placeholder: string;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        htmlQuestion: string | null;
                        isHtmlQuestion: boolean;
                        isCounterHidden: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    };
                    dependencies: Array<{
                        questionId: string;
                        dependencyId: string;
                        dependencyNaturalKey: string;
                        condition: {
                            condition: EvaluatorOperator;
                            params: any;
                        };
                    }>;
                }>;
            }>;
        };
        sample: {
            id: number;
            title: string;
            creatorId: number;
            questionaryId: number;
            safetyStatus: SampleStatus;
            safetyComment: string;
            isPostProposalSubmission: boolean;
            created: any;
            proposalPk: number;
            questionId: string;
        };
    } | null;
};
export declare type UpdateSampleEsiMutationVariables = Exact<{
    esiId: Scalars['Int'];
    sampleId: Scalars['Int'];
    isSubmitted?: InputMaybe<Scalars['Boolean']>;
}>;
export declare type UpdateSampleEsiMutation = {
    updateSampleEsi: {
        esi: {
            sampleId: number;
            esiId: number;
            questionaryId: number;
            isSubmitted: boolean;
            questionary: {
                isCompleted: boolean;
                questionaryId: number;
                templateId: number;
                created: any;
                steps: Array<{
                    isCompleted: boolean;
                    topic: {
                        title: string;
                        id: number;
                        templateId: number;
                        sortOrder: number;
                        isEnabled: boolean;
                    };
                    fields: Array<{
                        answerId: number | null;
                        sortOrder: number;
                        topicId: number;
                        dependenciesOperator: DependenciesLogicOperator | null;
                        value: any | null;
                        question: {
                            id: string;
                            question: string;
                            naturalKey: string;
                            dataType: DataType;
                            categoryId: TemplateCategoryId;
                            config: {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                minDate: string | null;
                                maxDate: string | null;
                                defaultDate: string | null;
                                includeTime: boolean;
                            } | {
                                html: string;
                                plain: string;
                                omitFromPdf: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                file_type: Array<string>;
                                max_files: number;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                titlePlaceholder: string;
                                questionLabel: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                numberValueConstraint: NumberValueConstraint | null;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                tooltip: string;
                            } | {
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                max: number | null;
                            } | {
                                titlePlaceholder: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                esiTemplateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                tooltip: string;
                            } | {
                                variant: string;
                                options: Array<string>;
                                isMultipleSelect: boolean;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                min: number | null;
                                max: number | null;
                                multiline: boolean;
                                placeholder: string;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                htmlQuestion: string | null;
                                isHtmlQuestion: boolean;
                                isCounterHidden: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            };
                        };
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                        dependencies: Array<{
                            questionId: string;
                            dependencyId: string;
                            dependencyNaturalKey: string;
                            condition: {
                                condition: EvaluatorOperator;
                                params: any;
                            };
                        }>;
                    }>;
                }>;
            };
            sample: {
                id: number;
                title: string;
                creatorId: number;
                questionaryId: number;
                safetyStatus: SampleStatus;
                safetyComment: string;
                isPostProposalSubmission: boolean;
                created: any;
                proposalPk: number;
                questionId: string;
            };
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type CloneSampleMutationVariables = Exact<{
    sampleId: Scalars['Int'];
    title?: InputMaybe<Scalars['String']>;
    isPostProposalSubmission?: InputMaybe<Scalars['Boolean']>;
}>;
export declare type CloneSampleMutation = {
    cloneSample: {
        sample: {
            id: number;
            title: string;
            creatorId: number;
            questionaryId: number;
            safetyStatus: SampleStatus;
            safetyComment: string;
            isPostProposalSubmission: boolean;
            created: any;
            proposalPk: number;
            questionId: string;
            questionary: {
                isCompleted: boolean;
                questionaryId: number;
                templateId: number;
                created: any;
                steps: Array<{
                    isCompleted: boolean;
                    topic: {
                        title: string;
                        id: number;
                        templateId: number;
                        sortOrder: number;
                        isEnabled: boolean;
                    };
                    fields: Array<{
                        answerId: number | null;
                        sortOrder: number;
                        topicId: number;
                        dependenciesOperator: DependenciesLogicOperator | null;
                        value: any | null;
                        question: {
                            id: string;
                            question: string;
                            naturalKey: string;
                            dataType: DataType;
                            categoryId: TemplateCategoryId;
                            config: {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                minDate: string | null;
                                maxDate: string | null;
                                defaultDate: string | null;
                                includeTime: boolean;
                            } | {
                                html: string;
                                plain: string;
                                omitFromPdf: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                file_type: Array<string>;
                                max_files: number;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                titlePlaceholder: string;
                                questionLabel: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                numberValueConstraint: NumberValueConstraint | null;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                tooltip: string;
                            } | {
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                max: number | null;
                            } | {
                                titlePlaceholder: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                esiTemplateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                tooltip: string;
                            } | {
                                variant: string;
                                options: Array<string>;
                                isMultipleSelect: boolean;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                min: number | null;
                                max: number | null;
                                multiline: boolean;
                                placeholder: string;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                htmlQuestion: string | null;
                                isHtmlQuestion: boolean;
                                isCounterHidden: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            };
                        };
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                        dependencies: Array<{
                            questionId: string;
                            dependencyId: string;
                            dependencyNaturalKey: string;
                            condition: {
                                condition: EvaluatorOperator;
                                params: any;
                            };
                        }>;
                    }>;
                }>;
            };
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type CreateSampleMutationVariables = Exact<{
    title: Scalars['String'];
    templateId: Scalars['Int'];
    proposalPk: Scalars['Int'];
    questionId: Scalars['String'];
    isPostProposalSubmission?: InputMaybe<Scalars['Boolean']>;
}>;
export declare type CreateSampleMutation = {
    createSample: {
        sample: {
            id: number;
            title: string;
            creatorId: number;
            questionaryId: number;
            safetyStatus: SampleStatus;
            safetyComment: string;
            isPostProposalSubmission: boolean;
            created: any;
            proposalPk: number;
            questionId: string;
            questionary: {
                isCompleted: boolean;
                questionaryId: number;
                templateId: number;
                created: any;
                steps: Array<{
                    isCompleted: boolean;
                    topic: {
                        title: string;
                        id: number;
                        templateId: number;
                        sortOrder: number;
                        isEnabled: boolean;
                    };
                    fields: Array<{
                        answerId: number | null;
                        sortOrder: number;
                        topicId: number;
                        dependenciesOperator: DependenciesLogicOperator | null;
                        value: any | null;
                        question: {
                            id: string;
                            question: string;
                            naturalKey: string;
                            dataType: DataType;
                            categoryId: TemplateCategoryId;
                            config: {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                minDate: string | null;
                                maxDate: string | null;
                                defaultDate: string | null;
                                includeTime: boolean;
                            } | {
                                html: string;
                                plain: string;
                                omitFromPdf: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                file_type: Array<string>;
                                max_files: number;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                titlePlaceholder: string;
                                questionLabel: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                numberValueConstraint: NumberValueConstraint | null;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                tooltip: string;
                            } | {
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                max: number | null;
                            } | {
                                titlePlaceholder: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                esiTemplateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                tooltip: string;
                            } | {
                                variant: string;
                                options: Array<string>;
                                isMultipleSelect: boolean;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                min: number | null;
                                max: number | null;
                                multiline: boolean;
                                placeholder: string;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                htmlQuestion: string | null;
                                isHtmlQuestion: boolean;
                                isCounterHidden: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            };
                        };
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                        dependencies: Array<{
                            questionId: string;
                            dependencyId: string;
                            dependencyNaturalKey: string;
                            condition: {
                                condition: EvaluatorOperator;
                                params: any;
                            };
                        }>;
                    }>;
                }>;
            };
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type DeleteSampleMutationVariables = Exact<{
    sampleId: Scalars['Int'];
}>;
export declare type DeleteSampleMutation = {
    deleteSample: {
        sample: {
            id: number;
            title: string;
            creatorId: number;
            questionaryId: number;
            safetyStatus: SampleStatus;
            safetyComment: string;
            isPostProposalSubmission: boolean;
            created: any;
            proposalPk: number;
            questionId: string;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type SampleFragment = {
    id: number;
    title: string;
    creatorId: number;
    questionaryId: number;
    safetyStatus: SampleStatus;
    safetyComment: string;
    isPostProposalSubmission: boolean;
    created: any;
    proposalPk: number;
    questionId: string;
};
export declare type GetSampleQueryVariables = Exact<{
    sampleId: Scalars['Int'];
}>;
export declare type GetSampleQuery = {
    sample: {
        id: number;
        title: string;
        creatorId: number;
        questionaryId: number;
        safetyStatus: SampleStatus;
        safetyComment: string;
        isPostProposalSubmission: boolean;
        created: any;
        proposalPk: number;
        questionId: string;
        questionary: {
            isCompleted: boolean;
            questionaryId: number;
            templateId: number;
            created: any;
            steps: Array<{
                isCompleted: boolean;
                topic: {
                    title: string;
                    id: number;
                    templateId: number;
                    sortOrder: number;
                    isEnabled: boolean;
                };
                fields: Array<{
                    answerId: number | null;
                    sortOrder: number;
                    topicId: number;
                    dependenciesOperator: DependenciesLogicOperator | null;
                    value: any | null;
                    question: {
                        id: string;
                        question: string;
                        naturalKey: string;
                        dataType: DataType;
                        categoryId: TemplateCategoryId;
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                    };
                    config: {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        minDate: string | null;
                        maxDate: string | null;
                        defaultDate: string | null;
                        includeTime: boolean;
                    } | {
                        html: string;
                        plain: string;
                        omitFromPdf: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        file_type: Array<string>;
                        max_files: number;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        titlePlaceholder: string;
                        questionLabel: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        numberValueConstraint: NumberValueConstraint | null;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        tooltip: string;
                    } | {
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        max: number | null;
                    } | {
                        titlePlaceholder: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        esiTemplateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        tooltip: string;
                    } | {
                        variant: string;
                        options: Array<string>;
                        isMultipleSelect: boolean;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        min: number | null;
                        max: number | null;
                        multiline: boolean;
                        placeholder: string;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        htmlQuestion: string | null;
                        isHtmlQuestion: boolean;
                        isCounterHidden: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    };
                    dependencies: Array<{
                        questionId: string;
                        dependencyId: string;
                        dependencyNaturalKey: string;
                        condition: {
                            condition: EvaluatorOperator;
                            params: any;
                        };
                    }>;
                }>;
            }>;
        };
    } | null;
};
export declare type GetSamplesByCallIdQueryVariables = Exact<{
    callId: Scalars['Int'];
}>;
export declare type GetSamplesByCallIdQuery = {
    samplesByCallId: Array<{
        id: number;
        title: string;
        creatorId: number;
        questionaryId: number;
        safetyStatus: SampleStatus;
        safetyComment: string;
        isPostProposalSubmission: boolean;
        created: any;
        proposalPk: number;
        questionId: string;
        proposal: {
            primaryKey: number;
            proposalId: string;
        };
    }> | null;
};
export declare type GetSamplesWithProposalDataQueryVariables = Exact<{
    filter?: InputMaybe<SamplesFilter>;
}>;
export declare type GetSamplesWithProposalDataQuery = {
    samples: Array<{
        id: number;
        title: string;
        creatorId: number;
        questionaryId: number;
        safetyStatus: SampleStatus;
        safetyComment: string;
        isPostProposalSubmission: boolean;
        created: any;
        proposalPk: number;
        questionId: string;
        proposal: {
            primaryKey: number;
            proposalId: string;
        };
    }> | null;
};
export declare type GetSamplesWithQuestionaryStatusQueryVariables = Exact<{
    filter?: InputMaybe<SamplesFilter>;
}>;
export declare type GetSamplesWithQuestionaryStatusQuery = {
    samples: Array<{
        id: number;
        title: string;
        creatorId: number;
        questionaryId: number;
        safetyStatus: SampleStatus;
        safetyComment: string;
        isPostProposalSubmission: boolean;
        created: any;
        proposalPk: number;
        questionId: string;
        questionary: {
            isCompleted: boolean;
        };
    }> | null;
};
export declare type UpdateSampleMutationVariables = Exact<{
    sampleId: Scalars['Int'];
    title?: InputMaybe<Scalars['String']>;
    safetyComment?: InputMaybe<Scalars['String']>;
    safetyStatus?: InputMaybe<SampleStatus>;
}>;
export declare type UpdateSampleMutation = {
    updateSample: {
        sample: {
            id: number;
            title: string;
            creatorId: number;
            questionaryId: number;
            safetyStatus: SampleStatus;
            safetyComment: string;
            isPostProposalSubmission: boolean;
            created: any;
            proposalPk: number;
            questionId: string;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type ScheduledEventCoreFragment = {
    id: number;
    proposalPk: number | null;
    bookingType: ScheduledEventBookingType;
    startsAt: any;
    endsAt: any;
    status: ProposalBookingStatusCore;
    localContactId: number | null;
};
export declare type GetScheduledEventCoreQueryVariables = Exact<{
    scheduledEventId: Scalars['Int'];
}>;
export declare type GetScheduledEventCoreQuery = {
    scheduledEventCore: {
        id: number;
        proposalPk: number | null;
        bookingType: ScheduledEventBookingType;
        startsAt: any;
        endsAt: any;
        status: ProposalBookingStatusCore;
        localContactId: number | null;
    } | null;
};
export declare type GetScheduledEventsCoreQueryVariables = Exact<{
    filter?: InputMaybe<ScheduledEventsCoreFilter>;
    first?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
}>;
export declare type GetScheduledEventsCoreQuery = {
    scheduledEventsCore: Array<{
        id: number;
        proposalPk: number | null;
        bookingType: ScheduledEventBookingType;
        startsAt: any;
        endsAt: any;
        status: ProposalBookingStatusCore;
        localContactId: number | null;
        proposal: {
            primaryKey: number;
            title: string;
            abstract: string;
            statusId: number;
            publicStatus: ProposalPublicStatus;
            proposalId: string;
            finalStatus: ProposalEndStatus | null;
            commentForUser: string | null;
            commentForManagement: string | null;
            created: any;
            updated: any;
            callId: number;
            questionaryId: number;
            notified: boolean;
            submitted: boolean;
            managementTimeAllocation: number | null;
            managementDecisionSubmitted: boolean;
            proposer: {
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            } | null;
            instrument: {
                id: number;
                name: string;
                shortCode: string;
                description: string;
                managerUserId: number;
                scientists: Array<{
                    id: number;
                    firstname: string;
                    lastname: string;
                    preferredname: string | null;
                    organisation: string;
                    position: string;
                    created: any | null;
                    placeholder: boolean | null;
                }>;
            } | null;
            status: {
                id: number;
                shortCode: string;
                name: string;
                description: string;
                isDefault: boolean;
            } | null;
            sepMeetingDecision: {
                proposalPk: number;
                recommendation: ProposalEndStatus | null;
                commentForUser: string | null;
                commentForManagement: string | null;
                rankOrder: number | null;
                submitted: boolean;
                submittedBy: number | null;
            } | null;
        };
        esi: {
            id: number;
            creatorId: number;
            questionaryId: number;
            isSubmitted: boolean;
            created: any;
        } | null;
        visit: {
            registrations: Array<{
                startsAt: any | null;
                endsAt: any | null;
                trainingStatus: TrainingStatus;
                userId: number;
                visitId: number;
                registrationQuestionaryId: number | null;
                isRegistrationSubmitted: boolean;
                trainingExpiryDate: any | null;
                user: {
                    id: number;
                    firstname: string;
                    lastname: string;
                    preferredname: string | null;
                    organisation: string;
                    position: string;
                    created: any | null;
                    placeholder: boolean | null;
                };
            }>;
            teamLead: {
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            };
        } | null;
    }>;
};
export declare type AddProposalWorkflowStatusMutationVariables = Exact<{
    proposalWorkflowId: Scalars['Int'];
    sortOrder: Scalars['Int'];
    droppableGroupId: Scalars['String'];
    parentDroppableGroupId?: InputMaybe<Scalars['String']>;
    proposalStatusId: Scalars['Int'];
    nextProposalStatusId?: InputMaybe<Scalars['Int']>;
    prevProposalStatusId?: InputMaybe<Scalars['Int']>;
}>;
export declare type AddProposalWorkflowStatusMutation = {
    addProposalWorkflowStatus: {
        proposalWorkflowConnection: {
            id: number;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type AddStatusChangingEventsToConnectionMutationVariables = Exact<{
    proposalWorkflowConnectionId: Scalars['Int'];
    statusChangingEvents: Array<Scalars['String']> | Scalars['String'];
}>;
export declare type AddStatusChangingEventsToConnectionMutation = {
    addStatusChangingEventsToConnection: {
        statusChangingEvents: Array<{
            statusChangingEventId: number;
            proposalWorkflowConnectionId: number;
            statusChangingEvent: string;
        }> | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type CreateProposalStatusMutationVariables = Exact<{
    shortCode: Scalars['String'];
    name: Scalars['String'];
    description: Scalars['String'];
}>;
export declare type CreateProposalStatusMutation = {
    createProposalStatus: {
        proposalStatus: {
            id: number;
            shortCode: string;
            name: string;
            description: string;
            isDefault: boolean;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type CreateProposalWorkflowMutationVariables = Exact<{
    name: Scalars['String'];
    description: Scalars['String'];
}>;
export declare type CreateProposalWorkflowMutation = {
    createProposalWorkflow: {
        proposalWorkflow: {
            id: number;
            name: string;
            description: string;
            proposalWorkflowConnectionGroups: Array<{
                groupId: string;
                parentGroupId: string | null;
                connections: Array<{
                    id: number;
                    sortOrder: number;
                    proposalWorkflowId: number;
                    proposalStatusId: number;
                    nextProposalStatusId: number | null;
                    prevProposalStatusId: number | null;
                    droppableGroupId: string;
                    proposalStatus: {
                        id: number;
                        shortCode: string;
                        name: string;
                        description: string;
                        isDefault: boolean;
                    };
                    statusChangingEvents: Array<{
                        statusChangingEventId: number;
                        proposalWorkflowConnectionId: number;
                        statusChangingEvent: string;
                    }> | null;
                }>;
            }>;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type DeleteProposalStatusMutationVariables = Exact<{
    id: Scalars['Int'];
}>;
export declare type DeleteProposalStatusMutation = {
    deleteProposalStatus: {
        proposalStatus: {
            id: number;
            shortCode: string;
            name: string;
            description: string;
            isDefault: boolean;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type DeleteProposalWorkflowMutationVariables = Exact<{
    id: Scalars['Int'];
}>;
export declare type DeleteProposalWorkflowMutation = {
    deleteProposalWorkflow: {
        proposalWorkflow: {
            id: number;
            name: string;
            description: string;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type DeleteProposalWorkflowStatusMutationVariables = Exact<{
    proposalStatusId: Scalars['Int'];
    proposalWorkflowId: Scalars['Int'];
    sortOrder: Scalars['Int'];
}>;
export declare type DeleteProposalWorkflowStatusMutation = {
    deleteProposalWorkflowStatus: {
        isSuccess: boolean | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type ProposalStatusFragment = {
    id: number;
    shortCode: string;
    name: string;
    description: string;
    isDefault: boolean;
};
export declare type GetProposalEventsQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetProposalEventsQuery = {
    proposalEvents: Array<{
        name: Event;
        description: string | null;
    }> | null;
};
export declare type GetProposalStatusesQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetProposalStatusesQuery = {
    proposalStatuses: Array<{
        id: number;
        shortCode: string;
        name: string;
        description: string;
        isDefault: boolean;
    }> | null;
};
export declare type GetProposalWorkflowQueryVariables = Exact<{
    id: Scalars['Int'];
}>;
export declare type GetProposalWorkflowQuery = {
    proposalWorkflow: {
        id: number;
        name: string;
        description: string;
        proposalWorkflowConnectionGroups: Array<{
            groupId: string;
            parentGroupId: string | null;
            connections: Array<{
                id: number;
                sortOrder: number;
                proposalWorkflowId: number;
                proposalStatusId: number;
                nextProposalStatusId: number | null;
                prevProposalStatusId: number | null;
                droppableGroupId: string;
                proposalStatus: {
                    id: number;
                    shortCode: string;
                    name: string;
                    description: string;
                    isDefault: boolean;
                };
                statusChangingEvents: Array<{
                    statusChangingEventId: number;
                    proposalWorkflowConnectionId: number;
                    statusChangingEvent: string;
                }> | null;
            }>;
        }>;
    } | null;
};
export declare type GetProposalWorkflowsQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetProposalWorkflowsQuery = {
    proposalWorkflows: Array<{
        id: number;
        name: string;
        description: string;
    }> | null;
};
export declare type MoveProposalWorkflowStatusMutationVariables = Exact<{
    from: IndexWithGroupId;
    to: IndexWithGroupId;
    proposalWorkflowId: Scalars['Int'];
}>;
export declare type MoveProposalWorkflowStatusMutation = {
    moveProposalWorkflowStatus: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type UpdateProposalStatusMutationVariables = Exact<{
    id: Scalars['Int'];
    shortCode: Scalars['String'];
    name: Scalars['String'];
    description: Scalars['String'];
}>;
export declare type UpdateProposalStatusMutation = {
    updateProposalStatus: {
        proposalStatus: {
            id: number;
            shortCode: string;
            name: string;
            description: string;
            isDefault: boolean;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type UpdateProposalWorkflowMutationVariables = Exact<{
    id: Scalars['Int'];
    name: Scalars['String'];
    description: Scalars['String'];
}>;
export declare type UpdateProposalWorkflowMutation = {
    updateProposalWorkflow: {
        proposalWorkflow: {
            id: number;
            name: string;
            description: string;
            proposalWorkflowConnectionGroups: Array<{
                groupId: string;
                parentGroupId: string | null;
                connections: Array<{
                    id: number;
                    sortOrder: number;
                    proposalWorkflowId: number;
                    proposalStatusId: number;
                    nextProposalStatusId: number | null;
                    prevProposalStatusId: number | null;
                    droppableGroupId: string;
                    proposalStatus: {
                        id: number;
                        name: string;
                        description: string;
                    };
                    statusChangingEvents: Array<{
                        statusChangingEventId: number;
                        proposalWorkflowConnectionId: number;
                        statusChangingEvent: string;
                    }> | null;
                }>;
            }>;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type AddSamplesToShipmentMutationVariables = Exact<{
    shipmentId: Scalars['Int'];
    sampleIds: Array<Scalars['Int']> | Scalars['Int'];
}>;
export declare type AddSamplesToShipmentMutation = {
    addSamplesToShipment: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
        shipment: {
            id: number;
            title: string;
            proposalPk: number;
            status: ShipmentStatus;
            externalRef: string | null;
            questionaryId: number;
            scheduledEventId: number;
            creatorId: number;
            created: any;
            samples: Array<{
                id: number;
                title: string;
                creatorId: number;
                questionaryId: number;
                safetyStatus: SampleStatus;
                safetyComment: string;
                isPostProposalSubmission: boolean;
                created: any;
                proposalPk: number;
                questionId: string;
            }>;
            proposal: {
                proposalId: string;
            };
        } | null;
    };
};
export declare type CreateShipmentMutationVariables = Exact<{
    title: Scalars['String'];
    proposalPk: Scalars['Int'];
    scheduledEventId: Scalars['Int'];
}>;
export declare type CreateShipmentMutation = {
    createShipment: {
        shipment: {
            id: number;
            title: string;
            proposalPk: number;
            status: ShipmentStatus;
            externalRef: string | null;
            questionaryId: number;
            scheduledEventId: number;
            creatorId: number;
            created: any;
            questionary: {
                isCompleted: boolean;
                questionaryId: number;
                templateId: number;
                created: any;
                steps: Array<{
                    isCompleted: boolean;
                    topic: {
                        title: string;
                        id: number;
                        templateId: number;
                        sortOrder: number;
                        isEnabled: boolean;
                    };
                    fields: Array<{
                        answerId: number | null;
                        sortOrder: number;
                        topicId: number;
                        dependenciesOperator: DependenciesLogicOperator | null;
                        value: any | null;
                        question: {
                            id: string;
                            question: string;
                            naturalKey: string;
                            dataType: DataType;
                            categoryId: TemplateCategoryId;
                            config: {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                minDate: string | null;
                                maxDate: string | null;
                                defaultDate: string | null;
                                includeTime: boolean;
                            } | {
                                html: string;
                                plain: string;
                                omitFromPdf: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                file_type: Array<string>;
                                max_files: number;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                titlePlaceholder: string;
                                questionLabel: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                numberValueConstraint: NumberValueConstraint | null;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                tooltip: string;
                            } | {
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                max: number | null;
                            } | {
                                titlePlaceholder: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                esiTemplateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                tooltip: string;
                            } | {
                                variant: string;
                                options: Array<string>;
                                isMultipleSelect: boolean;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                min: number | null;
                                max: number | null;
                                multiline: boolean;
                                placeholder: string;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                htmlQuestion: string | null;
                                isHtmlQuestion: boolean;
                                isCounterHidden: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            };
                        };
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                        dependencies: Array<{
                            questionId: string;
                            dependencyId: string;
                            dependencyNaturalKey: string;
                            condition: {
                                condition: EvaluatorOperator;
                                params: any;
                            };
                        }>;
                    }>;
                }>;
            };
            samples: Array<{
                id: number;
                title: string;
                creatorId: number;
                questionaryId: number;
                safetyStatus: SampleStatus;
                safetyComment: string;
                isPostProposalSubmission: boolean;
                created: any;
                proposalPk: number;
                questionId: string;
            }>;
            proposal: {
                proposalId: string;
            };
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type DeleteShipmentMutationVariables = Exact<{
    shipmentId: Scalars['Int'];
}>;
export declare type DeleteShipmentMutation = {
    deleteShipment: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type ShipmentFragment = {
    id: number;
    title: string;
    proposalPk: number;
    status: ShipmentStatus;
    externalRef: string | null;
    questionaryId: number;
    scheduledEventId: number;
    creatorId: number;
    created: any;
    proposal: {
        proposalId: string;
    };
};
export declare type GetMyShipmentsQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetMyShipmentsQuery = {
    myShipments: Array<{
        id: number;
        title: string;
        proposalPk: number;
        status: ShipmentStatus;
        externalRef: string | null;
        questionaryId: number;
        scheduledEventId: number;
        creatorId: number;
        created: any;
        proposal: {
            proposalId: string;
        };
    }> | null;
};
export declare type GetShipmentQueryVariables = Exact<{
    shipmentId: Scalars['Int'];
}>;
export declare type GetShipmentQuery = {
    shipment: {
        id: number;
        title: string;
        proposalPk: number;
        status: ShipmentStatus;
        externalRef: string | null;
        questionaryId: number;
        scheduledEventId: number;
        creatorId: number;
        created: any;
        questionary: {
            isCompleted: boolean;
            questionaryId: number;
            templateId: number;
            created: any;
            steps: Array<{
                isCompleted: boolean;
                topic: {
                    title: string;
                    id: number;
                    templateId: number;
                    sortOrder: number;
                    isEnabled: boolean;
                };
                fields: Array<{
                    answerId: number | null;
                    sortOrder: number;
                    topicId: number;
                    dependenciesOperator: DependenciesLogicOperator | null;
                    value: any | null;
                    question: {
                        id: string;
                        question: string;
                        naturalKey: string;
                        dataType: DataType;
                        categoryId: TemplateCategoryId;
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                    };
                    config: {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        minDate: string | null;
                        maxDate: string | null;
                        defaultDate: string | null;
                        includeTime: boolean;
                    } | {
                        html: string;
                        plain: string;
                        omitFromPdf: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        file_type: Array<string>;
                        max_files: number;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        titlePlaceholder: string;
                        questionLabel: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        numberValueConstraint: NumberValueConstraint | null;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        tooltip: string;
                    } | {
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        max: number | null;
                    } | {
                        titlePlaceholder: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        esiTemplateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        tooltip: string;
                    } | {
                        variant: string;
                        options: Array<string>;
                        isMultipleSelect: boolean;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        min: number | null;
                        max: number | null;
                        multiline: boolean;
                        placeholder: string;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        htmlQuestion: string | null;
                        isHtmlQuestion: boolean;
                        isCounterHidden: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    };
                    dependencies: Array<{
                        questionId: string;
                        dependencyId: string;
                        dependencyNaturalKey: string;
                        condition: {
                            condition: EvaluatorOperator;
                            params: any;
                        };
                    }>;
                }>;
            }>;
        };
        samples: Array<{
            id: number;
            title: string;
            creatorId: number;
            questionaryId: number;
            safetyStatus: SampleStatus;
            safetyComment: string;
            isPostProposalSubmission: boolean;
            created: any;
            proposalPk: number;
            questionId: string;
        }>;
        proposal: {
            proposalId: string;
        };
    } | null;
};
export declare type GetShipmentsQueryVariables = Exact<{
    filter?: InputMaybe<ShipmentsFilter>;
}>;
export declare type GetShipmentsQuery = {
    shipments: Array<{
        id: number;
        title: string;
        proposalPk: number;
        status: ShipmentStatus;
        externalRef: string | null;
        questionaryId: number;
        scheduledEventId: number;
        creatorId: number;
        created: any;
        proposal: {
            proposalId: string;
        };
    }> | null;
};
export declare type SetActiveTemplateMutationVariables = Exact<{
    templateGroupId: TemplateGroupId;
    templateId: Scalars['Int'];
}>;
export declare type SetActiveTemplateMutation = {
    setActiveTemplate: {
        isSuccess: boolean | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type SubmitShipmentMutationVariables = Exact<{
    shipmentId: Scalars['Int'];
}>;
export declare type SubmitShipmentMutation = {
    submitShipment: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
        shipment: {
            id: number;
            title: string;
            proposalPk: number;
            status: ShipmentStatus;
            externalRef: string | null;
            questionaryId: number;
            scheduledEventId: number;
            creatorId: number;
            created: any;
            proposal: {
                proposalId: string;
            };
        } | null;
    };
};
export declare type UpdateShipmentMutationVariables = Exact<{
    shipmentId: Scalars['Int'];
    title?: InputMaybe<Scalars['String']>;
    proposalPk?: InputMaybe<Scalars['Int']>;
    status?: InputMaybe<ShipmentStatus>;
}>;
export declare type UpdateShipmentMutation = {
    updateShipment: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
        shipment: {
            id: number;
            title: string;
            proposalPk: number;
            status: ShipmentStatus;
            externalRef: string | null;
            questionaryId: number;
            scheduledEventId: number;
            creatorId: number;
            created: any;
            questionary: {
                isCompleted: boolean;
                questionaryId: number;
                templateId: number;
                created: any;
                steps: Array<{
                    isCompleted: boolean;
                    topic: {
                        title: string;
                        id: number;
                        templateId: number;
                        sortOrder: number;
                        isEnabled: boolean;
                    };
                    fields: Array<{
                        answerId: number | null;
                        sortOrder: number;
                        topicId: number;
                        dependenciesOperator: DependenciesLogicOperator | null;
                        value: any | null;
                        question: {
                            id: string;
                            question: string;
                            naturalKey: string;
                            dataType: DataType;
                            categoryId: TemplateCategoryId;
                            config: {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                minDate: string | null;
                                maxDate: string | null;
                                defaultDate: string | null;
                                includeTime: boolean;
                            } | {
                                html: string;
                                plain: string;
                                omitFromPdf: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                file_type: Array<string>;
                                max_files: number;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                titlePlaceholder: string;
                                questionLabel: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                numberValueConstraint: NumberValueConstraint | null;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                tooltip: string;
                            } | {
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                max: number | null;
                            } | {
                                titlePlaceholder: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                esiTemplateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                tooltip: string;
                            } | {
                                variant: string;
                                options: Array<string>;
                                isMultipleSelect: boolean;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                min: number | null;
                                max: number | null;
                                multiline: boolean;
                                placeholder: string;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                htmlQuestion: string | null;
                                isHtmlQuestion: boolean;
                                isCounterHidden: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            };
                        };
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                        dependencies: Array<{
                            questionId: string;
                            dependencyId: string;
                            dependencyNaturalKey: string;
                            condition: {
                                condition: EvaluatorOperator;
                                params: any;
                            };
                        }>;
                    }>;
                }>;
            };
            proposal: {
                proposalId: string;
            };
        } | null;
    };
};
export declare type ImportTemplateMutationVariables = Exact<{
    templateAsJson: Scalars['String'];
    conflictResolutions: Array<ConflictResolution> | ConflictResolution;
}>;
export declare type ImportTemplateMutation = {
    importTemplate: {
        template: {
            isArchived: boolean;
            questionaryCount: number;
            templateId: number;
            groupId: TemplateGroupId;
            name: string;
            description: string | null;
            steps: Array<{
                topic: {
                    title: string;
                    id: number;
                    templateId: number;
                    sortOrder: number;
                    isEnabled: boolean;
                };
                fields: Array<{
                    sortOrder: number;
                    topicId: number;
                    dependenciesOperator: DependenciesLogicOperator | null;
                    question: {
                        id: string;
                        question: string;
                        naturalKey: string;
                        dataType: DataType;
                        categoryId: TemplateCategoryId;
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                    };
                    config: {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        minDate: string | null;
                        maxDate: string | null;
                        defaultDate: string | null;
                        includeTime: boolean;
                    } | {
                        html: string;
                        plain: string;
                        omitFromPdf: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        file_type: Array<string>;
                        max_files: number;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        titlePlaceholder: string;
                        questionLabel: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        numberValueConstraint: NumberValueConstraint | null;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        tooltip: string;
                    } | {
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        max: number | null;
                    } | {
                        titlePlaceholder: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        esiTemplateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        tooltip: string;
                    } | {
                        variant: string;
                        options: Array<string>;
                        isMultipleSelect: boolean;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        min: number | null;
                        max: number | null;
                        multiline: boolean;
                        placeholder: string;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        htmlQuestion: string | null;
                        isHtmlQuestion: boolean;
                        isCounterHidden: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    };
                    dependencies: Array<{
                        questionId: string;
                        dependencyId: string;
                        dependencyNaturalKey: string;
                        condition: {
                            condition: EvaluatorOperator;
                            params: any;
                        };
                    }>;
                }>;
            }>;
            complementaryQuestions: Array<{
                id: string;
                question: string;
                naturalKey: string;
                dataType: DataType;
                categoryId: TemplateCategoryId;
                config: {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    minDate: string | null;
                    maxDate: string | null;
                    defaultDate: string | null;
                    includeTime: boolean;
                } | {
                    html: string;
                    plain: string;
                    omitFromPdf: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    file_type: Array<string>;
                    max_files: number;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    titlePlaceholder: string;
                    questionLabel: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    numberValueConstraint: NumberValueConstraint | null;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    tooltip: string;
                } | {
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    max: number | null;
                } | {
                    titlePlaceholder: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    esiTemplateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    tooltip: string;
                } | {
                    variant: string;
                    options: Array<string>;
                    isMultipleSelect: boolean;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    min: number | null;
                    max: number | null;
                    multiline: boolean;
                    placeholder: string;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    htmlQuestion: string | null;
                    isHtmlQuestion: boolean;
                    isCounterHidden: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                };
            }>;
            group: {
                groupId: TemplateGroupId;
                categoryId: TemplateCategoryId;
            };
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type CloneTemplateMutationVariables = Exact<{
    templateId: Scalars['Int'];
}>;
export declare type CloneTemplateMutation = {
    cloneTemplate: {
        template: {
            questionaryCount: number;
            templateId: number;
            name: string;
            description: string | null;
            isArchived: boolean;
            steps: Array<{
                topic: {
                    title: string;
                    id: number;
                    templateId: number;
                    sortOrder: number;
                    isEnabled: boolean;
                };
            }>;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type CreateQuestionMutationVariables = Exact<{
    categoryId: TemplateCategoryId;
    dataType: DataType;
}>;
export declare type CreateQuestionMutation = {
    createQuestion: {
        question: {
            id: string;
            question: string;
            naturalKey: string;
            dataType: DataType;
            categoryId: TemplateCategoryId;
            config: {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                minDate: string | null;
                maxDate: string | null;
                defaultDate: string | null;
                includeTime: boolean;
            } | {
                html: string;
                plain: string;
                omitFromPdf: boolean;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                file_type: Array<string>;
                max_files: number;
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                titlePlaceholder: string;
                questionLabel: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                units: Array<{
                    id: string;
                    unit: string;
                    quantity: string;
                    symbol: string;
                    siConversionFormula: string;
                }>;
            } | {
                numberValueConstraint: NumberValueConstraint | null;
                small_label: string;
                required: boolean;
                tooltip: string;
                units: Array<{
                    id: string;
                    unit: string;
                    quantity: string;
                    symbol: string;
                    siConversionFormula: string;
                }>;
            } | {
                tooltip: string;
            } | {
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                max: number | null;
            } | {
                titlePlaceholder: string;
            } | {
                addEntryButtonLabel: string;
                minEntries: number | null;
                maxEntries: number | null;
                templateId: number | null;
                esiTemplateId: number | null;
                templateCategory: string;
                required: boolean;
                small_label: string;
            } | {
                tooltip: string;
            } | {
                variant: string;
                options: Array<string>;
                isMultipleSelect: boolean;
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                addEntryButtonLabel: string;
                minEntries: number | null;
                maxEntries: number | null;
                templateId: number | null;
                templateCategory: string;
                required: boolean;
                small_label: string;
            } | {
                min: number | null;
                max: number | null;
                multiline: boolean;
                placeholder: string;
                small_label: string;
                required: boolean;
                tooltip: string;
                htmlQuestion: string | null;
                isHtmlQuestion: boolean;
                isCounterHidden: boolean;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            };
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type CreateQuestionTemplateRelationMutationVariables = Exact<{
    templateId: Scalars['Int'];
    questionId: Scalars['String'];
    topicId: Scalars['Int'];
    sortOrder: Scalars['Int'];
}>;
export declare type CreateQuestionTemplateRelationMutation = {
    createQuestionTemplateRelation: {
        template: {
            isArchived: boolean;
            questionaryCount: number;
            templateId: number;
            groupId: TemplateGroupId;
            name: string;
            description: string | null;
            steps: Array<{
                topic: {
                    title: string;
                    id: number;
                    templateId: number;
                    sortOrder: number;
                    isEnabled: boolean;
                };
                fields: Array<{
                    sortOrder: number;
                    topicId: number;
                    dependenciesOperator: DependenciesLogicOperator | null;
                    question: {
                        id: string;
                        question: string;
                        naturalKey: string;
                        dataType: DataType;
                        categoryId: TemplateCategoryId;
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                    };
                    config: {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        minDate: string | null;
                        maxDate: string | null;
                        defaultDate: string | null;
                        includeTime: boolean;
                    } | {
                        html: string;
                        plain: string;
                        omitFromPdf: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        file_type: Array<string>;
                        max_files: number;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        titlePlaceholder: string;
                        questionLabel: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        numberValueConstraint: NumberValueConstraint | null;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        tooltip: string;
                    } | {
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        max: number | null;
                    } | {
                        titlePlaceholder: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        esiTemplateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        tooltip: string;
                    } | {
                        variant: string;
                        options: Array<string>;
                        isMultipleSelect: boolean;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        min: number | null;
                        max: number | null;
                        multiline: boolean;
                        placeholder: string;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        htmlQuestion: string | null;
                        isHtmlQuestion: boolean;
                        isCounterHidden: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    };
                    dependencies: Array<{
                        questionId: string;
                        dependencyId: string;
                        dependencyNaturalKey: string;
                        condition: {
                            condition: EvaluatorOperator;
                            params: any;
                        };
                    }>;
                }>;
            }>;
            complementaryQuestions: Array<{
                id: string;
                question: string;
                naturalKey: string;
                dataType: DataType;
                categoryId: TemplateCategoryId;
                config: {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    minDate: string | null;
                    maxDate: string | null;
                    defaultDate: string | null;
                    includeTime: boolean;
                } | {
                    html: string;
                    plain: string;
                    omitFromPdf: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    file_type: Array<string>;
                    max_files: number;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    titlePlaceholder: string;
                    questionLabel: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    numberValueConstraint: NumberValueConstraint | null;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    tooltip: string;
                } | {
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    max: number | null;
                } | {
                    titlePlaceholder: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    esiTemplateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    tooltip: string;
                } | {
                    variant: string;
                    options: Array<string>;
                    isMultipleSelect: boolean;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    min: number | null;
                    max: number | null;
                    multiline: boolean;
                    placeholder: string;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    htmlQuestion: string | null;
                    isHtmlQuestion: boolean;
                    isCounterHidden: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                };
            }>;
            group: {
                groupId: TemplateGroupId;
                categoryId: TemplateCategoryId;
            };
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type CreateTemplateMutationVariables = Exact<{
    groupId: TemplateGroupId;
    name: Scalars['String'];
    description?: InputMaybe<Scalars['String']>;
}>;
export declare type CreateTemplateMutation = {
    createTemplate: {
        template: {
            questionaryCount: number;
            isArchived: boolean;
            templateId: number;
            groupId: TemplateGroupId;
            name: string;
            description: string | null;
            steps: Array<{
                topic: {
                    title: string;
                    id: number;
                    templateId: number;
                    sortOrder: number;
                    isEnabled: boolean;
                };
                fields: Array<{
                    sortOrder: number;
                    topicId: number;
                    dependenciesOperator: DependenciesLogicOperator | null;
                    question: {
                        id: string;
                        question: string;
                        naturalKey: string;
                        dataType: DataType;
                        categoryId: TemplateCategoryId;
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                    };
                    config: {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        minDate: string | null;
                        maxDate: string | null;
                        defaultDate: string | null;
                        includeTime: boolean;
                    } | {
                        html: string;
                        plain: string;
                        omitFromPdf: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        file_type: Array<string>;
                        max_files: number;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        titlePlaceholder: string;
                        questionLabel: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        numberValueConstraint: NumberValueConstraint | null;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        tooltip: string;
                    } | {
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        max: number | null;
                    } | {
                        titlePlaceholder: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        esiTemplateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        tooltip: string;
                    } | {
                        variant: string;
                        options: Array<string>;
                        isMultipleSelect: boolean;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        min: number | null;
                        max: number | null;
                        multiline: boolean;
                        placeholder: string;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        htmlQuestion: string | null;
                        isHtmlQuestion: boolean;
                        isCounterHidden: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    };
                    dependencies: Array<{
                        questionId: string;
                        dependencyId: string;
                        dependencyNaturalKey: string;
                        condition: {
                            condition: EvaluatorOperator;
                            params: any;
                        };
                    }>;
                }>;
            }>;
            complementaryQuestions: Array<{
                id: string;
                question: string;
                naturalKey: string;
                dataType: DataType;
                categoryId: TemplateCategoryId;
                config: {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    minDate: string | null;
                    maxDate: string | null;
                    defaultDate: string | null;
                    includeTime: boolean;
                } | {
                    html: string;
                    plain: string;
                    omitFromPdf: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    file_type: Array<string>;
                    max_files: number;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    titlePlaceholder: string;
                    questionLabel: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    numberValueConstraint: NumberValueConstraint | null;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    tooltip: string;
                } | {
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    max: number | null;
                } | {
                    titlePlaceholder: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    esiTemplateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    tooltip: string;
                } | {
                    variant: string;
                    options: Array<string>;
                    isMultipleSelect: boolean;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    min: number | null;
                    max: number | null;
                    multiline: boolean;
                    placeholder: string;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    htmlQuestion: string | null;
                    isHtmlQuestion: boolean;
                    isCounterHidden: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                };
            }>;
            group: {
                groupId: TemplateGroupId;
                categoryId: TemplateCategoryId;
            };
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type CreateTopicMutationVariables = Exact<{
    templateId: Scalars['Int'];
    sortOrder: Scalars['Int'];
}>;
export declare type CreateTopicMutation = {
    createTopic: {
        template: {
            isArchived: boolean;
            questionaryCount: number;
            templateId: number;
            groupId: TemplateGroupId;
            name: string;
            description: string | null;
            steps: Array<{
                topic: {
                    title: string;
                    id: number;
                    templateId: number;
                    sortOrder: number;
                    isEnabled: boolean;
                };
                fields: Array<{
                    sortOrder: number;
                    topicId: number;
                    dependenciesOperator: DependenciesLogicOperator | null;
                    question: {
                        id: string;
                        question: string;
                        naturalKey: string;
                        dataType: DataType;
                        categoryId: TemplateCategoryId;
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                    };
                    config: {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        minDate: string | null;
                        maxDate: string | null;
                        defaultDate: string | null;
                        includeTime: boolean;
                    } | {
                        html: string;
                        plain: string;
                        omitFromPdf: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        file_type: Array<string>;
                        max_files: number;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        titlePlaceholder: string;
                        questionLabel: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        numberValueConstraint: NumberValueConstraint | null;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        tooltip: string;
                    } | {
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        max: number | null;
                    } | {
                        titlePlaceholder: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        esiTemplateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        tooltip: string;
                    } | {
                        variant: string;
                        options: Array<string>;
                        isMultipleSelect: boolean;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        min: number | null;
                        max: number | null;
                        multiline: boolean;
                        placeholder: string;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        htmlQuestion: string | null;
                        isHtmlQuestion: boolean;
                        isCounterHidden: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    };
                    dependencies: Array<{
                        questionId: string;
                        dependencyId: string;
                        dependencyNaturalKey: string;
                        condition: {
                            condition: EvaluatorOperator;
                            params: any;
                        };
                    }>;
                }>;
            }>;
            complementaryQuestions: Array<{
                id: string;
                question: string;
                naturalKey: string;
                dataType: DataType;
                categoryId: TemplateCategoryId;
                config: {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    minDate: string | null;
                    maxDate: string | null;
                    defaultDate: string | null;
                    includeTime: boolean;
                } | {
                    html: string;
                    plain: string;
                    omitFromPdf: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    file_type: Array<string>;
                    max_files: number;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    titlePlaceholder: string;
                    questionLabel: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    numberValueConstraint: NumberValueConstraint | null;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    tooltip: string;
                } | {
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    max: number | null;
                } | {
                    titlePlaceholder: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    esiTemplateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    tooltip: string;
                } | {
                    variant: string;
                    options: Array<string>;
                    isMultipleSelect: boolean;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    min: number | null;
                    max: number | null;
                    multiline: boolean;
                    placeholder: string;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    htmlQuestion: string | null;
                    isHtmlQuestion: boolean;
                    isCounterHidden: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                };
            }>;
            group: {
                groupId: TemplateGroupId;
                categoryId: TemplateCategoryId;
            };
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type DeleteQuestionMutationVariables = Exact<{
    questionId: Scalars['String'];
}>;
export declare type DeleteQuestionMutation = {
    deleteQuestion: {
        question: {
            id: string;
            question: string;
            naturalKey: string;
            dataType: DataType;
            categoryId: TemplateCategoryId;
            config: {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                minDate: string | null;
                maxDate: string | null;
                defaultDate: string | null;
                includeTime: boolean;
            } | {
                html: string;
                plain: string;
                omitFromPdf: boolean;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                file_type: Array<string>;
                max_files: number;
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                titlePlaceholder: string;
                questionLabel: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                units: Array<{
                    id: string;
                    unit: string;
                    quantity: string;
                    symbol: string;
                    siConversionFormula: string;
                }>;
            } | {
                numberValueConstraint: NumberValueConstraint | null;
                small_label: string;
                required: boolean;
                tooltip: string;
                units: Array<{
                    id: string;
                    unit: string;
                    quantity: string;
                    symbol: string;
                    siConversionFormula: string;
                }>;
            } | {
                tooltip: string;
            } | {
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                max: number | null;
            } | {
                titlePlaceholder: string;
            } | {
                addEntryButtonLabel: string;
                minEntries: number | null;
                maxEntries: number | null;
                templateId: number | null;
                esiTemplateId: number | null;
                templateCategory: string;
                required: boolean;
                small_label: string;
            } | {
                tooltip: string;
            } | {
                variant: string;
                options: Array<string>;
                isMultipleSelect: boolean;
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                addEntryButtonLabel: string;
                minEntries: number | null;
                maxEntries: number | null;
                templateId: number | null;
                templateCategory: string;
                required: boolean;
                small_label: string;
            } | {
                min: number | null;
                max: number | null;
                multiline: boolean;
                placeholder: string;
                small_label: string;
                required: boolean;
                tooltip: string;
                htmlQuestion: string | null;
                isHtmlQuestion: boolean;
                isCounterHidden: boolean;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            };
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type DeleteQuestionTemplateRelationMutationVariables = Exact<{
    questionId: Scalars['String'];
    templateId: Scalars['Int'];
}>;
export declare type DeleteQuestionTemplateRelationMutation = {
    deleteQuestionTemplateRelation: {
        template: {
            isArchived: boolean;
            questionaryCount: number;
            templateId: number;
            groupId: TemplateGroupId;
            name: string;
            description: string | null;
            steps: Array<{
                topic: {
                    title: string;
                    id: number;
                    templateId: number;
                    sortOrder: number;
                    isEnabled: boolean;
                };
                fields: Array<{
                    sortOrder: number;
                    topicId: number;
                    dependenciesOperator: DependenciesLogicOperator | null;
                    question: {
                        id: string;
                        question: string;
                        naturalKey: string;
                        dataType: DataType;
                        categoryId: TemplateCategoryId;
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                    };
                    config: {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        minDate: string | null;
                        maxDate: string | null;
                        defaultDate: string | null;
                        includeTime: boolean;
                    } | {
                        html: string;
                        plain: string;
                        omitFromPdf: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        file_type: Array<string>;
                        max_files: number;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        titlePlaceholder: string;
                        questionLabel: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        numberValueConstraint: NumberValueConstraint | null;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        tooltip: string;
                    } | {
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        max: number | null;
                    } | {
                        titlePlaceholder: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        esiTemplateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        tooltip: string;
                    } | {
                        variant: string;
                        options: Array<string>;
                        isMultipleSelect: boolean;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        min: number | null;
                        max: number | null;
                        multiline: boolean;
                        placeholder: string;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        htmlQuestion: string | null;
                        isHtmlQuestion: boolean;
                        isCounterHidden: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    };
                    dependencies: Array<{
                        questionId: string;
                        dependencyId: string;
                        dependencyNaturalKey: string;
                        condition: {
                            condition: EvaluatorOperator;
                            params: any;
                        };
                    }>;
                }>;
            }>;
            complementaryQuestions: Array<{
                id: string;
                question: string;
                naturalKey: string;
                dataType: DataType;
                categoryId: TemplateCategoryId;
                config: {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    minDate: string | null;
                    maxDate: string | null;
                    defaultDate: string | null;
                    includeTime: boolean;
                } | {
                    html: string;
                    plain: string;
                    omitFromPdf: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    file_type: Array<string>;
                    max_files: number;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    titlePlaceholder: string;
                    questionLabel: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    numberValueConstraint: NumberValueConstraint | null;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    tooltip: string;
                } | {
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    max: number | null;
                } | {
                    titlePlaceholder: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    esiTemplateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    tooltip: string;
                } | {
                    variant: string;
                    options: Array<string>;
                    isMultipleSelect: boolean;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    min: number | null;
                    max: number | null;
                    multiline: boolean;
                    placeholder: string;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    htmlQuestion: string | null;
                    isHtmlQuestion: boolean;
                    isCounterHidden: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                };
            }>;
            group: {
                groupId: TemplateGroupId;
                categoryId: TemplateCategoryId;
            };
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type DeleteTemplateMutationVariables = Exact<{
    id: Scalars['Int'];
}>;
export declare type DeleteTemplateMutation = {
    deleteTemplate: {
        template: {
            templateId: number;
            name: string;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type DeleteTopicMutationVariables = Exact<{
    topicId: Scalars['Int'];
}>;
export declare type DeleteTopicMutation = {
    deleteTopic: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type FieldConditionFragment = {
    condition: EvaluatorOperator;
    params: any;
};
declare type FieldConfig_BooleanConfig_Fragment = {
    small_label: string;
    required: boolean;
    tooltip: string;
};
declare type FieldConfig_DateConfig_Fragment = {
    small_label: string;
    required: boolean;
    tooltip: string;
    minDate: string | null;
    maxDate: string | null;
    defaultDate: string | null;
    includeTime: boolean;
};
declare type FieldConfig_EmbellishmentConfig_Fragment = {
    html: string;
    plain: string;
    omitFromPdf: boolean;
};
declare type FieldConfig_FeedbackBasisConfig_Fragment = {
    small_label: string;
    required: boolean;
    tooltip: string;
};
declare type FieldConfig_FileUploadConfig_Fragment = {
    file_type: Array<string>;
    max_files: number;
    small_label: string;
    required: boolean;
    tooltip: string;
};
declare type FieldConfig_GenericTemplateBasisConfig_Fragment = {
    titlePlaceholder: string;
    questionLabel: string;
};
declare type FieldConfig_IntervalConfig_Fragment = {
    small_label: string;
    required: boolean;
    tooltip: string;
    units: Array<{
        id: string;
        unit: string;
        quantity: string;
        symbol: string;
        siConversionFormula: string;
    }>;
};
declare type FieldConfig_NumberInputConfig_Fragment = {
    numberValueConstraint: NumberValueConstraint | null;
    small_label: string;
    required: boolean;
    tooltip: string;
    units: Array<{
        id: string;
        unit: string;
        quantity: string;
        symbol: string;
        siConversionFormula: string;
    }>;
};
declare type FieldConfig_ProposalBasisConfig_Fragment = {
    tooltip: string;
};
declare type FieldConfig_ProposalEsiBasisConfig_Fragment = {
    tooltip: string;
};
declare type FieldConfig_RichTextInputConfig_Fragment = {
    small_label: string;
    required: boolean;
    tooltip: string;
    max: number | null;
};
declare type FieldConfig_SampleBasisConfig_Fragment = {
    titlePlaceholder: string;
};
declare type FieldConfig_SampleDeclarationConfig_Fragment = {
    addEntryButtonLabel: string;
    minEntries: number | null;
    maxEntries: number | null;
    templateId: number | null;
    esiTemplateId: number | null;
    templateCategory: string;
    required: boolean;
    small_label: string;
};
declare type FieldConfig_SampleEsiBasisConfig_Fragment = {
    tooltip: string;
};
declare type FieldConfig_SelectionFromOptionsConfig_Fragment = {
    variant: string;
    options: Array<string>;
    isMultipleSelect: boolean;
    small_label: string;
    required: boolean;
    tooltip: string;
};
declare type FieldConfig_ShipmentBasisConfig_Fragment = {
    small_label: string;
    required: boolean;
    tooltip: string;
};
declare type FieldConfig_SubTemplateConfig_Fragment = {
    addEntryButtonLabel: string;
    minEntries: number | null;
    maxEntries: number | null;
    templateId: number | null;
    templateCategory: string;
    required: boolean;
    small_label: string;
};
declare type FieldConfig_TextInputConfig_Fragment = {
    min: number | null;
    max: number | null;
    multiline: boolean;
    placeholder: string;
    small_label: string;
    required: boolean;
    tooltip: string;
    htmlQuestion: string | null;
    isHtmlQuestion: boolean;
    isCounterHidden: boolean;
};
declare type FieldConfig_VisitBasisConfig_Fragment = {
    small_label: string;
    required: boolean;
    tooltip: string;
};
export declare type FieldConfigFragment = FieldConfig_BooleanConfig_Fragment | FieldConfig_DateConfig_Fragment | FieldConfig_EmbellishmentConfig_Fragment | FieldConfig_FeedbackBasisConfig_Fragment | FieldConfig_FileUploadConfig_Fragment | FieldConfig_GenericTemplateBasisConfig_Fragment | FieldConfig_IntervalConfig_Fragment | FieldConfig_NumberInputConfig_Fragment | FieldConfig_ProposalBasisConfig_Fragment | FieldConfig_ProposalEsiBasisConfig_Fragment | FieldConfig_RichTextInputConfig_Fragment | FieldConfig_SampleBasisConfig_Fragment | FieldConfig_SampleDeclarationConfig_Fragment | FieldConfig_SampleEsiBasisConfig_Fragment | FieldConfig_SelectionFromOptionsConfig_Fragment | FieldConfig_ShipmentBasisConfig_Fragment | FieldConfig_SubTemplateConfig_Fragment | FieldConfig_TextInputConfig_Fragment | FieldConfig_VisitBasisConfig_Fragment;
export declare type QuestionFragment = {
    id: string;
    question: string;
    naturalKey: string;
    dataType: DataType;
    categoryId: TemplateCategoryId;
    config: {
        small_label: string;
        required: boolean;
        tooltip: string;
    } | {
        small_label: string;
        required: boolean;
        tooltip: string;
        minDate: string | null;
        maxDate: string | null;
        defaultDate: string | null;
        includeTime: boolean;
    } | {
        html: string;
        plain: string;
        omitFromPdf: boolean;
    } | {
        small_label: string;
        required: boolean;
        tooltip: string;
    } | {
        file_type: Array<string>;
        max_files: number;
        small_label: string;
        required: boolean;
        tooltip: string;
    } | {
        titlePlaceholder: string;
        questionLabel: string;
    } | {
        small_label: string;
        required: boolean;
        tooltip: string;
        units: Array<{
            id: string;
            unit: string;
            quantity: string;
            symbol: string;
            siConversionFormula: string;
        }>;
    } | {
        numberValueConstraint: NumberValueConstraint | null;
        small_label: string;
        required: boolean;
        tooltip: string;
        units: Array<{
            id: string;
            unit: string;
            quantity: string;
            symbol: string;
            siConversionFormula: string;
        }>;
    } | {
        tooltip: string;
    } | {
        tooltip: string;
    } | {
        small_label: string;
        required: boolean;
        tooltip: string;
        max: number | null;
    } | {
        titlePlaceholder: string;
    } | {
        addEntryButtonLabel: string;
        minEntries: number | null;
        maxEntries: number | null;
        templateId: number | null;
        esiTemplateId: number | null;
        templateCategory: string;
        required: boolean;
        small_label: string;
    } | {
        tooltip: string;
    } | {
        variant: string;
        options: Array<string>;
        isMultipleSelect: boolean;
        small_label: string;
        required: boolean;
        tooltip: string;
    } | {
        small_label: string;
        required: boolean;
        tooltip: string;
    } | {
        addEntryButtonLabel: string;
        minEntries: number | null;
        maxEntries: number | null;
        templateId: number | null;
        templateCategory: string;
        required: boolean;
        small_label: string;
    } | {
        min: number | null;
        max: number | null;
        multiline: boolean;
        placeholder: string;
        small_label: string;
        required: boolean;
        tooltip: string;
        htmlQuestion: string | null;
        isHtmlQuestion: boolean;
        isCounterHidden: boolean;
    } | {
        small_label: string;
        required: boolean;
        tooltip: string;
    };
};
export declare type QuestionTemplateRelationFragment = {
    sortOrder: number;
    topicId: number;
    dependenciesOperator: DependenciesLogicOperator | null;
    question: {
        id: string;
        question: string;
        naturalKey: string;
        dataType: DataType;
        categoryId: TemplateCategoryId;
        config: {
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
            minDate: string | null;
            maxDate: string | null;
            defaultDate: string | null;
            includeTime: boolean;
        } | {
            html: string;
            plain: string;
            omitFromPdf: boolean;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            file_type: Array<string>;
            max_files: number;
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            titlePlaceholder: string;
            questionLabel: string;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
            units: Array<{
                id: string;
                unit: string;
                quantity: string;
                symbol: string;
                siConversionFormula: string;
            }>;
        } | {
            numberValueConstraint: NumberValueConstraint | null;
            small_label: string;
            required: boolean;
            tooltip: string;
            units: Array<{
                id: string;
                unit: string;
                quantity: string;
                symbol: string;
                siConversionFormula: string;
            }>;
        } | {
            tooltip: string;
        } | {
            tooltip: string;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
            max: number | null;
        } | {
            titlePlaceholder: string;
        } | {
            addEntryButtonLabel: string;
            minEntries: number | null;
            maxEntries: number | null;
            templateId: number | null;
            esiTemplateId: number | null;
            templateCategory: string;
            required: boolean;
            small_label: string;
        } | {
            tooltip: string;
        } | {
            variant: string;
            options: Array<string>;
            isMultipleSelect: boolean;
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            addEntryButtonLabel: string;
            minEntries: number | null;
            maxEntries: number | null;
            templateId: number | null;
            templateCategory: string;
            required: boolean;
            small_label: string;
        } | {
            min: number | null;
            max: number | null;
            multiline: boolean;
            placeholder: string;
            small_label: string;
            required: boolean;
            tooltip: string;
            htmlQuestion: string | null;
            isHtmlQuestion: boolean;
            isCounterHidden: boolean;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
        };
    };
    config: {
        small_label: string;
        required: boolean;
        tooltip: string;
    } | {
        small_label: string;
        required: boolean;
        tooltip: string;
        minDate: string | null;
        maxDate: string | null;
        defaultDate: string | null;
        includeTime: boolean;
    } | {
        html: string;
        plain: string;
        omitFromPdf: boolean;
    } | {
        small_label: string;
        required: boolean;
        tooltip: string;
    } | {
        file_type: Array<string>;
        max_files: number;
        small_label: string;
        required: boolean;
        tooltip: string;
    } | {
        titlePlaceholder: string;
        questionLabel: string;
    } | {
        small_label: string;
        required: boolean;
        tooltip: string;
        units: Array<{
            id: string;
            unit: string;
            quantity: string;
            symbol: string;
            siConversionFormula: string;
        }>;
    } | {
        numberValueConstraint: NumberValueConstraint | null;
        small_label: string;
        required: boolean;
        tooltip: string;
        units: Array<{
            id: string;
            unit: string;
            quantity: string;
            symbol: string;
            siConversionFormula: string;
        }>;
    } | {
        tooltip: string;
    } | {
        tooltip: string;
    } | {
        small_label: string;
        required: boolean;
        tooltip: string;
        max: number | null;
    } | {
        titlePlaceholder: string;
    } | {
        addEntryButtonLabel: string;
        minEntries: number | null;
        maxEntries: number | null;
        templateId: number | null;
        esiTemplateId: number | null;
        templateCategory: string;
        required: boolean;
        small_label: string;
    } | {
        tooltip: string;
    } | {
        variant: string;
        options: Array<string>;
        isMultipleSelect: boolean;
        small_label: string;
        required: boolean;
        tooltip: string;
    } | {
        small_label: string;
        required: boolean;
        tooltip: string;
    } | {
        addEntryButtonLabel: string;
        minEntries: number | null;
        maxEntries: number | null;
        templateId: number | null;
        templateCategory: string;
        required: boolean;
        small_label: string;
    } | {
        min: number | null;
        max: number | null;
        multiline: boolean;
        placeholder: string;
        small_label: string;
        required: boolean;
        tooltip: string;
        htmlQuestion: string | null;
        isHtmlQuestion: boolean;
        isCounterHidden: boolean;
    } | {
        small_label: string;
        required: boolean;
        tooltip: string;
    };
    dependencies: Array<{
        questionId: string;
        dependencyId: string;
        dependencyNaturalKey: string;
        condition: {
            condition: EvaluatorOperator;
            params: any;
        };
    }>;
};
export declare type TemplateFragment = {
    isArchived: boolean;
    questionaryCount: number;
    templateId: number;
    groupId: TemplateGroupId;
    name: string;
    description: string | null;
    steps: Array<{
        topic: {
            title: string;
            id: number;
            templateId: number;
            sortOrder: number;
            isEnabled: boolean;
        };
        fields: Array<{
            sortOrder: number;
            topicId: number;
            dependenciesOperator: DependenciesLogicOperator | null;
            question: {
                id: string;
                question: string;
                naturalKey: string;
                dataType: DataType;
                categoryId: TemplateCategoryId;
                config: {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    minDate: string | null;
                    maxDate: string | null;
                    defaultDate: string | null;
                    includeTime: boolean;
                } | {
                    html: string;
                    plain: string;
                    omitFromPdf: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    file_type: Array<string>;
                    max_files: number;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    titlePlaceholder: string;
                    questionLabel: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    numberValueConstraint: NumberValueConstraint | null;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    tooltip: string;
                } | {
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    max: number | null;
                } | {
                    titlePlaceholder: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    esiTemplateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    tooltip: string;
                } | {
                    variant: string;
                    options: Array<string>;
                    isMultipleSelect: boolean;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    min: number | null;
                    max: number | null;
                    multiline: boolean;
                    placeholder: string;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    htmlQuestion: string | null;
                    isHtmlQuestion: boolean;
                    isCounterHidden: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                };
            };
            config: {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                minDate: string | null;
                maxDate: string | null;
                defaultDate: string | null;
                includeTime: boolean;
            } | {
                html: string;
                plain: string;
                omitFromPdf: boolean;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                file_type: Array<string>;
                max_files: number;
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                titlePlaceholder: string;
                questionLabel: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                units: Array<{
                    id: string;
                    unit: string;
                    quantity: string;
                    symbol: string;
                    siConversionFormula: string;
                }>;
            } | {
                numberValueConstraint: NumberValueConstraint | null;
                small_label: string;
                required: boolean;
                tooltip: string;
                units: Array<{
                    id: string;
                    unit: string;
                    quantity: string;
                    symbol: string;
                    siConversionFormula: string;
                }>;
            } | {
                tooltip: string;
            } | {
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                max: number | null;
            } | {
                titlePlaceholder: string;
            } | {
                addEntryButtonLabel: string;
                minEntries: number | null;
                maxEntries: number | null;
                templateId: number | null;
                esiTemplateId: number | null;
                templateCategory: string;
                required: boolean;
                small_label: string;
            } | {
                tooltip: string;
            } | {
                variant: string;
                options: Array<string>;
                isMultipleSelect: boolean;
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                addEntryButtonLabel: string;
                minEntries: number | null;
                maxEntries: number | null;
                templateId: number | null;
                templateCategory: string;
                required: boolean;
                small_label: string;
            } | {
                min: number | null;
                max: number | null;
                multiline: boolean;
                placeholder: string;
                small_label: string;
                required: boolean;
                tooltip: string;
                htmlQuestion: string | null;
                isHtmlQuestion: boolean;
                isCounterHidden: boolean;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            };
            dependencies: Array<{
                questionId: string;
                dependencyId: string;
                dependencyNaturalKey: string;
                condition: {
                    condition: EvaluatorOperator;
                    params: any;
                };
            }>;
        }>;
    }>;
    complementaryQuestions: Array<{
        id: string;
        question: string;
        naturalKey: string;
        dataType: DataType;
        categoryId: TemplateCategoryId;
        config: {
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
            minDate: string | null;
            maxDate: string | null;
            defaultDate: string | null;
            includeTime: boolean;
        } | {
            html: string;
            plain: string;
            omitFromPdf: boolean;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            file_type: Array<string>;
            max_files: number;
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            titlePlaceholder: string;
            questionLabel: string;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
            units: Array<{
                id: string;
                unit: string;
                quantity: string;
                symbol: string;
                siConversionFormula: string;
            }>;
        } | {
            numberValueConstraint: NumberValueConstraint | null;
            small_label: string;
            required: boolean;
            tooltip: string;
            units: Array<{
                id: string;
                unit: string;
                quantity: string;
                symbol: string;
                siConversionFormula: string;
            }>;
        } | {
            tooltip: string;
        } | {
            tooltip: string;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
            max: number | null;
        } | {
            titlePlaceholder: string;
        } | {
            addEntryButtonLabel: string;
            minEntries: number | null;
            maxEntries: number | null;
            templateId: number | null;
            esiTemplateId: number | null;
            templateCategory: string;
            required: boolean;
            small_label: string;
        } | {
            tooltip: string;
        } | {
            variant: string;
            options: Array<string>;
            isMultipleSelect: boolean;
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            addEntryButtonLabel: string;
            minEntries: number | null;
            maxEntries: number | null;
            templateId: number | null;
            templateCategory: string;
            required: boolean;
            small_label: string;
        } | {
            min: number | null;
            max: number | null;
            multiline: boolean;
            placeholder: string;
            small_label: string;
            required: boolean;
            tooltip: string;
            htmlQuestion: string | null;
            isHtmlQuestion: boolean;
            isCounterHidden: boolean;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
        };
    }>;
    group: {
        groupId: TemplateGroupId;
        categoryId: TemplateCategoryId;
    };
};
export declare type TemplateMetadataFragment = {
    templateId: number;
    name: string;
    description: string | null;
    isArchived: boolean;
    steps: Array<{
        topic: {
            title: string;
            id: number;
            templateId: number;
            sortOrder: number;
            isEnabled: boolean;
        };
    }>;
};
export declare type TemplateStepFragment = {
    topic: {
        title: string;
        id: number;
        sortOrder: number;
        isEnabled: boolean;
    };
    fields: Array<{
        sortOrder: number;
        topicId: number;
        dependenciesOperator: DependenciesLogicOperator | null;
        question: {
            id: string;
            question: string;
            naturalKey: string;
            dataType: DataType;
            categoryId: TemplateCategoryId;
            config: {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                minDate: string | null;
                maxDate: string | null;
                defaultDate: string | null;
                includeTime: boolean;
            } | {
                html: string;
                plain: string;
                omitFromPdf: boolean;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                file_type: Array<string>;
                max_files: number;
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                titlePlaceholder: string;
                questionLabel: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                units: Array<{
                    id: string;
                    unit: string;
                    quantity: string;
                    symbol: string;
                    siConversionFormula: string;
                }>;
            } | {
                numberValueConstraint: NumberValueConstraint | null;
                small_label: string;
                required: boolean;
                tooltip: string;
                units: Array<{
                    id: string;
                    unit: string;
                    quantity: string;
                    symbol: string;
                    siConversionFormula: string;
                }>;
            } | {
                tooltip: string;
            } | {
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                max: number | null;
            } | {
                titlePlaceholder: string;
            } | {
                addEntryButtonLabel: string;
                minEntries: number | null;
                maxEntries: number | null;
                templateId: number | null;
                esiTemplateId: number | null;
                templateCategory: string;
                required: boolean;
                small_label: string;
            } | {
                tooltip: string;
            } | {
                variant: string;
                options: Array<string>;
                isMultipleSelect: boolean;
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                addEntryButtonLabel: string;
                minEntries: number | null;
                maxEntries: number | null;
                templateId: number | null;
                templateCategory: string;
                required: boolean;
                small_label: string;
            } | {
                min: number | null;
                max: number | null;
                multiline: boolean;
                placeholder: string;
                small_label: string;
                required: boolean;
                tooltip: string;
                htmlQuestion: string | null;
                isHtmlQuestion: boolean;
                isCounterHidden: boolean;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            };
        };
        config: {
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
            minDate: string | null;
            maxDate: string | null;
            defaultDate: string | null;
            includeTime: boolean;
        } | {
            html: string;
            plain: string;
            omitFromPdf: boolean;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            file_type: Array<string>;
            max_files: number;
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            titlePlaceholder: string;
            questionLabel: string;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
            units: Array<{
                id: string;
                unit: string;
                quantity: string;
                symbol: string;
                siConversionFormula: string;
            }>;
        } | {
            numberValueConstraint: NumberValueConstraint | null;
            small_label: string;
            required: boolean;
            tooltip: string;
            units: Array<{
                id: string;
                unit: string;
                quantity: string;
                symbol: string;
                siConversionFormula: string;
            }>;
        } | {
            tooltip: string;
        } | {
            tooltip: string;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
            max: number | null;
        } | {
            titlePlaceholder: string;
        } | {
            addEntryButtonLabel: string;
            minEntries: number | null;
            maxEntries: number | null;
            templateId: number | null;
            esiTemplateId: number | null;
            templateCategory: string;
            required: boolean;
            small_label: string;
        } | {
            tooltip: string;
        } | {
            variant: string;
            options: Array<string>;
            isMultipleSelect: boolean;
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            addEntryButtonLabel: string;
            minEntries: number | null;
            maxEntries: number | null;
            templateId: number | null;
            templateCategory: string;
            required: boolean;
            small_label: string;
        } | {
            min: number | null;
            max: number | null;
            multiline: boolean;
            placeholder: string;
            small_label: string;
            required: boolean;
            tooltip: string;
            htmlQuestion: string | null;
            isHtmlQuestion: boolean;
            isCounterHidden: boolean;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
        };
        dependencies: Array<{
            questionId: string;
            dependencyId: string;
            dependencyNaturalKey: string;
            condition: {
                condition: EvaluatorOperator;
                params: any;
            };
        }>;
    }>;
};
export declare type TopicFragment = {
    title: string;
    id: number;
    templateId: number;
    sortOrder: number;
    isEnabled: boolean;
};
export declare type GetActiveTemplateIdQueryVariables = Exact<{
    templateGroupId: TemplateGroupId;
}>;
export declare type GetActiveTemplateIdQuery = {
    activeTemplateId: number | null;
};
export declare type GetIsNaturalKeyPresentQueryVariables = Exact<{
    naturalKey: Scalars['String'];
}>;
export declare type GetIsNaturalKeyPresentQuery = {
    isNaturalKeyPresent: boolean | null;
};
export declare type GetProposalTemplatesQueryVariables = Exact<{
    filter?: InputMaybe<ProposalTemplatesFilter>;
}>;
export declare type GetProposalTemplatesQuery = {
    proposalTemplates: Array<{
        templateId: number;
        name: string;
        description: string | null;
        isArchived: boolean;
        questionaryCount: number;
        callCount: number;
    }> | null;
};
export declare type GetQuestionsQueryVariables = Exact<{
    filter?: InputMaybe<QuestionsFilter>;
}>;
export declare type GetQuestionsQuery = {
    questions: Array<{
        id: string;
        question: string;
        naturalKey: string;
        dataType: DataType;
        categoryId: TemplateCategoryId;
        config: {
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
            minDate: string | null;
            maxDate: string | null;
            defaultDate: string | null;
            includeTime: boolean;
        } | {
            html: string;
            plain: string;
            omitFromPdf: boolean;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            file_type: Array<string>;
            max_files: number;
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            titlePlaceholder: string;
            questionLabel: string;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
            units: Array<{
                id: string;
                unit: string;
                quantity: string;
                symbol: string;
                siConversionFormula: string;
            }>;
        } | {
            numberValueConstraint: NumberValueConstraint | null;
            small_label: string;
            required: boolean;
            tooltip: string;
            units: Array<{
                id: string;
                unit: string;
                quantity: string;
                symbol: string;
                siConversionFormula: string;
            }>;
        } | {
            tooltip: string;
        } | {
            tooltip: string;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
            max: number | null;
        } | {
            titlePlaceholder: string;
        } | {
            addEntryButtonLabel: string;
            minEntries: number | null;
            maxEntries: number | null;
            templateId: number | null;
            esiTemplateId: number | null;
            templateCategory: string;
            required: boolean;
            small_label: string;
        } | {
            tooltip: string;
        } | {
            variant: string;
            options: Array<string>;
            isMultipleSelect: boolean;
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
        } | {
            addEntryButtonLabel: string;
            minEntries: number | null;
            maxEntries: number | null;
            templateId: number | null;
            templateCategory: string;
            required: boolean;
            small_label: string;
        } | {
            min: number | null;
            max: number | null;
            multiline: boolean;
            placeholder: string;
            small_label: string;
            required: boolean;
            tooltip: string;
            htmlQuestion: string | null;
            isHtmlQuestion: boolean;
            isCounterHidden: boolean;
        } | {
            small_label: string;
            required: boolean;
            tooltip: string;
        };
        answers: Array<{
            questionaryId: number;
        }>;
        templates: Array<{
            templateId: number;
        }>;
    }>;
};
export declare type GetTemplateQueryVariables = Exact<{
    templateId: Scalars['Int'];
}>;
export declare type GetTemplateQuery = {
    template: {
        isArchived: boolean;
        questionaryCount: number;
        templateId: number;
        groupId: TemplateGroupId;
        name: string;
        description: string | null;
        steps: Array<{
            topic: {
                title: string;
                id: number;
                templateId: number;
                sortOrder: number;
                isEnabled: boolean;
            };
            fields: Array<{
                sortOrder: number;
                topicId: number;
                dependenciesOperator: DependenciesLogicOperator | null;
                question: {
                    id: string;
                    question: string;
                    naturalKey: string;
                    dataType: DataType;
                    categoryId: TemplateCategoryId;
                    config: {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        minDate: string | null;
                        maxDate: string | null;
                        defaultDate: string | null;
                        includeTime: boolean;
                    } | {
                        html: string;
                        plain: string;
                        omitFromPdf: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        file_type: Array<string>;
                        max_files: number;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        titlePlaceholder: string;
                        questionLabel: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        numberValueConstraint: NumberValueConstraint | null;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        tooltip: string;
                    } | {
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        max: number | null;
                    } | {
                        titlePlaceholder: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        esiTemplateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        tooltip: string;
                    } | {
                        variant: string;
                        options: Array<string>;
                        isMultipleSelect: boolean;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        min: number | null;
                        max: number | null;
                        multiline: boolean;
                        placeholder: string;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        htmlQuestion: string | null;
                        isHtmlQuestion: boolean;
                        isCounterHidden: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    };
                };
                config: {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    minDate: string | null;
                    maxDate: string | null;
                    defaultDate: string | null;
                    includeTime: boolean;
                } | {
                    html: string;
                    plain: string;
                    omitFromPdf: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    file_type: Array<string>;
                    max_files: number;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    titlePlaceholder: string;
                    questionLabel: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    numberValueConstraint: NumberValueConstraint | null;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    tooltip: string;
                } | {
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    max: number | null;
                } | {
                    titlePlaceholder: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    esiTemplateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    tooltip: string;
                } | {
                    variant: string;
                    options: Array<string>;
                    isMultipleSelect: boolean;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    min: number | null;
                    max: number | null;
                    multiline: boolean;
                    placeholder: string;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    htmlQuestion: string | null;
                    isHtmlQuestion: boolean;
                    isCounterHidden: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                };
                dependencies: Array<{
                    questionId: string;
                    dependencyId: string;
                    dependencyNaturalKey: string;
                    condition: {
                        condition: EvaluatorOperator;
                        params: any;
                    };
                }>;
            }>;
        }>;
        complementaryQuestions: Array<{
            id: string;
            question: string;
            naturalKey: string;
            dataType: DataType;
            categoryId: TemplateCategoryId;
            config: {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                minDate: string | null;
                maxDate: string | null;
                defaultDate: string | null;
                includeTime: boolean;
            } | {
                html: string;
                plain: string;
                omitFromPdf: boolean;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                file_type: Array<string>;
                max_files: number;
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                titlePlaceholder: string;
                questionLabel: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                units: Array<{
                    id: string;
                    unit: string;
                    quantity: string;
                    symbol: string;
                    siConversionFormula: string;
                }>;
            } | {
                numberValueConstraint: NumberValueConstraint | null;
                small_label: string;
                required: boolean;
                tooltip: string;
                units: Array<{
                    id: string;
                    unit: string;
                    quantity: string;
                    symbol: string;
                    siConversionFormula: string;
                }>;
            } | {
                tooltip: string;
            } | {
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                max: number | null;
            } | {
                titlePlaceholder: string;
            } | {
                addEntryButtonLabel: string;
                minEntries: number | null;
                maxEntries: number | null;
                templateId: number | null;
                esiTemplateId: number | null;
                templateCategory: string;
                required: boolean;
                small_label: string;
            } | {
                tooltip: string;
            } | {
                variant: string;
                options: Array<string>;
                isMultipleSelect: boolean;
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                addEntryButtonLabel: string;
                minEntries: number | null;
                maxEntries: number | null;
                templateId: number | null;
                templateCategory: string;
                required: boolean;
                small_label: string;
            } | {
                min: number | null;
                max: number | null;
                multiline: boolean;
                placeholder: string;
                small_label: string;
                required: boolean;
                tooltip: string;
                htmlQuestion: string | null;
                isHtmlQuestion: boolean;
                isCounterHidden: boolean;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            };
        }>;
        group: {
            groupId: TemplateGroupId;
            categoryId: TemplateCategoryId;
        };
    } | null;
};
export declare type GetTemplateCategoriesQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetTemplateCategoriesQuery = {
    templateCategories: Array<{
        categoryId: TemplateCategoryId;
        name: string;
    }> | null;
};
export declare type GetTemplateExportQueryVariables = Exact<{
    templateId: Scalars['Int'];
}>;
export declare type GetTemplateExportQuery = {
    template: {
        json: string;
    } | null;
};
export declare type GetTemplatesQueryVariables = Exact<{
    filter?: InputMaybe<TemplatesFilter>;
}>;
export declare type GetTemplatesQuery = {
    templates: Array<{
        templateId: number;
        name: string;
        description: string | null;
        isArchived: boolean;
        questionaryCount: number;
    }> | null;
};
export declare type UpdateQuestionMutationVariables = Exact<{
    id: Scalars['String'];
    naturalKey?: InputMaybe<Scalars['String']>;
    question?: InputMaybe<Scalars['String']>;
    config?: InputMaybe<Scalars['String']>;
}>;
export declare type UpdateQuestionMutation = {
    updateQuestion: {
        question: {
            id: string;
            question: string;
            naturalKey: string;
            dataType: DataType;
            categoryId: TemplateCategoryId;
            config: {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                minDate: string | null;
                maxDate: string | null;
                defaultDate: string | null;
                includeTime: boolean;
            } | {
                html: string;
                plain: string;
                omitFromPdf: boolean;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                file_type: Array<string>;
                max_files: number;
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                titlePlaceholder: string;
                questionLabel: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                units: Array<{
                    id: string;
                    unit: string;
                    quantity: string;
                    symbol: string;
                    siConversionFormula: string;
                }>;
            } | {
                numberValueConstraint: NumberValueConstraint | null;
                small_label: string;
                required: boolean;
                tooltip: string;
                units: Array<{
                    id: string;
                    unit: string;
                    quantity: string;
                    symbol: string;
                    siConversionFormula: string;
                }>;
            } | {
                tooltip: string;
            } | {
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
                max: number | null;
            } | {
                titlePlaceholder: string;
            } | {
                addEntryButtonLabel: string;
                minEntries: number | null;
                maxEntries: number | null;
                templateId: number | null;
                esiTemplateId: number | null;
                templateCategory: string;
                required: boolean;
                small_label: string;
            } | {
                tooltip: string;
            } | {
                variant: string;
                options: Array<string>;
                isMultipleSelect: boolean;
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            } | {
                addEntryButtonLabel: string;
                minEntries: number | null;
                maxEntries: number | null;
                templateId: number | null;
                templateCategory: string;
                required: boolean;
                small_label: string;
            } | {
                min: number | null;
                max: number | null;
                multiline: boolean;
                placeholder: string;
                small_label: string;
                required: boolean;
                tooltip: string;
                htmlQuestion: string | null;
                isHtmlQuestion: boolean;
                isCounterHidden: boolean;
            } | {
                small_label: string;
                required: boolean;
                tooltip: string;
            };
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type UpdateQuestionTemplateRelationMutationVariables = Exact<{
    questionId: Scalars['String'];
    templateId: Scalars['Int'];
    topicId?: InputMaybe<Scalars['Int']>;
    sortOrder: Scalars['Int'];
    config?: InputMaybe<Scalars['String']>;
}>;
export declare type UpdateQuestionTemplateRelationMutation = {
    updateQuestionTemplateRelation: {
        template: {
            isArchived: boolean;
            questionaryCount: number;
            templateId: number;
            groupId: TemplateGroupId;
            name: string;
            description: string | null;
            steps: Array<{
                topic: {
                    title: string;
                    id: number;
                    templateId: number;
                    sortOrder: number;
                    isEnabled: boolean;
                };
                fields: Array<{
                    sortOrder: number;
                    topicId: number;
                    dependenciesOperator: DependenciesLogicOperator | null;
                    question: {
                        id: string;
                        question: string;
                        naturalKey: string;
                        dataType: DataType;
                        categoryId: TemplateCategoryId;
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                    };
                    config: {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        minDate: string | null;
                        maxDate: string | null;
                        defaultDate: string | null;
                        includeTime: boolean;
                    } | {
                        html: string;
                        plain: string;
                        omitFromPdf: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        file_type: Array<string>;
                        max_files: number;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        titlePlaceholder: string;
                        questionLabel: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        numberValueConstraint: NumberValueConstraint | null;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        tooltip: string;
                    } | {
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        max: number | null;
                    } | {
                        titlePlaceholder: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        esiTemplateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        tooltip: string;
                    } | {
                        variant: string;
                        options: Array<string>;
                        isMultipleSelect: boolean;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        min: number | null;
                        max: number | null;
                        multiline: boolean;
                        placeholder: string;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        htmlQuestion: string | null;
                        isHtmlQuestion: boolean;
                        isCounterHidden: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    };
                    dependencies: Array<{
                        questionId: string;
                        dependencyId: string;
                        dependencyNaturalKey: string;
                        condition: {
                            condition: EvaluatorOperator;
                            params: any;
                        };
                    }>;
                }>;
            }>;
            complementaryQuestions: Array<{
                id: string;
                question: string;
                naturalKey: string;
                dataType: DataType;
                categoryId: TemplateCategoryId;
                config: {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    minDate: string | null;
                    maxDate: string | null;
                    defaultDate: string | null;
                    includeTime: boolean;
                } | {
                    html: string;
                    plain: string;
                    omitFromPdf: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    file_type: Array<string>;
                    max_files: number;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    titlePlaceholder: string;
                    questionLabel: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    numberValueConstraint: NumberValueConstraint | null;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    tooltip: string;
                } | {
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    max: number | null;
                } | {
                    titlePlaceholder: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    esiTemplateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    tooltip: string;
                } | {
                    variant: string;
                    options: Array<string>;
                    isMultipleSelect: boolean;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    min: number | null;
                    max: number | null;
                    multiline: boolean;
                    placeholder: string;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    htmlQuestion: string | null;
                    isHtmlQuestion: boolean;
                    isCounterHidden: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                };
            }>;
            group: {
                groupId: TemplateGroupId;
                categoryId: TemplateCategoryId;
            };
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type UpdateQuestionTemplateRelationSettingsMutationVariables = Exact<{
    questionId: Scalars['String'];
    templateId: Scalars['Int'];
    config?: InputMaybe<Scalars['String']>;
    dependencies: Array<FieldDependencyInput> | FieldDependencyInput;
    dependenciesOperator?: InputMaybe<DependenciesLogicOperator>;
}>;
export declare type UpdateQuestionTemplateRelationSettingsMutation = {
    updateQuestionTemplateRelationSettings: {
        template: {
            isArchived: boolean;
            questionaryCount: number;
            templateId: number;
            groupId: TemplateGroupId;
            name: string;
            description: string | null;
            steps: Array<{
                topic: {
                    title: string;
                    id: number;
                    templateId: number;
                    sortOrder: number;
                    isEnabled: boolean;
                };
                fields: Array<{
                    sortOrder: number;
                    topicId: number;
                    dependenciesOperator: DependenciesLogicOperator | null;
                    question: {
                        id: string;
                        question: string;
                        naturalKey: string;
                        dataType: DataType;
                        categoryId: TemplateCategoryId;
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                    };
                    config: {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        minDate: string | null;
                        maxDate: string | null;
                        defaultDate: string | null;
                        includeTime: boolean;
                    } | {
                        html: string;
                        plain: string;
                        omitFromPdf: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        file_type: Array<string>;
                        max_files: number;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        titlePlaceholder: string;
                        questionLabel: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        numberValueConstraint: NumberValueConstraint | null;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        tooltip: string;
                    } | {
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        max: number | null;
                    } | {
                        titlePlaceholder: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        esiTemplateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        tooltip: string;
                    } | {
                        variant: string;
                        options: Array<string>;
                        isMultipleSelect: boolean;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        min: number | null;
                        max: number | null;
                        multiline: boolean;
                        placeholder: string;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        htmlQuestion: string | null;
                        isHtmlQuestion: boolean;
                        isCounterHidden: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    };
                    dependencies: Array<{
                        questionId: string;
                        dependencyId: string;
                        dependencyNaturalKey: string;
                        condition: {
                            condition: EvaluatorOperator;
                            params: any;
                        };
                    }>;
                }>;
            }>;
            complementaryQuestions: Array<{
                id: string;
                question: string;
                naturalKey: string;
                dataType: DataType;
                categoryId: TemplateCategoryId;
                config: {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    minDate: string | null;
                    maxDate: string | null;
                    defaultDate: string | null;
                    includeTime: boolean;
                } | {
                    html: string;
                    plain: string;
                    omitFromPdf: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    file_type: Array<string>;
                    max_files: number;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    titlePlaceholder: string;
                    questionLabel: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    numberValueConstraint: NumberValueConstraint | null;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    tooltip: string;
                } | {
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    max: number | null;
                } | {
                    titlePlaceholder: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    esiTemplateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    tooltip: string;
                } | {
                    variant: string;
                    options: Array<string>;
                    isMultipleSelect: boolean;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    min: number | null;
                    max: number | null;
                    multiline: boolean;
                    placeholder: string;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    htmlQuestion: string | null;
                    isHtmlQuestion: boolean;
                    isCounterHidden: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                };
            }>;
            group: {
                groupId: TemplateGroupId;
                categoryId: TemplateCategoryId;
            };
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type UpdateTemplateMutationVariables = Exact<{
    templateId: Scalars['Int'];
    name?: InputMaybe<Scalars['String']>;
    description?: InputMaybe<Scalars['String']>;
    isArchived?: InputMaybe<Scalars['Boolean']>;
}>;
export declare type UpdateTemplateMutation = {
    updateTemplate: {
        template: {
            templateId: number;
            name: string;
            description: string | null;
            isArchived: boolean;
            steps: Array<{
                topic: {
                    title: string;
                    id: number;
                    templateId: number;
                    sortOrder: number;
                    isEnabled: boolean;
                };
            }>;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type UpdateTopicMutationVariables = Exact<{
    topicId: Scalars['Int'];
    templateId?: InputMaybe<Scalars['Int']>;
    title?: InputMaybe<Scalars['String']>;
    sortOrder?: InputMaybe<Scalars['Int']>;
    isEnabled?: InputMaybe<Scalars['Boolean']>;
}>;
export declare type UpdateTopicMutation = {
    updateTopic: {
        template: {
            isArchived: boolean;
            questionaryCount: number;
            templateId: number;
            groupId: TemplateGroupId;
            name: string;
            description: string | null;
            steps: Array<{
                topic: {
                    title: string;
                    id: number;
                    templateId: number;
                    sortOrder: number;
                    isEnabled: boolean;
                };
                fields: Array<{
                    sortOrder: number;
                    topicId: number;
                    dependenciesOperator: DependenciesLogicOperator | null;
                    question: {
                        id: string;
                        question: string;
                        naturalKey: string;
                        dataType: DataType;
                        categoryId: TemplateCategoryId;
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                    };
                    config: {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        minDate: string | null;
                        maxDate: string | null;
                        defaultDate: string | null;
                        includeTime: boolean;
                    } | {
                        html: string;
                        plain: string;
                        omitFromPdf: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        file_type: Array<string>;
                        max_files: number;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        titlePlaceholder: string;
                        questionLabel: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        numberValueConstraint: NumberValueConstraint | null;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        tooltip: string;
                    } | {
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        max: number | null;
                    } | {
                        titlePlaceholder: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        esiTemplateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        tooltip: string;
                    } | {
                        variant: string;
                        options: Array<string>;
                        isMultipleSelect: boolean;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        min: number | null;
                        max: number | null;
                        multiline: boolean;
                        placeholder: string;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        htmlQuestion: string | null;
                        isHtmlQuestion: boolean;
                        isCounterHidden: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    };
                    dependencies: Array<{
                        questionId: string;
                        dependencyId: string;
                        dependencyNaturalKey: string;
                        condition: {
                            condition: EvaluatorOperator;
                            params: any;
                        };
                    }>;
                }>;
            }>;
            complementaryQuestions: Array<{
                id: string;
                question: string;
                naturalKey: string;
                dataType: DataType;
                categoryId: TemplateCategoryId;
                config: {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    minDate: string | null;
                    maxDate: string | null;
                    defaultDate: string | null;
                    includeTime: boolean;
                } | {
                    html: string;
                    plain: string;
                    omitFromPdf: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    file_type: Array<string>;
                    max_files: number;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    titlePlaceholder: string;
                    questionLabel: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    numberValueConstraint: NumberValueConstraint | null;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    units: Array<{
                        id: string;
                        unit: string;
                        quantity: string;
                        symbol: string;
                        siConversionFormula: string;
                    }>;
                } | {
                    tooltip: string;
                } | {
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    max: number | null;
                } | {
                    titlePlaceholder: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    esiTemplateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    tooltip: string;
                } | {
                    variant: string;
                    options: Array<string>;
                    isMultipleSelect: boolean;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                } | {
                    addEntryButtonLabel: string;
                    minEntries: number | null;
                    maxEntries: number | null;
                    templateId: number | null;
                    templateCategory: string;
                    required: boolean;
                    small_label: string;
                } | {
                    min: number | null;
                    max: number | null;
                    multiline: boolean;
                    placeholder: string;
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                    htmlQuestion: string | null;
                    isHtmlQuestion: boolean;
                    isCounterHidden: boolean;
                } | {
                    small_label: string;
                    required: boolean;
                    tooltip: string;
                };
            }>;
            group: {
                groupId: TemplateGroupId;
                categoryId: TemplateCategoryId;
            };
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type ValidateTemplateImportMutationVariables = Exact<{
    templateAsJson: Scalars['String'];
}>;
export declare type ValidateTemplateImportMutation = {
    validateTemplateImport: {
        validationResult: {
            json: string;
            version: string;
            exportDate: any;
            isValid: boolean;
            errors: Array<string>;
            questionComparisons: Array<{
                status: QuestionComparisonStatus;
                conflictResolutionStrategy: ConflictResolutionStrategy;
                existingQuestion: {
                    id: string;
                    question: string;
                    naturalKey: string;
                    dataType: DataType;
                    categoryId: TemplateCategoryId;
                    config: {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        minDate: string | null;
                        maxDate: string | null;
                        defaultDate: string | null;
                        includeTime: boolean;
                    } | {
                        html: string;
                        plain: string;
                        omitFromPdf: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        file_type: Array<string>;
                        max_files: number;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        titlePlaceholder: string;
                        questionLabel: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        numberValueConstraint: NumberValueConstraint | null;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        tooltip: string;
                    } | {
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        max: number | null;
                    } | {
                        titlePlaceholder: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        esiTemplateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        tooltip: string;
                    } | {
                        variant: string;
                        options: Array<string>;
                        isMultipleSelect: boolean;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        min: number | null;
                        max: number | null;
                        multiline: boolean;
                        placeholder: string;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        htmlQuestion: string | null;
                        isHtmlQuestion: boolean;
                        isCounterHidden: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    };
                } | null;
                newQuestion: {
                    id: string;
                    question: string;
                    naturalKey: string;
                    dataType: DataType;
                    categoryId: TemplateCategoryId;
                    config: {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        minDate: string | null;
                        maxDate: string | null;
                        defaultDate: string | null;
                        includeTime: boolean;
                    } | {
                        html: string;
                        plain: string;
                        omitFromPdf: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        file_type: Array<string>;
                        max_files: number;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        titlePlaceholder: string;
                        questionLabel: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        numberValueConstraint: NumberValueConstraint | null;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        tooltip: string;
                    } | {
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        max: number | null;
                    } | {
                        titlePlaceholder: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        esiTemplateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        tooltip: string;
                    } | {
                        variant: string;
                        options: Array<string>;
                        isMultipleSelect: boolean;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        min: number | null;
                        max: number | null;
                        multiline: boolean;
                        placeholder: string;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        htmlQuestion: string | null;
                        isHtmlQuestion: boolean;
                        isCounterHidden: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    };
                };
            }>;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type CreateUnitMutationVariables = Exact<{
    id: Scalars['String'];
    unit: Scalars['String'];
    quantity: Scalars['String'];
    symbol: Scalars['String'];
    siConversionFormula: Scalars['String'];
}>;
export declare type CreateUnitMutation = {
    createUnit: {
        unit: {
            id: string;
            unit: string;
            quantity: string;
            symbol: string;
            siConversionFormula: string;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type DeleteUnitMutationVariables = Exact<{
    id: Scalars['String'];
}>;
export declare type DeleteUnitMutation = {
    deleteUnit: {
        unit: {
            id: string;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type GetUnitsQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetUnitsQuery = {
    units: Array<{
        id: string;
        unit: string;
        quantity: string;
        symbol: string;
        siConversionFormula: string;
    }> | null;
};
export declare type GetUnitsAsJsonQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetUnitsAsJsonQuery = {
    unitsAsJson: string | null;
};
export declare type ImportUnitsMutationVariables = Exact<{
    json: Scalars['String'];
    conflictResolutions: Array<ConflictResolution> | ConflictResolution;
}>;
export declare type ImportUnitsMutation = {
    importUnits: {
        units: Array<{
            id: string;
            unit: string;
            quantity: string;
            symbol: string;
            siConversionFormula: string;
        }> | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type ValidateUnitsImportMutationVariables = Exact<{
    unitsAsJson: Scalars['String'];
}>;
export declare type ValidateUnitsImportMutation = {
    validateUnitsImport: {
        validationResult: {
            json: string;
            version: string;
            exportDate: any;
            isValid: boolean;
            errors: Array<string>;
            unitComparisons: Array<{
                status: QuestionComparisonStatus;
                conflictResolutionStrategy: ConflictResolutionStrategy;
                existingUnit: {
                    id: string;
                    unit: string;
                    quantity: string;
                    symbol: string;
                    siConversionFormula: string;
                } | null;
                newUnit: {
                    id: string;
                    unit: string;
                    quantity: string;
                    symbol: string;
                    siConversionFormula: string;
                };
            }>;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type CheckTokenQueryVariables = Exact<{
    token: Scalars['String'];
}>;
export declare type CheckTokenQuery = {
    checkToken: {
        isValid: boolean;
    };
};
export declare type CreateUserMutationVariables = Exact<{
    user_title?: InputMaybe<Scalars['String']>;
    firstname: Scalars['String'];
    middlename?: InputMaybe<Scalars['String']>;
    lastname: Scalars['String'];
    password: Scalars['String'];
    preferredname?: InputMaybe<Scalars['String']>;
    orcid: Scalars['String'];
    orcidHash: Scalars['String'];
    refreshToken: Scalars['String'];
    gender: Scalars['String'];
    nationality: Scalars['Int'];
    birthdate: Scalars['DateTime'];
    organisation: Scalars['Int'];
    department: Scalars['String'];
    position: Scalars['String'];
    email: Scalars['String'];
    telephone: Scalars['String'];
    telephone_alt?: InputMaybe<Scalars['String']>;
    otherOrganisation?: InputMaybe<Scalars['String']>;
    organizationCountry?: InputMaybe<Scalars['Int']>;
}>;
export declare type CreateUserMutation = {
    createUser: {
        user: {
            id: number;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type CreateUserByEmailInviteMutationVariables = Exact<{
    firstname: Scalars['String'];
    lastname: Scalars['String'];
    email: Scalars['String'];
    userRole: UserRole;
}>;
export declare type CreateUserByEmailInviteMutation = {
    createUserByEmailInvite: {
        id: number | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type DeleteUserMutationVariables = Exact<{
    id: Scalars['Int'];
}>;
export declare type DeleteUserMutation = {
    deleteUser: {
        user: {
            id: number;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type ExternalTokenLoginMutationVariables = Exact<{
    externalToken: Scalars['String'];
}>;
export declare type ExternalTokenLoginMutation = {
    externalTokenLogin: {
        token: string | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type BasicUserDetailsFragment = {
    id: number;
    firstname: string;
    lastname: string;
    preferredname: string | null;
    organisation: string;
    position: string;
    created: any | null;
    placeholder: boolean | null;
};
export declare type GetBasicUserDetailsQueryVariables = Exact<{
    id: Scalars['Int'];
}>;
export declare type GetBasicUserDetailsQuery = {
    basicUserDetails: {
        id: number;
        firstname: string;
        lastname: string;
        preferredname: string | null;
        organisation: string;
        position: string;
        created: any | null;
        placeholder: boolean | null;
    } | null;
};
export declare type GetBasicUserDetailsByEmailQueryVariables = Exact<{
    email: Scalars['String'];
    role?: InputMaybe<UserRole>;
}>;
export declare type GetBasicUserDetailsByEmailQuery = {
    basicUserDetailsByEmail: {
        id: number;
        firstname: string;
        lastname: string;
        preferredname: string | null;
        organisation: string;
        position: string;
        created: any | null;
        placeholder: boolean | null;
    } | null;
};
export declare type GetFieldsQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetFieldsQuery = {
    getFields: {
        nationalities: Array<{
            id: number;
            value: string;
        }>;
        countries: Array<{
            id: number;
            value: string;
        }>;
    } | null;
};
export declare type GetMyRolesQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetMyRolesQuery = {
    me: {
        firstname: string;
        lastname: string;
        roles: Array<{
            id: number;
            shortCode: string;
            title: string;
        }>;
    } | null;
};
export declare type GetOrcIdInformationQueryVariables = Exact<{
    authorizationCode: Scalars['String'];
}>;
export declare type GetOrcIdInformationQuery = {
    getOrcIDInformation: {
        firstname: string | null;
        lastname: string | null;
        orcid: string | null;
        orcidHash: string | null;
        refreshToken: string | null;
        token: string | null;
    } | null;
};
export declare type GetPreviousCollaboratorsQueryVariables = Exact<{
    userId: Scalars['Int'];
    filter?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    userRole?: InputMaybe<UserRole>;
    subtractUsers?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;
export declare type GetPreviousCollaboratorsQuery = {
    previousCollaborators: {
        totalCount: number;
        users: Array<{
            id: number;
            firstname: string;
            lastname: string;
            preferredname: string | null;
            organisation: string;
            position: string;
            created: any | null;
            placeholder: boolean | null;
        }>;
    } | null;
};
export declare type GetRolesQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetRolesQuery = {
    roles: Array<{
        id: number;
        shortCode: string;
        title: string;
    }> | null;
};
export declare type GetTokenMutationVariables = Exact<{
    token: Scalars['String'];
}>;
export declare type GetTokenMutation = {
    token: {
        token: string | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type GetTokenForUserMutationVariables = Exact<{
    userId: Scalars['Int'];
}>;
export declare type GetTokenForUserMutation = {
    getTokenForUser: {
        token: string | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type GetUserQueryVariables = Exact<{
    id: Scalars['Int'];
}>;
export declare type GetUserQuery = {
    user: {
        user_title: string;
        username: string;
        firstname: string;
        middlename: string | null;
        lastname: string;
        preferredname: string | null;
        gender: string;
        nationality: number | null;
        birthdate: any;
        organisation: number;
        department: string;
        position: string;
        email: string;
        telephone: string;
        telephone_alt: string | null;
        orcid: string;
        emailVerified: boolean;
        placeholder: boolean;
    } | null;
};
export declare type GetUserMeQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetUserMeQuery = {
    me: {
        user_title: string;
        username: string;
        firstname: string;
        middlename: string | null;
        lastname: string;
        preferredname: string | null;
        gender: string;
        nationality: number | null;
        birthdate: any;
        organisation: number;
        department: string;
        position: string;
        email: string;
        telephone: string;
        telephone_alt: string | null;
        orcid: string;
        emailVerified: boolean;
        placeholder: boolean;
    } | null;
};
export declare type GetUserProposalsQueryVariables = Exact<{
    [key: string]: never;
}>;
export declare type GetUserProposalsQuery = {
    me: {
        proposals: Array<{
            primaryKey: number;
            proposalId: string;
            title: string;
            publicStatus: ProposalPublicStatus;
            statusId: number;
            created: any;
            finalStatus: ProposalEndStatus | null;
            notified: boolean;
            submitted: boolean;
            status: {
                id: number;
                shortCode: string;
                name: string;
                description: string;
                isDefault: boolean;
            } | null;
            proposer: {
                id: number;
            } | null;
            call: {
                id: number;
                shortCode: string;
                isActive: boolean;
                referenceNumberFormat: string | null;
            } | null;
        }>;
    } | null;
};
export declare type GetUserWithRolesQueryVariables = Exact<{
    id: Scalars['Int'];
}>;
export declare type GetUserWithRolesQuery = {
    user: {
        firstname: string;
        lastname: string;
        roles: Array<{
            id: number;
            shortCode: string;
            title: string;
        }>;
    } | null;
};
export declare type GetUsersQueryVariables = Exact<{
    filter?: InputMaybe<Scalars['String']>;
    first?: InputMaybe<Scalars['Int']>;
    offset?: InputMaybe<Scalars['Int']>;
    userRole?: InputMaybe<UserRole>;
    subtractUsers?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
    orderBy?: InputMaybe<Scalars['String']>;
    orderDirection?: InputMaybe<Scalars['String']>;
}>;
export declare type GetUsersQuery = {
    users: {
        totalCount: number;
        users: Array<{
            id: number;
            firstname: string;
            lastname: string;
            preferredname: string | null;
            organisation: string;
            position: string;
            created: any | null;
            placeholder: boolean | null;
        }>;
    } | null;
};
export declare type LoginMutationVariables = Exact<{
    email: Scalars['String'];
    password: Scalars['String'];
}>;
export declare type LoginMutation = {
    login: {
        token: string | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type LogoutMutationVariables = Exact<{
    token: Scalars['String'];
}>;
export declare type LogoutMutation = {
    logout: {
        token: string | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type ResetPasswordMutationVariables = Exact<{
    token: Scalars['String'];
    password: Scalars['String'];
}>;
export declare type ResetPasswordMutation = {
    resetPassword: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type ResetPasswordEmailMutationVariables = Exact<{
    email: Scalars['String'];
}>;
export declare type ResetPasswordEmailMutation = {
    resetPasswordEmail: {
        isSuccess: boolean | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type SelectRoleMutationVariables = Exact<{
    token: Scalars['String'];
    selectedRoleId: Scalars['Int'];
}>;
export declare type SelectRoleMutation = {
    selectRole: {
        token: string | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type SetUserEmailVerifiedMutationVariables = Exact<{
    id: Scalars['Int'];
}>;
export declare type SetUserEmailVerifiedMutation = {
    setUserEmailVerified: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type SetUserNotPlaceholderMutationVariables = Exact<{
    id: Scalars['Int'];
}>;
export declare type SetUserNotPlaceholderMutation = {
    setUserNotPlaceholder: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type UpdatePasswordMutationVariables = Exact<{
    id: Scalars['Int'];
    password: Scalars['String'];
}>;
export declare type UpdatePasswordMutation = {
    updatePassword: {
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type UpdateUserMutationVariables = Exact<{
    id: Scalars['Int'];
    user_title?: InputMaybe<Scalars['String']>;
    firstname: Scalars['String'];
    middlename?: InputMaybe<Scalars['String']>;
    lastname: Scalars['String'];
    preferredname?: InputMaybe<Scalars['String']>;
    gender: Scalars['String'];
    nationality: Scalars['Int'];
    birthdate: Scalars['DateTime'];
    organisation: Scalars['Int'];
    department: Scalars['String'];
    position: Scalars['String'];
    email: Scalars['String'];
    telephone: Scalars['String'];
    telephone_alt?: InputMaybe<Scalars['String']>;
    otherOrganisation?: InputMaybe<Scalars['String']>;
    organizationCountry?: InputMaybe<Scalars['Int']>;
}>;
export declare type UpdateUserMutation = {
    updateUser: {
        user: {
            id: number;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type UpdateUserRolesMutationVariables = Exact<{
    id: Scalars['Int'];
    roles?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
}>;
export declare type UpdateUserRolesMutation = {
    updateUserRoles: {
        user: {
            id: number;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type VerifyEmailMutationVariables = Exact<{
    token: Scalars['String'];
}>;
export declare type VerifyEmailMutation = {
    emailVerification: {
        success: boolean | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type CreateVisitMutationVariables = Exact<{
    scheduledEventId: Scalars['Int'];
    team: Array<Scalars['Int']> | Scalars['Int'];
    teamLeadUserId: Scalars['Int'];
}>;
export declare type CreateVisitMutation = {
    createVisit: {
        visit: {
            id: number;
            proposalPk: number;
            status: VisitStatus;
            creatorId: number;
            teamLead: {
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            };
            registrations: Array<{
                userId: number;
                visitId: number;
                registrationQuestionaryId: number | null;
                isRegistrationSubmitted: boolean;
                trainingExpiryDate: any | null;
                startsAt: any | null;
                endsAt: any | null;
                user: {
                    id: number;
                    firstname: string;
                    lastname: string;
                    preferredname: string | null;
                    organisation: string;
                    position: string;
                    created: any | null;
                    placeholder: boolean | null;
                };
            }>;
            proposal: {
                primaryKey: number;
                title: string;
                abstract: string;
                statusId: number;
                publicStatus: ProposalPublicStatus;
                proposalId: string;
                finalStatus: ProposalEndStatus | null;
                commentForUser: string | null;
                commentForManagement: string | null;
                created: any;
                updated: any;
                callId: number;
                questionaryId: number;
                notified: boolean;
                submitted: boolean;
                managementTimeAllocation: number | null;
                managementDecisionSubmitted: boolean;
                instrument: {
                    name: string;
                } | null;
                status: {
                    id: number;
                    shortCode: string;
                    name: string;
                    description: string;
                    isDefault: boolean;
                } | null;
                sepMeetingDecision: {
                    proposalPk: number;
                    recommendation: ProposalEndStatus | null;
                    commentForUser: string | null;
                    commentForManagement: string | null;
                    rankOrder: number | null;
                    submitted: boolean;
                    submittedBy: number | null;
                } | null;
            };
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type DeleteVisitMutationVariables = Exact<{
    visitId: Scalars['Int'];
}>;
export declare type DeleteVisitMutation = {
    deleteVisit: {
        visit: {
            id: number;
            proposalPk: number;
            status: VisitStatus;
            creatorId: number;
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type VisitFragment = {
    id: number;
    proposalPk: number;
    status: VisitStatus;
    creatorId: number;
};
export declare type GetVisitQueryVariables = Exact<{
    visitId: Scalars['Int'];
}>;
export declare type GetVisitQuery = {
    visit: {
        id: number;
        proposalPk: number;
        status: VisitStatus;
        creatorId: number;
        registrations: Array<{
            userId: number;
            visitId: number;
            registrationQuestionaryId: number | null;
            isRegistrationSubmitted: boolean;
            trainingExpiryDate: any | null;
            startsAt: any | null;
            endsAt: any | null;
            user: {
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            };
        }>;
        proposal: {
            primaryKey: number;
            title: string;
            abstract: string;
            statusId: number;
            publicStatus: ProposalPublicStatus;
            proposalId: string;
            finalStatus: ProposalEndStatus | null;
            commentForUser: string | null;
            commentForManagement: string | null;
            created: any;
            updated: any;
            callId: number;
            questionaryId: number;
            notified: boolean;
            submitted: boolean;
            managementTimeAllocation: number | null;
            managementDecisionSubmitted: boolean;
            instrument: {
                name: string;
            } | null;
            status: {
                id: number;
                shortCode: string;
                name: string;
                description: string;
                isDefault: boolean;
            } | null;
            sepMeetingDecision: {
                proposalPk: number;
                recommendation: ProposalEndStatus | null;
                commentForUser: string | null;
                commentForManagement: string | null;
                rankOrder: number | null;
                submitted: boolean;
                submittedBy: number | null;
            } | null;
        };
    } | null;
};
export declare type GetVisitsQueryVariables = Exact<{
    filter?: InputMaybe<VisitsFilter>;
}>;
export declare type GetVisitsQuery = {
    visits: Array<{
        id: number;
        proposalPk: number;
        status: VisitStatus;
        creatorId: number;
        proposal: {
            primaryKey: number;
            title: string;
            abstract: string;
            statusId: number;
            publicStatus: ProposalPublicStatus;
            proposalId: string;
            finalStatus: ProposalEndStatus | null;
            commentForUser: string | null;
            commentForManagement: string | null;
            created: any;
            updated: any;
            callId: number;
            questionaryId: number;
            notified: boolean;
            submitted: boolean;
            managementTimeAllocation: number | null;
            managementDecisionSubmitted: boolean;
            instrument: {
                name: string;
            } | null;
            status: {
                id: number;
                shortCode: string;
                name: string;
                description: string;
                isDefault: boolean;
            } | null;
            sepMeetingDecision: {
                proposalPk: number;
                recommendation: ProposalEndStatus | null;
                commentForUser: string | null;
                commentForManagement: string | null;
                rankOrder: number | null;
                submitted: boolean;
                submittedBy: number | null;
            } | null;
        };
    }>;
};
export declare type UpdateVisitMutationVariables = Exact<{
    visitId: Scalars['Int'];
    team?: InputMaybe<Array<Scalars['Int']> | Scalars['Int']>;
    status?: InputMaybe<VisitStatus>;
    teamLeadUserId?: InputMaybe<Scalars['Int']>;
}>;
export declare type UpdateVisitMutation = {
    updateVisit: {
        visit: {
            id: number;
            proposalPk: number;
            status: VisitStatus;
            creatorId: number;
            teamLead: {
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            };
            registrations: Array<{
                userId: number;
                visitId: number;
                registrationQuestionaryId: number | null;
                isRegistrationSubmitted: boolean;
                trainingExpiryDate: any | null;
                startsAt: any | null;
                endsAt: any | null;
                user: {
                    id: number;
                    firstname: string;
                    lastname: string;
                    preferredname: string | null;
                    organisation: string;
                    position: string;
                    created: any | null;
                    placeholder: boolean | null;
                };
            }>;
            proposal: {
                primaryKey: number;
                title: string;
                abstract: string;
                statusId: number;
                publicStatus: ProposalPublicStatus;
                proposalId: string;
                finalStatus: ProposalEndStatus | null;
                commentForUser: string | null;
                commentForManagement: string | null;
                created: any;
                updated: any;
                callId: number;
                questionaryId: number;
                notified: boolean;
                submitted: boolean;
                managementTimeAllocation: number | null;
                managementDecisionSubmitted: boolean;
                instrument: {
                    name: string;
                } | null;
                status: {
                    id: number;
                    shortCode: string;
                    name: string;
                    description: string;
                    isDefault: boolean;
                } | null;
                sepMeetingDecision: {
                    proposalPk: number;
                    recommendation: ProposalEndStatus | null;
                    commentForUser: string | null;
                    commentForManagement: string | null;
                    rankOrder: number | null;
                    submitted: boolean;
                    submittedBy: number | null;
                } | null;
            };
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type CreateVisitRegistrationMutationVariables = Exact<{
    visitId: Scalars['Int'];
}>;
export declare type CreateVisitRegistrationMutation = {
    createVisitRegistration: {
        registration: {
            userId: number;
            visitId: number;
            registrationQuestionaryId: number | null;
            isRegistrationSubmitted: boolean;
            trainingExpiryDate: any | null;
            startsAt: any | null;
            endsAt: any | null;
            user: {
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            };
            questionary: {
                isCompleted: boolean;
                questionaryId: number;
                templateId: number;
                created: any;
                steps: Array<{
                    isCompleted: boolean;
                    topic: {
                        title: string;
                        id: number;
                        templateId: number;
                        sortOrder: number;
                        isEnabled: boolean;
                    };
                    fields: Array<{
                        answerId: number | null;
                        sortOrder: number;
                        topicId: number;
                        dependenciesOperator: DependenciesLogicOperator | null;
                        value: any | null;
                        question: {
                            id: string;
                            question: string;
                            naturalKey: string;
                            dataType: DataType;
                            categoryId: TemplateCategoryId;
                            config: {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                minDate: string | null;
                                maxDate: string | null;
                                defaultDate: string | null;
                                includeTime: boolean;
                            } | {
                                html: string;
                                plain: string;
                                omitFromPdf: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                file_type: Array<string>;
                                max_files: number;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                titlePlaceholder: string;
                                questionLabel: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                numberValueConstraint: NumberValueConstraint | null;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                tooltip: string;
                            } | {
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                max: number | null;
                            } | {
                                titlePlaceholder: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                esiTemplateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                tooltip: string;
                            } | {
                                variant: string;
                                options: Array<string>;
                                isMultipleSelect: boolean;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                min: number | null;
                                max: number | null;
                                multiline: boolean;
                                placeholder: string;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                htmlQuestion: string | null;
                                isHtmlQuestion: boolean;
                                isCounterHidden: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            };
                        };
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                        dependencies: Array<{
                            questionId: string;
                            dependencyId: string;
                            dependencyNaturalKey: string;
                            condition: {
                                condition: EvaluatorOperator;
                                params: any;
                            };
                        }>;
                    }>;
                }>;
            };
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare type VisitRegistrationFragment = {
    userId: number;
    visitId: number;
    registrationQuestionaryId: number | null;
    isRegistrationSubmitted: boolean;
    trainingExpiryDate: any | null;
    startsAt: any | null;
    endsAt: any | null;
};
export declare type GetVisitRegistrationQueryVariables = Exact<{
    visitId: Scalars['Int'];
}>;
export declare type GetVisitRegistrationQuery = {
    visitRegistration: {
        userId: number;
        visitId: number;
        registrationQuestionaryId: number | null;
        isRegistrationSubmitted: boolean;
        trainingExpiryDate: any | null;
        startsAt: any | null;
        endsAt: any | null;
        user: {
            id: number;
            firstname: string;
            lastname: string;
            preferredname: string | null;
            organisation: string;
            position: string;
            created: any | null;
            placeholder: boolean | null;
        };
        questionary: {
            isCompleted: boolean;
            questionaryId: number;
            templateId: number;
            created: any;
            steps: Array<{
                isCompleted: boolean;
                topic: {
                    title: string;
                    id: number;
                    templateId: number;
                    sortOrder: number;
                    isEnabled: boolean;
                };
                fields: Array<{
                    answerId: number | null;
                    sortOrder: number;
                    topicId: number;
                    dependenciesOperator: DependenciesLogicOperator | null;
                    value: any | null;
                    question: {
                        id: string;
                        question: string;
                        naturalKey: string;
                        dataType: DataType;
                        categoryId: TemplateCategoryId;
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                    };
                    config: {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        minDate: string | null;
                        maxDate: string | null;
                        defaultDate: string | null;
                        includeTime: boolean;
                    } | {
                        html: string;
                        plain: string;
                        omitFromPdf: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        file_type: Array<string>;
                        max_files: number;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        titlePlaceholder: string;
                        questionLabel: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        numberValueConstraint: NumberValueConstraint | null;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        units: Array<{
                            id: string;
                            unit: string;
                            quantity: string;
                            symbol: string;
                            siConversionFormula: string;
                        }>;
                    } | {
                        tooltip: string;
                    } | {
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        max: number | null;
                    } | {
                        titlePlaceholder: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        esiTemplateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        tooltip: string;
                    } | {
                        variant: string;
                        options: Array<string>;
                        isMultipleSelect: boolean;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    } | {
                        addEntryButtonLabel: string;
                        minEntries: number | null;
                        maxEntries: number | null;
                        templateId: number | null;
                        templateCategory: string;
                        required: boolean;
                        small_label: string;
                    } | {
                        min: number | null;
                        max: number | null;
                        multiline: boolean;
                        placeholder: string;
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                        htmlQuestion: string | null;
                        isHtmlQuestion: boolean;
                        isCounterHidden: boolean;
                    } | {
                        small_label: string;
                        required: boolean;
                        tooltip: string;
                    };
                    dependencies: Array<{
                        questionId: string;
                        dependencyId: string;
                        dependencyNaturalKey: string;
                        condition: {
                            condition: EvaluatorOperator;
                            params: any;
                        };
                    }>;
                }>;
            }>;
        };
    } | null;
};
export declare type UpdateVisitRegistrationMutationVariables = Exact<{
    visitId: Scalars['Int'];
    trainingExpiryDate?: InputMaybe<Scalars['DateTime']>;
    isRegistrationSubmitted?: InputMaybe<Scalars['Boolean']>;
    startsAt?: InputMaybe<Scalars['DateTime']>;
    endsAt?: InputMaybe<Scalars['DateTime']>;
}>;
export declare type UpdateVisitRegistrationMutation = {
    updateVisitRegistration: {
        registration: {
            userId: number;
            visitId: number;
            registrationQuestionaryId: number | null;
            isRegistrationSubmitted: boolean;
            trainingExpiryDate: any | null;
            startsAt: any | null;
            endsAt: any | null;
            user: {
                id: number;
                firstname: string;
                lastname: string;
                preferredname: string | null;
                organisation: string;
                position: string;
                created: any | null;
                placeholder: boolean | null;
            };
            questionary: {
                isCompleted: boolean;
                questionaryId: number;
                templateId: number;
                created: any;
                steps: Array<{
                    isCompleted: boolean;
                    topic: {
                        title: string;
                        id: number;
                        templateId: number;
                        sortOrder: number;
                        isEnabled: boolean;
                    };
                    fields: Array<{
                        answerId: number | null;
                        sortOrder: number;
                        topicId: number;
                        dependenciesOperator: DependenciesLogicOperator | null;
                        value: any | null;
                        question: {
                            id: string;
                            question: string;
                            naturalKey: string;
                            dataType: DataType;
                            categoryId: TemplateCategoryId;
                            config: {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                minDate: string | null;
                                maxDate: string | null;
                                defaultDate: string | null;
                                includeTime: boolean;
                            } | {
                                html: string;
                                plain: string;
                                omitFromPdf: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                file_type: Array<string>;
                                max_files: number;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                titlePlaceholder: string;
                                questionLabel: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                numberValueConstraint: NumberValueConstraint | null;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                units: Array<{
                                    id: string;
                                    unit: string;
                                    quantity: string;
                                    symbol: string;
                                    siConversionFormula: string;
                                }>;
                            } | {
                                tooltip: string;
                            } | {
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                max: number | null;
                            } | {
                                titlePlaceholder: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                esiTemplateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                tooltip: string;
                            } | {
                                variant: string;
                                options: Array<string>;
                                isMultipleSelect: boolean;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            } | {
                                addEntryButtonLabel: string;
                                minEntries: number | null;
                                maxEntries: number | null;
                                templateId: number | null;
                                templateCategory: string;
                                required: boolean;
                                small_label: string;
                            } | {
                                min: number | null;
                                max: number | null;
                                multiline: boolean;
                                placeholder: string;
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                                htmlQuestion: string | null;
                                isHtmlQuestion: boolean;
                                isCounterHidden: boolean;
                            } | {
                                small_label: string;
                                required: boolean;
                                tooltip: string;
                            };
                        };
                        config: {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            minDate: string | null;
                            maxDate: string | null;
                            defaultDate: string | null;
                            includeTime: boolean;
                        } | {
                            html: string;
                            plain: string;
                            omitFromPdf: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            file_type: Array<string>;
                            max_files: number;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            titlePlaceholder: string;
                            questionLabel: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            numberValueConstraint: NumberValueConstraint | null;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            units: Array<{
                                id: string;
                                unit: string;
                                quantity: string;
                                symbol: string;
                                siConversionFormula: string;
                            }>;
                        } | {
                            tooltip: string;
                        } | {
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            max: number | null;
                        } | {
                            titlePlaceholder: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            esiTemplateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            tooltip: string;
                        } | {
                            variant: string;
                            options: Array<string>;
                            isMultipleSelect: boolean;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        } | {
                            addEntryButtonLabel: string;
                            minEntries: number | null;
                            maxEntries: number | null;
                            templateId: number | null;
                            templateCategory: string;
                            required: boolean;
                            small_label: string;
                        } | {
                            min: number | null;
                            max: number | null;
                            multiline: boolean;
                            placeholder: string;
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                            htmlQuestion: string | null;
                            isHtmlQuestion: boolean;
                            isCounterHidden: boolean;
                        } | {
                            small_label: string;
                            required: boolean;
                            tooltip: string;
                        };
                        dependencies: Array<{
                            questionId: string;
                            dependencyId: string;
                            dependencyNaturalKey: string;
                            condition: {
                                condition: EvaluatorOperator;
                                params: any;
                            };
                        }>;
                    }>;
                }>;
            };
        } | null;
        rejection: {
            reason: string;
            context: string | null;
            exception: string | null;
        } | null;
    };
};
export declare const CountryFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const RejectionFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const BasicUserDetailsFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const CallFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const EsiFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const FeedbackFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const GenericTemplateFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const InstrumentFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const CoreTechnicalReviewFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const ProposalStatusFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const SepMeetingDecisionFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const ProposalFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const TopicFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const UnitFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const FieldConfigFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const QuestionFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const FieldConditionFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const AnswerFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const QuestionaryStepFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const QuestionaryFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const CoreReviewFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const SampleEsiFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const SampleFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const ScheduledEventCoreFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const ShipmentFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const QuestionTemplateRelationFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const TemplateFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const TemplateMetadataFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const TemplateStepFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const VisitFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const VisitRegistrationFragmentDoc: import("graphql/language/ast").DocumentNode;
export declare const AssignProposalsToSepDocument: import("graphql/language/ast").DocumentNode;
export declare const AssignReviewersToSepDocument: import("graphql/language/ast").DocumentNode;
export declare const AssignChairOrSecretaryDocument: import("graphql/language/ast").DocumentNode;
export declare const AssignSepReviewersToProposalDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateSepDocument: import("graphql/language/ast").DocumentNode;
export declare const DeleteSepDocument: import("graphql/language/ast").DocumentNode;
export declare const GetInstrumentsBySepDocument: import("graphql/language/ast").DocumentNode;
export declare const GetUserSepsDocument: import("graphql/language/ast").DocumentNode;
export declare const GetSepDocument: import("graphql/language/ast").DocumentNode;
export declare const GetSepMembersDocument: import("graphql/language/ast").DocumentNode;
export declare const GetSepProposalDocument: import("graphql/language/ast").DocumentNode;
export declare const GetSepProposalsDocument: import("graphql/language/ast").DocumentNode;
export declare const SepProposalsByInstrumentDocument: import("graphql/language/ast").DocumentNode;
export declare const GetSepReviewersDocument: import("graphql/language/ast").DocumentNode;
export declare const GetSePsDocument: import("graphql/language/ast").DocumentNode;
export declare const RemoveProposalsFromSepDocument: import("graphql/language/ast").DocumentNode;
export declare const RemoveMemberFromSepDocument: import("graphql/language/ast").DocumentNode;
export declare const RemoveMemberFromSepProposalDocument: import("graphql/language/ast").DocumentNode;
export declare const ReorderSepMeetingDecisionProposalsDocument: import("graphql/language/ast").DocumentNode;
export declare const SaveSepMeetingDecisionDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateSepDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateSepTimeAllocationDocument: import("graphql/language/ast").DocumentNode;
export declare const AddClientLogDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateApiAccessTokenDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateInstitutionDocument: import("graphql/language/ast").DocumentNode;
export declare const DeleteApiAccessTokenDocument: import("graphql/language/ast").DocumentNode;
export declare const DeleteInstitutionDocument: import("graphql/language/ast").DocumentNode;
export declare const GetAllApiAccessTokensAndPermissionsDocument: import("graphql/language/ast").DocumentNode;
export declare const GetAllQueriesAndMutationsDocument: import("graphql/language/ast").DocumentNode;
export declare const GetFeaturesDocument: import("graphql/language/ast").DocumentNode;
export declare const GetInstitutionsDocument: import("graphql/language/ast").DocumentNode;
export declare const GetInstitutionsWithCountryDocument: import("graphql/language/ast").DocumentNode;
export declare const GetPageContentDocument: import("graphql/language/ast").DocumentNode;
export declare const GetQuantitiesDocument: import("graphql/language/ast").DocumentNode;
export declare const GetSettingsDocument: import("graphql/language/ast").DocumentNode;
export declare const MergeInstitutionsDocument: import("graphql/language/ast").DocumentNode;
export declare const PrepareDbDocument: import("graphql/language/ast").DocumentNode;
export declare const SetPageContentDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateApiAccessTokenDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateInstitutionDocument: import("graphql/language/ast").DocumentNode;
export declare const AssignInstrumentsToCallDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateCallDocument: import("graphql/language/ast").DocumentNode;
export declare const DeleteCallDocument: import("graphql/language/ast").DocumentNode;
export declare const GetCallDocument: import("graphql/language/ast").DocumentNode;
export declare const GetCallsDocument: import("graphql/language/ast").DocumentNode;
export declare const GetCallsByInstrumentScientistDocument: import("graphql/language/ast").DocumentNode;
export declare const RemoveAssignedInstrumentFromCallDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateCallDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateEsiDocument: import("graphql/language/ast").DocumentNode;
export declare const GetEsiDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateEsiDocument: import("graphql/language/ast").DocumentNode;
export declare const GetEventLogsDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateFeedbackDocument: import("graphql/language/ast").DocumentNode;
export declare const GetFeedbackDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateFeedbackDocument: import("graphql/language/ast").DocumentNode;
export declare const CloneGenericTemplateDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateGenericTemplateDocument: import("graphql/language/ast").DocumentNode;
export declare const DeleteGenericTemplateDocument: import("graphql/language/ast").DocumentNode;
export declare const GetGenericTemplateDocument: import("graphql/language/ast").DocumentNode;
export declare const GetGenericTemplatesWithProposalDataDocument: import("graphql/language/ast").DocumentNode;
export declare const GetGenericTemplatesWithQuestionaryStatusDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateGenericTemplateDocument: import("graphql/language/ast").DocumentNode;
export declare const AssignProposalsToInstrumentDocument: import("graphql/language/ast").DocumentNode;
export declare const AssignScientistsToInstrumentDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateInstrumentDocument: import("graphql/language/ast").DocumentNode;
export declare const DeleteInstrumentDocument: import("graphql/language/ast").DocumentNode;
export declare const GetInstrumentsDocument: import("graphql/language/ast").DocumentNode;
export declare const GetUserInstrumentsDocument: import("graphql/language/ast").DocumentNode;
export declare const RemoveProposalsFromInstrumentDocument: import("graphql/language/ast").DocumentNode;
export declare const RemoveScientistFromInstrumentDocument: import("graphql/language/ast").DocumentNode;
export declare const SetInstrumentAvailabilityTimeDocument: import("graphql/language/ast").DocumentNode;
export declare const SubmitInstrumentDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateInstrumentDocument: import("graphql/language/ast").DocumentNode;
export declare const AdministrationProposalDocument: import("graphql/language/ast").DocumentNode;
export declare const ChangeProposalsStatusDocument: import("graphql/language/ast").DocumentNode;
export declare const CloneProposalsDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateProposalDocument: import("graphql/language/ast").DocumentNode;
export declare const DeleteProposalDocument: import("graphql/language/ast").DocumentNode;
export declare const GetInstrumentScientistProposalsDocument: import("graphql/language/ast").DocumentNode;
export declare const GetMyProposalsDocument: import("graphql/language/ast").DocumentNode;
export declare const GetProposalDocument: import("graphql/language/ast").DocumentNode;
export declare const GetProposalsDocument: import("graphql/language/ast").DocumentNode;
export declare const GetProposalsCoreDocument: import("graphql/language/ast").DocumentNode;
export declare const NotifyProposalDocument: import("graphql/language/ast").DocumentNode;
export declare const SubmitProposalDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateProposalDocument: import("graphql/language/ast").DocumentNode;
export declare const GetUserProposalBookingsWithEventsDocument: import("graphql/language/ast").DocumentNode;
export declare const AnswerTopicDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateQuestionaryDocument: import("graphql/language/ast").DocumentNode;
export declare const GetBlankQuestionaryDocument: import("graphql/language/ast").DocumentNode;
export declare const GetBlankQuestionaryStepsDocument: import("graphql/language/ast").DocumentNode;
export declare const GetFileMetadataDocument: import("graphql/language/ast").DocumentNode;
export declare const GetQuestionaryDocument: import("graphql/language/ast").DocumentNode;
export declare const AddTechnicalReviewDocument: import("graphql/language/ast").DocumentNode;
export declare const AddUserForReviewDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateTechnicalReviewAssigneeDocument: import("graphql/language/ast").DocumentNode;
export declare const GetProposalReviewsDocument: import("graphql/language/ast").DocumentNode;
export declare const GetReviewDocument: import("graphql/language/ast").DocumentNode;
export declare const RemoveUserForReviewDocument: import("graphql/language/ast").DocumentNode;
export declare const SubmitProposalsReviewDocument: import("graphql/language/ast").DocumentNode;
export declare const SubmitTechnicalReviewsDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateReviewDocument: import("graphql/language/ast").DocumentNode;
export declare const UserWithReviewsDocument: import("graphql/language/ast").DocumentNode;
export declare const CloneSampleEsiDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateSampleEsiDocument: import("graphql/language/ast").DocumentNode;
export declare const DeleteSampleEsiDocument: import("graphql/language/ast").DocumentNode;
export declare const GetSampleEsiDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateSampleEsiDocument: import("graphql/language/ast").DocumentNode;
export declare const CloneSampleDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateSampleDocument: import("graphql/language/ast").DocumentNode;
export declare const DeleteSampleDocument: import("graphql/language/ast").DocumentNode;
export declare const GetSampleDocument: import("graphql/language/ast").DocumentNode;
export declare const GetSamplesByCallIdDocument: import("graphql/language/ast").DocumentNode;
export declare const GetSamplesWithProposalDataDocument: import("graphql/language/ast").DocumentNode;
export declare const GetSamplesWithQuestionaryStatusDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateSampleDocument: import("graphql/language/ast").DocumentNode;
export declare const GetScheduledEventCoreDocument: import("graphql/language/ast").DocumentNode;
export declare const GetScheduledEventsCoreDocument: import("graphql/language/ast").DocumentNode;
export declare const AddProposalWorkflowStatusDocument: import("graphql/language/ast").DocumentNode;
export declare const AddStatusChangingEventsToConnectionDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateProposalStatusDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateProposalWorkflowDocument: import("graphql/language/ast").DocumentNode;
export declare const DeleteProposalStatusDocument: import("graphql/language/ast").DocumentNode;
export declare const DeleteProposalWorkflowDocument: import("graphql/language/ast").DocumentNode;
export declare const DeleteProposalWorkflowStatusDocument: import("graphql/language/ast").DocumentNode;
export declare const GetProposalEventsDocument: import("graphql/language/ast").DocumentNode;
export declare const GetProposalStatusesDocument: import("graphql/language/ast").DocumentNode;
export declare const GetProposalWorkflowDocument: import("graphql/language/ast").DocumentNode;
export declare const GetProposalWorkflowsDocument: import("graphql/language/ast").DocumentNode;
export declare const MoveProposalWorkflowStatusDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateProposalStatusDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateProposalWorkflowDocument: import("graphql/language/ast").DocumentNode;
export declare const AddSamplesToShipmentDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateShipmentDocument: import("graphql/language/ast").DocumentNode;
export declare const DeleteShipmentDocument: import("graphql/language/ast").DocumentNode;
export declare const GetMyShipmentsDocument: import("graphql/language/ast").DocumentNode;
export declare const GetShipmentDocument: import("graphql/language/ast").DocumentNode;
export declare const GetShipmentsDocument: import("graphql/language/ast").DocumentNode;
export declare const SetActiveTemplateDocument: import("graphql/language/ast").DocumentNode;
export declare const SubmitShipmentDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateShipmentDocument: import("graphql/language/ast").DocumentNode;
export declare const ImportTemplateDocument: import("graphql/language/ast").DocumentNode;
export declare const CloneTemplateDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateQuestionDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateQuestionTemplateRelationDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateTemplateDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateTopicDocument: import("graphql/language/ast").DocumentNode;
export declare const DeleteQuestionDocument: import("graphql/language/ast").DocumentNode;
export declare const DeleteQuestionTemplateRelationDocument: import("graphql/language/ast").DocumentNode;
export declare const DeleteTemplateDocument: import("graphql/language/ast").DocumentNode;
export declare const DeleteTopicDocument: import("graphql/language/ast").DocumentNode;
export declare const GetActiveTemplateIdDocument: import("graphql/language/ast").DocumentNode;
export declare const GetIsNaturalKeyPresentDocument: import("graphql/language/ast").DocumentNode;
export declare const GetProposalTemplatesDocument: import("graphql/language/ast").DocumentNode;
export declare const GetQuestionsDocument: import("graphql/language/ast").DocumentNode;
export declare const GetTemplateDocument: import("graphql/language/ast").DocumentNode;
export declare const GetTemplateCategoriesDocument: import("graphql/language/ast").DocumentNode;
export declare const GetTemplateExportDocument: import("graphql/language/ast").DocumentNode;
export declare const GetTemplatesDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateQuestionDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateQuestionTemplateRelationDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateQuestionTemplateRelationSettingsDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateTemplateDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateTopicDocument: import("graphql/language/ast").DocumentNode;
export declare const ValidateTemplateImportDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateUnitDocument: import("graphql/language/ast").DocumentNode;
export declare const DeleteUnitDocument: import("graphql/language/ast").DocumentNode;
export declare const GetUnitsDocument: import("graphql/language/ast").DocumentNode;
export declare const GetUnitsAsJsonDocument: import("graphql/language/ast").DocumentNode;
export declare const ImportUnitsDocument: import("graphql/language/ast").DocumentNode;
export declare const ValidateUnitsImportDocument: import("graphql/language/ast").DocumentNode;
export declare const CheckTokenDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateUserDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateUserByEmailInviteDocument: import("graphql/language/ast").DocumentNode;
export declare const DeleteUserDocument: import("graphql/language/ast").DocumentNode;
export declare const ExternalTokenLoginDocument: import("graphql/language/ast").DocumentNode;
export declare const GetBasicUserDetailsDocument: import("graphql/language/ast").DocumentNode;
export declare const GetBasicUserDetailsByEmailDocument: import("graphql/language/ast").DocumentNode;
export declare const GetFieldsDocument: import("graphql/language/ast").DocumentNode;
export declare const GetMyRolesDocument: import("graphql/language/ast").DocumentNode;
export declare const GetOrcIdInformationDocument: import("graphql/language/ast").DocumentNode;
export declare const GetPreviousCollaboratorsDocument: import("graphql/language/ast").DocumentNode;
export declare const GetRolesDocument: import("graphql/language/ast").DocumentNode;
export declare const GetTokenDocument: import("graphql/language/ast").DocumentNode;
export declare const GetTokenForUserDocument: import("graphql/language/ast").DocumentNode;
export declare const GetUserDocument: import("graphql/language/ast").DocumentNode;
export declare const GetUserMeDocument: import("graphql/language/ast").DocumentNode;
export declare const GetUserProposalsDocument: import("graphql/language/ast").DocumentNode;
export declare const GetUserWithRolesDocument: import("graphql/language/ast").DocumentNode;
export declare const GetUsersDocument: import("graphql/language/ast").DocumentNode;
export declare const LoginDocument: import("graphql/language/ast").DocumentNode;
export declare const LogoutDocument: import("graphql/language/ast").DocumentNode;
export declare const ResetPasswordDocument: import("graphql/language/ast").DocumentNode;
export declare const ResetPasswordEmailDocument: import("graphql/language/ast").DocumentNode;
export declare const SelectRoleDocument: import("graphql/language/ast").DocumentNode;
export declare const SetUserEmailVerifiedDocument: import("graphql/language/ast").DocumentNode;
export declare const SetUserNotPlaceholderDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdatePasswordDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateUserDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateUserRolesDocument: import("graphql/language/ast").DocumentNode;
export declare const VerifyEmailDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateVisitDocument: import("graphql/language/ast").DocumentNode;
export declare const DeleteVisitDocument: import("graphql/language/ast").DocumentNode;
export declare const GetVisitDocument: import("graphql/language/ast").DocumentNode;
export declare const GetVisitsDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateVisitDocument: import("graphql/language/ast").DocumentNode;
export declare const CreateVisitRegistrationDocument: import("graphql/language/ast").DocumentNode;
export declare const GetVisitRegistrationDocument: import("graphql/language/ast").DocumentNode;
export declare const UpdateVisitRegistrationDocument: import("graphql/language/ast").DocumentNode;
export declare type SdkFunctionWrapper = <T>(action: (requestHeaders?: Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;
export declare function getSdk(client: GraphQLClient, withWrapper?: SdkFunctionWrapper): {
    assignProposalsToSep(variables: AssignProposalsToSepMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AssignProposalsToSepMutation>;
    assignReviewersToSEP(variables: AssignReviewersToSepMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AssignReviewersToSepMutation>;
    assignChairOrSecretary(variables: AssignChairOrSecretaryMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AssignChairOrSecretaryMutation>;
    assignSepReviewersToProposal(variables: AssignSepReviewersToProposalMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AssignSepReviewersToProposalMutation>;
    createSEP(variables: CreateSepMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateSepMutation>;
    deleteSEP(variables: DeleteSepMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteSepMutation>;
    getInstrumentsBySEP(variables: GetInstrumentsBySepQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetInstrumentsBySepQuery>;
    getUserSeps(variables?: Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserSepsQuery>;
    getSEP(variables: GetSepQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSepQuery>;
    getSEPMembers(variables: GetSepMembersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSepMembersQuery>;
    getSEPProposal(variables: GetSepProposalQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSepProposalQuery>;
    getSEPProposals(variables: GetSepProposalsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSepProposalsQuery>;
    sepProposalsByInstrument(variables: SepProposalsByInstrumentQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SepProposalsByInstrumentQuery>;
    getSEPReviewers(variables: GetSepReviewersQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSepReviewersQuery>;
    getSEPs(variables: GetSePsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSePsQuery>;
    removeProposalsFromSep(variables: RemoveProposalsFromSepMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveProposalsFromSepMutation>;
    removeMemberFromSep(variables: RemoveMemberFromSepMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveMemberFromSepMutation>;
    removeMemberFromSEPProposal(variables: RemoveMemberFromSepProposalMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveMemberFromSepProposalMutation>;
    reorderSepMeetingDecisionProposals(variables: ReorderSepMeetingDecisionProposalsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ReorderSepMeetingDecisionProposalsMutation>;
    saveSepMeetingDecision(variables: SaveSepMeetingDecisionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SaveSepMeetingDecisionMutation>;
    updateSEP(variables: UpdateSepMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateSepMutation>;
    updateSEPTimeAllocation(variables: UpdateSepTimeAllocationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateSepTimeAllocationMutation>;
    addClientLog(variables: AddClientLogMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddClientLogMutation>;
    createApiAccessToken(variables: CreateApiAccessTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateApiAccessTokenMutation>;
    createInstitution(variables: CreateInstitutionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateInstitutionMutation>;
    deleteApiAccessToken(variables: DeleteApiAccessTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteApiAccessTokenMutation>;
    deleteInstitution(variables: DeleteInstitutionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteInstitutionMutation>;
    getAllApiAccessTokensAndPermissions(variables?: Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllApiAccessTokensAndPermissionsQuery>;
    getAllQueriesAndMutations(variables?: Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetAllQueriesAndMutationsQuery>;
    getFeatures(variables?: Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetFeaturesQuery>;
    getInstitutions(variables?: Exact<{
        filter?: InputMaybe<InstitutionsFilter> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetInstitutionsQuery>;
    getInstitutionsWithCountry(variables?: Exact<{
        filter?: InputMaybe<InstitutionsFilter> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetInstitutionsWithCountryQuery>;
    getPageContent(variables: GetPageContentQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPageContentQuery>;
    getQuantities(variables?: Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetQuantitiesQuery>;
    getSettings(variables?: Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSettingsQuery>;
    mergeInstitutions(variables: MergeInstitutionsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MergeInstitutionsMutation>;
    prepareDB(variables: PrepareDbMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<PrepareDbMutation>;
    setPageContent(variables: SetPageContentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SetPageContentMutation>;
    updateApiAccessToken(variables: UpdateApiAccessTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateApiAccessTokenMutation>;
    updateInstitution(variables: UpdateInstitutionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateInstitutionMutation>;
    assignInstrumentsToCall(variables: AssignInstrumentsToCallMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AssignInstrumentsToCallMutation>;
    createCall(variables: CreateCallMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateCallMutation>;
    deleteCall(variables: DeleteCallMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteCallMutation>;
    getCall(variables: GetCallQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCallQuery>;
    getCalls(variables?: Exact<{
        filter?: InputMaybe<CallsFilter> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCallsQuery>;
    getCallsByInstrumentScientist(variables: GetCallsByInstrumentScientistQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetCallsByInstrumentScientistQuery>;
    removeAssignedInstrumentFromCall(variables: RemoveAssignedInstrumentFromCallMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveAssignedInstrumentFromCallMutation>;
    updateCall(variables: UpdateCallMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateCallMutation>;
    createEsi(variables: CreateEsiMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateEsiMutation>;
    getEsi(variables: GetEsiQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetEsiQuery>;
    updateEsi(variables: UpdateEsiMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateEsiMutation>;
    getEventLogs(variables: GetEventLogsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetEventLogsQuery>;
    createFeedback(variables: CreateFeedbackMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateFeedbackMutation>;
    getFeedback(variables: GetFeedbackQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetFeedbackQuery>;
    updateFeedback(variables: UpdateFeedbackMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateFeedbackMutation>;
    cloneGenericTemplate(variables: CloneGenericTemplateMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CloneGenericTemplateMutation>;
    createGenericTemplate(variables: CreateGenericTemplateMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateGenericTemplateMutation>;
    deleteGenericTemplate(variables: DeleteGenericTemplateMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteGenericTemplateMutation>;
    getGenericTemplate(variables: GetGenericTemplateQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetGenericTemplateQuery>;
    getGenericTemplatesWithProposalData(variables?: Exact<{
        filter?: InputMaybe<GenericTemplatesFilter> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetGenericTemplatesWithProposalDataQuery>;
    getGenericTemplatesWithQuestionaryStatus(variables?: Exact<{
        filter?: InputMaybe<GenericTemplatesFilter> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetGenericTemplatesWithQuestionaryStatusQuery>;
    updateGenericTemplate(variables: UpdateGenericTemplateMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateGenericTemplateMutation>;
    assignProposalsToInstrument(variables: AssignProposalsToInstrumentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AssignProposalsToInstrumentMutation>;
    assignScientistsToInstrument(variables: AssignScientistsToInstrumentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AssignScientistsToInstrumentMutation>;
    createInstrument(variables: CreateInstrumentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateInstrumentMutation>;
    deleteInstrument(variables: DeleteInstrumentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteInstrumentMutation>;
    getInstruments(variables?: Exact<{
        callIds?: InputMaybe<number | number[]> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetInstrumentsQuery>;
    getUserInstruments(variables?: Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserInstrumentsQuery>;
    removeProposalsFromInstrument(variables: RemoveProposalsFromInstrumentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveProposalsFromInstrumentMutation>;
    removeScientistFromInstrument(variables: RemoveScientistFromInstrumentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveScientistFromInstrumentMutation>;
    setInstrumentAvailabilityTime(variables: SetInstrumentAvailabilityTimeMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SetInstrumentAvailabilityTimeMutation>;
    submitInstrument(variables: SubmitInstrumentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SubmitInstrumentMutation>;
    updateInstrument(variables: UpdateInstrumentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateInstrumentMutation>;
    administrationProposal(variables: AdministrationProposalMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AdministrationProposalMutation>;
    changeProposalsStatus(variables: ChangeProposalsStatusMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ChangeProposalsStatusMutation>;
    cloneProposals(variables: CloneProposalsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CloneProposalsMutation>;
    createProposal(variables: CreateProposalMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateProposalMutation>;
    deleteProposal(variables: DeleteProposalMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteProposalMutation>;
    getInstrumentScientistProposals(variables?: Exact<{
        filter?: InputMaybe<ProposalsFilter> | undefined;
        offset?: InputMaybe<number> | undefined;
        first?: InputMaybe<number> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetInstrumentScientistProposalsQuery>;
    getMyProposals(variables?: Exact<{
        filter?: InputMaybe<UserProposalsFilter> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMyProposalsQuery>;
    getProposal(variables: GetProposalQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProposalQuery>;
    getProposals(variables?: Exact<{
        filter?: InputMaybe<ProposalsFilter> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProposalsQuery>;
    getProposalsCore(variables?: Exact<{
        filter?: InputMaybe<ProposalsFilter> | undefined;
        first?: InputMaybe<number> | undefined;
        offset?: InputMaybe<number> | undefined;
        sortField?: InputMaybe<string> | undefined;
        sortDirection?: InputMaybe<string> | undefined;
        searchText?: InputMaybe<string> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProposalsCoreQuery>;
    notifyProposal(variables: NotifyProposalMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<NotifyProposalMutation>;
    submitProposal(variables: SubmitProposalMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SubmitProposalMutation>;
    updateProposal(variables: UpdateProposalMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateProposalMutation>;
    getUserProposalBookingsWithEvents(variables?: Exact<{
        endsAfter?: any;
        status?: InputMaybe<ProposalBookingStatusCore | ProposalBookingStatusCore[]> | undefined;
        instrumentId?: InputMaybe<number> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserProposalBookingsWithEventsQuery>;
    answerTopic(variables: AnswerTopicMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AnswerTopicMutation>;
    createQuestionary(variables: CreateQuestionaryMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateQuestionaryMutation>;
    getBlankQuestionary(variables: GetBlankQuestionaryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetBlankQuestionaryQuery>;
    getBlankQuestionarySteps(variables: GetBlankQuestionaryStepsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetBlankQuestionaryStepsQuery>;
    getFileMetadata(variables: GetFileMetadataQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetFileMetadataQuery>;
    getQuestionary(variables: GetQuestionaryQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetQuestionaryQuery>;
    addTechnicalReview(variables: AddTechnicalReviewMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddTechnicalReviewMutation>;
    addUserForReview(variables: AddUserForReviewMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddUserForReviewMutation>;
    updateTechnicalReviewAssignee(variables: UpdateTechnicalReviewAssigneeMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateTechnicalReviewAssigneeMutation>;
    getProposalReviews(variables: GetProposalReviewsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProposalReviewsQuery>;
    getReview(variables: GetReviewQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetReviewQuery>;
    removeUserForReview(variables: RemoveUserForReviewMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<RemoveUserForReviewMutation>;
    submitProposalsReview(variables: SubmitProposalsReviewMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SubmitProposalsReviewMutation>;
    submitTechnicalReviews(variables: SubmitTechnicalReviewsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SubmitTechnicalReviewsMutation>;
    updateReview(variables: UpdateReviewMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateReviewMutation>;
    userWithReviews(variables?: Exact<{
        callId?: InputMaybe<number> | undefined;
        instrumentId?: InputMaybe<number> | undefined;
        status?: InputMaybe<ReviewStatus> | undefined;
        reviewer?: InputMaybe<ReviewerFilter> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<UserWithReviewsQuery>;
    cloneSampleEsi(variables: CloneSampleEsiMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CloneSampleEsiMutation>;
    createSampleEsi(variables: CreateSampleEsiMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateSampleEsiMutation>;
    deleteSampleEsi(variables: DeleteSampleEsiMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteSampleEsiMutation>;
    getSampleEsi(variables: GetSampleEsiQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSampleEsiQuery>;
    updateSampleEsi(variables: UpdateSampleEsiMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateSampleEsiMutation>;
    cloneSample(variables: CloneSampleMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CloneSampleMutation>;
    createSample(variables: CreateSampleMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateSampleMutation>;
    deleteSample(variables: DeleteSampleMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteSampleMutation>;
    getSample(variables: GetSampleQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSampleQuery>;
    getSamplesByCallId(variables: GetSamplesByCallIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSamplesByCallIdQuery>;
    getSamplesWithProposalData(variables?: Exact<{
        filter?: InputMaybe<SamplesFilter> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSamplesWithProposalDataQuery>;
    getSamplesWithQuestionaryStatus(variables?: Exact<{
        filter?: InputMaybe<SamplesFilter> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetSamplesWithQuestionaryStatusQuery>;
    updateSample(variables: UpdateSampleMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateSampleMutation>;
    getScheduledEventCore(variables: GetScheduledEventCoreQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetScheduledEventCoreQuery>;
    getScheduledEventsCore(variables?: Exact<{
        filter?: InputMaybe<ScheduledEventsCoreFilter> | undefined;
        first?: InputMaybe<number> | undefined;
        offset?: InputMaybe<number> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetScheduledEventsCoreQuery>;
    addProposalWorkflowStatus(variables: AddProposalWorkflowStatusMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddProposalWorkflowStatusMutation>;
    addStatusChangingEventsToConnection(variables: AddStatusChangingEventsToConnectionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddStatusChangingEventsToConnectionMutation>;
    createProposalStatus(variables: CreateProposalStatusMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateProposalStatusMutation>;
    createProposalWorkflow(variables: CreateProposalWorkflowMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateProposalWorkflowMutation>;
    deleteProposalStatus(variables: DeleteProposalStatusMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteProposalStatusMutation>;
    deleteProposalWorkflow(variables: DeleteProposalWorkflowMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteProposalWorkflowMutation>;
    deleteProposalWorkflowStatus(variables: DeleteProposalWorkflowStatusMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteProposalWorkflowStatusMutation>;
    getProposalEvents(variables?: Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProposalEventsQuery>;
    getProposalStatuses(variables?: Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProposalStatusesQuery>;
    getProposalWorkflow(variables: GetProposalWorkflowQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProposalWorkflowQuery>;
    getProposalWorkflows(variables?: Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProposalWorkflowsQuery>;
    moveProposalWorkflowStatus(variables: MoveProposalWorkflowStatusMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<MoveProposalWorkflowStatusMutation>;
    updateProposalStatus(variables: UpdateProposalStatusMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateProposalStatusMutation>;
    updateProposalWorkflow(variables: UpdateProposalWorkflowMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateProposalWorkflowMutation>;
    addSamplesToShipment(variables: AddSamplesToShipmentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<AddSamplesToShipmentMutation>;
    createShipment(variables: CreateShipmentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateShipmentMutation>;
    deleteShipment(variables: DeleteShipmentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteShipmentMutation>;
    getMyShipments(variables?: Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMyShipmentsQuery>;
    getShipment(variables: GetShipmentQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetShipmentQuery>;
    getShipments(variables?: Exact<{
        filter?: InputMaybe<ShipmentsFilter> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetShipmentsQuery>;
    setActiveTemplate(variables: SetActiveTemplateMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SetActiveTemplateMutation>;
    submitShipment(variables: SubmitShipmentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SubmitShipmentMutation>;
    updateShipment(variables: UpdateShipmentMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateShipmentMutation>;
    importTemplate(variables: ImportTemplateMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ImportTemplateMutation>;
    cloneTemplate(variables: CloneTemplateMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CloneTemplateMutation>;
    createQuestion(variables: CreateQuestionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateQuestionMutation>;
    createQuestionTemplateRelation(variables: CreateQuestionTemplateRelationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateQuestionTemplateRelationMutation>;
    createTemplate(variables: CreateTemplateMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateTemplateMutation>;
    createTopic(variables: CreateTopicMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateTopicMutation>;
    deleteQuestion(variables: DeleteQuestionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteQuestionMutation>;
    deleteQuestionTemplateRelation(variables: DeleteQuestionTemplateRelationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteQuestionTemplateRelationMutation>;
    deleteTemplate(variables: DeleteTemplateMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteTemplateMutation>;
    deleteTopic(variables: DeleteTopicMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteTopicMutation>;
    getActiveTemplateId(variables: GetActiveTemplateIdQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetActiveTemplateIdQuery>;
    getIsNaturalKeyPresent(variables: GetIsNaturalKeyPresentQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetIsNaturalKeyPresentQuery>;
    getProposalTemplates(variables?: Exact<{
        filter?: InputMaybe<ProposalTemplatesFilter> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetProposalTemplatesQuery>;
    getQuestions(variables?: Exact<{
        filter?: InputMaybe<QuestionsFilter> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetQuestionsQuery>;
    getTemplate(variables: GetTemplateQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTemplateQuery>;
    getTemplateCategories(variables?: Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTemplateCategoriesQuery>;
    getTemplateExport(variables: GetTemplateExportQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTemplateExportQuery>;
    getTemplates(variables?: Exact<{
        filter?: InputMaybe<TemplatesFilter> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTemplatesQuery>;
    updateQuestion(variables: UpdateQuestionMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateQuestionMutation>;
    updateQuestionTemplateRelation(variables: UpdateQuestionTemplateRelationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateQuestionTemplateRelationMutation>;
    updateQuestionTemplateRelationSettings(variables: UpdateQuestionTemplateRelationSettingsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateQuestionTemplateRelationSettingsMutation>;
    updateTemplate(variables: UpdateTemplateMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateTemplateMutation>;
    updateTopic(variables: UpdateTopicMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateTopicMutation>;
    validateTemplateImport(variables: ValidateTemplateImportMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ValidateTemplateImportMutation>;
    createUnit(variables: CreateUnitMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUnitMutation>;
    deleteUnit(variables: DeleteUnitMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUnitMutation>;
    getUnits(variables?: Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUnitsQuery>;
    getUnitsAsJson(variables?: Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUnitsAsJsonQuery>;
    importUnits(variables: ImportUnitsMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ImportUnitsMutation>;
    validateUnitsImport(variables: ValidateUnitsImportMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ValidateUnitsImportMutation>;
    checkToken(variables: CheckTokenQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CheckTokenQuery>;
    createUser(variables: CreateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserMutation>;
    createUserByEmailInvite(variables: CreateUserByEmailInviteMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateUserByEmailInviteMutation>;
    deleteUser(variables: DeleteUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteUserMutation>;
    externalTokenLogin(variables: ExternalTokenLoginMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ExternalTokenLoginMutation>;
    getBasicUserDetails(variables: GetBasicUserDetailsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetBasicUserDetailsQuery>;
    getBasicUserDetailsByEmail(variables: GetBasicUserDetailsByEmailQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetBasicUserDetailsByEmailQuery>;
    getFields(variables?: Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetFieldsQuery>;
    getMyRoles(variables?: Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetMyRolesQuery>;
    getOrcIDInformation(variables: GetOrcIdInformationQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetOrcIdInformationQuery>;
    getPreviousCollaborators(variables: GetPreviousCollaboratorsQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetPreviousCollaboratorsQuery>;
    getRoles(variables?: Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetRolesQuery>;
    getToken(variables: GetTokenMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTokenMutation>;
    getTokenForUser(variables: GetTokenForUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetTokenForUserMutation>;
    getUser(variables: GetUserQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserQuery>;
    getUserMe(variables?: Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserMeQuery>;
    getUserProposals(variables?: Exact<{
        [key: string]: never;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserProposalsQuery>;
    getUserWithRoles(variables: GetUserWithRolesQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUserWithRolesQuery>;
    getUsers(variables?: Exact<{
        filter?: InputMaybe<string> | undefined;
        first?: InputMaybe<number> | undefined;
        offset?: InputMaybe<number> | undefined;
        userRole?: InputMaybe<UserRole> | undefined;
        subtractUsers?: InputMaybe<number | number[]> | undefined;
        orderBy?: InputMaybe<string> | undefined;
        orderDirection?: InputMaybe<string> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetUsersQuery>;
    login(variables: LoginMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LoginMutation>;
    logout(variables: LogoutMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<LogoutMutation>;
    resetPassword(variables: ResetPasswordMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ResetPasswordMutation>;
    resetPasswordEmail(variables: ResetPasswordEmailMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<ResetPasswordEmailMutation>;
    selectRole(variables: SelectRoleMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SelectRoleMutation>;
    setUserEmailVerified(variables: SetUserEmailVerifiedMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SetUserEmailVerifiedMutation>;
    setUserNotPlaceholder(variables: SetUserNotPlaceholderMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<SetUserNotPlaceholderMutation>;
    updatePassword(variables: UpdatePasswordMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdatePasswordMutation>;
    updateUser(variables: UpdateUserMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserMutation>;
    updateUserRoles(variables: UpdateUserRolesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateUserRolesMutation>;
    verifyEmail(variables: VerifyEmailMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<VerifyEmailMutation>;
    createVisit(variables: CreateVisitMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateVisitMutation>;
    deleteVisit(variables: DeleteVisitMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<DeleteVisitMutation>;
    getVisit(variables: GetVisitQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetVisitQuery>;
    getVisits(variables?: Exact<{
        filter?: InputMaybe<VisitsFilter> | undefined;
    }> | undefined, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetVisitsQuery>;
    updateVisit(variables: UpdateVisitMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateVisitMutation>;
    createVisitRegistration(variables: CreateVisitRegistrationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<CreateVisitRegistrationMutation>;
    getVisitRegistration(variables: GetVisitRegistrationQueryVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<GetVisitRegistrationQuery>;
    updateVisitRegistration(variables: UpdateVisitRegistrationMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpdateVisitRegistrationMutation>;
};
export declare type Sdk = ReturnType<typeof getSdk>;
export {};
