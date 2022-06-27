"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.censorDefinedText = exports.censorWithIndexes = exports.censor = exports.randomCensor = exports.emailCensor = void 0;
var validations_1 = require("./common/validations");
var enums_1 = require("./enums");
var errors_1 = require("./errors");
var emailCensor = function (_a) {
    var email = _a.email, _b = _a.censorCharacter, censorCharacter = _b === void 0 ? "*" : _b, _c = _a.splitter, splitter = _c === void 0 ? "@" : _c;
    if (!(0, validations_1.isEmail)(email)) {
        throw (0, errors_1.setError)(enums_1.ERROR_TYPES.EMAIL_VALIDATION);
    }
    var splited = email.split(splitter);
    var censored = (0, exports.censor)({ text: splited[0], censorCharacter: censorCharacter });
    return censored + splitter + splited[1];
};
exports.emailCensor = emailCensor;
var randomCensor = function (_a) {
    var text = _a.text, _b = _a.size, size = _b === void 0 ? 3 : _b, _c = _a.censorCharacter, censorCharacter = _c === void 0 ? "*" : _c;
    var randomArray = [];
    var _loop_1 = function () {
        var randomValue = Math.floor(Math.random() * text.length);
        !randomArray.find(function (val) { return val === randomValue; }) && randomArray.push(randomValue);
    };
    while (randomArray.length < size) {
        _loop_1();
    }
    return (0, exports.censorWithIndexes)({ text: text, indexes: randomArray, censorCharacter: censorCharacter });
};
exports.randomCensor = randomCensor;
var censor = function (_a) {
    var text = _a.text, _b = _a.censorCharacter, censorCharacter = _b === void 0 ? '*' : _b;
    var numberArray = Array.from({ length: text.length }, function (v, i) { return i; });
    // Deleting first and last character from array because of we are not want to censored first and last character 
    numberArray.shift();
    numberArray.pop();
    return (0, exports.censorWithIndexes)({ text: text, indexes: numberArray, censorCharacter: censorCharacter });
};
exports.censor = censor;
var censorWithIndexes = function (_a) {
    var text = _a.text, indexes = _a.indexes, _b = _a.censorCharacter, censorCharacter = _b === void 0 ? '*' : _b;
    var splitedText = text.split("");
    indexes.forEach(function (value) { return splitedText[value] = censorCharacter; });
    return splitedText.join("");
};
exports.censorWithIndexes = censorWithIndexes;
var censorDefinedText = function (_a) {
    var text = _a.text, definedText = _a.definedText, _b = _a.censorCharacter, censorCharacter = _b === void 0 ? '*' : _b;
    var numberArray = Array.from({ length: definedText.length }, function (arrItem) { return "*"; });
    return text.replace(definedText, numberArray.join(""));
};
exports.censorDefinedText = censorDefinedText;
//# sourceMappingURL=censor.js.map