const doctorListSelector = (state) => state.doctor.doctorList;
const selectedDoctorSelector = (state) => state.doctor.selectedDoctorInfo;
const stateStatus = (state) => state.doctor.status

export {
    doctorListSelector,
    selectedDoctorSelector,
    stateStatus
}