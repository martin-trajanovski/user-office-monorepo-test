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
exports.dateQuestionValidationSchema = void 0;
const luxon_1 = require("luxon");
const Yup = __importStar(require("yup"));
function normalizeDate(date, includeTime) {
    let normalizedDate = luxon_1.DateTime.fromISO(date);
    if (includeTime) {
        normalizedDate = normalizedDate.startOf('minute');
    }
    else {
        normalizedDate = normalizedDate.startOf('day');
    }
    return normalizedDate.toJSDate();
}
const dateQuestionValidationSchema = (field) => {
    const options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
    };
    let schema;
    const config = field.config;
    if (config.includeTime) {
        options.hour = 'numeric';
        options.minute = 'numeric';
    }
    if (config.required) {
        schema = Yup.date()
            .required('This field is required')
            .transform(function (value) {
            return normalizeDate(value.toISOString(), config.includeTime);
        });
    }
    else {
        schema = Yup.date()
            .typeError(config.includeTime ? 'Invalid datetime' : 'Invalid date')
            .nullable();
    }
    if (config.minDate) {
        const minDate = normalizeDate(config.minDate, config.includeTime);
        schema = schema.min(minDate, `Date must be no earlier than ${new Date(minDate).toLocaleDateString('en-GB', options)}`);
    }
    if (config.maxDate) {
        const maxDate = normalizeDate(config.maxDate, config.includeTime);
        schema = schema.max(maxDate, `Date must be no latter than ${new Date(maxDate).toLocaleDateString('en-GB', options)}`);
    }
    return schema;
};
exports.dateQuestionValidationSchema = dateQuestionValidationSchema;
