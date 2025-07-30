import { prisma } from '#lib/prisma';
import formidable from 'formidable';
import fs from 'fs';
import AWS from 'aws-sdk';

// Отключаем bodyParser
export const config = {
  api: {
    bodyParser: false,
  },
};

// Настройка подключения к Object Storage Яндекса
const s3 = new AWS.S3({
  endpoint: 'https://storage.yandexcloud.net',
  region: 'ru-central1',
  credentials: {
    accessKeyId: process.env.YA_ACCESS_KEY_ID,
    secretAccessKey: process.env.YA_SECRET_ACCESS_KEY,
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Метод не разрешён' });
  }

  const form = formidable({ keepExtensions: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Ошибка при разборе формы:', err);
      return res.status(500).json({ error: 'Ошибка при обработке файла' });
    }

    const uploadedFile = Array.isArray(files.video) ? files.video[0] : files.video;

    if (!uploadedFile) {
      return res.status(400).json({ error: 'Файл не получен' });
    }

    const fileStream = fs.createReadStream(uploadedFile.filepath);
    const originalName = uploadedFile.originalFilename.replace(/\s+/g, '_');

    const uploadParams = {
      Bucket: process.env.YA_BUCKET_NAME,
      Key: `videos/${originalName}`,
      Body: fileStream,
      ContentType: uploadedFile.mimetype,
    };

    try {
      const result = await s3.upload(uploadParams).promise();

      const newReel = await prisma.reel.create({
        data: {
          title: originalName,
          videoURL: result.Location, // Ссылка из облака
        },
      });

      return res.status(200).json({
        message: 'Видео успешно загружено в облако',
        reel: newReel,
      });
    } catch (error) {
      console.error('Ошибка при загрузке в облако или сохранении в БД:', error);
      return res.status(500).json({ error: 'Ошибка загрузки файла в облако или сохранения в базу данных' });
    }
  });
}
