import { prisma } from '../../../lib/prisma';
import dayjs from 'dayjs';

export default async function handler(req, res) {
  const { name, email, timezone, startDate, endDate } = req.query;

  const contacts = await prisma.contact.findMany({
    where: {
      name: name ? { contains: name } : undefined,
      email: email ? { contains: email } : undefined,
      timezone: timezone ? { equals: timezone } : undefined,
      createdAt: startDate && endDate
        ? {
            gte: dayjs(startDate).toDate(),
            lte: dayjs(endDate).toDate(),
          }
        : undefined,
    },
    orderBy: { name: 'asc' }, // default sorting by name
  });

  res.json(contacts);
}
