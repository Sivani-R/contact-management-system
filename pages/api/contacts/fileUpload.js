import multer from 'multer';
import { parseCSV } from '../../../lib/fileHandler';

const upload = multer({ dest: 'uploads/' });

export default async function handler(req, res) {
  upload.single('file')(req, res, async () => {
    const contacts = await parseCSV(req.file.path);
    // Process contacts
    res.json({ message: 'File uploaded successfully' });
  });
}
