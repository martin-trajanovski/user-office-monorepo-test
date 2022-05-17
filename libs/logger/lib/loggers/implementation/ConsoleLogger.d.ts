import { LEVEL } from '../../enum/Level';
import { Logger } from '../Logger';
export declare class ConsoleLogger implements Logger {
    logInfo(message: string, context: Record<string, unknown>): void;
    logWarn(message: string, context: Record<string, unknown>): void;
    logDebug(message: string, context: Record<string, unknown>): void;
    logError(message: string, context: Record<string, unknown>): void;
    /**
     *  Logs an exception
     * @param message  The message to log
     * @param exception  The exception to log
     * @param context  The context to log
     */
    logException(message: string, exception: unknown, context?: Record<string, unknown>): void;
    log(level: LEVEL, message: string, context: Record<string, unknown>): void;
}
