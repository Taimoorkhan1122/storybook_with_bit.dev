import React from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface Props {
    children : React.ReactNode,
     store : typeof store
}
const ProviderWrapper: React.FC<Props> = ({ children, store }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default ProviderWrapper;
