import { NextResponse } from 'next/server'
import { prisma } from '#lib/prisma'


export async function POST(req) {
    const {reelId}= await req.json()
    const newLike=  await prisma.like.create({
        data:{reelId}
    })
    return NextResponse.json(newLike,{status:201})

    
}