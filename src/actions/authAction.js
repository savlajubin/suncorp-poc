export const logout = () => {
    console.log('a2a22yaya')
    return {
        type: "LOGOUT_USER"
    };
};

export const login = (formData) => {
    console.log('aaya')
    return {
        type: "LOGIN_USER",
        formData: formData
    };
};
