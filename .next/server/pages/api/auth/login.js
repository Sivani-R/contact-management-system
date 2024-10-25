"use strict";
(() => {
var exports = {};
exports.id = 908;
exports.ids = [908];
exports.modules = {

/***/ 96:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

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

/***/ 330:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./lib/prisma.js + 1 modules
var prisma = __webpack_require__(350);
// EXTERNAL MODULE: external "jsonwebtoken"
var external_jsonwebtoken_ = __webpack_require__(344);
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_);
;// CONCATENATED MODULE: ./lib/jwt.js

const verifyToken = (token)=>{
    return jwt.verify(token, "044ca0161c396dfc70342bcfd3a3ef60541130c0ba2e05fae5e91a48aeea7c52c231e40b8f056db614e37163f50823e106eedcdf5ba12b54e23a96e8fa9f2a1f");
};

// EXTERNAL MODULE: external "bcrypt"
var external_bcrypt_ = __webpack_require__(96);
var external_bcrypt_default = /*#__PURE__*/__webpack_require__.n(external_bcrypt_);
;// CONCATENATED MODULE: ./pages/api/auth/login.js




async function handler(req, res) {
    const { email , password  } = req.body;
    try {
        const user = await prisma/* prisma.user.findUnique */._.user.findUnique({
            where: {
                email
            }
        });
        if (!user) {
            return res.status(401).json({
                error: 'Invalid email or password'
            });
        }
        const isPasswordValid = await external_bcrypt_default().compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({
                error: 'Invalid email or password'
            });
        }
        const token = external_jsonwebtoken_default().sign({
            userId: user.id
        }, "044ca0161c396dfc70342bcfd3a3ef60541130c0ba2e05fae5e91a48aeea7c52c231e40b8f056db614e37163f50823e106eedcdf5ba12b54e23a96e8fa9f2a1f", {
            expiresIn: '1h'
        });
        res.status(200).json({
            token
        });
    } catch (error) {
        res.status(500).json({
            error: 'Internal server error'
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
var __webpack_exports__ = (__webpack_exec__(330));
module.exports = __webpack_exports__;

})();