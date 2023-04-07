#!/usr/bin/env node

import {dirname} from "node:path";
import {fileURLToPath} from "node:url";
import React from "react";
import {render} from "ink";
import meow from "meow";
import terminalImage from "terminal-image";

//import App from "./app.js";

console.log("ESM SAYS HELLO");
console.log(await terminalImage.file(`${__dirname(import.meta.url)}/../assets/avatar.jpg`, {width: 48}));



function __dirname(url) {
	return dirname(__filename(url));
}

function __filename(url) {
	return fileURLToPath(url);
}
