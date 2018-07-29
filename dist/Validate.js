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
const ParamComposition = require("./ParamComposition");
const ParamValidatorMiddleware_1 = require("./ParamValidatorMiddleware");
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
     * Gets a parallel composition builder for generating an Express middleware.
     * The middleware will run all validator in parallel and throw a list of invalid fields.
     */
    static parallelCompose(params) {
        return ParamComposition.asyncWrapGroup(params);
    }
    /**
     * Gets a serial composition builder for generating an Express middleware.
     * The middleware will run all validator in series and throw the first invalid field.
     */
    static serialCompose(params) {
        return ParamComposition.syncWrapGroup(params);
    }
    /**
     * Gets an one of composition builder for generating an Express middleware.
     * The middleware will run all validator in parallel and throw the invalidMessage if all validations fail.
     */
    static oneOfCompose(params, invalidMessage) {
        return ParamComposition.wrapOrGroup(params, invalidMessage);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvVmFsaWRhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHVEQUF1RDtBQUV2RCx5RUFBaUY7QUFLakY7SUFFRTs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBTyxLQUFLLENBQUMsS0FBVSxFQUFFLFNBQXlCOztZQUM3RCxNQUFNLENBQUMsTUFBTSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsQ0FBQztLQUFBO0lBRUQ7Ozs7O09BS0c7SUFDSSxNQUFNLENBQUMsVUFBVSxDQUFDLEtBQWEsRUFBRSxTQUF5QjtRQUMvRCxNQUFNLENBQUMsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFLGdEQUFDLE1BQU0sQ0FBTixJQUFJLGtDQUF3QixDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQSxHQUFBLENBQUM7SUFDN0csQ0FBQztJQUVEOzs7T0FHRztJQUNJLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBMkM7UUFDdkUsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ksTUFBTSxDQUFDLGFBQWEsQ0FBQyxNQUEyQztRQUNyRSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRDs7O09BR0c7SUFDSSxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQTJDLEVBQUUsY0FBc0I7UUFDNUYsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFPLEdBQUcsQ0FBQyxNQUF5QixFQUFFLFVBQTZCOztZQUM5RSxNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDcEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUVyQyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFPLEdBQVcsRUFBRSxFQUFFO2dCQUMvQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckQsQ0FBQyxDQUFBLENBQUMsQ0FBUSxDQUFDO1lBRVgsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNsQixDQUFDO0tBQUE7SUFFRDs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBTyxHQUFHLENBQUMsTUFBeUIsRUFBRSxVQUE2Qjs7WUFDOUUsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNsRCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBYSxFQUFFLElBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEYsQ0FBQztLQUFBO0NBQ0Y7QUExRUQsMkJBMEVDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgKiBhcyBQYXJhbUNvbXBvc2l0aW9uIGZyb20gJy4vUGFyYW1Db21wb3NpdGlvbic7XG5pbXBvcnQgeyBQYXJhbVZhbGlkYXRvciwgUGFyYW1WYWxpZGF0b3JNYXAgfSBmcm9tICcuL1BhcmFtVmFsaWRhdG9yJztcbmltcG9ydCB7IGRlZmF1bHQgYXMgUGFyYW1WYWxpZGF0b3JNaWRkbGV3YXJlIH0gZnJvbSAnLi9QYXJhbVZhbGlkYXRvck1pZGRsZXdhcmUnO1xuXG5leHBvcnQgdHlwZSBWYWxpZGF0b3JJbnB1dE1hcCA9IHsgW2tleTogc3RyaW5nXTogYW55IH07XG5leHBvcnQgdHlwZSBWYWxpZGF0b3JSZXN1bHRNYXAgPSB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdGUge1xuXG4gIC8qKlxuICAgKiBSdW5zIGEgc2luZ2xlIHBhcmFtcyB2YWxpZGF0aW9uLlxuICAgKiBcbiAgICogQHBhcmFtIHBhcmFtIFRoZSB2YWx1ZSB0byBiZSB2YWxpZGF0ZWRcbiAgICogQHBhcmFtIHZhbGlkYXRvciBUaGUgUGFyYW1WYWxpZGF0b3IgaW5zdGFuY2VcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgcGFyYW0ocGFyYW06IGFueSwgdmFsaWRhdG9yOiBQYXJhbVZhbGlkYXRvcikge1xuICAgIHJldHVybiBhd2FpdCB2YWxpZGF0b3IocGFyYW0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYW4gRXhwcmVzcyBtaWRkbGV3YXJlIGZvciBhIHBhcmFtIHZhbGlkYXRpb24uXG4gICAqIFxuICAgKiBAcGFyYW0gcGFyYW0gVGhlIHBhcmFtIG5hbWUgdG8gYmUgdmFsaWRhdGVkXG4gICAqIEBwYXJhbSB2YWxpZGF0b3IgVGhlIFBhcmFtVmFsaWRhdG9yIGluc3RhbmNlXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG1pZGRsZXdhcmUocGFyYW06IHN0cmluZywgdmFsaWRhdG9yOiBQYXJhbVZhbGlkYXRvcikge1xuICAgIHJldHVybiBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IG5ldyBQYXJhbVZhbGlkYXRvck1pZGRsZXdhcmUocGFyYW0sIHZhbGlkYXRvcikubWlkZGxld2FyZShyZXEsIHJlcywgbmV4dCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIHBhcmFsbGVsIGNvbXBvc2l0aW9uIGJ1aWxkZXIgZm9yIGdlbmVyYXRpbmcgYW4gRXhwcmVzcyBtaWRkbGV3YXJlLiAgXG4gICAqIFRoZSBtaWRkbGV3YXJlIHdpbGwgcnVuIGFsbCB2YWxpZGF0b3IgaW4gcGFyYWxsZWwgYW5kIHRocm93IGEgbGlzdCBvZiBpbnZhbGlkIGZpZWxkcy5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgcGFyYWxsZWxDb21wb3NlKHBhcmFtczogeyBbbGFiZWw6IHN0cmluZ106IFBhcmFtVmFsaWRhdG9yIH0pIHtcbiAgICByZXR1cm4gUGFyYW1Db21wb3NpdGlvbi5hc3luY1dyYXBHcm91cChwYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYSBzZXJpYWwgY29tcG9zaXRpb24gYnVpbGRlciBmb3IgZ2VuZXJhdGluZyBhbiBFeHByZXNzIG1pZGRsZXdhcmUuICBcbiAgICogVGhlIG1pZGRsZXdhcmUgd2lsbCBydW4gYWxsIHZhbGlkYXRvciBpbiBzZXJpZXMgYW5kIHRocm93IHRoZSBmaXJzdCBpbnZhbGlkIGZpZWxkLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBzZXJpYWxDb21wb3NlKHBhcmFtczogeyBbbGFiZWw6IHN0cmluZ106IFBhcmFtVmFsaWRhdG9yIH0pIHtcbiAgICByZXR1cm4gUGFyYW1Db21wb3NpdGlvbi5zeW5jV3JhcEdyb3VwKHBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhbiBvbmUgb2YgY29tcG9zaXRpb24gYnVpbGRlciBmb3IgZ2VuZXJhdGluZyBhbiBFeHByZXNzIG1pZGRsZXdhcmUuICBcbiAgICogVGhlIG1pZGRsZXdhcmUgd2lsbCBydW4gYWxsIHZhbGlkYXRvciBpbiBwYXJhbGxlbCBhbmQgdGhyb3cgdGhlIGludmFsaWRNZXNzYWdlIGlmIGFsbCB2YWxpZGF0aW9ucyBmYWlsLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBvbmVPZkNvbXBvc2UocGFyYW1zOiB7IFtsYWJlbDogc3RyaW5nXTogUGFyYW1WYWxpZGF0b3IgfSwgaW52YWxpZE1lc3NhZ2U6IHN0cmluZykge1xuICAgIHJldHVybiBQYXJhbUNvbXBvc2l0aW9uLndyYXBPckdyb3VwKHBhcmFtcywgaW52YWxpZE1lc3NhZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1bnMgYSBtYXAgb2YgcGFyYW1zIHZhbGlkYXRpb25zLlxuICAgKiBcbiAgICogQHBhcmFtIHBhcmFtIFRoZSB2YWx1ZSB0byBiZSB2YWxpZGF0ZWRcbiAgICogQHBhcmFtIHZhbGlkYXRvciBUaGUgUGFyYW1WYWxpZGF0b3IgaW5zdGFuY2VcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgbWFwKHBhcmFtczogVmFsaWRhdG9ySW5wdXRNYXAsIHZhbGlkYXRvcnM6IFBhcmFtVmFsaWRhdG9yTWFwKTogUHJvbWlzZTxWYWxpZGF0b3JSZXN1bHRNYXA+IHtcbiAgICBjb25zdCByZXNwb25zZSA9IHt9O1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyh2YWxpZGF0b3JzKTtcblxuICAgIGF3YWl0IFByb21pc2UuYWxsKGtleXMubWFwKGFzeW5jIChrZXk6IHN0cmluZykgPT4ge1xuICAgICAgcmVzcG9uc2Vba2V5XSA9IGF3YWl0IHZhbGlkYXRvcnNba2V5XShwYXJhbXNba2V5XSk7XG4gICAgfSkpIGFzIGFueTtcblxuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSdW5zIGFuZCBlbmZvcmNlcyBhbGwgcGFyYW1zIHZhbGlkYXRpb25zLlxuICAgKiBcbiAgICogQHBhcmFtIHBhcmFtIFRoZSB2YWx1ZSB0byBiZSB2YWxpZGF0ZWRcbiAgICogQHBhcmFtIHZhbGlkYXRvciBUaGUgUGFyYW1WYWxpZGF0b3IgaW5zdGFuY2VcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgYWxsKHBhcmFtczogVmFsaWRhdG9ySW5wdXRNYXAsIHZhbGlkYXRvcnM6IFBhcmFtVmFsaWRhdG9yTWFwKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5tYXAocGFyYW1zLCB2YWxpZGF0b3JzKTtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmVzdWx0KTtcbiAgICByZXR1cm4ga2V5cy5yZWR1Y2UoKGFnZ3I6IGJvb2xlYW4sIG5leHQ6IHN0cmluZykgPT4gKGFnZ3IgJiYgcmVzdWx0W25leHRdKSwgdHJ1ZSk7XG4gIH1cbn1cbiJdfQ==