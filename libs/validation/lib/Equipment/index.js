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
exports.equipmentValidationSchema = void 0;
const luxon_1 = require("luxon");
const Yup = __importStar(require("yup"));
const util_1 = require("../util");
exports.equipmentValidationSchema = Yup.object().shape({
    name: Yup.string().min(3).max(100).required(),
    maintenanceStartsAt: Yup.date()
        .nullable()
        .typeError(util_1.TYPE_ERR_INVALID_DATE)
        .notRequired(),
    maintenanceEndsAt: Yup.date()
        .nullable()
        .typeError(util_1.TYPE_ERR_INVALID_DATE)
        .when('maintenanceStartsAt', (maintenanceStartsAt, schema) => {
        if (!maintenanceStartsAt) {
            return schema;
        }
        const min = luxon_1.DateTime.fromJSDate(maintenanceStartsAt).plus({
            minute: 1,
        });
        if (!min.isValid) {
            return schema;
        }
        return schema
            .nullable()
            .typeError(util_1.TYPE_ERR_INVALID_DATE)
            .min(min.toJSDate(), (0, util_1.atOrLaterThanMsg)(min.toFormat(util_1.TZ_LESS_DATE_TIME_FORMAT)))
            .notRequired();
    })
        .notRequired(),
});
