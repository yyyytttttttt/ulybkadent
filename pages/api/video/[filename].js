import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  const { filename } = req.query;
  const filePath = path.join(process.cwd(), 'uploads', filename);

  if (!fs.existsSync(filePath)) {
    return res.status(404).json({ error: 'Файл не найден' });
  }

  const stat = fs.statSync(filePath);
  res.writeHead(200, {
    'Content-Type': 'video/mp4',
    'Content-Length': stat.size,
  });

  const readStream = fs.createReadStream(filePath);
  readStream.pipe(res);
}
