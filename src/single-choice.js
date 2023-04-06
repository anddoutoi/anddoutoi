import React from "react";
import figures from "figures";
import {Box, Text} from "ink";
import SelectInput from "ink-select-input";

function SingleChoice(props) {
	const {items, onSelect} = props;

	return (
		<SelectInput
			indicatorComponent={SelectInputIndicator}
			itemComponent={SelectInputItem}
			items={items}
			onSelect={onSelect}
		/>
	);
}

function SelectInputIndicator(props) {
	const {isSelected = false} = props;

	return (
		<Box marginRight={1}>
			{isSelected ? <Text>{figures.pointer}</Text> : <Text> </Text>}
		</Box>
	);
}

function SelectInputItem(props) {
	const {isSelected = false, label} = props;
	const textProps = isSelected ? {inverse: true} : null;

	return <Text {...textProps}>{label}</Text>;
}

export default SingleChoice;
