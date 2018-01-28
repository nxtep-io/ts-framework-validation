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
const params_1 = require("./params");
exports.Params = params_1.default;
const ParamValidatorMiddleware_1 = require("./ParamValidatorMiddleware");
exports.ParamValidatorMiddleware = ParamValidatorMiddleware_1.default;
class Validate {
    /**
     * Runs a single params validation.
     *
     * @param param The value to be validated
     * @param validator The ParamValidator instance
     */
    static param(param, validator) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield validator(param);
        });
    }
    /**
     * Runs a map of params validations.
     *
     * @param param The value to be validated
     * @param validator The ParamValidator instance
     */
    static map(params, validators) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = {};
            const keys = Object.keys(validators);
            yield Promise.all(keys.map((key) => __awaiter(this, void 0, void 0, function* () {
                response[key] = yield validators[key](params[key]);
            })));
            return response;
        });
    }
    /**
     * Runs and enforces all params validations.
     *
     * @param param The value to be validated
     * @param validator The ParamValidator instance
     */
    static all(params, validators) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.map(params, validators);
            const keys = Object.keys(result);
            return keys.reduce((aggr, next) => (aggr && result[next]), true);
        });
    }
}
exports.default = Validate;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHFDQUE4QjtBQUlxQixpQkFKNUMsZ0JBQU0sQ0FJNEM7QUFGekQseUVBQWlGO0FBRXhELG1DQUZMLGtDQUF3QixDQUVLO0FBS2pEO0lBRUU7Ozs7O09BS0c7SUFDSSxNQUFNLENBQU8sS0FBSyxDQUFDLEtBQVUsRUFBRSxTQUF5Qjs7WUFDN0QsTUFBTSxDQUFDLE1BQU0sU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7S0FBQTtJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFPLEdBQUcsQ0FBQyxNQUF5QixFQUFFLFVBQTZCOztZQUM5RSxNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDcEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUVyQyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFPLEdBQVcsRUFBRSxFQUFFO2dCQUMvQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckQsQ0FBQyxDQUFBLENBQUMsQ0FBUSxDQUFDO1lBRVgsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNsQixDQUFDO0tBQUE7SUFFRDs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBTyxHQUFHLENBQUMsTUFBeUIsRUFBRSxVQUE2Qjs7WUFDOUUsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNsRCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBYSxFQUFFLElBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEYsQ0FBQztLQUFBO0NBQ0Y7QUF4Q0QsMkJBd0NDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yLCBIdHRwQ29kZSB9IGZyb20gJ3RzLWZyYW1ld29yayc7XG5pbXBvcnQgUGFyYW1zIGZyb20gJy4vcGFyYW1zJztcbmltcG9ydCB7IFBhcmFtVmFsaWRhdG9yLCBQYXJhbVZhbGlkYXRvck1hcCB9IGZyb20gJy4vUGFyYW1WYWxpZGF0b3InO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBQYXJhbVZhbGlkYXRvck1pZGRsZXdhcmUgfSBmcm9tICcuL1BhcmFtVmFsaWRhdG9yTWlkZGxld2FyZSc7XG5cbmV4cG9ydCB7IFBhcmFtVmFsaWRhdG9yLCBQYXJhbVZhbGlkYXRvck1pZGRsZXdhcmUsIFBhcmFtcyB9O1xuXG5leHBvcnQgdHlwZSBWYWxpZGF0b3JJbnB1dE1hcCA9IHsgW2tleTogc3RyaW5nXTogYW55IH07XG5leHBvcnQgdHlwZSBWYWxpZGF0b3JSZXN1bHRNYXAgPSB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdGUge1xuXG4gIC8qKlxuICAgKiBSdW5zIGEgc2luZ2xlIHBhcmFtcyB2YWxpZGF0aW9uLlxuICAgKiBcbiAgICogQHBhcmFtIHBhcmFtIFRoZSB2YWx1ZSB0byBiZSB2YWxpZGF0ZWRcbiAgICogQHBhcmFtIHZhbGlkYXRvciBUaGUgUGFyYW1WYWxpZGF0b3IgaW5zdGFuY2VcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgcGFyYW0ocGFyYW06IGFueSwgdmFsaWRhdG9yOiBQYXJhbVZhbGlkYXRvcikge1xuICAgIHJldHVybiBhd2FpdCB2YWxpZGF0b3IocGFyYW0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1bnMgYSBtYXAgb2YgcGFyYW1zIHZhbGlkYXRpb25zLlxuICAgKiBcbiAgICogQHBhcmFtIHBhcmFtIFRoZSB2YWx1ZSB0byBiZSB2YWxpZGF0ZWRcbiAgICogQHBhcmFtIHZhbGlkYXRvciBUaGUgUGFyYW1WYWxpZGF0b3IgaW5zdGFuY2VcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgbWFwKHBhcmFtczogVmFsaWRhdG9ySW5wdXRNYXAsIHZhbGlkYXRvcnM6IFBhcmFtVmFsaWRhdG9yTWFwKTogUHJvbWlzZTxWYWxpZGF0b3JSZXN1bHRNYXA+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IHt9O1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWxpZGF0b3JzKTtcblxuICAgIGF3YWl0IFByb21pc2UuYWxsKGtleXMubWFwKGFzeW5jIChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgcmVzcG9uc2Vba2V5XSA9IGF3YWl0IHZhbGlkYXRvcnNba2V5XShwYXJhbXNba2V5XSk7XG4gICAgfSkpIGFzIGFueTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW5zIGFuZCBlbmZvcmNlcyBhbGwgcGFyYW1zIHZhbGlkYXRpb25zLlxuICAgKiBcbiAgICogQHBhcmFtIHBhcmFtIFRoZSB2YWx1ZSB0byBiZSB2YWxpZGF0ZWRcbiAgICogQHBhcmFtIHZhbGlkYXRvciBUaGUgUGFyYW1WYWxpZGF0b3IgaW5zdGFuY2VcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgYWxsKHBhcmFtczogVmFsaWRhdG9ySW5wdXRNYXAsIHZhbGlkYXRvcnM6IFBhcmFtVmFsaWRhdG9yTWFwKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tYXAocGFyYW1zLCB2YWxpZGF0b3JzKTtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmVzdWx0KTtcbiAgICByZXR1cm4ga2V5cy5yZWR1Y2UoKGFnZ3I6IGJvb2xlYW4sIG5leHQ6IHN0cmluZykgPT4gKGFnZ3IgJiYgcmVzdWx0W25leHRdKSwgdHJ1ZSk7XG4gIH1cbn1cbiJdfQ==