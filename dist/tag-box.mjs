function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from "react";
import { Box, Text } from "ink";
function TagBox(props) {
  const {
    random,
    tags,
    ...otherBoxProps
  } = props;
  return /*#__PURE__*/React.createElement(Box, _extends({
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
    return /*#__PURE__*/React.createElement(Tag, {
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
  return /*#__PURE__*/React.createElement(Text, {
    color: color,
    inverse: true
  }, children);
}
export default TagBox;