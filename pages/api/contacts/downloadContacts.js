import { prisma } from '../../../lib/prisma';
import { generateCSV } from '../../../lib/fileHandler';

export default async function handler(req, res) {
  const contacts = await prisma.contact.findMany({
    select: {
      name: true,
      email: true,
      phone: true,
      address: true,
      timezone: true,
      createdAt: true,
    },
  });

  const csvData = generateCSV(contacts);
  res.setHeader('Content-Disposition', 'attachment; filename=contacts.csv');
  res.setHeader('Content-Type', 'text/csv');
  res.send(csvData);
}
