
export default class RequestError extends Error {

    constructor(public code: number, public message: string, public oldErr?: any){
        super(message);
        this.name = `${code}`;
    }
}