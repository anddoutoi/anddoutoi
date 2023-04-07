"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _inkBigText = _interopRequireDefault(require("ink-big-text"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Heading(props) {
  const {
    children
  } = props;
  return /*#__PURE__*/_react.default.createElement(_inkBigText.default, {
    text: children,
    font: "chrome",
    colors: ["#0F0", "#0C0", "#0A0"]
  });
}
var _default = Heading;
exports.default = _default;