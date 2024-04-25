import { combineReducers } from 'redux';
import doctorReducer from './doctorReducer';

const reducers = combineReducers({
    doctor: doctorReducer,
});

export default reducers;