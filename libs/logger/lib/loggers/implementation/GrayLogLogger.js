"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GrayLogLogger = void 0;
const fast_safe_stringify_1 = __importDefault(require("fast-safe-stringify"));
const Level_1 = require("../../enum/Level");
function extractPropertiesFromJson(json, properties) {
    const result = {};
    for (const property of properties) {
        const value = json[property];
        if (value !== undefined) {
            result[property] = value;
        }
    }
    return result;
}
class GrayLogLogger {
    constructor(server, port, staticValues, contextToFieldProperties) {
        this.contextToFieldProperties = contextToFieldProperties;
        this.log = require('gelf-pro');
        this.log.setConfig({
            fields: staticValues,
            adapterName: 'udp',
            adapterOptions: {
                host: server,
                port: port,
            },
        });
    }
    createPayload(level, message, context) {
        const fieldProperties = extractPropertiesFromJson(context, this.contextToFieldProperties || []);
        return {
            levelStr: Level_1.LEVEL[level],
            title: message,
            stackTrace: new Error().stack,
            context: (0, fast_safe_stringify_1.default)(context),
            ...fieldProperties,
        };
    }
    logInfo(message, context) {
        this.log.info(message, this.createPayload(Level_1.LEVEL.INFO, message, context));
    }
    logWarn(message, context) {
        this.log.warning(message, this.createPayload(Level_1.LEVEL.WARN, message, context));
    }
    logDebug(message, context) {
        this.log.debug(message, this.createPayload(Level_1.LEVEL.DEBUG, message, context));
    }
    logError(message, context) {
        this.log.error(message, this.createPayload(Level_1.LEVEL.ERROR, message, context));
    }
    logException(message, exception, context) {
        if (exception instanceof Error) {
            // explicitly extract the properties and pass them on
            // so when the error is stringified they show up properly
            const { name, message: msg, stack } = exception;
            this.logError(message, {
                exception: { name, message: msg, stack },
                ...context,
            });
        }
        else if (exception !== null) {
            this.logError(message, { exception, ...context });
        }
        else {
            this.logError(message, context || {});
        }
    }
}
exports.GrayLogLogger = GrayLogLogger;
