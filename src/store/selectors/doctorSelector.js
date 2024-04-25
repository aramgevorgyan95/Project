const doctorListSelector = (state) => state.doctor.doctorList;
const selectedDoctorSelector = (state) => state.doctor.selectedDoctorInfo

export {
    doctorListSelector,
    selectedDoctorSelector
}