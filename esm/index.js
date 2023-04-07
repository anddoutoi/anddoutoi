#!/usr/bin/env node

import React from "react";
import {render} from "ink";
import meow from "meow";
import terminalImage from "terminal-image";
//import App from "./app.js";

console.log("ESM SAYS HELLO");
console.log(await terminalImage.file(await import.meta.resolve("./assets/avatar.jpg"), {width: 48}));
