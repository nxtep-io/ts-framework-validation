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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmFsaWRhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvVmFsaWRhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHVEQUF1RDtBQUV2RCx5RUFBaUY7QUFLakYsTUFBcUIsUUFBUTtJQUUzQjs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBTyxLQUFLLENBQUMsS0FBVSxFQUFFLFNBQXlCOztZQUM3RCxPQUFPLE1BQU0sU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hDLENBQUM7S0FBQTtJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFDLFVBQVUsQ0FBQyxLQUFhLEVBQUUsU0FBeUI7UUFDL0QsT0FBTyxDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsZ0RBQUMsT0FBQSxJQUFJLGtDQUF3QixDQUFDLEtBQUssRUFBRSxTQUFTLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQSxHQUFBLENBQUM7SUFDN0csQ0FBQztJQUVEOzs7T0FHRztJQUNJLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBMkM7UUFDdkUsT0FBTyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBMkM7UUFDckUsT0FBTyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7T0FHRztJQUNJLE1BQU0sQ0FBQyxZQUFZLENBQUMsTUFBMkMsRUFBRSxjQUFzQjtRQUM1RixPQUFPLGdCQUFnQixDQUFDLFdBQVcsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFPLEdBQUcsQ0FBQyxNQUF5QixFQUFFLFVBQTZCOztZQUM5RSxNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDcEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUVyQyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFPLEdBQVcsRUFBRSxFQUFFO2dCQUMvQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckQsQ0FBQyxDQUFBLENBQUMsQ0FBUSxDQUFDO1lBRVgsT0FBTyxRQUFRLENBQUM7UUFDbEIsQ0FBQztLQUFBO0lBRUQ7Ozs7O09BS0c7SUFDSSxNQUFNLENBQU8sR0FBRyxDQUFDLE1BQXlCLEVBQUUsVUFBNkI7O1lBQzlFLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDbEQsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNqQyxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFhLEVBQUUsSUFBWSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNwRixDQUFDO0tBQUE7Q0FDRjtBQTFFRCwyQkEwRUMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCAqIGFzIFBhcmFtQ29tcG9zaXRpb24gZnJvbSAnLi9QYXJhbUNvbXBvc2l0aW9uJztcbmltcG9ydCB7IFBhcmFtVmFsaWRhdG9yLCBQYXJhbVZhbGlkYXRvck1hcCB9IGZyb20gJy4vUGFyYW1WYWxpZGF0b3InO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBQYXJhbVZhbGlkYXRvck1pZGRsZXdhcmUgfSBmcm9tICcuL1BhcmFtVmFsaWRhdG9yTWlkZGxld2FyZSc7XG5cbmV4cG9ydCB0eXBlIFZhbGlkYXRvcklucHV0TWFwID0geyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbmV4cG9ydCB0eXBlIFZhbGlkYXRvclJlc3VsdE1hcCA9IHsgW2tleTogc3RyaW5nXTogYm9vbGVhbiB9O1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWYWxpZGF0ZSB7XG5cbiAgLyoqXG4gICAqIFJ1bnMgYSBzaW5nbGUgcGFyYW1zIHZhbGlkYXRpb24uXG4gICAqXG4gICAqIEBwYXJhbSBwYXJhbSBUaGUgdmFsdWUgdG8gYmUgdmFsaWRhdGVkXG4gICAqIEBwYXJhbSB2YWxpZGF0b3IgVGhlIFBhcmFtVmFsaWRhdG9yIGluc3RhbmNlXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFzeW5jIHBhcmFtKHBhcmFtOiBhbnksIHZhbGlkYXRvcjogUGFyYW1WYWxpZGF0b3IpIHtcbiAgICByZXR1cm4gYXdhaXQgdmFsaWRhdG9yKHBhcmFtKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFuIEV4cHJlc3MgbWlkZGxld2FyZSBmb3IgYSBwYXJhbSB2YWxpZGF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0gcGFyYW0gVGhlIHBhcmFtIG5hbWUgdG8gYmUgdmFsaWRhdGVkXG4gICAqIEBwYXJhbSB2YWxpZGF0b3IgVGhlIFBhcmFtVmFsaWRhdG9yIGluc3RhbmNlXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG1pZGRsZXdhcmUocGFyYW06IHN0cmluZywgdmFsaWRhdG9yOiBQYXJhbVZhbGlkYXRvcikge1xuICAgIHJldHVybiBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IG5ldyBQYXJhbVZhbGlkYXRvck1pZGRsZXdhcmUocGFyYW0sIHZhbGlkYXRvcikubWlkZGxld2FyZShyZXEsIHJlcywgbmV4dCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhIHBhcmFsbGVsIGNvbXBvc2l0aW9uIGJ1aWxkZXIgZm9yIGdlbmVyYXRpbmcgYW4gRXhwcmVzcyBtaWRkbGV3YXJlLlxuICAgKiBUaGUgbWlkZGxld2FyZSB3aWxsIHJ1biBhbGwgdmFsaWRhdG9yIGluIHBhcmFsbGVsIGFuZCB0aHJvdyBhIGxpc3Qgb2YgaW52YWxpZCBmaWVsZHMuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHBhcmFsbGVsQ29tcG9zZShwYXJhbXM6IHsgW2xhYmVsOiBzdHJpbmddOiBQYXJhbVZhbGlkYXRvciB9KSB7XG4gICAgcmV0dXJuIFBhcmFtQ29tcG9zaXRpb24uYXN5bmNXcmFwR3JvdXAocGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGEgc2VyaWFsIGNvbXBvc2l0aW9uIGJ1aWxkZXIgZm9yIGdlbmVyYXRpbmcgYW4gRXhwcmVzcyBtaWRkbGV3YXJlLlxuICAgKiBUaGUgbWlkZGxld2FyZSB3aWxsIHJ1biBhbGwgdmFsaWRhdG9yIGluIHNlcmllcyBhbmQgdGhyb3cgdGhlIGZpcnN0IGludmFsaWQgZmllbGQuXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHNlcmlhbENvbXBvc2UocGFyYW1zOiB7IFtsYWJlbDogc3RyaW5nXTogUGFyYW1WYWxpZGF0b3IgfSkge1xuICAgIHJldHVybiBQYXJhbUNvbXBvc2l0aW9uLnN5bmNXcmFwR3JvdXAocGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIGFuIG9uZSBvZiBjb21wb3NpdGlvbiBidWlsZGVyIGZvciBnZW5lcmF0aW5nIGFuIEV4cHJlc3MgbWlkZGxld2FyZS5cbiAgICogVGhlIG1pZGRsZXdhcmUgd2lsbCBydW4gYWxsIHZhbGlkYXRvciBpbiBwYXJhbGxlbCBhbmQgdGhyb3cgdGhlIGludmFsaWRNZXNzYWdlIGlmIGFsbCB2YWxpZGF0aW9ucyBmYWlsLlxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBvbmVPZkNvbXBvc2UocGFyYW1zOiB7IFtsYWJlbDogc3RyaW5nXTogUGFyYW1WYWxpZGF0b3IgfSwgaW52YWxpZE1lc3NhZ2U6IHN0cmluZykge1xuICAgIHJldHVybiBQYXJhbUNvbXBvc2l0aW9uLndyYXBPckdyb3VwKHBhcmFtcywgaW52YWxpZE1lc3NhZ2UpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1bnMgYSBtYXAgb2YgcGFyYW1zIHZhbGlkYXRpb25zLlxuICAgKlxuICAgKiBAcGFyYW0gcGFyYW0gVGhlIHZhbHVlIHRvIGJlIHZhbGlkYXRlZFxuICAgKiBAcGFyYW0gdmFsaWRhdG9yIFRoZSBQYXJhbVZhbGlkYXRvciBpbnN0YW5jZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhc3luYyBtYXAocGFyYW1zOiBWYWxpZGF0b3JJbnB1dE1hcCwgdmFsaWRhdG9yczogUGFyYW1WYWxpZGF0b3JNYXApOiBQcm9taXNlPFZhbGlkYXRvclJlc3VsdE1hcD4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0ge307XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbGlkYXRvcnMpO1xuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoa2V5cy5tYXAoYXN5bmMgKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICByZXNwb25zZVtrZXldID0gYXdhaXQgdmFsaWRhdG9yc1trZXldKHBhcmFtc1trZXldKTtcbiAgICB9KSkgYXMgYW55O1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1bnMgYW5kIGVuZm9yY2VzIGFsbCBwYXJhbXMgdmFsaWRhdGlvbnMuXG4gICAqXG4gICAqIEBwYXJhbSBwYXJhbSBUaGUgdmFsdWUgdG8gYmUgdmFsaWRhdGVkXG4gICAqIEBwYXJhbSB2YWxpZGF0b3IgVGhlIFBhcmFtVmFsaWRhdG9yIGluc3RhbmNlXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIGFzeW5jIGFsbChwYXJhbXM6IFZhbGlkYXRvcklucHV0TWFwLCB2YWxpZGF0b3JzOiBQYXJhbVZhbGlkYXRvck1hcCk6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubWFwKHBhcmFtcywgdmFsaWRhdG9ycyk7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJlc3VsdCk7XG4gICAgcmV0dXJuIGtleXMucmVkdWNlKChhZ2dyOiBib29sZWFuLCBuZXh0OiBzdHJpbmcpID0+IChhZ2dyICYmIHJlc3VsdFtuZXh0XSksIHRydWUpO1xuICB9XG59XG4iXX0=