import { configure } from "@testing-library/dom";

configure(function () {
  require("../src/stories/Taskslist.stories");
}, module);