import { prisma } from '#lib/prisma';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

// Отключаем bodyParser
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Метод не разрешён' });
  }

  const uploadDir = path.join(process.cwd(), 'uploads'); // без public
  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir, { recursive: true });
  }

  const form = formidable({
    uploadDir,
    keepExtensions: true,
    filename: (name, ext, part) => {
      return part.originalFilename.replace(/\s+/g, '_');
    },
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Ошибка при разборе формы:', err);
      return res.status(500).json({ error: 'Ошибка при обработке файла' });
    }

    const uploadedFile = Array.isArray(files.video)
      ? files.video[0]
      : files.video;

    if (!uploadedFile) {
      return res.status(400).json({ error: 'Файл не получен' });
    }

    const fileName = uploadedFile.newFilename;
    const originalName = uploadedFile.originalFilename;
    const videoPath = `/api/video/${fileName}`; // путь к API видео

    try {
      const newReel = await prisma.reel.create({
        data: {
          title: originalName,
          videoURL: videoPath,
        },
      });

      return res.status(200).json({
        message: 'Видео успешно загружено',
        reel: newReel,
      });
    } catch (error) {
      console.error('Ошибка при сохранении в БД:', error);
      return res.status(500).json({ error: 'Ошибка сохранения в базу данных' });
    }
  });
}
