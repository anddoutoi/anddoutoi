import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
function __dirname(url) {
  return dirname(__filename(url));
}
function __filename(url) {
  return fileURLToPath(url);
}
export { __dirname, __filename };