import { UserTypes } from "../types";

function login(name,email) {
    return {
        type: UserTypes.LOGIN,
        payload: {
            name,
            email
        }
    }
}

export {
    login
}