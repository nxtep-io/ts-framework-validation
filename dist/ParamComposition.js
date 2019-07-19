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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGFyYW1Db21wb3NpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2xpYi9QYXJhbUNvbXBvc2l0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxnQ0FBZ0M7QUFDaEMsK0NBQWdFO0FBT2hFOzs7Ozs7R0FNRztBQUNILE1BQU0sYUFBYSxHQUFHLENBQU8sR0FBUSxFQUFFLEtBQWEsRUFBRSxNQUFzQixFQUFFLGNBQXVCLEVBQUUsRUFBRTtJQUN2RyxNQUFNLEtBQUssR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUVsQyxNQUFNLGNBQWMsR0FBRyxrQkFBa0IsS0FBSyxFQUFFLENBQUM7SUFFakQsSUFBSTtRQUNGLE1BQU0sTUFBTSxHQUFHLE1BQU0sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRW5DLElBQUksTUFBTSxFQUFFO1lBQUUsT0FBTyxJQUFJLENBQUM7U0FBRTtRQUU1QixJQUFJLGNBQWMsRUFBRTtZQUNsQixNQUFNLElBQUksd0JBQVMsQ0FBQyxjQUFjLEVBQUUsdUJBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7U0FDcEY7UUFFRCxPQUFPLGNBQWMsQ0FBQztLQUN2QjtJQUFDLE9BQU8sU0FBUyxFQUFFO1FBQ2xCLElBQUksU0FBUyxZQUFZLHdCQUFTLEVBQUU7WUFBRSxNQUFNLFNBQVMsQ0FBQztTQUFFO1FBRXhELElBQUksY0FBYyxFQUFFO1lBQ2xCLE1BQU0sSUFBSSx3QkFBUyxDQUFDLGNBQWMsRUFBRSx1QkFBUSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUU7Z0JBQy9ELEtBQUssRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQyxPQUFPO2FBQzNDLENBQUMsQ0FBQztTQUNKO1FBRUQsT0FBTyxHQUFHLGNBQWMsaUJBQWlCLFNBQVMsQ0FBQyxPQUFPLEVB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QUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztLQUN4RztJQUVELE1BQU0sT0FBTyxHQUFHLE1BQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUM1QyxNQUFNLFFBQVEsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxDQUFDO0lBRXpELElBQUksQ0FBQyxRQUFRLEVBQUU7UUFDYixNQUFNLElBQUksd0JBQVMsQ0FBQyxPQUFPLEVBQUUsdUJBQVEsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUM7S0FDM0Q7SUFFRCxJQUFJLEVBQUUsQ0FBQztBQUNULENBQUMsQ0FBQSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZG90IGZyb20gJ2RvdC1wcm9wJztcbmltcG9ydCB7IEh0dHBDb2RlLCBIdHRwRXJyb3IsIEJhc2VSZXF1ZXN0IH0gZnJvbSAndHMtZnJhbWV3b3JrJztcblxuLyoqXG4gKiBUaGUgdHlwZSBkZWZpbml0aW9uIGZvciBhIHBhcmFtIHZhbGlkYXRvciBpbnN0YW5jZS5cbiAqL1xuZXhwb3J0IHR5cGUgUGFyYW1WYWxpZGF0b3IgPSAoKGRhdGE6IGFueSkgPT4gUHJvbWlzZTxib29sZWFuPik7XG5cbi8qKlxuICogUnVuIGEgc2luZ2xlIGFzeW5jIHBhcmFtIHZhbGlkYXRpb24gdXNpbmcgZG90IG5vdGF0aW9uLlxuICpcbiAqIEBwYXJhbSByZXEgVGhlIGV4cHJlc3MgcmVxdWVzdFxuICogQHBhcmFtIHBhcmFtIFRoZSBwYXJhbSBrZXlcbiAqIEBwYXJhbSBmaWx0ZXIgVGhlIHBhcmFtIHZhbGlkYXRvclxuICovXG5jb25zdCB2YWxpZGF0ZVBhcmFtID0gYXN5bmMgKG9iajogYW55LCBwYXJhbTogc3RyaW5nLCBmaWx0ZXI6IFBhcmFtVmFsaWRhdG9yLCB0aHJvd09uSW52YWxpZDogYm9vbGVhbikgPT4ge1xuICBjb25zdCB2YWx1ZSA9IGRvdC5nZXQob2JqLCBwYXJhbSk7XG5cbiAgY29uc3QgaW52YWxpZE1lc3NhZ2UgPSBgSW52YWxpZCBmaWVsZDogJHtwYXJhbX1gO1xuXG4gIHRyeSB7XG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgZmlsdGVyKHZhbHVlKTtcblxuICAgIGlmIChyZXN1bHQpIHsgcmV0dXJuIHRydWU7IH1cblxuICAgIGlmICh0aHJvd09uSW52YWxpZCkge1xuICAgICAgdGhyb3cgbmV3IEh0dHBFcnJvcihpbnZhbGlkTWVzc2FnZSwgSHR0cENvZGUuQ2xpZW50LkJBRF9SRVFVRVNULCB7IHBhcmFtLCB2YWx1ZSB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gaW52YWxpZE1lc3NhZ2U7XG4gIH0gY2F0Y2ggKGV4Y2VwdGlvbikge1xuICAgIGlmIChleGNlcHRpb24gaW5zdGFuY2VvZiBIdHRwRXJyb3IpIHsgdGhyb3cgZXhjZXB0aW9uOyB9XG5cbiAgICBpZiAodGhyb3dPbkludmFsaWQpIHtcbiAgICAgIHRocm93IG5ldyBIdHRwRXJyb3IoaW52YWxpZE1lc3NhZ2UsIEh0dHBDb2RlLkNsaWVudC5CQURfUkVRVUVTVCwge1xuICAgICAgICBwYXJhbSwgdmFsdWUsIGV4Y2VwdGlvbjogZXhjZXB0aW9uLm1lc3NhZ2UsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gYCR7aW52YWxpZE1lc3NhZ2V9IC0gRXhjZXB0aW9uOiAke2V4Y2VwdGlvbi5tZXNzYWdlfWA7XG4gIH1cbn07XG5cbi8qKlxuICogV3JhcHMgYSBsaXN0IG9mIHBhcmFtcyBpbnRvIGEgc2luZ2xlIEV4cHJlc3MgbWlkZGxld2FyZSBhbmQgdmFsaWRhdGUgdGhlbSBzeW5jaHJvbm91c2x5LlxuICogV2lsbCB0aHJvdyBpbiB0aGUgZmlyc3QgaW52YWxpZCB2YWx1ZS5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW0gVGhlIHBhcmFtIG5hbWUgdG8gYmUgZmV0Y2ggdXNpbmcgYHJlcS5wYXJhbShuYW1lKWBcbiAqIEBwYXJhbSB7UGFyYW1WYWxpZGF0b3J9IGZpbHRlciBUaGUgZmlsdGVyIGluc3RhbmNlIHRvIGJlIHdyYXBwZWRcbiAqL1xuZXhwb3J0IGNvbnN0IHN5bmNXcmFwR3JvdXAgPSAocGFyYW1zOiB7IFtsYWJlbDogc3RyaW5nXTogUGFyYW1WYWxpZGF0b3IgfSkgPT4gYXN5bmMgKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG4gIGNvbnN0IHAgPSBPYmplY3Qua2V5cyhwYXJhbXMpO1xuXG4gIC8vIFZhbGlkYXRlIGFsbCBwYXJhbXMgaW4gc2VyaWVzXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHBhcmFtID0gcFtpXTtcbiAgICBhd2FpdCB2YWxpZGF0ZVBhcmFtKHsgLi4ucmVxLnBhcmFtcywgLi4ucmVxLnF1ZXJ5LCAuLi5yZXEuYm9keSB9LCBwYXJhbSwgcGFyYW1zW3BbaV1dLCB0cnVlKTtcbiAgfVxuICBuZXh0KCk7XG59O1xuXG4vKipcbiAqIFdyYXBzIGEgc2VyaWVzIG9mIHBhcmFtcyBpbnRvIGEgc2luZ2xlIEV4cHJlc3MgbWlkZGxld2FyZSBhbmQgdmFsaWRhdGUgdGhlbSBhc3luY2hyb25vdXNseS5cbiAqIFdpbGwgdGhyb3cgdGhlIGZ1bGwgbGlzdCBvZiBpbnZhbGlkIHZhbHVlcy5cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGFyYW0gVGhlIHBhcmFtIG5hbWUgdG8gYmUgZmV0Y2ggdXNpbmcgYHJlcS5wYXJhbShuYW1lKWBcbiAqIEBwYXJhbSB7UGFyYW1WYWxpZGF0b3J9IGZpbHRlciBUaGUgZmlsdGVyIGluc3RhbmNlIHRvIGJlIHdyYXBwZWRcbiAqL1xuZXhwb3J0IGNvbnN0IGFzeW5jV3JhcEdyb3VwID0gKHBhcmFtczogeyBbbGFiZWw6IHN0cmluZ106IFBhcmFtVmFsaWRhdG9yIH0pID0+IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zdCBwID0gT2JqZWN0LmtleXMocGFyYW1zKTtcbiAgY29uc3QgcHJvbWlzZXM6IFByb21pc2U8c3RyaW5nIHwgdHJ1ZT5bXSA9IFtdO1xuXG4gIC8vIFZhbGlkYXRlIGFsbCBwYXJhbXMgaW4gcGFyYWxsZWxcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgcGFyYW0gPSBwW2ldO1xuICAgIHByb21pc2VzLnB1c2godmFsaWRhdGVQYXJhbSh7IC4uLnJlcS5wYXJhbXMsIC4uLnJlcS5xdWVyeSwgLi4ucmVxLmJvZHkgfSwgcGFyYW0sIHBhcmFtc1twW2ldXSwgZmFsc2UpKTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gIGNvbnN0IGVycm9ycyA9IHJlc3VsdHMuZmlsdGVyKHJlc3VsdCA9PiByZXN1bHQgIT09IHRydWUpO1xuXG4gIGlmIChlcnJvcnMubGVuZ3RoKSB7XG4gICAgdGhyb3cgbmV3IEh0dHBFcnJvcihlcnJvcnMuam9pbignOyAnKSwgSHR0cENvZGUuQ2xpZW50LkJBRF9SRVFVRVNUKTtcbiAgfVxuXG4gIG5leHQoKTtcbn07XG5cbmV4cG9ydCBjb25zdCB3cmFwT3JHcm91cCA9IChwYXJhbXM6IHsgW2xhYmVsOiBzdHJpbmddOiBQYXJhbVZhbGlkYXRvciB9LCBtZXNzYWdlOiBzdHJpbmcpID0+IGFzeW5jIChyZXEsIHJlcywgbmV4dCkgPT4ge1xuICBjb25zdCBwID0gT2JqZWN0LmtleXMocGFyYW1zKTtcbiAgY29uc3QgcHJvbWlzZXM6IFByb21pc2U8c3RyaW5nIHwgdHJ1ZT5bXSA9IFtdO1xuXG4gIC8vIFZhbGlkYXRlIGFsbCBwYXJhbXMgaW4gcGFyYWxsZWxcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBwLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgcGFyYW0gPSBwW2ldO1xuICAgIHByb21pc2VzLnB1c2godmFsaWRhdGVQYXJhbSh7IC4uLnJlcS5wYXJhbXMsIC4uLnJlcS5xdWVyeSwgLi4ucmVxLmJvZHkgfSwgcGFyYW0sIHBhcmFtc1twW2ldXSwgZmFsc2UpKTtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gIGNvbnN0IG9yUmVzdWx0ID0gcmVzdWx0cy5zb21lKHJlc3VsdCA9PiByZXN1bHQgPT09IHRydWUpO1xuXG4gIGlmICghb3JSZXN1bHQpIHtcbiAgICB0aHJvdyBuZXcgSHR0cEVycm9yKG1lc3NhZ2UsIEh0dHBDb2RlLkNsaWVudC5CQURfUkVRVUVTVCk7XG4gIH1cblxuICBuZXh0KCk7XG59O1xuIl19