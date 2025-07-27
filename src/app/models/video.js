import { DataTypes } from "sequelize";
import { sequelize } from '#lib/prisma';

export const reel =sequelize.define('Reel',{
    id:{type:DataTypes.INTEGER,primaryKey:true,autoIncrement:true},
    title:{type:DataTypes.STRING,allowNull:false},
    videoURL:{type:DataTypes.STRING,allowNull:false}

})