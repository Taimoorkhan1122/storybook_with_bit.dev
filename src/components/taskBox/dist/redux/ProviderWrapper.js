import { jsx as _jsx } from "react/jsx-runtime";

import { Provider } from "react-redux";

const ProviderWrapper = ({ children, store }) => (_jsx(Provider, Object.assign({ store: store }, { children: children }), void 0));

export default ProviderWrapper;

