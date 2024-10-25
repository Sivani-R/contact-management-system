import { prisma } from '../../../lib/prisma';
import bcrypt from 'bcrypt';
import { sendEmail } from '../../../lib/email';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  const { name, email, password } = req.body;

  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Send verification email
    const verificationUrl = `https://yourdomain.com/verify-email?token=${token}`;
    await sendEmail({
      to: email,
      subject: 'Verify your email',
      text: `Please verify your email by clicking on the following link: ${verificationUrl}`,
    });

    res.status(201).json({ message: 'User registered successfully, please check your email to verify' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
}
