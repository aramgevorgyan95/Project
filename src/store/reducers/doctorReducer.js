import { DoctorType } from "../types";

const initData = {
    doctorList: [],
    selectedDoctorInfo: null
}

export default function (state = initData, action){
    const {type, payload} = action;
    switch (type) {
        case DoctorType.SET_DOCTORS_LIST:
            return {...state, doctorList: payload}
        case DoctorType.SET_SELECTED_DOCTOR:
            return {...state, selectedDoctorInfo: payload}
        default:
            return state
    }
}