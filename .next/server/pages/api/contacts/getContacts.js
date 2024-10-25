"use strict";
(() => {
var exports = {};
exports.id = 973;
exports.ids = [973];
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

/***/ 277:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./lib/prisma.js + 1 modules
var prisma = __webpack_require__(350);
;// CONCATENATED MODULE: external "dayjs"
const external_dayjs_namespaceObject = require("dayjs");
var external_dayjs_default = /*#__PURE__*/__webpack_require__.n(external_dayjs_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/contacts/getContacts.js


async function handler(req, res) {
    const { name , email , timezone , startDate , endDate  } = req.query;
    const contacts = await prisma/* prisma.contact.findMany */._.contact.findMany({
        where: {
            name: name ? {
                contains: name
            } : undefined,
            email: email ? {
                contains: email
            } : undefined,
            timezone: timezone ? {
                equals: timezone
            } : undefined,
            createdAt: startDate && endDate ? {
                gte: external_dayjs_default()(startDate).toDate(),
                lte: external_dayjs_default()(endDate).toDate()
            } : undefined
        },
        orderBy: {
            name: 'asc'
        }
    });
    res.json(contacts);
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(277));
module.exports = __webpack_exports__;

})();