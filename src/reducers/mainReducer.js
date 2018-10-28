import { combineReducers } from "redux";

import loginReducer from './loginReducer';
import userReducer from './userReducer';

const mainReducer = combineReducers({
    login: loginReducer,
    user: userReducer
});
export default mainReducer;