import csv from 'fast-csv';
import fs from 'fs';
import path from 'path';
import ExcelJS from 'exceljs';

export const parseCSV = (filePath) => {
  return new Promise((resolve, reject) => {
    const contacts = [];
    fs.createReadStream(filePath)
      .pipe(csv.parse({ headers: true }))
      .on('data', (row) => contacts.push(row))
      .on('end', () => resolve(contacts))
      .on('error', reject);
  });
};

export const generateCSV = (contacts) => {
  const csvStream = csv.format({ headers: true });
  const data = [];
  
  contacts.forEach(contact => {
    data.push({
      Name: contact.name,
      Email: contact.email,
      Phone: contact.phone,
      Address: contact.address,
      Timezone: contact.timezone,
      CreatedAt: contact.createdAt.toISOString(),
    });
  });

  return csvStream.write(data).end();
};

export const parseExcel = async (filePath) => {
  const workbook = new ExcelJS.Workbook();
  await workbook.xlsx.readFile(filePath);

  const contacts = [];
  const worksheet = workbook.getWorksheet(1);

  worksheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
    if (rowNumber > 1) { // skip header
      contacts.push({
        name: row.getCell(1).value,
        email: row.getCell(2).value,
        phone: row.getCell(3).value,
        address: row.getCell(4).value,
        timezone: row.getCell(5).value,
      });
    }
  });

  return contacts;
};
