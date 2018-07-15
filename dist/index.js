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
const ParamComposition = require("./ParamComposition");
exports.ParamComposition = ParamComposition;
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
     * Gets an composition builder for generating an Express middleware.
     */
    static compose(params) {
        return ParamComposition.wrapGroup(params);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9saWIvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUNBLHFDQUE4QjtBQUt1QyxpQkFMOUQsZ0JBQU0sQ0FLOEQ7QUFKM0UsdURBQXVEO0FBSUosNENBQWdCO0FBRm5FLHlFQUFpRjtBQUV4RCxtQ0FGTCxrQ0FBd0IsQ0FFSztBQUtqRDtJQUVFOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFPLEtBQUssQ0FBQyxLQUFVLEVBQUUsU0FBeUI7O1lBQzdELE1BQU0sQ0FBQyxNQUFNLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDO0tBQUE7SUFFRDs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBQyxVQUFVLENBQUMsS0FBYSxFQUFFLFNBQXlCO1FBQy9ELE1BQU0sQ0FBQyxDQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEVBQUUsZ0RBQUMsTUFBTSxDQUFOLElBQUksa0NBQXdCLENBQUMsS0FBSyxFQUFFLFNBQVMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFBLEdBQUEsQ0FBQztJQUM3RyxDQUFDO0lBRUQ7O09BRUc7SUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLE1BQTJDO1FBQy9ELE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0ksTUFBTSxDQUFPLEdBQUcsQ0FBQyxNQUF5QixFQUFFLFVBQTZCOztZQUM5RSxNQUFNLFFBQVEsR0FBRyxFQUFFLENBQUM7WUFDcEIsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUVyQyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFPLEdBQVcsRUFBRSxFQUFFO2dCQUMvQyxRQUFRLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDckQsQ0FBQyxDQUFBLENBQUMsQ0FBUSxDQUFDO1lBRVgsTUFBTSxDQUFDLFFBQVEsQ0FBQztRQUNsQixDQUFDO0tBQUE7SUFFRDs7Ozs7T0FLRztJQUNJLE1BQU0sQ0FBTyxHQUFHLENBQUMsTUFBeUIsRUFBRSxVQUE2Qjs7WUFDOUUsTUFBTSxNQUFNLEdBQUcsTUFBTSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNsRCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBYSxFQUFFLElBQVksRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDcEYsQ0FBQztLQUFBO0NBQ0Y7QUF6REQsMkJBeURDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEVycm9yLCBIdHRwQ29kZSB9IGZyb20gJ3RzLWZyYW1ld29yayc7XG5pbXBvcnQgUGFyYW1zIGZyb20gJy4vcGFyYW1zJztcbmltcG9ydCAqIGFzIFBhcmFtQ29tcG9zaXRpb24gZnJvbSAnLi9QYXJhbUNvbXBvc2l0aW9uJztcbmltcG9ydCB7IFBhcmFtVmFsaWRhdG9yLCBQYXJhbVZhbGlkYXRvck1hcCB9IGZyb20gJy4vUGFyYW1WYWxpZGF0b3InO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBQYXJhbVZhbGlkYXRvck1pZGRsZXdhcmUgfSBmcm9tICcuL1BhcmFtVmFsaWRhdG9yTWlkZGxld2FyZSc7XG5cbmV4cG9ydCB7IFBhcmFtVmFsaWRhdG9yLCBQYXJhbVZhbGlkYXRvck1pZGRsZXdhcmUsIFBhcmFtQ29tcG9zaXRpb24sIFBhcmFtcyB9O1xuXG5leHBvcnQgdHlwZSBWYWxpZGF0b3JJbnB1dE1hcCA9IHsgW2tleTogc3RyaW5nXTogYW55IH07XG5leHBvcnQgdHlwZSBWYWxpZGF0b3JSZXN1bHRNYXAgPSB7IFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfTtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmFsaWRhdGUge1xuXG4gIC8qKlxuICAgKiBSdW5zIGEgc2luZ2xlIHBhcmFtcyB2YWxpZGF0aW9uLlxuICAgKiBcbiAgICogQHBhcmFtIHBhcmFtIFRoZSB2YWx1ZSB0byBiZSB2YWxpZGF0ZWRcbiAgICogQHBhcmFtIHZhbGlkYXRvciBUaGUgUGFyYW1WYWxpZGF0b3IgaW5zdGFuY2VcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgYXN5bmMgcGFyYW0ocGFyYW06IGFueSwgdmFsaWRhdG9yOiBQYXJhbVZhbGlkYXRvcikge1xuICAgIHJldHVybiBhd2FpdCB2YWxpZGF0b3IocGFyYW0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgYW4gRXhwcmVzcyBtaWRkbGV3YXJlIGZvciBhIHBhcmFtIHZhbGlkYXRpb24uXG4gICAqIFxuICAgKiBAcGFyYW0gcGFyYW0gVGhlIHBhcmFtIG5hbWUgdG8gYmUgdmFsaWRhdGVkXG4gICAqIEBwYXJhbSB2YWxpZGF0b3IgVGhlIFBhcmFtVmFsaWRhdG9yIGluc3RhbmNlXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIG1pZGRsZXdhcmUocGFyYW06IHN0cmluZywgdmFsaWRhdG9yOiBQYXJhbVZhbGlkYXRvcikge1xuICAgIHJldHVybiBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IG5ldyBQYXJhbVZhbGlkYXRvck1pZGRsZXdhcmUocGFyYW0sIHZhbGlkYXRvcikubWlkZGxld2FyZShyZXEsIHJlcywgbmV4dCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0cyBhbiBjb21wb3NpdGlvbiBidWlsZGVyIGZvciBnZW5lcmF0aW5nIGFuIEV4cHJlc3MgbWlkZGxld2FyZS5cbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgY29tcG9zZShwYXJhbXM6IHsgW2xhYmVsOiBzdHJpbmddOiBQYXJhbVZhbGlkYXRvciB9KSB7XG4gICAgcmV0dXJuIFBhcmFtQ29tcG9zaXRpb24ud3JhcEdyb3VwKHBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogUnVucyBhIG1hcCBvZiBwYXJhbXMgdmFsaWRhdGlvbnMuXG4gICAqIFxuICAgKiBAcGFyYW0gcGFyYW0gVGhlIHZhbHVlIHRvIGJlIHZhbGlkYXRlZFxuICAgKiBAcGFyYW0gdmFsaWRhdG9yIFRoZSBQYXJhbVZhbGlkYXRvciBpbnN0YW5jZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhc3luYyBtYXAocGFyYW1zOiBWYWxpZGF0b3JJbnB1dE1hcCwgdmFsaWRhdG9yczogUGFyYW1WYWxpZGF0b3JNYXApOiBQcm9taXNlPFZhbGlkYXRvclJlc3VsdE1hcD4ge1xuICAgIGNvbnN0IHJlc3BvbnNlID0ge307XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHZhbGlkYXRvcnMpO1xuXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoa2V5cy5tYXAoYXN5bmMgKGtleTogc3RyaW5nKSA9PiB7XG4gICAgICByZXNwb25zZVtrZXldID0gYXdhaXQgdmFsaWRhdG9yc1trZXldKHBhcmFtc1trZXldKTtcbiAgICB9KSkgYXMgYW55O1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgLyoqXG4gICAqIFJ1bnMgYW5kIGVuZm9yY2VzIGFsbCBwYXJhbXMgdmFsaWRhdGlvbnMuXG4gICAqIFxuICAgKiBAcGFyYW0gcGFyYW0gVGhlIHZhbHVlIHRvIGJlIHZhbGlkYXRlZFxuICAgKiBAcGFyYW0gdmFsaWRhdG9yIFRoZSBQYXJhbVZhbGlkYXRvciBpbnN0YW5jZVxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBhc3luYyBhbGwocGFyYW1zOiBWYWxpZGF0b3JJbnB1dE1hcCwgdmFsaWRhdG9yczogUGFyYW1WYWxpZGF0b3JNYXApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLm1hcChwYXJhbXMsIHZhbGlkYXRvcnMpO1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyZXN1bHQpO1xuICAgIHJldHVybiBrZXlzLnJlZHVjZSgoYWdncjogYm9vbGVhbiwgbmV4dDogc3RyaW5nKSA9PiAoYWdnciAmJiByZXN1bHRbbmV4dF0pLCB0cnVlKTtcbiAgfVxufVxuIl19