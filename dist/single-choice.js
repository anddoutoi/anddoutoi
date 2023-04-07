"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _figures = _interopRequireDefault(require("figures"));
var _ink = require("ink");
var _inkSelectInput = _interopRequireDefault(require("ink-select-input"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function SingleChoice(props) {
  const {
    items,
    onSelect
  } = props;
  return /*#__PURE__*/_react.default.createElement(_inkSelectInput.default, {
    indicatorComponent: SelectInputIndicator,
    itemComponent: SelectInputItem,
    items: items,
    onSelect: onSelect
  });
}
function SelectInputIndicator(props) {
  const {
    isSelected = false
  } = props;
  return /*#__PURE__*/_react.default.createElement(_ink.Box, {
    marginRight: 1
  }, isSelected ? /*#__PURE__*/_react.default.createElement(_ink.Text, null, _figures.default.pointer) : /*#__PURE__*/_react.default.createElement(_ink.Text, null, " "));
}
function SelectInputItem(props) {
  const {
    isSelected = false,
    label
  } = props;
  const textProps = isSelected ? {
    inverse: true
  } : null;
  return /*#__PURE__*/_react.default.createElement(_ink.Text, textProps, label);
}
var _default = SingleChoice;
exports.default = _default;