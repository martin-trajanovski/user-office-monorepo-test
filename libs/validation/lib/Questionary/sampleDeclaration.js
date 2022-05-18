"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sampleDeclarationValidationSchema = void 0;
const Yup = __importStar(require("yup"));
const sampleDeclarationValidationSchema = (field) => {
    const config = field.config;
    let schema = Yup.array().of(Yup.object());
    if (config.minEntries) {
        schema = schema.min(config.minEntries, `Please add at least ${config.minEntries} sample(s)`);
    }
    if (config.maxEntries) {
        schema = schema.max(config.maxEntries, `Please add at most ${config.maxEntries} sample(s)`);
    }
    schema = schema.test('allSamplesCompleted', 'All samples must be completed', (value) => { var _a; return (_a = value === null || value === void 0 ? void 0 : value.every((sample) => sample === null || sample === void 0 ? void 0 : sample.questionary.isCompleted)) !== null && _a !== void 0 ? _a : false; });
    return schema;
};
exports.sampleDeclarationValidationSchema = sampleDeclarationValidationSchema;
