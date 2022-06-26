"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setError = void 0;
var enums_1 = require("../enums");
var setError = function (error) {
    return {
        message: enums_1.ERROR_TYPES[error],
        code: error
    };
};
exports.setError = setError;
//# sourceMappingURL=index.js.map