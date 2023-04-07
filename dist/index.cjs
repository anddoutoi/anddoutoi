#!/usr/bin/env node
"use strict";

var _react = _interopRequireDefault(require("react"));
var _ink = require("ink");
var _terminalImage = _interopRequireDefault(require("terminal-image"));
var _app = _interopRequireDefault(require("./app.cjs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//import meow from "meow";

/*
meow(
	`
	Usage
	  $ anddoutoi
`,
	{importMeta: import.meta},
);
*/
console.log(await _terminalImage.default.file("./assets/avatar.jpg", {
  width: 48
}));
(0, _ink.render)( /*#__PURE__*/_react.default.createElement(_app.default, null));