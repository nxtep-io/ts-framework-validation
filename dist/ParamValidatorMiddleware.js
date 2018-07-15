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
const ts_framework_1 = require("ts-framework");
/**
 * Wraps a simple param validator into an Express middleware.
 *
 * @param {String} param The param name to be fetch using `req.param(name)`
 * @param {ParamValidator} filter The filter instance to be wrapped
 */
class ParamValidatorMiddleware {
    constructor(param, filter, options = {}) {
        this.param = param;
        this.filter = filter;
        this.options = Object.assign({ message: (param) => `Invalid field: ${param}` }, options);
    }
    /**
     * Returns the Express midleware for a Para˜`m validator.
     *
     * @param req The express request
     * @param res The express response
     * @param next The express callback to the middleware chain
     */
    middleware(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const isTSFramework = (res.error && typeof res.error === typeof (() => true));
            try {
                const result = yield this.filter(req.param(this.param));
                if (!result && isTSFramework) {
                    res.error(new ts_framework_1.HttpError(this.options.message(this.param), ts_framework_1.HttpCode.Client.BAD_REQUEST));
                }
                else if (!result) {
                    next(new ts_framework_1.HttpError(this.options.message(this.param), ts_framework_1.HttpCode.Client.BAD_REQUEST));
                }
                else {
                    next();
                }
            }
            catch (exception) {
                if (isTSFramework) {
                    // Send error using TS Framework abstraction layer
                    return res.error(ts_framework_1.HttpCode.Client.BAD_REQUEST, exception);
                }
                else {
                    // Send error using regular Express methods
                    return next(new ts_framework_1.HttpError(this.options.message(this.param), ts_framework_1.HttpCode.Client.BAD_REQUEST));
                }
            }
        });
    }
}
exports.default = ParamValidatorMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyYW1WYWxpZGF0b3JNaWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL1BhcmFtVmFsaWRhdG9yTWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0NBQW1EO0FBT25EOzs7OztHQUtHO0FBQ0g7SUFHRSxZQUFzQixLQUFhLEVBQVksTUFBc0IsRUFBRSxPQUFPLEdBQUcsRUFBRTtRQUE3RCxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVksV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDbkUsSUFBSSxDQUFDLE9BQU8sbUJBQUssT0FBTyxFQUFFLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsS0FBSyxFQUFFLElBQUssT0FBTyxDQUFFLENBQUM7SUFDdkYsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNHLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7O1lBQzdCLE1BQU0sYUFBYSxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxPQUFPLEdBQUcsQ0FBQyxLQUFLLEtBQUssT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFFOUUsSUFBSSxDQUFDO2dCQUNILE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sSUFBSSxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUM3QixHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksd0JBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsdUJBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDMUYsQ0FBQztnQkFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNuQixJQUFJLENBQUMsSUFBSSx3QkFBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSx1QkFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUNyRixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLElBQUksRUFBRSxDQUFDO2dCQUNULENBQUM7WUFDSCxDQUFDO1lBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztvQkFDbEIsa0RBQWtEO29CQUNsRCxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyx1QkFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7Z0JBQzNELENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ04sMkNBQTJDO29CQUMzQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksd0JBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsdUJBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDNUYsQ0FBQztZQUNILENBQUM7UUFDSCxDQUFDO0tBQUE7Q0FFRjtBQXJDRCwyQ0FxQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwRXJyb3IsIEh0dHBDb2RlIH0gZnJvbSAndHMtZnJhbWV3b3JrJztcbmltcG9ydCB7IFBhcmFtVmFsaWRhdG9yIH0gZnJvbSAnLi9QYXJhbVZhbGlkYXRvcic7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUGFyYW1WYWxpZGF0b3JNaWRkbGV3YXJlT3B0aW9ucyB7XG4gIG1lc3NhZ2U/OiAocGFyYW06IHN0cmluZykgPT4gc3RyaW5nO1xufVxuXG4vKipcbiAqIFdyYXBzIGEgc2ltcGxlIHBhcmFtIHZhbGlkYXRvciBpbnRvIGFuIEV4cHJlc3MgbWlkZGxld2FyZS5cbiAqIFxuICogQHBhcmFtIHtTdHJpbmd9IHBhcmFtIFRoZSBwYXJhbSBuYW1lIHRvIGJlIGZldGNoIHVzaW5nIGByZXEucGFyYW0obmFtZSlgXG4gKiBAcGFyYW0ge1BhcmFtVmFsaWRhdG9yfSBmaWx0ZXIgVGhlIGZpbHRlciBpbnN0YW5jZSB0byBiZSB3cmFwcGVkXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhcmFtVmFsaWRhdG9yTWlkZGxld2FyZSB7XG4gIG9wdGlvbnM6IFBhcmFtVmFsaWRhdG9yTWlkZGxld2FyZU9wdGlvbnM7XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHBhcmFtOiBzdHJpbmcsIHByb3RlY3RlZCBmaWx0ZXI6IFBhcmFtVmFsaWRhdG9yLCBvcHRpb25zID0ge30pIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7IG1lc3NhZ2U6IChwYXJhbTogc3RyaW5nKSA9PiBgSW52YWxpZCBmaWVsZDogJHtwYXJhbX1gLCAuLi5vcHRpb25zIH07XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgRXhwcmVzcyBtaWRsZXdhcmUgZm9yIGEgUGFyYcucYG0gdmFsaWRhdG9yLlxuICAgKiBcbiAgICogQHBhcmFtIHJlcSBUaGUgZXhwcmVzcyByZXF1ZXN0XG4gICAqIEBwYXJhbSByZXMgVGhlIGV4cHJlc3MgcmVzcG9uc2VcbiAgICogQHBhcmFtIG5leHQgVGhlIGV4cHJlc3MgY2FsbGJhY2sgdG8gdGhlIG1pZGRsZXdhcmUgY2hhaW5cbiAgICovXG4gIGFzeW5jIG1pZGRsZXdhcmUocmVxLCByZXMsIG5leHQpIHtcbiAgICBjb25zdCBpc1RTRnJhbWV3b3JrID0gKHJlcy5lcnJvciAmJiB0eXBlb2YgcmVzLmVycm9yID09PSB0eXBlb2YgKCgpID0+IHRydWUpKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmZpbHRlcihyZXEucGFyYW0odGhpcy5wYXJhbSkpO1xuICAgICAgaWYgKCFyZXN1bHQgJiYgaXNUU0ZyYW1ld29yaykge1xuICAgICAgICByZXMuZXJyb3IobmV3IEh0dHBFcnJvcih0aGlzLm9wdGlvbnMubWVzc2FnZSh0aGlzLnBhcmFtKSwgSHR0cENvZGUuQ2xpZW50LkJBRF9SRVFVRVNUKSk7XG4gICAgICB9IGVsc2UgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgbmV4dChuZXcgSHR0cEVycm9yKHRoaXMub3B0aW9ucy5tZXNzYWdlKHRoaXMucGFyYW0pLCBIdHRwQ29kZS5DbGllbnQuQkFEX1JFUVVFU1QpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHQoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgIGlmIChpc1RTRnJhbWV3b3JrKSB7XG4gICAgICAgIC8vIFNlbmQgZXJyb3IgdXNpbmcgVFMgRnJhbWV3b3JrIGFic3RyYWN0aW9uIGxheWVyXG4gICAgICAgIHJldHVybiByZXMuZXJyb3IoSHR0cENvZGUuQ2xpZW50LkJBRF9SRVFVRVNULCBleGNlcHRpb24pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2VuZCBlcnJvciB1c2luZyByZWd1bGFyIEV4cHJlc3MgbWV0aG9kc1xuICAgICAgICByZXR1cm4gbmV4dChuZXcgSHR0cEVycm9yKHRoaXMub3B0aW9ucy5tZXNzYWdlKHRoaXMucGFyYW0pLCBIdHRwQ29kZS5DbGllbnQuQkFEX1JFUVVFU1QpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIl19