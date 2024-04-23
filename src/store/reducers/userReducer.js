import { UserTypes } from "../types";

const initData = {
    name: null,
    emial: null
}

export default function (state = initData, action) {
    const { type, payload } = action
    switch (type) {
        case UserTypes.LOGIN:
                return payload;
        default:
            break;
    }
    return state
}