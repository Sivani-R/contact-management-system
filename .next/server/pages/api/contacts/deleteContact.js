"use strict";
(() => {
var exports = {};
exports.id = 801;
exports.ids = [801];
exports.modules = {

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

/***/ 460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(350);

async function handler(req, res) {
    const { id  } = req.query;
    // Soft delete by setting deletedAt timestamp
    const contact = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* .prisma.contact.update */ ._.contact.update({
        where: {
            id: parseInt(id)
        },
        data: {
            deletedAt: new Date()
        }
    });
    res.json({
        message: 'Contact soft deleted',
        contact
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(460));
module.exports = __webpack_exports__;

})();