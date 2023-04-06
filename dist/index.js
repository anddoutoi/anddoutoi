#!/usr/bin/env node
import React from "react";
import { render } from "ink";
import meow from "meow";
import terminalImage from "terminal-image";
import App from "./app.js";
meow(`
	Usage
	  $ anddoutoi
`, {
  importMeta: import.meta
});
console.log(await terminalImage.file("assets/avatar.jpg", {
  width: 48
}));
render( /*#__PURE__*/React.createElement(App, null));