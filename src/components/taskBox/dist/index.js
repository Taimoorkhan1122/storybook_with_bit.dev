import { jsx as _jsx } from "react/jsx-runtime";

import ProviderWrapper from './redux/ProviderWrapper';

import { store } from './redux/store';

import { PureInboxScreen } from './InboxScreen';

const TaskBox = () => {

    return (_jsx(ProviderWrapper, Object.assign({ store: store }, { children: _jsx(PureInboxScreen, { error: null }, void 0) }), void 0));

};

export default TaskBox;

