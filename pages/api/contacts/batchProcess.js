import { prisma } from '../../../lib/prisma';
import { validateContact } from '../../../lib/validation';

export default async function handler(req, res) {
  const { contacts } = req.body; // Array of contacts

  await prisma.$transaction(async (tx) => {
    for (let contact of contacts) {
      const validationError = validateContact(contact);
      if (validationError) return res.status(400).json({ error: validationError });

      await tx.contact.upsert({
        where: { email: contact.email },
        create: { ...contact },
        update: { ...contact },
      });
    }
  });

  res.json({ message: 'Batch processed successfully' });
}
