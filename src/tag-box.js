import React from "react";
import {Box, Text} from "ink";

function TagBox(props) {
	const {random, tags, ...otherBoxProps} = props;

	return (
		<Box
			borderStyle="round"
			paddingX={2}
			paddingY={1}
			{...otherBoxProps}
			columnGap={2}
			flexWrap="wrap"
			justifyContent="space-around"
			rowGap={1}
		>
			{tags.map((tagProps, index) => {
				const {children, color = "green"} = tagProps;

				return (
					<Tag key={`${children}-${index}`} color={color}>
						{children}
					</Tag>
				);
			})}
		</Box>
	);
}

function Tag(props) {
	const {children, color} = props;

	return (
		<Text color={color} inverse>
			{children}
		</Text>
	);
}

export default TagBox;
