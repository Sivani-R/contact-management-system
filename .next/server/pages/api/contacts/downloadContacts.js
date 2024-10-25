"use strict";
(() => {
var exports = {};
exports.id = 152;
exports.ids = [152];
exports.modules = {

/***/ 641:
/***/ ((module) => {

module.exports = require("exceljs");

/***/ }),

/***/ 533:
/***/ ((module) => {

module.exports = require("fast-csv");

/***/ }),

/***/ 358:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 17:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 350:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "_": () => (/* binding */ prisma)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./lib/prisma.js

const prisma = new client_namespaceObject.PrismaClient();



/***/ }),

/***/ 7:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(350);
/* harmony import */ var _lib_fileHandler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(48);


async function handler(req, res) {
    const contacts = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* .prisma.contact.findMany */ ._.contact.findMany({
        select: {
            name: true,
            email: true,
            phone: true,
            address: true,
            timezone: true,
            createdAt: true
        }
    });
    const csvData = (0,_lib_fileHandler__WEBPACK_IMPORTED_MODULE_1__/* .generateCSV */ .wW)(contacts);
    res.setHeader('Content-Disposition', 'attachment; filename=contacts.csv');
    res.setHeader('Content-Type', 'text/csv');
    res.send(csvData);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [48], () => (__webpack_exec__(7)));
module.exports = __webpack_exports__;

})();