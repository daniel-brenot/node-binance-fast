
export default class RequestError extends Error {

    constructor(public code: number, public message: string){
        super(message);
        this.name = `${code}`;
    }
}