import { DoctorType } from '../types'

function setDoctorsAction(list) {
    return {
        type: DoctorType.SET_DOCTORS_LIST,
        payload: list
    }
}


function setSelectedDoctorAction(doctor) {
    return {
        type: DoctorType.SET_SELECTED_DOCTOR,
        payload: doctor
    }
}

export {
    setDoctorsAction,
    setSelectedDoctorAction
}