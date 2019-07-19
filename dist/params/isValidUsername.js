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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNWYWxpZFVzZXJuYW1lLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3BhcmFtcy9pc1ZhbGlkVXNlcm5hbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGlDQUFpQztBQUNqQyxNQUFNLGlCQUFpQixHQUFHLENBQUMsQ0FBQztBQUM1QixNQUFNLGlCQUFpQixHQUFHLEVBQUUsQ0FBQztBQUU3Qix3Q0FBd0M7QUFDeEMsTUFBTSxtQkFBbUIsR0FBRyxzQkFBc0IsQ0FBQztBQUVuRDs7OztHQUlHO0FBQ0gsa0JBQWUsQ0FBTyxXQUFtQixFQUFFLEVBQW9CLEVBQUU7SUFDL0QsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUU7UUFDakMsT0FBTyxLQUFLLENBQUM7S0FDZDtTQUFNLElBQUksUUFBUSxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsRUFBRTtRQUM5QyxPQUFPLEtBQUssQ0FBQztLQUNkO1NBQU0sSUFBSSxRQUFRLENBQUMsTUFBTSxHQUFHLGlCQUFpQixFQUFFO1FBQzlDLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7U0FBTSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsQ0FBQyxFQUFFO1FBQy9DLE9BQU8sS0FBSyxDQUFDO0tBQ2Q7SUFDRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMsQ0FBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gVE9ETzogUHV0IHRoaXMgaW4gYSBwcmVmcyBmaWxlXG5jb25zdCBVU0VSX1VTRVJOQU1FX01JTiA9IDM7XG5jb25zdCBVU0VSX1VTRVJOQU1FX01BWCA9IDY0O1xuXG4vLyBPbmx5IGFscGhhbnVtLCB1bmRlciwgcGx1cyBhbmQgaHlwaGVuXG5jb25zdCBVU0VSX1VTRVJOQU1FX1JFR0VYID0gL15bYS16QS1aMC05XFwrXFwtXFxfXSskLztcblxuLyoqXG4gKiBDaGVja3MgaWYgcGFyYW0gaXMgYSB2YWxpZCB1c2VyIHVzZXJuYW1lLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB1c2VybmFtZSBUaGUgcGFyYW0gdG8gYmUgdmFsaWRhdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICh1c2VybmFtZTogc3RyaW5nID0gJycpOiBQcm9taXNlPGJvb2xlYW4+ID0+IHtcbiAgaWYgKCF1c2VybmFtZSB8fCAhdXNlcm5hbWUubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2UgaWYgKHVzZXJuYW1lLmxlbmd0aCA8IFVTRVJfVVNFUk5BTUVfTUlOKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2UgaWYgKHVzZXJuYW1lLmxlbmd0aCA+IFVTRVJfVVNFUk5BTUVfTUFYKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2UgaWYgKCF1c2VybmFtZS5tYXRjaChVU0VSX1VTRVJOQU1FX1JFR0VYKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn07XG4iXX0=