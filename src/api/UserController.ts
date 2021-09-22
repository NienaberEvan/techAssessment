import BaseController from "./BaseController";

export interface UserControllerInterface {
    urlEvents: string;
    fetchActivity: (username: string) => Promise<any[]>
}

class UserControllerClass extends BaseController {
    readonly urlEvents: string
    constructor() {
        super()
        this.urlEvents = `events/public`
    }

    async fetchActivity(username: string): Promise<any[]> {
        let response: any = await fetch(`${this.apiHost}/users/${username}/${this.urlEvents}`, this.getHeader())

        if (this.checkStatusCode(response.status)) {
            let data = await response.json()
            return data
        } else {
            return []
        }
    }

    // future expansion: get list of users with partial name
    async fetchUsers(partialName: string): Promise<any[]> {
        let response: any = await fetch(`${this.apiHost}/users/${partialName}`, this.getHeader())

        if (this.checkStatusCode(response.status)) {
            let data = await response.json()
            return data
        } else {
            return []
        }
    }
}

const UserController: UserControllerInterface = new UserControllerClass();
export default UserController;