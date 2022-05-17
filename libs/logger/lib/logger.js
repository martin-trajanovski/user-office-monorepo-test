"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setLogger = exports.logger = void 0;
const ConsoleLogger_1 = require("./loggers/implementation/ConsoleLogger");
const deaultLogger = new ConsoleLogger_1.ConsoleLogger();
let logger = deaultLogger;
exports.logger = logger;
function setLogger(newLogger) {
    exports.logger = logger = newLogger;
}
exports.setLogger = setLogger;
