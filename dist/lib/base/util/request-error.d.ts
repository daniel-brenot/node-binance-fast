export default class RequestError extends Error {
    code: number;
    message: string;
    oldErr?: Error;
    constructor(code: number, message: string, oldErr?: any);
}
//# sourceMappingURL=request-error.d.ts.map