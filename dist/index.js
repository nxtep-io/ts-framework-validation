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
     * Gets an Express middleware for a param validation.
     *
     * @param param The param name to be validated
     * @param validator The ParamValidator instance
     */
    static middleware(param, validator) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () { return new ParamValidatorMiddleware_1.default(param, validator).middleware(req, res, next); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHFDQUE4QjtBQUlxQixpQkFKNUMsZ0JBQU0sQ0FJNEM7QUFGekQseUVBQWlGO0FBRXhELG1DQUZMLGtDQUF3QixDQUVLO0FBS2pEO0lBRUU7Ozs7O09BS0c7SUFDSSxNQUFNLENBQU8sS0FBSyxDQUFDLEtBQVUsRUFBRSxTQUF5Qjs7WUFDN0QsTUFBTSxDQUFDLE1BQU0sU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7S0FBQTtJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFhLEVBQUUsU0FBeUI7UUFDL0QsTUFBTSxDQUFDLENBQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsRUFBRSxnREFBQyxNQUFNLENBQU4sSUFBSSxrQ0FBd0IsQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUEsR0FBQSxDQUFDO0lBQzdHLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBTyxHQUFHLENBQUMsTUFBeUIsRUFBRSxVQUE2Qjs7WUFDOUUsTUFBTSxRQUFRLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFFckMsTUFBTSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBTyxHQUFXLEVBQUUsRUFBRTtnQkFDL0MsUUFBUSxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3JELENBQUMsQ0FBQSxDQUFDLENBQVEsQ0FBQztZQUVYLE1BQU0sQ0FBQyxRQUFRLENBQUM7UUFDbEIsQ0FBQztLQUFBO0lBRUQ7Ozs7O09BS0c7SUFDSSxNQUFNLENBQU8sR0FBRyxDQUFDLE1BQXlCLEVBQUUsVUFBNkI7O1lBQzlFLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDbEQsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQWEsRUFBRSxJQUFZLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3BGLENBQUM7S0FBQTtDQUNGO0FBbERELDJCQWtEQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvciwgSHR0cENvZGUgfSBmcm9tICd0cy1mcmFtZXdvcmsnO1xuaW1wb3J0IFBhcmFtcyBmcm9tICcuL3BhcmFtcyc7XG5pbXBvcnQgeyBQYXJhbVZhbGlkYXRvciwgUGFyYW1WYWxpZGF0b3JNYXAgfSBmcm9tICcuL1BhcmFtVmFsaWRhdG9yJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgUGFyYW1WYWxpZGF0b3JNaWRkbGV3YXJlIH0gZnJvbSAnLi9QYXJhbVZhbGlkYXRvck1pZGRsZXdhcmUnO1xuXG5leHBvcnQgeyBQYXJhbVZhbGlkYXRvciwgUGFyYW1WYWxpZGF0b3JNaWRkbGV3YXJlLCBQYXJhbXMgfTtcblxuZXhwb3J0IHR5cGUgVmFsaWRhdG9ySW5wdXRNYXAgPSB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuZXhwb3J0IHR5cGUgVmFsaWRhdG9yUmVzdWx0TWFwID0geyBba2V5OiBzdHJpbmddOiBib29sZWFuIH07XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbGlkYXRlIHtcblxuICAvKipcbiAgICogUnVucyBhIHNpbmdsZSBwYXJhbXMgdmFsaWRhdGlvbi5cbiAgICogXG4gICAqIEBwYXJhbSBwYXJhbSBUaGUgdmFsdWUgdG8gYmUgdmFsaWRhdGVkXG4gICAqIEBwYXJhbSB2YWxpZGF0b3IgVGhlIFBhcmFtVmFsaWRhdG9yIGluc3RhbmNlXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFzeW5jIHBhcmFtKHBhcmFtOiBhbnksIHZhbGlkYXRvcjogUGFyYW1WYWxpZGF0b3IpIHtcbiAgICByZXR1cm4gYXdhaXQgdmFsaWRhdG9yKHBhcmFtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFuIEV4cHJlc3MgbWlkZGxld2FyZSBmb3IgYSBwYXJhbSB2YWxpZGF0aW9uLlxuICAgKiBcbiAgICogQHBhcmFtIHBhcmFtIFRoZSBwYXJhbSBuYW1lIHRvIGJlIHZhbGlkYXRlZFxuICAgKiBAcGFyYW0gdmFsaWRhdG9yIFRoZSBQYXJhbVZhbGlkYXRvciBpbnN0YW5jZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBtaWRkbGV3YXJlKHBhcmFtOiBzdHJpbmcsIHZhbGlkYXRvcjogUGFyYW1WYWxpZGF0b3IpIHtcbiAgICByZXR1cm4gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiBuZXcgUGFyYW1WYWxpZGF0b3JNaWRkbGV3YXJlKHBhcmFtLCB2YWxpZGF0b3IpLm1pZGRsZXdhcmUocmVxLCByZXMsIG5leHQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1bnMgYSBtYXAgb2YgcGFyYW1zIHZhbGlkYXRpb25zLlxuICAgKiBcbiAgICogQHBhcmFtIHBhcmFtIFRoZSB2YWx1ZSB0byBiZSB2YWxpZGF0ZWRcbiAgICogQHBhcmFtIHZhbGlkYXRvciBUaGUgUGFyYW1WYWxpZGF0b3IgaW5zdGFuY2VcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgbWFwKHBhcmFtczogVmFsaWRhdG9ySW5wdXRNYXAsIHZhbGlkYXRvcnM6IFBhcmFtVmFsaWRhdG9yTWFwKTogUHJvbWlzZTxWYWxpZGF0b3JSZXN1bHRNYXA+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IHt9O1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWxpZGF0b3JzKTtcblxuICAgIGF3YWl0IFByb21pc2UuYWxsKGtleXMubWFwKGFzeW5jIChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgcmVzcG9uc2Vba2V5XSA9IGF3YWl0IHZhbGlkYXRvcnNba2V5XShwYXJhbXNba2V5XSk7XG4gICAgfSkpIGFzIGFueTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW5zIGFuZCBlbmZvcmNlcyBhbGwgcGFyYW1zIHZhbGlkYXRpb25zLlxuICAgKiBcbiAgICogQHBhcmFtIHBhcmFtIFRoZSB2YWx1ZSB0byBiZSB2YWxpZGF0ZWRcbiAgICogQHBhcmFtIHZhbGlkYXRvciBUaGUgUGFyYW1WYWxpZGF0b3IgaW5zdGFuY2VcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgYWxsKHBhcmFtczogVmFsaWRhdG9ySW5wdXRNYXAsIHZhbGlkYXRvcnM6IFBhcmFtVmFsaWRhdG9yTWFwKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tYXAocGFyYW1zLCB2YWxpZGF0b3JzKTtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmVzdWx0KTtcbiAgICByZXR1cm4ga2V5cy5yZWR1Y2UoKGFnZ3I6IGJvb2xlYW4sIG5leHQ6IHN0cmluZykgPT4gKGFnZ3IgJiYgcmVzdWx0W25leHRdKSwgdHJ1ZSk7XG4gIH1cbn1cbiJdfQ==