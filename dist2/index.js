#!/usr/bin/env node
import React from "react";
import { render } from "ink";
//import meow from "meow";
import terminalImage from "terminal-image";
import App from "./app.js";
import { __dirname } from "./utils.js";

/*
meow(
	`
	Usage
	  $ anddoutoi
`,
	{importMeta: import.meta},
);
*/
console.log(await terminalImage.file(`${__dirname(import.meta.url)}/../assets/avatar.jpg`, {
  width: 48
}));

//render(<App />);