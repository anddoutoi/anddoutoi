import React from "react";
import BigText from "ink-big-text";

function Heading(props) {
	const {children} = props;

	return (
		<BigText text={children} font="chrome" colors={["#0F0", "#0C0", "#0A0"]} />
	);
}

export default Heading;
