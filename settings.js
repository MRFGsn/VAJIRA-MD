const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


global.thumb = fs.readFileSync('./lib/bugs/venom.jpg')
const BOTNAME = 'VAJIRA-MD|-WA-BOT™';
const FOOTERNAME = '> ＶＡＪＩＲＡ -  ＭＤ - Ｖ4';
global.owner = process.env.OWNER_NUMBER  || '94765476552' ;  // ADD YOUR NUMBER WITHOUT +
    
    
module.exports = {
SESSION_ID: process.env.SESSION_ID || 'VAJIRA-MD=6M1zFR5Y#moCkPfF40bj8EPKsznuWeNq1CmX9Po79s1rW3OB3tIs' ,
travaSend: process.env.TRAVA_SEND || '25' ,    
MAX_SIZE: process.env.MAX_SIZE === undefined ? '2048': process.env.MAX_SIZE,/*add this in megabytes*/    
OWNER_NAME: process.env.OWNER_NAME || 'Snyder' ,
COMMAND_TYPE: process.env.COMMAND_TYPE || 'button' ,
LOGO: process.env.LOGO || `https://telegra.ph/file/ab0ea6ad90e2eb98090d9.jpg` ,
POSTGRESQL_URL: process.env.POSTGRESQL_URL || 'postgresql://mrfg_database_user:MYoTnmpsoDcxBIX0U8V1IJ6yXRzEEnh7@dpg-comundgcmk4c739roc3g-a.singapore-postgres.render.com/mrfg_database',
MONGODB_URI :process.env.MONGODB_URI === undefined ? 'mongodb+srv://Snyder:Snyder@liya.cluiny3.mongodb.net/?retryWrites=true&w=majority&appName=Liya' : process.env.MONGODB_URI,  
FOOTER: process.env.FOOTER || 'mongodb+srv://Snyder:Snyder@liya.cluiny3.mongodb.net/?retryWrites=true&w=majority&appName=Liya',    
PREFIX: process.env.PREFIX || ',' ,
LANG:  process.env.LANG || 'SI' ,    
ANTI_BAD: process.env.ANTI_BAD || false  ,
AUTO_REACT:  process.env.AUTO_REACT  || false  ,    
AUTO_TYPING:  process.env.AUTO_TYPING  || false  ,
AUTO_RECORDING:  process.env.AUTO_RECORDING  || false  ,
AUTO_READ:  process.env.AUTO_READ  || false  ,
AUTO_BIO:  process.env.AUTO_BIO  || false  ,       
ALWAYS_ONLINE:  process.env.ALWAYS_ONLINE  || false  ,
WORK_TYPE: process.env.WORK_TYPE || 'public' ,
DISABLE_PM: process.env.DISABLE_PM || false ,
ANTI_LINK: process.env.ANTI_LINK || false  ,
ANTI_BOT: process.env.ANTI_BOT || false  ,
ANTI_CALL: process.env.ANTI_CALL || false  ,
ALIVE: process.env.ALIVE || `default`,     
AUTO_STATUS_READ:  process.env.AUTO_STATUS_READ  || false  ,    
AUTO_VOICE:  process.env.AUTO_VOICE  || false  ,
AUTO_STICKER: process.env.AUTO_STICKER || false  ,
WELCOME:  process.env.WELCOME  || false ,
ANTI_DELETE : process.env.ANTI_DELETE || false ,
};
