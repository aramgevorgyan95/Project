import {combineReducers} from 'redux';
import userReducer from './userReducer';

const reducers = combineReducers({
    // students: ()=>{},
    user: userReducer
});

export default reducers;