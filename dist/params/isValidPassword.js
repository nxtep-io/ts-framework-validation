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
 * TODO: Move to a config file
 */
const PASSWORD_MIN = 8;
/**
 * TODO: Move to a config file
 */
const PASSWORD_MAX = 36;
/**
 * Checks if param is a valid user password.
 *
 * @param {String} password The param to be validated
 */
exports.default = (password = '') => __awaiter(this, void 0, void 0, function* () {
    if (password && password.length >= PASSWORD_MIN && password.length <= PASSWORD_MAX) {
        return true;
    }
    return false;
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNWYWxpZFBhc3N3b3JkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vbGliL3BhcmFtcy9pc1ZhbGlkUGFzc3dvcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gsTUFBTSxZQUFZLEdBQUcsQ0FBQyxDQUFDO0FBRXZCOztHQUVHO0FBQ0gsTUFBTSxZQUFZLEdBQUcsRUFBRSxDQUFDO0FBRXhCOzs7O0dBSUc7QUFDSCxrQkFBZSxDQUFPLFdBQW1CLEVBQUUsRUFBb0IsRUFBRTtJQUMvRCxFQUFFLENBQUMsQ0FBQyxRQUFRLElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxZQUFZLElBQUksUUFBUSxDQUFDLE1BQU0sSUFBSSxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ25GLE1BQU0sQ0FBQyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBQ0QsTUFBTSxDQUFDLEtBQUssQ0FBQztBQUNmLENBQUMsQ0FBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBUT0RPOiBNb3ZlIHRvIGEgY29uZmlnIGZpbGVcbiAqL1xuY29uc3QgUEFTU1dPUkRfTUlOID0gODtcblxuLyoqXG4gKiBUT0RPOiBNb3ZlIHRvIGEgY29uZmlnIGZpbGVcbiAqL1xuY29uc3QgUEFTU1dPUkRfTUFYID0gMzY7XG5cbi8qKlxuICogQ2hlY2tzIGlmIHBhcmFtIGlzIGEgdmFsaWQgdXNlciBwYXNzd29yZC5cbiAqIFxuICogQHBhcmFtIHtTdHJpbmd9IHBhc3N3b3JkIFRoZSBwYXJhbSB0byBiZSB2YWxpZGF0ZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHBhc3N3b3JkOiBzdHJpbmcgPSAnJyk6IFByb21pc2U8Qm9vbGVhbj4gPT4ge1xuICBpZiAocGFzc3dvcmQgJiYgcGFzc3dvcmQubGVuZ3RoID49IFBBU1NXT1JEX01JTiAmJiBwYXNzd29yZC5sZW5ndGggPD0gUEFTU1dPUkRfTUFYKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcbiJdfQ==