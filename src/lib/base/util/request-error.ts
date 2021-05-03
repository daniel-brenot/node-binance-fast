
export default class RequestError extends Error {

    oldErr?: Error;

    constructor(public code: number, public message: string, oldErr?: any){
        super(message);
        this.name = `${code}`;
        this.oldErr = oldErr;
    }
}