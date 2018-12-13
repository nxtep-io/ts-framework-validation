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
/**
 * A simple regex for validating Object Ids as hex strings.
 */
const checkForHexRegExp = new RegExp('^[0-9a-fA-F]{24}$');
/**
 * Checks if param is a valid mongo Object Id.
 *
 * @param {String} id The param to be validated
 */
exports.default = (id) => __awaiter(this, void 0, void 0, function* () {
    const str = id && id.toString ? id.toString() : undefined;
    if (str && checkForHexRegExp.test(str)) {
        return true;
    }
    return false;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNWYWxpZElkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3BhcmFtcy9pc1ZhbGlkSWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRTFEOzs7O0dBSUc7QUFDSCxrQkFBZSxDQUFPLEVBQVUsRUFBb0IsRUFBRTtJQUNwRCxNQUFNLEdBQUcsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDMUQsRUFBRSxDQUFDLENBQUMsR0FBRyxJQUFJLGlCQUFpQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7SUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO0FBQ2YsQ0FBQyxDQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgc2ltcGxlIHJlZ2V4IGZvciB2YWxpZGF0aW5nIE9iamVjdCBJZHMgYXMgaGV4IHN0cmluZ3MuXG4gKi9cbmNvbnN0IGNoZWNrRm9ySGV4UmVnRXhwID0gbmV3IFJlZ0V4cCgnXlswLTlhLWZBLUZdezI0fSQnKTtcblxuLyoqXG4gKiBDaGVja3MgaWYgcGFyYW0gaXMgYSB2YWxpZCBtb25nbyBPYmplY3QgSWQuXG4gKiBcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBUaGUgcGFyYW0gdG8gYmUgdmFsaWRhdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChpZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gIGNvbnN0IHN0ciA9IGlkICYmIGlkLnRvU3RyaW5nID8gaWQudG9TdHJpbmcoKSA6IHVuZGVmaW5lZDtcbiAgaWYgKHN0ciAmJiBjaGVja0ZvckhleFJlZ0V4cC50ZXN0KHN0cikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuIl19