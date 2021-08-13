import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

import { connect } from "react-redux";

import Tasklist from "./Tasklist";

export const PureInboxScreen = ({ error }) => {

    if (error) {

        return (_jsx("div", Object.assign({ className: "page lists-show" }, { children: _jsxs("div", Object.assign({ className: "wrapper-message" }, { children: [_jsx("span", { className: "icon-face-sad" }, void 0),

                    _jsx("div", Object.assign({ className: "title-message" }, { children: "Oh no!" }), void 0),

                    _jsx("div", Object.assign({ className: "subtitle-message" }, { children: "Something went wrong" }), void 0)] }), void 0) }), void 0));

    }

    return (_jsxs("div", Object.assign({ className: "page lists-show" }, { children: [_jsx("nav", { children: _jsxs("h1", Object.assign({ className: "title-page" }, { children: [_jsx("span", Object.assign({ className: "title-wrapper" }, { children: "Taskbox" }), void 0), _jsx("br", {}, void 0),

                        _jsx("h5", Object.assign({ className: "title-wrapper" }, { children: "By Taimoor khan" }), void 0)] }), void 0) }, void 0),

            _jsx(Tasklist, { loading: false }, void 0)] }), void 0));

};

PureInboxScreen.defaultProps = {

    error: null,

};

export default connect((state) => ({ error: state.error }))(PureInboxScreen);

