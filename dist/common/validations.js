"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isEmail = void 0;
var isEmail = function (str) {
    var regexp = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regexp.test(str);
};
exports.isEmail = isEmail;
//# sourceMappingURL=validations.js.map