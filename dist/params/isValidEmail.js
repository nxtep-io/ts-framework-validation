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
 * TODO: Move to a config file.
 *
 * Reference: http://emailregex.com
 */
/* tslint:disable-next-line:max-line-length */
const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/**
 * Checks if param is a valid user email.
 *
 * @param {String} email The param to be validated
 */
exports.default = (email = '') => __awaiter(this, void 0, void 0, function* () {
    if (email && email.length && email.match(EMAIL_REGEX)) {
        return true;
    }
    return false;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNWYWxpZEVtYWlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3BhcmFtcy9pc1ZhbGlkRW1haWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7O0dBSUc7QUFDSCw4Q0FBOEM7QUFDOUMsTUFBTSxXQUFXLEdBQUcsd0pBQXdKLENBQUM7QUFFN0s7Ozs7R0FJRztBQUNILGtCQUFlLENBQU8sUUFBZ0IsRUFBRSxFQUFvQixFQUFFO0lBQzVELElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsRUFBRTtRQUNyRCxPQUFPLElBQUksQ0FBQztLQUNiO0lBQ0QsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDLENBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogVE9ETzogTW92ZSB0byBhIGNvbmZpZyBmaWxlLlxuICpcbiAqIFJlZmVyZW5jZTogaHR0cDovL2VtYWlscmVnZXguY29tXG4gKi9cbi8qIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTptYXgtbGluZS1sZW5ndGggKi9cbmNvbnN0IEVNQUlMX1JFR0VYID0gL14oKFtePD4oKVxcW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG5cbi8qKlxuICogQ2hlY2tzIGlmIHBhcmFtIGlzIGEgdmFsaWQgdXNlciBlbWFpbC5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gZW1haWwgVGhlIHBhcmFtIHRvIGJlIHZhbGlkYXRlZFxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoZW1haWw6IHN0cmluZyA9ICcnKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gIGlmIChlbWFpbCAmJiBlbWFpbC5sZW5ndGggJiYgZW1haWwubWF0Y2goRU1BSUxfUkVHRVgpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbiJdfQ==