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
const validateParam = (obj, param, filter, throwOnInvalid) => __awaiter(this, void 0, void 0, function* () {
    const value = dot.get(obj, param);
    const invalidMessage = `Invalid field: ${param}`;
    try {
        const result = yield filter(value);
        if (result) {
            return true;
        }
        if (throwOnInvalid) {
            throw new ts_framework_1.HttpError(invalidMessage, ts_framework_1.HttpCode.Client.BAD_REQUEST, { param, value });
        }
        return invalidMessage;
    }
    catch (exception) {
        if (exception instanceof ts_framework_1.HttpError) {
            throw exception;
        }
        if (throwOnInvalid) {
            throw new ts_framework_1.HttpError(invalidMessage, ts_framework_1.HttpCode.Client.BAD_REQUEST, {
                param, value, exception: exception.message,
            });
        }
        return `${invalidMessage} - Exception: ${exception.message}`;
    }
});
/**
 * Wraps a list of params into a single Express middleware and validate them synchronously.
 * Will throw in the first invalid value.
 *
 * @param {String} param The param name to be fetch using `req.param(name)`
 * @param {ParamValidator} filter The filter instance to be wrapped
 */
exports.syncWrapGroup = (params) => (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const p = Object.keys(params);
    // Validate all params in series
    for (let i = 0; i < p.length; i += 1) {
        const param = p[i];
        yield validateParam(Object.assign({}, req.params, req.query, req.body), param, params[p[i]], true);
    }
    next();
});
/**
 * Wraps a series of params into a single Express middleware and validate them asynchronously.
 * Will throw the full list of invalid values.
 *
 * @param {String} param The param name to be fetch using `req.param(name)`
 * @param {ParamValidator} filter The filter instance to be wrapped
 */
exports.asyncWrapGroup = (params) => (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const p = Object.keys(params);
    const promises = [];
    // Validate all params in parallel
    for (let i = 0; i < p.length; i += 1) {
        const param = p[i];
        promises.push(validateParam(Object.assign({}, req.params, req.query, req.body), param, params[p[i]], false));
    }
    const results = yield Promise.all(promises);
    const errors = results.filter(result => result !== true);
    if (errors.length) {
        throw new ts_framework_1.HttpError(errors.join('; '), ts_framework_1.HttpCode.Client.BAD_REQUEST);
    }
    next();
});
exports.wrapOrGroup = (params, message) => (req, res, next) => __awaiter(this, void 0, void 0, function* () {
    const p = Object.keys(params);
    const promises = [];
    // Validate all params in parallel
    for (let i = 0; i < p.length; i += 1) {
        const param = p[i];
        promises.push(validateParam(Object.assign({}, req.params, req.query, req.body), param, params[p[i]], false));
    }
    const results = yield Promise.all(promises);
    const orResult = results.some(result => result === true);
    if (!orResult) {
        throw new ts_framework_1.HttpError(message, ts_framework_1.HttpCode.Client.BAD_REQUEST);
    }
    next();
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyYW1Db21wb3NpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9QYXJhbUNvbXBvc2l0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxnQ0FBZ0M7QUFDaEMsK0NBQWdFO0FBT2hFOzs7Ozs7R0FNRztBQUNILE1BQU0sYUFBYSxHQUFHLENBQU8sR0FBUSxFQUFFLEtBQWEsRUFBRSxNQUFzQixFQUFFLGNBQXVCLEVBQUUsRUFBRTtJQUN2RyxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUVsQyxNQUFNLGNBQWMsR0FBRyxrQkFBa0IsS0FBSyxFQUFFLENBQUM7SUFFakQsSUFBSSxDQUFDO1FBQ0gsTUFBTSxNQUFNLEdBQUcsTUFBTSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFbkMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7UUFBQyxDQUFDO1FBRTVCLEVBQUUsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsTUFBTSxJQUFJLHdCQUFTLENBQUMsY0FBYyxFQUFFLHVCQUFRLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO1FBQ3JGLENBQUM7UUFFRCxNQUFNLENBQUMsY0FBYyxDQUFDO0lBQ3hCLENBQUM7SUFBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ25CLEVBQUUsQ0FBQyxDQUFDLFNBQVMsWUFBWSx3QkFBUyxDQUFDLENBQUMsQ0FBQztZQUFDLE1BQU0sU0FBUyxDQUFDO1FBQUMsQ0FBQztRQUV4RCxFQUFFLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1lBQ25CLE1BQU0sSUFBSSx3QkFBUyxDQUFDLGNBQWMsRUFBRSx1QkFBUSxDQUFDLE1B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R0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3JDLE1BQU0sS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuQixRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsbUJBQU0sR0FBRyxDQUFDLE1BQU0sRUFBSyxHQUFHLENBQUMsS0FBSyxFQUFLLEdBQUcsQ0FBQyxJQUFJLEdBQUksS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQ3pHLENBQUM7SUFFRCxNQUFNLE9BQU8sR0FBRyxNQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDNUMsTUFBTSxRQUFRLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sS0FBSyxJQUFJLENBQUMsQ0FBQztJQUV6RCxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDZCxNQUFNLElBQUksd0JBQVMsQ0FBQyxPQUFPLEVBQUUsdUJBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELElBQUksRUFBRSxDQUFDO0FBQ1QsQ0FBQyxDQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBkb3QgZnJvbSAnZG90LXByb3AnO1xuaW1wb3J0IHsgSHR0cENvZGUsIEh0dHBFcnJvciwgQmFzZVJlcXVlc3QgfSBmcm9tICd0cy1mcmFtZXdvcmsnO1xuXG4vKipcbiAqIFRoZSB0eXBlIGRlZmluaXRpb24gZm9yIGEgcGFyYW0gdmFsaWRhdG9yIGluc3RhbmNlLlxuICovXG5leHBvcnQgdHlwZSBQYXJhbVZhbGlkYXRvciA9ICgoZGF0YTogYW55KSA9PiBQcm9taXNlPGJvb2xlYW4+KTtcblxuLyoqXG4gKiBSdW4gYSBzaW5nbGUgYXN5bmMgcGFyYW0gdmFsaWRhdGlvbiB1c2luZyBkb3Qgbm90YXRpb24uXG4gKlxuICogQHBhcmFtIHJlcSBUaGUgZXhwcmVzcyByZXF1ZXN0XG4gKiBAcGFyYW0gcGFyYW0gVGhlIHBhcmFtIGtleVxuICogQHBhcmFtIGZpbHRlciBUaGUgcGFyYW0gdmFsaWRhdG9yXG4gKi9cbmNvbnN0IHZhbGlkYXRlUGFyYW0gPSBhc3luYyAob2JqOiBhbnksIHBhcmFtOiBzdHJpbmcsIGZpbHRlcjogUGFyYW1WYWxpZGF0b3IsIHRocm93T25JbnZhbGlkOiBib29sZWFuKSA9PiB7XG4gIGNvbnN0IHZhbHVlID0gZG90LmdldChvYmosIHBhcmFtKTtcblxuICBjb25zdCBpbnZhbGlkTWVzc2FnZSA9IGBJbnZhbGlkIGZpZWxkOiAke3BhcmFtfWA7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBmaWx0ZXIodmFsdWUpO1xuXG4gICAgaWYgKHJlc3VsdCkgeyByZXR1cm4gdHJ1ZTsgfVxuXG4gICAgaWYgKHRocm93T25JbnZhbGlkKSB7IFxuICAgICAgdGhyb3cgbmV3IEh0dHBFcnJvcihpbnZhbGlkTWVzc2FnZSwgSHR0cENvZGUuQ2xpZW50LkJBRF9SRVFVRVNULCB7IHBhcmFtLCB2YWx1ZSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW52YWxpZE1lc3NhZ2U7XG4gIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgIGlmIChleGNlcHRpb24gaW5zdGFuY2VvZiBIdHRwRXJyb3IpIHsgdGhyb3cgZXhjZXB0aW9uOyB9XG5cbiAgICBpZiAodGhyb3dPbkludmFsaWQpIHsgXG4gICAgICB0aHJvdyBuZXcgSHR0cEVycm9yKGludmFsaWRNZXNzYWdlLCBIdHRwQ29kZS5DbGllbnQuQkFEX1JFUVVFU1QsIHsgXG4gICAgICAgIHBhcmFtLCB2YWx1ZSwgZXhjZXB0aW9uOiBleGNlcHRpb24ubWVzc2FnZSxcbiAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICByZXR1cm4gYCR7aW52YWxpZE1lc3NhZ2V9IC0gRXhjZXB0aW9uOiAke2V4Y2VwdGlvbi5tZXNzYWdlfWA7XG4gIH1cbn07XG5cbi8qKlxuICogV3JhcHMgYSBsaXN0IG9mIHBhcmFtcyBpbnRvIGEgc2luZ2xlIEV4cHJlc3MgbWlkZGxld2FyZSBhbmQgdmFsaWRhdGUgdGhlbSBzeW5jaHJvbm91c2x5LlxuICogV2lsbCB0aHJvdyBpbiB0aGUgZmlyc3QgaW52YWxpZCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW0gVGhlIHBhcmFtIG5hbWUgdG8gYmUgZmV0Y2ggdXNpbmcgYHJlcS5wYXJhbShuYW1lKWBcbiAqIEBwYXJhbSB7UGFyYW1WYWxpZGF0b3J9IGZpbHRlciBUaGUgZmlsdGVyIGluc3RhbmNlIHRvIGJlIHdyYXBwZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHN5bmNXcmFwR3JvdXAgPSAocGFyYW1zOiB7IFtsYWJlbDogc3RyaW5nXTogUGFyYW1WYWxpZGF0b3IgfSkgPT4gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNvbnN0IHAgPSBPYmplY3Qua2V5cyhwYXJhbXMpO1xuXG4gIC8vIFZhbGlkYXRlIGFsbCBwYXJhbXMgaW4gc2VyaWVzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHBhcmFtID0gcFtpXTtcbiAgICBhd2FpdCB2YWxpZGF0ZVBhcmFtKHsgLi4ucmVxLnBhcmFtcywgLi4ucmVxLnF1ZXJ5LCAuLi5yZXEuYm9keSB9LCBwYXJhbSwgcGFyYW1zW3BbaV1dLCB0cnVlKTtcbiAgfVxuICBuZXh0KCk7XG59O1xuXG4vKipcbiAqIFdyYXBzIGEgc2VyaWVzIG9mIHBhcmFtcyBpbnRvIGEgc2luZ2xlIEV4cHJlc3MgbWlkZGxld2FyZSBhbmQgdmFsaWRhdGUgdGhlbSBhc3luY2hyb25vdXNseS5cbiAqIFdpbGwgdGhyb3cgdGhlIGZ1bGwgbGlzdCBvZiBpbnZhbGlkIHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW0gVGhlIHBhcmFtIG5hbWUgdG8gYmUgZmV0Y2ggdXNpbmcgYHJlcS5wYXJhbShuYW1lKWBcbiAqIEBwYXJhbSB7UGFyYW1WYWxpZGF0b3J9IGZpbHRlciBUaGUgZmlsdGVyIGluc3RhbmNlIHRvIGJlIHdyYXBwZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGFzeW5jV3JhcEdyb3VwID0gKHBhcmFtczogeyBbbGFiZWw6IHN0cmluZ106IFBhcmFtVmFsaWRhdG9yIH0pID0+IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zdCBwID0gT2JqZWN0LmtleXMocGFyYW1zKTtcbiAgY29uc3QgcHJvbWlzZXM6IFByb21pc2U8c3RyaW5nIHwgdHJ1ZT5bXSA9IFtdO1xuXG4gIC8vIFZhbGlkYXRlIGFsbCBwYXJhbXMgaW4gcGFyYWxsZWxcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgcGFyYW0gPSBwW2ldO1xuICAgIHByb21pc2VzLnB1c2godmFsaWRhdGVQYXJhbSh7IC4uLnJlcS5wYXJhbXMsIC4uLnJlcS5xdWVyeSwgLi4ucmVxLmJvZHkgfSwgcGFyYW0sIHBhcmFtc1twW2ldXSwgZmFsc2UpKTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gIGNvbnN0IGVycm9ycyA9IHJlc3VsdHMuZmlsdGVyKHJlc3VsdCA9PiByZXN1bHQgIT09IHRydWUpO1xuXG4gIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEh0dHBFcnJvcihlcnJvcnMuam9pbignOyAnKSwgSHR0cENvZGUuQ2xpZW50LkJBRF9SRVFVRVNUKTtcbiAgfVxuXG4gIG5leHQoKTtcbn07XG5cbmV4cG9ydCBjb25zdCB3cmFwT3JHcm91cCA9IChwYXJhbXM6IHsgW2xhYmVsOiBzdHJpbmddOiBQYXJhbVZhbGlkYXRvciB9LCBtZXNzYWdlOiBzdHJpbmcpID0+IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zdCBwID0gT2JqZWN0LmtleXMocGFyYW1zKTtcbiAgY29uc3QgcHJvbWlzZXM6IFByb21pc2U8c3RyaW5nIHwgdHJ1ZT5bXSA9IFtdO1xuXG4gIC8vIFZhbGlkYXRlIGFsbCBwYXJhbXMgaW4gcGFyYWxsZWxcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgcGFyYW0gPSBwW2ldO1xuICAgIHByb21pc2VzLnB1c2godmFsaWRhdGVQYXJhbSh7IC4uLnJlcS5wYXJhbXMsIC4uLnJlcS5xdWVyeSwgLi4ucmVxLmJvZHkgfSwgcGFyYW0sIHBhcmFtc1twW2ldXSwgZmFsc2UpKTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gIGNvbnN0IG9yUmVzdWx0ID0gcmVzdWx0cy5zb21lKHJlc3VsdCA9PiByZXN1bHQgPT09IHRydWUpO1xuXG4gIGlmICghb3JSZXN1bHQpIHtcbiAgICB0aHJvdyBuZXcgSHR0cEVycm9yKG1lc3NhZ2UsIEh0dHBDb2RlLkNsaWVudC5CQURfUkVRVUVTVCk7XG4gIH1cblxuICBuZXh0KCk7XG59O1xuIl19