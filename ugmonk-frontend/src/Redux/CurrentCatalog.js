export const reCurrentCatalog = (
  state = JSON.parse(localStorage.getItem("current_catalog")) || {
    name: "All",
  },
  action
) => {
  switch (action.type) {
    case "CURRENTCATALOG":
      return action.payload;
    default:
      return state;
  }
};

export const acCurrentCatalog = (catalog) => {
  return {
    type: "CURRENTCATALOG",
    payload: catalog,
  };
};
