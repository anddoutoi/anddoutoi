"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _ink = require("ink");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function TagBox(props) {
  const {
    random,
    tags,
    ...otherBoxProps
  } = props;
  return /*#__PURE__*/_react.default.createElement(_ink.Box, _extends({
    borderStyle: "round",
    paddingX: 2,
    paddingY: 1
  }, otherBoxProps, {
    columnGap: 2,
    flexWrap: "wrap",
    justifyContent: "space-around",
    rowGap: 1
  }), tags.map((tagProps, index) => {
    const {
      children,
      color = "green"
    } = tagProps;
    return /*#__PURE__*/_react.default.createElement(Tag, {
      key: `${children}-${index}`,
      color: color
    }, children);
  }));
}
function Tag(props) {
  const {
    children,
    color
  } = props;
  return /*#__PURE__*/_react.default.createElement(_ink.Text, {
    color: color,
    inverse: true
  }, children);
}
var _default = TagBox;
exports.default = _default;