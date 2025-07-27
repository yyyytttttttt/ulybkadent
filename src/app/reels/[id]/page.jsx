import { prisma } from '#lib/prisma'
import Link from 'next/link'

export default async function ReelPage({ params }) {
  const reel = await prisma.reel.findUnique({
    where: { id: Number(params.id) },
    include: { likes: true },
  })

  if (!reel) {
    return (
      <div className="w-full h-screen bg-[#E8E2CF] flex items-center justify-center">
        <p className="text-[#2F2F2F] text-xl">Рилс не найден</p>
      </div>
    )
  }

  return (
    <div className="w-full h-screen bg-[#E8E2CF] flex items-center justify-center px-4">
      <div className="relative max-w-[800px] w-full h-full lg:h-[95%] lg:rounded-[40px] overflow-hidden">
        {/* Видео без интерфейса */}
        <video
          src={reel.videoURL}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Кнопка "Истории" вверху слева */}
        <div className="absolute top-4 left-4 z-10">
          <Link
            href="/reels"
            className="w-[120px] h-[60px] md:w-[140px] md:h-[100px] bg-[#2F2F2F]/70 text-[#E8E2CF] rounded-2xl text-sm md:text-lg flex items-center justify-center text-center"
          >
            Истории
          </Link>
        </div>

        {/* Блок с лайками */}
        <div className="absolute bottom-6 left-0 w-full flex justify-center z-10">
          <p className="text-white text-lg bg-black/50 px-4 py-2 rounded-xl">
            ❤️ Количество лайков: {reel.likes.length}
          </p>
        </div>
      </div>
    </div>
  )
}
