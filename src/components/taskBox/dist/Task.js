import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";

import { TaskState } from "./taskSlice";

const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask, }) => {

    return (_jsxs("div", Object.assign({ className: `list-item ${state}` }, { children: [_jsxs("label", Object.assign({ className: "checkbox" }, { children: [console.log(state === TaskState.TASK_ARCHIVED), _jsx("input", { type: "checkbox", checked: state === TaskState.TASK_ARCHIVED, disabled: true, name: "checked" }, void 0),

                    _jsx("span", { className: "checkbox-custom", onClick: () => onArchiveTask(id) }, void 0)] }), void 0),

            _jsx("div", Object.assign({ className: "title" }, { children: _jsx("input", { type: "text", value: title, readOnly: true, placeholder: "Input title" }, void 0) }), void 0),

            _jsx("div", Object.assign({ className: "actions", onClick: (event) => event.stopPropagation() }, { children: state !== TaskState.TASK_ARCHIVED && (_jsx("a", Object.assign({ onClick: () => onPinTask(id) }, { children: _jsx("span", { className: `icon-star` }, void 0) }), void 0)) }), void 0)] }), void 0));

};

export default Task;

