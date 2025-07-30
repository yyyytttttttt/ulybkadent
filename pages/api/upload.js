import { prisma } from '#lib/prisma';
import AWS from 'aws-sdk';
import Busboy from 'busboy';

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

  const busboy = Busboy({ headers: req.headers });
  let fileName = '';
  let uploadPromise = null;

  busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
    const rawName = typeof filename === 'object' ? filename.filename : filename;
    fileName = rawName.replace(/\s+/g, '_');

    const uploadParams = {
      Bucket: process.env.YA_BUCKET_NAME,
      Key: `videos/${fileName}`,
      Body: file,
      ContentType: mimetype,
    };

    uploadPromise = s3.upload(uploadParams).promise();
  });

  busboy.on('finish', async () => {
    try {
      const result = await uploadPromise;

      const newReel = await prisma.reel.create({
        data: {
          title: fileName,
          videoURL: result.Location,
        },
      });

      return res.status(200).json({
        message: 'Видео успешно загружено в облако',
        reel: newReel,
      });
    } catch (error) {
      console.error('Ошибка при загрузке или сохранении:', error);
      return res.status(500).json({ error: 'Ошибка при загрузке в облако или базе' });
    }
  });

  req.pipe(busboy);
}
