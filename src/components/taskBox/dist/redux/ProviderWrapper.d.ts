import React from "react";

import { store } from "./store";

interface Props {

    children: React.ReactNode;

    store: typeof store;

}

declare const ProviderWrapper: React.FC<Props>;

export default ProviderWrapper;

