import { StringValidator } from "./10.modules";

export class ZipCodeValidator implements StringValidator {
  isAcceptable(s: string) {
    return s.length === 5;
  }
}

var validator = new ZipCodeValidator();
console.log(validator.isAcceptable("12345"));