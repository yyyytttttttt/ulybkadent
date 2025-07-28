import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { prisma } from '#lib/prisma';

// Отключаем встроенный body parser
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Метод не разрешён' });
  }

  // Убедимся, что папка существует
  const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
  if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir, { recursive: true });

  const form = formidable({
    uploadDir: uploadsDir,
    keepExtensions: true,
    filename: (name, ext, part) => {
      return part.originalFilename.replace(/\s+/g, '_'); // убираем пробелы
    },
  });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Ошибка разбора формы:', err);
      return res.status(500).json({ error: 'Ошибка загрузки' });
    }

    const uploadedFile = files.video?.[0];
    if (!uploadedFile) {
      return res.status(400).json({ error: 'Файл не получен' });
    }

    const fileName = uploadedFile.newFilename;
    const originalName = uploadedFile.originalFilename;
    const videoPath = `/uploads/${fileName}`;

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
    } catch (dbError) {
      console.error('Ошибка базы данных:', dbError);
      return res.status(500).json({ error: 'Ошибка при сохранении в БД' });
    }
  });
}
