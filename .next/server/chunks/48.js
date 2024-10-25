"use strict";
exports.id = 48;
exports.ids = [48];
exports.modules = {

/***/ 48:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "bW": () => (/* binding */ parseCSV),
/* harmony export */   "wW": () => (/* binding */ generateCSV)
/* harmony export */ });
/* unused harmony export parseExcel */
/* harmony import */ var fast_csv__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(533);
/* harmony import */ var fast_csv__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fast_csv__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(358);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(641);
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_3__);




const parseCSV = (filePath)=>{
    return new Promise((resolve, reject)=>{
        const contacts = [];
        fs__WEBPACK_IMPORTED_MODULE_1___default().createReadStream(filePath).pipe(fast_csv__WEBPACK_IMPORTED_MODULE_0___default().parse({
            headers: true
        })).on('data', (row)=>contacts.push(row)
        ).on('end', ()=>resolve(contacts)
        ).on('error', reject);
    });
};
const generateCSV = (contacts)=>{
    const csvStream = fast_csv__WEBPACK_IMPORTED_MODULE_0___default().format({
        headers: true
    });
    const data = [];
    contacts.forEach((contact)=>{
        data.push({
            Name: contact.name,
            Email: contact.email,
            Phone: contact.phone,
            Address: contact.address,
            Timezone: contact.timezone,
            CreatedAt: contact.createdAt.toISOString()
        });
    });
    return csvStream.write(data).end();
};
const parseExcel = async (filePath)=>{
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const contacts = [];
    const worksheet = workbook.getWorksheet(1);
    worksheet.eachRow({
        includeEmpty: false
    }, (row, rowNumber)=>{
        if (rowNumber > 1) {
            contacts.push({
                name: row.getCell(1).value,
                email: row.getCell(2).value,
                phone: row.getCell(3).value,
                address: row.getCell(4).value,
                timezone: row.getCell(5).value
            });
        }
    });
    return contacts;
};


/***/ })

};
;