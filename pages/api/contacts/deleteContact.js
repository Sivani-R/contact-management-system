import { prisma } from '../../../lib/prisma';

export default async function handler(req, res) {
  const { id } = req.query;

  // Soft delete by setting deletedAt timestamp
  const contact = await prisma.contact.update({
    where: { id: parseInt(id) },
    data: { deletedAt: new Date() },
  });

  res.json({ message: 'Contact soft deleted', contact });
}
