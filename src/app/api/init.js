import { sequelize } from "../../../lib/prisma";
import { reel } from "../models/video";
let isInitialized =false

export async function initDataBase() {
    if (isInitialized) return
    try{
        await sequelize.authenticate()
        await sequelize.sync()
        console.log('подключился')

    }catch(err){
        console.error('❌ Ошибка подключения к БД:', err);

    }
    
}