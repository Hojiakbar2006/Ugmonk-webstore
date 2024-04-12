import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reProduct } from "./Product";
import { reLoading } from "./Loading";
import { reCurrentCatalog } from "./CurrentCatalog";
import { reCatalog } from "./Catalog";
import { reFormModal } from "./Form";

const reducer = combineReducers({
  product: reProduct,
  loading: reLoading,
  catalog: reCatalog,
  currentCatalog: reCurrentCatalog,
  formModal: reFormModal,
});

export const Store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});
