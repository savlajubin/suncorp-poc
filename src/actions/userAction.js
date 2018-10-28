export const getUserData = () => {
  return {
    type: "GET_USER_DATA"
  };
};

export const getUserDataById = (id) => {
  return {
    type: "GET_USER_DATA_BY_ID",
    id
  };
};

export const activateEdit = () => {
  return {
    type: "ACTIVATE_USER_EDIT"
  };
};

export const updateUser = (data) => {
  return {
    type: "UPDATE_USER"
  };
};
