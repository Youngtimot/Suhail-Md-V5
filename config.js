const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="ogbangoodluck07@gmail.com"
global.location="Imo, Nigeria"


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/Dartondave/Suhail-Md-V5";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸_𝕄𝔻" 


global.devs = "2348167893138" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348167893138";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_19_11_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTgsXG4gICAgICAgIDMyLFxuICAgICAgICAxODUsXG4gICAgICAgIDU3LFxuICAgICAgICAzMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDY5LFxuICAgICAgICA4NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzLFxuICAgICAgICA2OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU2LFxuICAgICAgICA1NSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3NCxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1NixcbiAgICAgICAgMTEwLFxuICAgICAgICA5MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTgsXG4gICAgICAgIDYzLFxuICAgICAgICA4NixcbiAgICAgICAgMTEzLFxuICAgICAgICA0NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTQwLFxuICAgICAgICA2NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgODksXG4gICAgICAgIDMwLFxuICAgICAgICAyLFxuICAgICAgICAyMTYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MSxcbiAgICAgICAgMTE3LFxuICAgICAgICA4OCxcbiAgICAgICAgNDksXG4gICAgICAgIDg0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgNTksXG4gICAgICAgIDExMixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDU1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDAsXG4gICAgICAgIDIzNixcbiAgICAgICAgMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTcsXG4gICAgICAgIDg3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTY3LFxuICAgICAgICA3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxODIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxODAsXG4gICAgICAgIDUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxODQsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYwLFxuICAgICAgICA2NixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDI3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0OCxcbiAgICAgICAgMixcbiAgICAgICAgMTY1LFxuICAgICAgICA1MyxcbiAgICAgICAgMTc3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTgyLFxuICAgICAgICA1MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTQxLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjI0LFxuICAgICAgICA5NyxcbiAgICAgICAgMjgsXG4gICAgICAgIDYxLFxuICAgICAgICAzM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgNTYsXG4gICAgICAgIDE3MixcbiAgICAgICAgNCxcbiAgICAgICAgODMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE2MixcbiAgICAgICAgNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTYyLFxuICAgICAgICA3NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDY5LFxuICAgICAgICAxNixcbiAgICAgICAgMjksXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE2LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA0LFxuICAgICAgICAzNCxcbiAgICAgICAgMzAsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwLFxuICAgICAgICAzMixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDksXG4gICAgICAgIDMsXG4gICAgICAgIDE5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDcyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTE2XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY2LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA2LFxuICAgICAgICA0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTIsXG4gICAgICAgIDkwLFxuICAgICAgICA4MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE2NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMzksXG4gICAgICAgIDQ5LFxuICAgICAgICAxOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTYsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTEyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTkyLFxuICAgICAgICAwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTYxLFxuICAgICAgICA5LFxuICAgICAgICA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDk3LFxuICAgICAgICA0MCxcbiAgICAgICAgMzQsXG4gICAgICAgIDUxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjQyLFxuICAgICAgICAzNSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDc3LFxuICAgICAgICA1NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDExNSxcbiAgICAgICAgNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjQwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIlV4d2ZtRG01VUZsUnliQUFmQzNzMENuNnBMcjlIc1ZQQWVldGd6QkxMNUU9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkxzLXFoOGwxVG5xb1JLODV5d2VyM1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmNkZDE2MjMtOTJiNy00ZDc0LThmOTEtMzdiNjA3MWNlNzQ3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0MyxcbiAgICAgIDE0LFxuICAgICAgMjksXG4gICAgICAxNTMsXG4gICAgICAxMDcsXG4gICAgICAyNDMsXG4gICAgICAxNzcsXG4gICAgICAxNDgsXG4gICAgICAxMDcsXG4gICAgICAyNDgsXG4gICAgICA5OSxcbiAgICAgIDI3LFxuICAgICAgMTI1LFxuICAgICAgMTc3LFxuICAgICAgMCxcbiAgICAgIDIwNixcbiAgICAgIDE4NyxcbiAgICAgIDIyLFxuICAgICAgMTQzLFxuICAgICAgMjA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQsXG4gICAgICAyNDYsXG4gICAgICA0MyxcbiAgICAgIDc2LFxuICAgICAgMjUxLFxuICAgICAgMTkyLFxuICAgICAgMTMsXG4gICAgICAxMzEsXG4gICAgICAxMzAsXG4gICAgICAyMDAsXG4gICAgICAxNzEsXG4gICAgICAxNzEsXG4gICAgICAzOCxcbiAgICAgIDI5LFxuICAgICAgMjQ3LFxuICAgICAgMjA1LFxuICAgICAgMTc0LFxuICAgICAgODQsXG4gICAgICAxNDUsXG4gICAgICAxMzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWldHSjRRMUNcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjc4OTMxMzg6NjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5NDc3Njc4MzY1NTAyODo2MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMTzFxb0VIRUtDUC9ya0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImlLWkxmVUc4Qzc1V3lpRzZCY2NnYzJ1OGlIZmo0Y2c4TGM5Y1NJYklaMjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMGQzSytxVCtyTFVkdUJGMGg5MFVOZHRsSUJhTnZoUFVHYlhDd3UvMjdyUHVybDBXOUtlNVJQU1ZEQlpzRHkvMkppZFdlQ1FHdWs1TklvRy9zaDBTQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiMlRpSWhsSnhMaHVwNUhNQjR4UU9EaW9XMTNTNWxlem8xZGUxdmkzSnJWSjR1L2VyU2psb1BtRHlHcDlwL290RXFxaFRqNnVGbDYwcGhRQ0tacVNiQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2Nzg5MzEzODo2MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMjIxNjczOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUMyMVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQzIxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYmNrRDVvQngzekxrc1ZuWlk3MXZEUkFmVnE2a0dYbFhNbm9FcEo0Tk02cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODgxODQwMzA2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMyMjE2NjY3ODg3XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ℙ𝕆𝕎𝔼ℝ𝔼𝔻 𝔹𝕐 𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸_𝕄𝔻 』```", //*『𝕤ᴜʙ𝕤ᴄʀɪʙᴇ • 𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸 𝕋𝔼ℂℍ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸",
  packname: process.env.PACK_NAME || "𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸_𝕄𝔻",
  botname : process.env.BOT_NAME  || "𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸_𝕄𝔻",
  ownername:process.env.OWNER_NAME|| "𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "𝔾𝕀𝕊𝕋𝕄𝔼𝔻𝕀𝔸"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "https://raw.githubusercontent.com/Dartondave/Suhail-Md-V5/main/lib/assets/sukuna.jpeg?raw=true",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "composing", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
