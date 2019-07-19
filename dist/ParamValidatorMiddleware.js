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
     * Returns the Express midleware for a Param validator.
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
                console.log(exception);
                if (isTSFramework) {
                    // Send error using TS Framework abstraction layer
                    throw new ts_framework_1.HttpError(this.options.message(this.param), ts_framework_1.HttpCode.Client.BAD_REQUEST);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyYW1WYWxpZGF0b3JNaWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL1BhcmFtVmFsaWRhdG9yTWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0NBQW1EO0FBT25EOzs7OztHQUtHO0FBQ0gsTUFBcUIsd0JBQXdCO0lBRzNDLFlBQXNCLEtBQWEsRUFBWSxNQUFzQixFQUFFLE9BQU8sR0FBRyxFQUFFO1FBQTdELFVBQUssR0FBTCxLQUFLLENBQVE7UUFBWSxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUNuRSxJQUFJLENBQUMsT0FBTyxtQkFBSyxPQUFPLEVBQUUsQ0FBQyxLQUFhLEVBQUUsRUFBRSxDQUFDLGtCQUFrQixLQUFLLEVBQUUsSUFBSyxPQUFPLENBQUUsQ0FBQztJQUN2RixDQUFDO0lBRUQ7Ozs7OztPQU1HO0lBQ0csVUFBVSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSTs7WUFDN0IsTUFBTSxhQUFhLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLE9BQU8sR0FBRyxDQUFDLEtBQUssS0FBSyxPQUFPLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUU5RSxJQUFJO2dCQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN4RCxJQUFJLENBQUMsTUFBTSxJQUFJLGFBQWEsRUFBRTtvQkFDNUIsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLHdCQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLHVCQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7aUJBQ3pGO3FCQUFNLElBQUksQ0FBQyxNQUFNLEVBQUU7b0JBQ2xCLElBQUksQ0FBQyxJQUFJLHdCQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLHVCQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7aUJBQ3BGO3FCQUFNO29CQUNMLElBQUksRUFBRSxDQUFDO2lCQUNSO2FBQ0Y7WUFBQyxPQUFPLFNBQVMsRUFBRTtnQkFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxhQUFhLEVBQUU7b0JBQ2pCLGtEQUFrRDtvQkFDbEQsTUFBTSxJQUFJLHdCQUFTLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLHVCQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lCQUNwRjtxQkFBTTtvQkFDTCwyQ0FBMkM7b0JBQzNDLE9BQU8sSUFBSSxDQUFDLElBQUksd0JBQVMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsdUJBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztpQkFDM0Y7YUFDRjtRQUNILENBQUM7S0FBQTtDQUVGO0FBdENELDJDQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvciwgSHR0cENvZGUgfSBmcm9tICd0cy1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgUGFyYW1WYWxpZGF0b3IgfSBmcm9tICcuL1BhcmFtVmFsaWRhdG9yJztcblxuZXhwb3J0IGludGVyZmFjZSBQYXJhbVZhbGlkYXRvck1pZGRsZXdhcmVPcHRpb25zIHtcbiAgbWVzc2FnZT86IChwYXJhbTogc3RyaW5nKSA9PiBzdHJpbmc7XG59XG5cbi8qKlxuICogV3JhcHMgYSBzaW1wbGUgcGFyYW0gdmFsaWRhdG9yIGludG8gYW4gRXhwcmVzcyBtaWRkbGV3YXJlLlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBwYXJhbSBUaGUgcGFyYW0gbmFtZSB0byBiZSBmZXRjaCB1c2luZyBgcmVxLnBhcmFtKG5hbWUpYFxuICogQHBhcmFtIHtQYXJhbVZhbGlkYXRvcn0gZmlsdGVyIFRoZSBmaWx0ZXIgaW5zdGFuY2UgdG8gYmUgd3JhcHBlZFxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXJhbVZhbGlkYXRvck1pZGRsZXdhcmUge1xuICBvcHRpb25zOiBQYXJhbVZhbGlkYXRvck1pZGRsZXdhcmVPcHRpb25zO1xuXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBwYXJhbTogc3RyaW5nLCBwcm90ZWN0ZWQgZmlsdGVyOiBQYXJhbVZhbGlkYXRvciwgb3B0aW9ucyA9IHt9KSB7XG4gICAgdGhpcy5vcHRpb25zID0geyBtZXNzYWdlOiAocGFyYW06IHN0cmluZykgPT4gYEludmFsaWQgZmllbGQ6ICR7cGFyYW19YCwgLi4ub3B0aW9ucyB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIEV4cHJlc3MgbWlkbGV3YXJlIGZvciBhIFBhcmFtIHZhbGlkYXRvci5cbiAgICpcbiAgICogQHBhcmFtIHJlcSBUaGUgZXhwcmVzcyByZXF1ZXN0XG4gICAqIEBwYXJhbSByZXMgVGhlIGV4cHJlc3MgcmVzcG9uc2VcbiAgICogQHBhcmFtIG5leHQgVGhlIGV4cHJlc3MgY2FsbGJhY2sgdG8gdGhlIG1pZGRsZXdhcmUgY2hhaW5cbiAgICovXG4gIGFzeW5jIG1pZGRsZXdhcmUocmVxLCByZXMsIG5leHQpIHtcbiAgICBjb25zdCBpc1RTRnJhbWV3b3JrID0gKHJlcy5lcnJvciAmJiB0eXBlb2YgcmVzLmVycm9yID09PSB0eXBlb2YgKCgpID0+IHRydWUpKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmZpbHRlcihyZXEucGFyYW0odGhpcy5wYXJhbSkpO1xuICAgICAgaWYgKCFyZXN1bHQgJiYgaXNUU0ZyYW1ld29yaykge1xuICAgICAgICByZXMuZXJyb3IobmV3IEh0dHBFcnJvcih0aGlzLm9wdGlvbnMubWVzc2FnZSh0aGlzLnBhcmFtKSwgSHR0cENvZGUuQ2xpZW50LkJBRF9SRVFVRVNUKSk7XG4gICAgICB9IGVsc2UgaWYgKCFyZXN1bHQpIHtcbiAgICAgICAgbmV4dChuZXcgSHR0cEVycm9yKHRoaXMub3B0aW9ucy5tZXNzYWdlKHRoaXMucGFyYW0pLCBIdHRwQ29kZS5DbGllbnQuQkFEX1JFUVVFU1QpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5leHQoKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChleGNlcHRpb24pIHtcbiAgICAgIGNvbnNvbGUubG9nKGV4Y2VwdGlvbik7XG4gICAgICBpZiAoaXNUU0ZyYW1ld29yaykge1xuICAgICAgICAvLyBTZW5kIGVycm9yIHVzaW5nIFRTIEZyYW1ld29yayBhYnN0cmFjdGlvbiBsYXllclxuICAgICAgICB0aHJvdyBuZXcgSHR0cEVycm9yKHRoaXMub3B0aW9ucy5tZXNzYWdlKHRoaXMucGFyYW0pLCBIdHRwQ29kZS5DbGllbnQuQkFEX1JFUVVFU1QpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gU2VuZCBlcnJvciB1c2luZyByZWd1bGFyIEV4cHJlc3MgbWV0aG9kc1xuICAgICAgICByZXR1cm4gbmV4dChuZXcgSHR0cEVycm9yKHRoaXMub3B0aW9ucy5tZXNzYWdlKHRoaXMucGFyYW0pLCBIdHRwQ29kZS5DbGllbnQuQkFEX1JFUVVFU1QpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufVxuIl19