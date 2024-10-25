import { prisma } from '../../../lib/prisma';
import { validateContact } from '../../../lib/validation';

export default async function handler(req, res) {
  const { name, email, phone, address, timezone } = req.body;
  const validationError = validateContact(req.body);
  
  if (validationError) return res.status(400).json({ error: validationError });

  const contact = await prisma.contact.create({
    data: { name, email, phone, address, timezone, userId: req.userId }
  });

  res.json(contact);
}
