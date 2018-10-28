const initState = {
    user: [],
    userData: {
        address: {}
    },
    editMode: false
};

const userReducer = (state = initState, action) => {

    if (action.type === 'GET_USER_DATA_ASYNC') {
        return {
            ...state,
            user: action.val
        }
    }

    if (action.type === 'GET_USER_DATA_BY_ID_ASYNC') {
        return {
            ...state,
            userData: action.val
        }
    }

    if (action.type === 'ACTIVATE_USER_EDIT') {
        return {
            ...state,
            editMode: true
        }
    }

    return state;
};
export default userReducer;