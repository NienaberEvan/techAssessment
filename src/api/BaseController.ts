export default class BaseController {
    readonly apiHost: string;

    constructor() {
        this.apiHost = 'https://api.github.com';
    }

    checkStatusCode(status: number): boolean {
        return status >= 200 && status < 300
    }

    // try catch, for possible future expansion to get headers from API call if needed
    getHeader = (moreHeaders?: any) => {
        try {
            const options = {
                method: 'GET',
                headers: new Headers({
                    "content-type": 'application/json',
                    ...moreHeaders
                })
            }
            return options
        } catch(error) {
            console.error({error})
        }
        return {}
    }
}