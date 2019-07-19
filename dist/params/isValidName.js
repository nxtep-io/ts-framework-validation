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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNWYWxpZE5hbWUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9saWIvcGFyYW1zL2lzVmFsaWROYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxpQ0FBaUM7QUFDakMsTUFBTSxhQUFhLEdBQUcsQ0FBQyxDQUFDO0FBRXhCOzs7O0dBSUc7QUFDSCxrQkFBZSxDQUFPLE9BQWUsRUFBRSxFQUFvQixFQUFFO0lBQzNELElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLElBQUksYUFBYSxFQUFFO1FBQ3hDLE9BQU8sSUFBSSxDQUFDO0tBQ2I7QUFDSCxDQUFDLENBQUEsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRPRE86IFB1dCB0aGlzIGluIGEgcHJlZnMgZmlsZVxuY29uc3QgVVNFUl9OQU1FX01JTiA9IDI7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHBhcmFtIGlzIGEgdmFsaWQgdXNlciBuYW1lLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIFRoZSBwYXJhbSB0byBiZSB2YWxpZGF0ZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKG5hbWU6IHN0cmluZyA9ICcnKTogUHJvbWlzZTxib29sZWFuPiA9PiB7XG4gIGlmIChuYW1lICYmIG5hbWUubGVuZ3RoID49IFVTRVJfTkFNRV9NSU4pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiJdfQ==