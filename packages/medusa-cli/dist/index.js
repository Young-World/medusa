#!/usr/bin/env node
"use strict";

require("core-js/stable");
require("regenerator-runtime/runtime");
var _os = _interopRequireDefault(require("os"));
var _semver = _interopRequireDefault(require("semver"));
var _util = _interopRequireDefault(require("util"));
var _createCli = _interopRequireDefault(require("./create-cli"));
var _package = _interopRequireDefault(require("../package.json"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// import report from "./reporter"

// import updateNotifier from "update-notifier"
// import { ensureWindowsDriveLetterIsUppercase } from "./util/ensure-windows-drive-letter-is-uppercase"

var useJsonLogger = process.argv.slice(2).some(function (arg) {
  return arg.includes("json");
});
if (useJsonLogger) {
  process.env.GATSBY_LOGGER = "json";
}

// Ensure stable runs on Windows when started from different shells (i.e. c:\dir vs C:\dir)
if (_os["default"].platform() === "win32") {
  // ensureWindowsDriveLetterIsUppercase()
}

// Check if update is available
// updateNotifier({ pkg }).notify({ isGlobal: true })

var MIN_NODE_VERSION = "10.13.0";
// const NEXT_MIN_NODE_VERSION = `10.13.0`

if (!_semver["default"].satisfies(process.version, ">=".concat(MIN_NODE_VERSION))) {
  //report.panic(
  //  report.stripIndent(`
  //    Gatsby requires Node.js ${MIN_NODE_VERSION} or higher (you have ${process.version}).
  //    Upgrade Node to the latest stable release: https://gatsby.dev/upgrading-node-js
  //  `)
  //)
}

// if (!semver.satisfies(process.version, `>=${NEXT_MIN_NODE_VERSION}`)) {
//   report.warn(
//     report.stripIndent(`
//       Node.js ${process.version} has reached End of Life status on 31 December, 2019.
//       Gatsby will only actively support ${NEXT_MIN_NODE_VERSION} or higher and drop support for Node 8 soon.
//       Please upgrade Node.js to a currently active LTS release: https://gatsby.dev/upgrading-node-js
//     `)
//   )
// }

process.on("unhandledRejection", function (reason) {
  // This will exit the process in newer Node anyway so lets be consistent
  // across versions and crash

  // reason can be anything, it can be a message, an object, ANYTHING!
  // we convert it to an error object so we don't crash on structured error validation
  if (!(reason instanceof Error)) {
    reason = new Error(_util["default"].format(reason));
  }
  console.log(reason);
  // report.panic(`UNHANDLED REJECTION`, reason as Error)
});

process.on("uncaughtException", function (error) {
  console.log(error);
  // report.panic(`UNHANDLED EXCEPTION`, error)
});

(0, _createCli["default"])(process.argv);