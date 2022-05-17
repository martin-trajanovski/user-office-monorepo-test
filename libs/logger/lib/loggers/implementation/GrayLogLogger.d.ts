import { Logger } from '../Logger';
export declare class GrayLogLogger implements Logger {
    private contextToFieldProperties?;
    log: any;
    constructor(server: string, port: number, staticValues?: Record<string, unknown>, contextToFieldProperties?: string[] | undefined);
    private createPayload;
    logInfo(message: string, context: Record<string, unknown>): void;
    logWarn(message: string, context: Record<string, unknown>): void;
    logDebug(message: string, context: Record<string, unknown>): void;
    logError(message: string, context: Record<string, unknown>): void;
    logException(message: string, exception: unknown, context?: Record<string, unknown>): void;
}
