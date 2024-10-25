import { prisma } from '../../../lib/prisma';
import { validateContact } from '../../../lib/validation';

export default async function handler(req, res) {
  const { id } = req.query;
  const { name, email, phone, address, timezone } = req.body;

  const validationError = validateContact(req.body);
  if (validationError) return res.status(400).json({ error: validationError });

  const contact = await prisma.contact.update({
    where: { id: parseInt(id) },
    data: { name, email, phone, address, timezone },
  });

  res.json(contact);
}
