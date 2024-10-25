"use strict";
(() => {
var exports = {};
exports.id = 179;
exports.ids = [179];
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

/***/ 335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "k": () => (/* binding */ validateContact)
});

;// CONCATENATED MODULE: external "yup"
const external_yup_namespaceObject = require("yup");
;// CONCATENATED MODULE: ./lib/validation.js

const contactSchema = (0,external_yup_namespaceObject.object)({
    name: (0,external_yup_namespaceObject.string)().required(),
    email: (0,external_yup_namespaceObject.string)().email().required(),
    phone: (0,external_yup_namespaceObject.string)().required(),
    address: (0,external_yup_namespaceObject.string)().required(),
    timezone: (0,external_yup_namespaceObject.string)().required()
});
const validateContact = (data)=>{
    try {
        contactSchema.validateSync(data);
        return null;
    } catch (error) {
        return error.message;
    }
};


/***/ }),

/***/ 549:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(350);
/* harmony import */ var _lib_validation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(335);


async function handler(req, res) {
    const { id  } = req.query;
    const { name , email , phone , address , timezone  } = req.body;
    const validationError = (0,_lib_validation__WEBPACK_IMPORTED_MODULE_1__/* .validateContact */ .k)(req.body);
    if (validationError) return res.status(400).json({
        error: validationError
    });
    const contact = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* .prisma.contact.update */ ._.contact.update({
        where: {
            id: parseInt(id)
        },
        data: {
            name,
            email,
            phone,
            address,
            timezone
        }
    });
    res.json(contact);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(549));
module.exports = __webpack_exports__;

})();