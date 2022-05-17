import { Logger } from './loggers/Logger';
declare let logger: Logger;
declare function setLogger(newLogger: Logger): void;
export { logger, setLogger };
