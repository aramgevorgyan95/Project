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

function changeStatus(status){
    return{
        type:DoctorType.STATUS,
        payload: status
    }
}

export {
    setDoctorsAction,
    setSelectedDoctorAction,
    changeStatus
}