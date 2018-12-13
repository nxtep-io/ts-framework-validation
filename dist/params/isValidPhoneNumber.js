"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const Phone = require("phone");
/**
 * Checks if param is a valid international phone number.
 *
 * @param {String} phoneNumber The param to be validated
 */
exports.default = (phoneNumber = '') => __awaiter(this, void 0, void 0, function* () {
    if (phoneNumber && phoneNumber.length && Phone(phoneNumber).length) {
        return true;
    }
    return false;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNWYWxpZFBob25lTnVtYmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3BhcmFtcy9pc1ZhbGlkUGhvbmVOdW1iZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLCtCQUErQjtBQUUvQjs7OztHQUlHO0FBQ0gsa0JBQWUsQ0FBTyxjQUFzQixFQUFFLEVBQW9CLEVBQUU7SUFDbEUsRUFBRSxDQUFDLENBQUMsV0FBVyxJQUFJLFdBQVcsQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDbkUsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAqIGFzIFBob25lIGZyb20gJ3Bob25lJztcblxuLyoqXG4gKiBDaGVja3MgaWYgcGFyYW0gaXMgYSB2YWxpZCBpbnRlcm5hdGlvbmFsIHBob25lIG51bWJlci5cbiAqIFxuICogQHBhcmFtIHtTdHJpbmd9IHBob25lTnVtYmVyIFRoZSBwYXJhbSB0byBiZSB2YWxpZGF0ZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHBob25lTnVtYmVyOiBzdHJpbmcgPSAnJyk6IFByb21pc2U8Ym9vbGVhbj4gPT4ge1xuICBpZiAocGhvbmVOdW1iZXIgJiYgcGhvbmVOdW1iZXIubGVuZ3RoICYmIFBob25lKHBob25lTnVtYmVyKS5sZW5ndGgpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuIl19