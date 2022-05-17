"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsoleLogger = void 0;
const fast_safe_stringify_1 = __importDefault(require("fast-safe-stringify"));
const Level_1 = require("../../enum/Level");
class ConsoleLogger {
    logInfo(message, context) {
        this.log(Level_1.LEVEL.INFO, message, context);
    }
    logWarn(message, context) {
        this.log(Level_1.LEVEL.WARN, message, context);
    }
    logDebug(message, context) {
        this.log(Level_1.LEVEL.DEBUG, message, context);
    }
    logError(message, context) {
        this.log(Level_1.LEVEL.ERROR, message, context);
    }
    /**
     *  Logs an exception
     * @param message  The message to log
     * @param exception  The exception to log
     * @param context  The context to log
     */
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
    log(level, message, context) {
        console.log(`[${new Date().toISOString()}] ${level} - ${message} \n ${(0, fast_safe_stringify_1.default)(context)}`);
    }
}
exports.ConsoleLogger = ConsoleLogger;
