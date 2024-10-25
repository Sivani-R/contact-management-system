import { prisma } from '../../../lib/prisma';
import bcrypt from 'bcrypt';
import { sendEmail } from '../../../lib/email';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  const { email } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '15m' });

    const resetUrl = `https://yourdomain.com/reset-password?token=${token}`;
    await sendEmail({
      to: email,
      subject: 'Password Reset',
      text: `Click the following link to reset your password: ${resetUrl}`,
    });

    res.status(200).json({ message: 'Password reset email sent' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
