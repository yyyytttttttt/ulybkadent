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


