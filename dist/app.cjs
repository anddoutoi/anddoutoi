"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _nodeProcess = _interopRequireDefault(require("node:process"));
var _react = _interopRequireDefault(require("react"));
var _ink = require("ink");
var _open = _interopRequireDefault(require("open"));
var _heading = _interopRequireDefault(require("./heading.cjs"));
var _singleChoice = _interopRequireDefault(require("./single-choice.cjs"));
var _tagBox = _interopRequireDefault(require("./tag-box.cjs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const tags = ["React", "TanStack Query", "Chakra UI", "GraphQL", "JavaScript", "Apollo", "TypeScript", "Vite"].sort().map(tagLabel => ({
  children: tagLabel
}));
function createItems(items) {
  for (const item of items) {
    item.key = item.url || item.label;
  }
  return items;
}
const items = createItems([{
  label: "about.me",
  url: "https://about.me/anddoutoi"
}, {
  label: "GitHub",
  url: "https://github.com/anddoutoi"
}, {
  label: "LinkedIn",
  url: "https://www.linkedin.com/in/anddoutoi"
}, {
  label: "Twitter",
  url: "https://twitter.com/anddoutoi"
}, {
  label: "Pineapple on pizza?",
  action() {
    console.log("Hell yeah!");
  }
}, {
  label: '"anddoutoi"?',
  action() {
    console.log("First three characters from each part of my full\nname concatenated: Anders Douglas Toivo");
  }
}, {
  label: "Quit",
  action() {
    _nodeProcess.default.exit();
  }
}]);
function onSelect(item) {
  if (item.url) {
    void (0, _open.default)(item.url);
  }
  if (item.action) {
    item.action();
  }
}
function App() {
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_heading.default, null, "Hello there!"), /*#__PURE__*/_react.default.createElement(_ink.Box, {
    flexDirection: "column",
    width: 48
  }, /*#__PURE__*/_react.default.createElement(_ink.Text, null, "My name is Anders (anddoutoi) and I'm a software developer from Sweden that builds HTTP based web applications for a living. I love JavaScript, pineapple, attending tech confs and long walks outdoors."), /*#__PURE__*/_react.default.createElement(_ink.Text, null, "My current tech stack:"), /*#__PURE__*/_react.default.createElement(_tagBox.default, {
    marginTop: 1,
    marginX: 2,
    tags: tags
  })), /*#__PURE__*/_react.default.createElement(_ink.Box, {
    marginTop: 1
  }, /*#__PURE__*/_react.default.createElement(_singleChoice.default, {
    items: items,
    onSelect: onSelect
  })));
}
var _default = App;
exports.default = _default;