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
const USER_NAME_MIN = 2;
/**
 * Checks if param is a valid user name.
 *
 * @param {String} name The param to be validated
 */
exports.default = (name = '') => __awaiter(this, void 0, void 0, function* () {
    if (name && name.length >= USER_NAME_MIN) {
        return true;
    }
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNWYWxpZE5hbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvcGFyYW1zL2lzVmFsaWROYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpQ0FBaUM7QUFDakMsTUFBTSxhQUFhLEdBQUcsQ0FBQyxDQUFDO0FBRXhCOzs7O0dBSUc7QUFDSCxrQkFBZSxDQUFPLE9BQWUsRUFBRSxFQUFvQixFQUFFO0lBQzNELEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDekMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUNkLENBQUM7QUFDSCxDQUFDLENBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRPRE86IFB1dCB0aGlzIGluIGEgcHJlZnMgZmlsZVxuY29uc3QgVVNFUl9OQU1FX01JTiA9IDI7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHBhcmFtIGlzIGEgdmFsaWQgdXNlciBuYW1lLlxuICogXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZSBUaGUgcGFyYW0gdG8gYmUgdmFsaWRhdGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChuYW1lOiBzdHJpbmcgPSAnJyk6IFByb21pc2U8Qm9vbGVhbj4gPT4ge1xuICBpZiAobmFtZSAmJiBuYW1lLmxlbmd0aCA+PSBVU0VSX05BTUVfTUlOKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iXX0=