import process from "node:process";
import React from "react";
import {Box, Text} from "ink";
import open from "open";
import Heading from "./heading.js";
import SingleChoice from "./single-choice.js";
import TagBox from "./tag-box.js";

const tags = [
	"React",
	"TanStack Query",
	"Chakra UI",
	"GraphQL",
	"JavaScript",
	"Apollo",
	"TypeScript",
	"Vite",
]
	.sort()
	.map((tagLabel) => ({children: tagLabel}));

function createItems(items) {
	for (const item of items) {
		item.key = item.url || item.label;
	}

	return items;
}

const items = createItems([
	{
		label: "about.me",
		url: "https://about.me/anddoutoi",
	},
	{
		label: "GitHub",
		url: "https://github.com/anddoutoi",
	},
	{
		label: "LinkedIn",
		url: "https://www.linkedin.com/in/anddoutoi",
	},
	{
		label: "Twitter",
		url: "https://twitter.com/anddoutoi",
	},
	{
		label: "Pineapple on pizza?",
		action() {
			console.log("Hell yeah!");
		},
	},
	{
		label: '"anddoutoi"?',
		action() {
			console.log(
				"First three characters from each part of my full\nname concatenated: Anders Douglas Toivo",
			);
		},
	},
	{
		label: "Quit",
		action() {
			process.exit();
		},
	},
]);

function onSelect(item) {
	if (item.url) {
		void open(item.url);
	}

	if (item.action) {
		item.action();
	}
}

function App() {
	return (
		<>
			<Heading>Hello there!</Heading>
			<Box flexDirection="column" width={48}>
				<Text>
					My name is Anders (anddoutoi) and I'm a software developer from Sweden
					that builds HTTP based web applications for a living. I love
					JavaScript, pineapple, attending tech confs and long walks outdoors.
				</Text>
				<Text>My current tech stack:</Text>
				<TagBox marginTop={1} marginX={2} tags={tags} />
			</Box>
			<Box marginTop={1}>
				<SingleChoice items={items} onSelect={onSelect} />
			</Box>
		</>
	);
}

export default App;
