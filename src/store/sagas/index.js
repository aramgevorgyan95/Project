import { DoctorType } from "../types";
import {takeLatest} from 'redux-saga/effects'
import doctorsListSaga from "./doctorsListSaga";
import setSelectedDoctorSaga from "./setSelectedDoctorSaga";


function* rootSaga(){
    yield takeLatest(DoctorType.SET_DOCTORS_LIST, doctorsListSaga);
    yield takeLatest(DoctorType.SET_SELECTED_DOCTOR, setSelectedDoctorSaga);
}

export default rootSaga;