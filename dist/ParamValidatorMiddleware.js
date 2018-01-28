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
            try {
                if (!this.filter(req.param(this.param))) {
                    res.error(new ts_framework_1.HttpError(this.options.message(this.param), ts_framework_1.HttpCode.Client.BAD_REQUEST));
                }
                else {
                    next();
                }
            }
            catch (exception) {
                res.error(ts_framework_1.HttpCode.Client.BAD_REQUEST, exception);
            }
        });
    }
}
exports.default = ParamValidatorMiddleware;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyYW1WYWxpZGF0b3JNaWRkbGV3YXJlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vbGliL1BhcmFtVmFsaWRhdG9yTWlkZGxld2FyZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsK0NBQW1EO0FBT25EOzs7OztHQUtHO0FBQ0g7SUFHRSxZQUFzQixLQUFhLEVBQVksTUFBc0IsRUFBRSxPQUFPLEdBQUcsRUFBRTtRQUE3RCxVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQVksV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDbkUsSUFBSSxDQUFDLE9BQU8sbUJBQ1YsT0FBTyxFQUFFLENBQUMsS0FBYSxFQUFFLEVBQUUsQ0FBQyxrQkFBa0IsS0FBSyxFQUFFLElBQ2xELE9BQU8sQ0FDWCxDQUFDO0lBQ0osQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNHLFVBQVUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUk7O1lBQzdCLElBQUksQ0FBQztnQkFDSCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3hDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSx3QkFBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSx1QkFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO2dCQUMxRixDQUFDO2dCQUFDLElBQUksQ0FBQyxDQUFDO29CQUNOLElBQUksRUFBRSxDQUFDO2dCQUNULENBQUM7WUFDSCxDQUFDO1lBQUMsS0FBSyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDbkIsR0FBRyxDQUFDLEtBQUssQ0FBQyx1QkFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDcEQsQ0FBQztRQUNILENBQUM7S0FBQTtDQUVGO0FBN0JELDJDQTZCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBFcnJvciwgSHR0cENvZGUgfSBmcm9tICd0cy1mcmFtZXdvcmsnO1xuaW1wb3J0IHsgUGFyYW1WYWxpZGF0b3IgfSBmcm9tICcuL1BhcmFtVmFsaWRhdG9yJztcblxuZXhwb3J0IGludGVyZmFjZSBQYXJhbVZhbGlkYXRvck1pZGRsZXdhcmVPcHRpb25zIHtcbiAgbWVzc2FnZT86IChwYXJhbTogc3RyaW5nKSA9PiBzdHJpbmc7XG59XG5cbi8qKlxuICogV3JhcHMgYSBzaW1wbGUgcGFyYW0gdmFsaWRhdG9yIGludG8gYW4gRXhwcmVzcyBtaWRkbGV3YXJlLlxuICogXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW0gVGhlIHBhcmFtIG5hbWUgdG8gYmUgZmV0Y2ggdXNpbmcgYHJlcS5wYXJhbShuYW1lKWBcbiAqIEBwYXJhbSB7UGFyYW1WYWxpZGF0b3J9IGZpbHRlciBUaGUgZmlsdGVyIGluc3RhbmNlIHRvIGJlIHdyYXBwZWRcbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFyYW1WYWxpZGF0b3JNaWRkbGV3YXJlIHtcbiAgb3B0aW9uczogUGFyYW1WYWxpZGF0b3JNaWRkbGV3YXJlT3B0aW9ucztcblxuICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgcGFyYW06IHN0cmluZywgcHJvdGVjdGVkIGZpbHRlcjogUGFyYW1WYWxpZGF0b3IsIG9wdGlvbnMgPSB7fSkge1xuICAgIHRoaXMub3B0aW9ucyA9IHtcbiAgICAgIG1lc3NhZ2U6IChwYXJhbTogc3RyaW5nKSA9PiBgSW52YWxpZCBmaWVsZDogJHtwYXJhbX1gLFxuICAgICAgLi4ub3B0aW9ucyxcbiAgICB9O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIEV4cHJlc3MgbWlkbGV3YXJlIGZvciBhIFBhcmFtIHZhbGlkYXRvci5cbiAgICogXG4gICAqIEBwYXJhbSByZXEgVGhlIGV4cHJlc3MgcmVxdWVzdFxuICAgKiBAcGFyYW0gcmVzIFRoZSBleHByZXNzIHJlc3BvbnNlXG4gICAqIEBwYXJhbSBuZXh0IFRoZSBleHByZXNzIGNhbGxiYWNrIHRvIHRoZSBtaWRkbGV3YXJlIGNoYWluXG4gICAqL1xuICBhc3luYyBtaWRkbGV3YXJlKHJlcSwgcmVzLCBuZXh0KSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICghdGhpcy5maWx0ZXIocmVxLnBhcmFtKHRoaXMucGFyYW0pKSkge1xuICAgICAgICByZXMuZXJyb3IobmV3IEh0dHBFcnJvcih0aGlzLm9wdGlvbnMubWVzc2FnZSh0aGlzLnBhcmFtKSwgSHR0cENvZGUuQ2xpZW50LkJBRF9SRVFVRVNUKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXh0KCk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXhjZXB0aW9uKSB7XG4gICAgICByZXMuZXJyb3IoSHR0cENvZGUuQ2xpZW50LkJBRF9SRVFVRVNULCBleGNlcHRpb24pO1xuICAgIH1cbiAgfVxuICBcbn1cbiJdfQ==