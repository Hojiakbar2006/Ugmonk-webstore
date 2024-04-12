export const reFormModal = (state = false, action) => {
  switch (action.type) {
    case "FORMMODAL":
      return action.payload;
    default:
      return state;
  }
};

export const acFormModal = (catalog) => {
  return {
    type: "FORMMODAL",
    payload: catalog,
  };
};
