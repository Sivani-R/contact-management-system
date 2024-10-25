"use strict";
(() => {
var exports = {};
exports.id = 28;
exports.ids = [28];
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

/***/ 933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "multer"
const external_multer_namespaceObject = require("multer");
var external_multer_default = /*#__PURE__*/__webpack_require__.n(external_multer_namespaceObject);
// EXTERNAL MODULE: ./lib/fileHandler.js
var fileHandler = __webpack_require__(48);
;// CONCATENATED MODULE: ./pages/api/contacts/fileUpload.js


const upload = external_multer_default()({
    dest: 'uploads/'
});
async function handler(req, res) {
    upload.single('file')(req, res, async ()=>{
        const contacts = await (0,fileHandler/* parseCSV */.bW)(req.file.path);
        // Process contacts
        res.json({
            message: 'File uploaded successfully'
        });
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [48], () => (__webpack_exec__(933)));
module.exports = __webpack_exports__;

})();