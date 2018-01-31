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
// TODO: Put this in a prefs file
const USER_USERNAME_MIN = 3;
const USER_USERNAME_MAX = 64;
// Only alphanum, under, plus and hyphen
const USER_USERNAME_REGEX = /^[a-zA-Z0-9\+\-\_]+$/;
/**
 * Checks if param is a valid user username.
 *
 * @param {String} username The param to be validated
 */
exports.default = (username = '') => __awaiter(this, void 0, void 0, function* () {
    if (!username || !username.length) {
        return false;
    }
    else if (username.length < USER_USERNAME_MIN) {
        return false;
    }
    else if (username.length > USER_USERNAME_MAX) {
        return false;
    }
    else if (!username.match(USER_USERNAME_REGEX)) {
        return false;
    }
    return true;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNWYWxpZFVzZXJuYW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3BhcmFtcy9pc1ZhbGlkVXNlcm5hbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlDQUFpQztBQUNqQyxNQUFNLGlCQUFpQixHQUFHLENBQUMsQ0FBQztBQUM1QixNQUFNLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztBQUU3Qix3Q0FBd0M7QUFDeEMsTUFBTSxtQkFBbUIsR0FBRyxzQkFBc0IsQ0FBQztBQUVuRDs7OztHQUlHO0FBQ0gsa0JBQWUsQ0FBTyxXQUFtQixFQUFFLEVBQW9CLEVBQUU7SUFDL0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUMvQyxNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEQsTUFBTSxDQUFDLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO0FBQ2QsQ0FBQyxDQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUT0RPOiBQdXQgdGhpcyBpbiBhIHByZWZzIGZpbGVcbmNvbnN0IFVTRVJfVVNFUk5BTUVfTUlOID0gMztcbmNvbnN0IFVTRVJfVVNFUk5BTUVfTUFYID0gNjQ7XG5cbi8vIE9ubHkgYWxwaGFudW0sIHVuZGVyLCBwbHVzIGFuZCBoeXBoZW5cbmNvbnN0IFVTRVJfVVNFUk5BTUVfUkVHRVggPSAvXlthLXpBLVowLTlcXCtcXC1cXF9dKyQvO1xuXG4vKipcbiAqIENoZWNrcyBpZiBwYXJhbSBpcyBhIHZhbGlkIHVzZXIgdXNlcm5hbWUuXG4gKiBcbiAqIEBwYXJhbSB7U3RyaW5nfSB1c2VybmFtZSBUaGUgcGFyYW0gdG8gYmUgdmFsaWRhdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICh1c2VybmFtZTogc3RyaW5nID0gJycpOiBQcm9taXNlPEJvb2xlYW4+ID0+IHtcbiAgaWYgKCF1c2VybmFtZSB8fCAhdXNlcm5hbWUubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2UgaWYgKHVzZXJuYW1lLmxlbmd0aCA8IFVTRVJfVVNFUk5BTUVfTUlOKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2UgaWYgKHVzZXJuYW1lLmxlbmd0aCA+IFVTRVJfVVNFUk5BTUVfTUFYKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2UgaWYgKCF1c2VybmFtZS5tYXRjaChVU0VSX1VTRVJOQU1FX1JFR0VYKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4iXX0=