import React from "react";
import figures from "figures";
import { Box, Text } from "ink";
import SelectInput from "ink-select-input";
function SingleChoice(props) {
  const {
    items,
    onSelect
  } = props;
  return /*#__PURE__*/React.createElement(SelectInput, {
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
  return /*#__PURE__*/React.createElement(Box, {
    marginRight: 1
  }, isSelected ? /*#__PURE__*/React.createElement(Text, null, figures.pointer) : /*#__PURE__*/React.createElement(Text, null, " "));
}
function SelectInputItem(props) {
  const {
    isSelected = false,
    label
  } = props;
  const textProps = isSelected ? {
    inverse: true
  } : null;
  return /*#__PURE__*/React.createElement(Text, textProps, label);
}
export default SingleChoice;