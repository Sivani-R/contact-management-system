"use strict";
(() => {
var exports = {};
exports.id = 7;
exports.ids = [7];
exports.modules = {

/***/ 96:
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ 344:
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ 709:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "C": () => (/* binding */ sendEmail)
});

;// CONCATENATED MODULE: external "nodemailer"
const external_nodemailer_namespaceObject = require("nodemailer");
var external_nodemailer_default = /*#__PURE__*/__webpack_require__.n(external_nodemailer_namespaceObject);
;// CONCATENATED MODULE: ./lib/email.js

const transporter = external_nodemailer_default().createTransport({
    host: "smtp.mailtrap.io",
    port: "2525",
    secure: false,
    auth: {
        user: "sivaniramachandran85@gmail.com",
        pass: "Sivani632503"
    }
});
async function sendEmail({ to , subject , text  }) {
    const info = await transporter.sendMail({
        from: `"Support" <${"sivaniramachandran85@gmail.com"}>`,
        to,
        subject,
        text
    });
    return info;
}


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

/***/ 567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(350);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96);
/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lib_email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(709);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(344);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_3__);




async function handler(req, res) {
    const { name , email , password  } = req.body;
    try {
        const existingUser = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* .prisma.user.findUnique */ ._.user.findUnique({
            where: {
                email
            }
        });
        if (existingUser) {
            return res.status(400).json({
                error: 'Email already exists'
            });
        }
        const hashedPassword = await bcrypt__WEBPACK_IMPORTED_MODULE_1___default().hash(password, 10);
        const user = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__/* .prisma.user.create */ ._.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        });
        const token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_3___default().sign({
            userId: user.id
        }, "044ca0161c396dfc70342bcfd3a3ef60541130c0ba2e05fae5e91a48aeea7c52c231e40b8f056db614e37163f50823e106eedcdf5ba12b54e23a96e8fa9f2a1f", {
            expiresIn: '1h'
        });
        // Send verification email
        const verificationUrl = `https://yourdomain.com/verify-email?token=${token}`;
        await (0,_lib_email__WEBPACK_IMPORTED_MODULE_2__/* .sendEmail */ .C)({
            to: email,
            subject: 'Verify your email',
            text: `Please verify your email by clicking on the following link: ${verificationUrl}`
        });
        res.status(201).json({
            message: 'User registered successfully, please check your email to verify'
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
var __webpack_exports__ = (__webpack_exec__(567));
module.exports = __webpack_exports__;

})();