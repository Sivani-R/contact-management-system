"use strict";
(() => {
var exports = {};
exports.id = 685;
exports.ids = [685];
exports.modules = {

/***/ 344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

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

/***/ 477:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(350);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);


async function handler(req, res) {
    const { token  } = req.query;
    try {
        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default().verify(token, "044ca0161c396dfc70342bcfd3a3ef60541130c0ba2e05fae5e91a48aeea7c52c231e40b8f056db614e37163f50823e106eedcdf5ba12b54e23a96e8fa9f2a1f");
        const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* .prisma.user.update */ ._.user.update({
            where: {
                id: decoded.userId
            },
            data: {
                emailVerified: true
            }
        });
        res.status(200).json({
            message: 'Email verified successfully'
        });
    } catch (error) {
        res.status(400).json({
            error: 'Invalid or expired token'
        });
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(477));
module.exports = __webpack_exports__;

})();