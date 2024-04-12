export const reCatalog = (state = [], action) => {
  switch (action.type) {
    case "CART":
      return action.payload;
    default:
      return state;
  }
};

export const acCatalog = (catalog) => {
  return {
    type: "CART",
    payload: catalog,
  };
};
