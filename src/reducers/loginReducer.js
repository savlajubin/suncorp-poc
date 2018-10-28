const initState = {
    loggedin: false
};

const loginReducer = (state = initState, action) => {

    if(action.type === 'LOGIN_USER_ASYNC') {
        return {
            ...state,
            loggedin: true,
            loggedinUser: action.val
        }
    }

    if(action.type === 'LOGIN_USER_FAILED_ASYNC') {
        console.log('FAILED');
        return {
            ...state,
            loggedin: false
        }
    }

    if(action.type === 'LOGOUT_USER') {
        return {
            ...state,
            loggedin: false,
            loggedinUser: {}
        }
    }

    return state;
}
export default loginReducer;