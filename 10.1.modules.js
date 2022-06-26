"use strict";
exports.__esModule = true;
exports.ZipCodeValidator = void 0;
var ZipCodeValidator = /** @class */ (function () {
    function ZipCodeValidator() {
    }
    ZipCodeValidator.prototype.isAcceptable = function (s) {
        return s.length === 5;
    };
    return ZipCodeValidator;
}());
exports.ZipCodeValidator = ZipCodeValidator;
var validator = new ZipCodeValidator();
console.log(validator.isAcceptable("12345"));
