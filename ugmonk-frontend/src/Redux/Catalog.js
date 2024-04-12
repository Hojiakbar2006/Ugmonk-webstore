export const reCatalog = (
  state = [],
  action
) => {
  switch (action.type) {
    case "CATALOG":
      return action.payload;
    default:
      return state;
  }
};

export const acCatalog = (catalog) => {
  return {
    type: "CATALOG",
    payload: catalog,
  };
};
