import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';
import Video from '../../src/app/models/video';
import { connectToDatabase } from '../../src/app/lib/postgres';

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  console.log("🔥 Вызван pages/api/upload.js");
  
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  await connectToDatabase();

  const form = new IncomingForm({
    uploadDir: path.join(process.cwd(), '/public/uploads'),
    keepExtensions: true,
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: 'Ошибка загрузки файла' });
    }

    const file = files.video[0];
    const relativePath = `/uploads/${path.basename(file.filepath)}`;

    const videoDoc = await Video.create({
      fileName: file.originalFilename,
      url: relativePath,
    });

    return res.status(200).json(videoDoc);
  });
}
