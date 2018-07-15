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
const dot = require("dot-prop");
const ts_framework_1 = require("ts-framework");
/**
 * Run a single async param validation using dot notation.
 *
 * @param req The express request
 * @param param The param key
 * @param filter The param validator
 */
const validateParams = (obj, param, filter) => __awaiter(this, void 0, void 0, function* () {
    const value = dot.get(obj, param);
    try {
        const result = yield filter(value);
        if (result) {
            return true;
        }
    }
    catch (exception) {
        if (exception instanceof ts_framework_1.HttpError) {
            throw exception;
        }
        throw new ts_framework_1.HttpError(`Invalid field: ${param}`, ts_framework_1.HttpCode.Client.BAD_REQUEST, {
            param, value,
            exception: exception.message,
        });
    }
    throw new ts_framework_1.HttpError(`Invalid field: ${param}`, ts_framework_1.HttpCode.Client.BAD_REQUEST, {
        param, value,
    });
});
/**
 * Wraps a series of params into a single Express middleware.
 *
 * @param {String} param The param name to be fetch using `req.param(name)`
 * @param {ParamValidator} filter The filter instance to be wrapped
 */
exports.wrapGroup = (params) => (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const p = Object.keys(params);
    // Validate all params in series
    for (let i = 0; i < p.length; i += 1) {
        const param = p[i];
        yield validateParams(Object.assign({}, req.params, req.query, req.body), param, params[p[i]]);
    }
    next();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyYW1Db21wb3NpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9QYXJhbUNvbXBvc2l0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxnQ0FBZ0M7QUFDaEMsK0NBQWdFO0FBT2hFOzs7Ozs7R0FNRztBQUNILE1BQU0sY0FBYyxHQUFHLENBQU8sR0FBUSxFQUFFLEtBQWEsRUFBRSxNQUFzQixFQUFFLEVBQUU7SUFDL0UsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFFbEMsSUFBSSxDQUFDO1FBQ0gsTUFBTSxNQUFNLEdBQUcsTUFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNYLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFDZCxDQUFDO0lBQ0gsQ0FBQztJQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsRUFBRSxDQUFDLENBQUMsU0FBUyxZQUFZLHdCQUFTLENBQUMsQ0FBQyxDQUFDO1lBQ25DLE1BQU0sU0FBUyxDQUFDO1FBQ2xCLENBQUM7UUFDRCxNQUFNLElBQUksd0JBQVMsQ0FBQyxrQkFBa0IsS0FBSyxFQUFFLEVBQUUsdUJBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO1lBQzFFLEtBQUssRUFBRSxLQUFLO1lBQ1osU0FBUyxFQUFFLFNBQVMsQ0FBQyxPQUFPO1NBQzdCLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxNQUFNLElBQUksd0JBQVMsQ0FBQyxrQkFBa0IsS0FBSyxFQUFFLEVBQUUsdUJBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFO1FBQzFFLEtBQUssRUFBRSxLQUFLO0tBQ2IsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFBLENBQUM7QUFFRjs7Ozs7R0FLRztBQUNVLFFBQUEsU0FBUyxHQUFHLENBQUMsTUFBMkMsRUFBRSxFQUFFLENBQUMsQ0FBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxFQUFFO0lBQ2pHLE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFFOUIsZ0NBQWdDO0lBQ2hDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7UUFDckMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLE1BQU0sY0FBYyxtQkFBTSxHQUFHLENBQUMsTUFBTSxFQUFLLEdBQUcsQ0FBQyxLQUFLLEVBQUssR0FBRyxDQUFDLElBQUksR0FBSSxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQUNELElBQUksRUFBRSxDQUFDO0FBQ1QsQ0FBQyxDQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkb3QgZnJvbSAnZG90LXByb3AnO1xuaW1wb3J0IHsgSHR0cENvZGUsIEh0dHBFcnJvciwgQmFzZVJlcXVlc3QgfSBmcm9tICd0cy1mcmFtZXdvcmsnO1xuXG4vKipcbiAqIFRoZSB0eXBlIGRlZmluaXRpb24gZm9yIGEgcGFyYW0gdmFsaWRhdG9yIGluc3RhbmNlLlxuICovXG5leHBvcnQgdHlwZSBQYXJhbVZhbGlkYXRvciA9ICgoZGF0YTogYW55KSA9PiBQcm9taXNlPEJvb2xlYW4+KTtcblxuLyoqXG4gKiBSdW4gYSBzaW5nbGUgYXN5bmMgcGFyYW0gdmFsaWRhdGlvbiB1c2luZyBkb3Qgbm90YXRpb24uXG4gKlxuICogQHBhcmFtIHJlcSBUaGUgZXhwcmVzcyByZXF1ZXN0XG4gKiBAcGFyYW0gcGFyYW0gVGhlIHBhcmFtIGtleVxuICogQHBhcmFtIGZpbHRlciBUaGUgcGFyYW0gdmFsaWRhdG9yXG4gKi9cbmNvbnN0IHZhbGlkYXRlUGFyYW1zID0gYXN5bmMgKG9iajogYW55LCBwYXJhbTogc3RyaW5nLCBmaWx0ZXI6IFBhcmFtVmFsaWRhdG9yKSA9PiB7XG4gIGNvbnN0IHZhbHVlID0gZG90LmdldChvYmosIHBhcmFtKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGZpbHRlcih2YWx1ZSk7XG5cbiAgICBpZiAocmVzdWx0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgIGlmIChleGNlcHRpb24gaW5zdGFuY2VvZiBIdHRwRXJyb3IpIHtcbiAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEh0dHBFcnJvcihgSW52YWxpZCBmaWVsZDogJHtwYXJhbX1gLCBIdHRwQ29kZS5DbGllbnQuQkFEX1JFUVVFU1QsIHtcbiAgICAgIHBhcmFtLCB2YWx1ZSxcbiAgICAgIGV4Y2VwdGlvbjogZXhjZXB0aW9uLm1lc3NhZ2UsXG4gICAgfSk7XG4gIH1cblxuICB0aHJvdyBuZXcgSHR0cEVycm9yKGBJbnZhbGlkIGZpZWxkOiAke3BhcmFtfWAsIEh0dHBDb2RlLkNsaWVudC5CQURfUkVRVUVTVCwge1xuICAgIHBhcmFtLCB2YWx1ZSxcbiAgfSk7XG59O1xuXG4vKipcbiAqIFdyYXBzIGEgc2VyaWVzIG9mIHBhcmFtcyBpbnRvIGEgc2luZ2xlIEV4cHJlc3MgbWlkZGxld2FyZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW0gVGhlIHBhcmFtIG5hbWUgdG8gYmUgZmV0Y2ggdXNpbmcgYHJlcS5wYXJhbShuYW1lKWBcbiAqIEBwYXJhbSB7UGFyYW1WYWxpZGF0b3J9IGZpbHRlciBUaGUgZmlsdGVyIGluc3RhbmNlIHRvIGJlIHdyYXBwZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHdyYXBHcm91cCA9IChwYXJhbXM6IHsgW2xhYmVsOiBzdHJpbmddOiBQYXJhbVZhbGlkYXRvciB9KSA9PiBhc3luYyAocmVxLCByZXMsIG5leHQpID0+IHtcbiAgY29uc3QgcCA9IE9iamVjdC5rZXlzKHBhcmFtcyk7XG5cbiAgLy8gVmFsaWRhdGUgYWxsIHBhcmFtcyBpbiBzZXJpZXNcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgcGFyYW0gPSBwW2ldO1xuICAgIGF3YWl0IHZhbGlkYXRlUGFyYW1zKHsgLi4ucmVxLnBhcmFtcywgLi4ucmVxLnF1ZXJ5LCAuLi5yZXEuYm9keSB9LCBwYXJhbSwgcGFyYW1zW3BbaV1dKTtcbiAgfVxuICBuZXh0KCk7XG59O1xuIl19