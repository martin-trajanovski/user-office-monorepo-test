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
exports.multipleChoiceValidationSchema = void 0;
const Yup = __importStar(require("yup"));
const multipleChoiceValidationSchema = (field) => {
    const config = field.config;
    let schema = Yup.array();
    if (config.required) {
        schema = schema.test({
            message: 'This field is required',
            test: (arr) => Array.isArray(arr) && arr.length > 0,
        });
    }
    const availableOptions = config.options;
    schema = schema.test({
        message: 'Input contains invalid values',
        test: (arr) => Array.isArray(arr) && arr.every((val) => availableOptions.includes(val)),
    });
    return schema;
};
exports.multipleChoiceValidationSchema = multipleChoiceValidationSchema;
