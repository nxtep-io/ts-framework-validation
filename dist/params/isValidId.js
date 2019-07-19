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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNWYWxpZElkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3BhcmFtcy9pc1ZhbGlkSWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLE1BQU0sQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0FBRTFEOzs7O0dBSUc7QUFDSCxrQkFBZSxDQUFPLEVBQVUsRUFBb0IsRUFBRTtJQUNwRCxNQUFNLEdBQUcsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7SUFDMUQsSUFBSSxHQUFHLElBQUksaUJBQWlCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1FBQ3RDLE9BQU8sSUFBSSxDQUFDO0tBQ2I7SUFDRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMsQ0FBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIHNpbXBsZSByZWdleCBmb3IgdmFsaWRhdGluZyBPYmplY3QgSWRzIGFzIGhleCBzdHJpbmdzLlxuICovXG5jb25zdCBjaGVja0ZvckhleFJlZ0V4cCA9IG5ldyBSZWdFeHAoJ15bMC05YS1mQS1GXXsyNH0kJyk7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHBhcmFtIGlzIGEgdmFsaWQgbW9uZ28gT2JqZWN0IElkLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBUaGUgcGFyYW0gdG8gYmUgdmFsaWRhdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChpZDogc3RyaW5nKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gIGNvbnN0IHN0ciA9IGlkICYmIGlkLnRvU3RyaW5nID8gaWQudG9TdHJpbmcoKSA6IHVuZGVmaW5lZDtcbiAgaWYgKHN0ciAmJiBjaGVja0ZvckhleFJlZ0V4cC50ZXN0KHN0cikpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuIl19