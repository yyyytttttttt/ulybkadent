export const runtime = 'nodejs'
import { NextResponse } from 'next/server';
import { prisma } from '#lib/prisma';
import { writeFile } from 'fs/promises';
import path from 'path';
import fs from 'fs'; // 👈 обязательно

export async function GET() {
  try {
    const reels = await prisma.reel.findMany({
      include: { likes: true }
    });
    return NextResponse.json(reels);
  } catch (error) {
    console.error('Ошибка при получении рилсов:', error);
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get('video');

    if (!file || typeof file.name !== 'string') {
      return NextResponse.json({ error: 'Файл не получен' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
    if (!fs.existsSync(uploadsDir)) {
      fs.mkdirSync(uploadsDir, { recursive: true });
    }

    const filePath = path.join(uploadsDir, file.name);
    await writeFile(filePath, buffer);

    const newReel = await prisma.reel.create({
      data: {
        title: file.name,
        videoURL: `/uploads/${file.name}`, // ✅ исправлено
      },
    });

    return NextResponse.json(newReel, { status: 201 });
  } catch (error) {
    console.error('Ошибка при сохранении рилса:', error);
    return NextResponse.json({ error: 'Ошибка сервера' }, { status: 500 });
  }
}
