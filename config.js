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


global.devs = "2348081732702" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348081732702";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_06_31_04_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICA3MyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5OSxcbiAgICAgICAgODgsXG4gICAgICAgIDg3LFxuICAgICAgICAxODQsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMixcbiAgICAgICAgMjUzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTQzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEyLFxuICAgICAgICA5MixcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIwMixcbiAgICAgICAgNjgsXG4gICAgICAgIDEwLFxuICAgICAgICA3MixcbiAgICAgICAgMTcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNTksXG4gICAgICAgIDE4MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxNTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNTQsXG4gICAgICAgIDExMCxcbiAgICAgICAgODgsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTIsXG4gICAgICAgIDgyLFxuICAgICAgICAxNixcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTM5LFxuICAgICAgICA5MixcbiAgICAgICAgMTM4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMjMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDY1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA3NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDU5LFxuICAgICAgICA4OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1LFxuICAgICAgICA4NixcbiAgICAgICAgMTk4LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NixcbiAgICAgICAgMjQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNzksXG4gICAgICAgIDU5LFxuICAgICAgICA3NixcbiAgICAgICAgNjEsXG4gICAgICAgIDUzLFxuICAgICAgICA1MyxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzksXG4gICAgICAgIDYyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyLFxuICAgICAgICAyNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgODYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDM5LFxuICAgICAgICA3MyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAzLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNixcbiAgICAgICAgNixcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTQsXG4gICAgICAgIDMsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc3LFxuICAgICAgICAzOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE2MixcbiAgICAgICAgNDgsXG4gICAgICAgIDcyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjUyLFxuICAgICAgICA0MSxcbiAgICAgICAgNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDUzLFxuICAgICAgICAzLFxuICAgICAgICA0MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjUsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxMyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDUxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU4LFxuICAgICAgICA3MixcbiAgICAgICAgMjI4LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDU1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDcyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDExNixcbiAgICAgICAgODAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIxLFxuICAgICAgICA1NixcbiAgICAgICAgMTY4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTE2LFxuICAgICAgICA0NSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTEsXG4gICAgICAgIDg1LFxuICAgICAgICA0NCxcbiAgICAgICAgOTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMyxcbiAgICAgICAgMjAzLFxuICAgICAgICA3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxODMsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTc4LFxuICAgICAgICA2OSxcbiAgICAgICAgOTEsXG4gICAgICAgIDgxLFxuICAgICAgICAxMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDY5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMDksXG4gICAgICAgIDI3LFxuICAgICAgICAyMCxcbiAgICAgICAgMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlA1bSs3UXAxbmhEVHZEVlBmT1dJekxoZU5rRDB4d1NJSmZBZFV2TERQTzg9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA4MTczMjcwMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMjBCRjE3RjdCQzBGNzUzQ0UzMDZDNjc2OUU3NDc0OTRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ1Mzg5OTEwXG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODA4MTczMjcwMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiMENCQTg3RDA3QzZGNzI0MjNCOTNCMzczNzNEMkQyNThcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzQ1Mzg5OTE1XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIm9jcWpYT2RYUXltMVBhcHFnekY0QmdcIixcbiAgXCJwaG9uZUlkXCI6IFwiM2ZmM2Q2NGItMWY5ZC00NDU0LWEwOTctNjY3M2MyNGIwMTc3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNyxcbiAgICAgIDE2NyxcbiAgICAgIDY4LFxuICAgICAgNTYsXG4gICAgICA5NCxcbiAgICAgIDIwLFxuICAgICAgMjA3LFxuICAgICAgMjM2LFxuICAgICAgMjA1LFxuICAgICAgMTM1LFxuICAgICAgMjUsXG4gICAgICAxMzksXG4gICAgICAxMjcsXG4gICAgICAxNzEsXG4gICAgICAxMjgsXG4gICAgICAyNTAsXG4gICAgICA2NixcbiAgICAgIDUsXG4gICAgICAxNDksXG4gICAgICAyNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ1LFxuICAgICAgMjE1LFxuICAgICAgMTgyLFxuICAgICAgMTYsXG4gICAgICAyMTUsXG4gICAgICAxNjEsXG4gICAgICAyMTIsXG4gICAgICA5MCxcbiAgICAgIDIsXG4gICAgICAxOTUsXG4gICAgICAyMDMsXG4gICAgICAyNTAsXG4gICAgICAyMjksXG4gICAgICA4NCxcbiAgICAgIDIwOCxcbiAgICAgIDMxLFxuICAgICAgMjU0LFxuICAgICAgMjM0LFxuICAgICAgNDcsXG4gICAgICA4NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI4MUQyWkc3MVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA4MTczMjcwMjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxNTEwMjQ1MDU0ODc0OTY6MUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQL1FxTVFGRU5DU29zQUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjZ0cEN6ZUl6U2RobVo4cTBacTZlVUVzQm5MMXNJcFJ4d0hETFltVUo4QlU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwieDlPVjN2QnJFbm0vaVZEVW1GeTIwMThaT2NDZ1VidndJd2F2L0trdGJVTXFsaHVaVTh1RnBvMGVKU29TQ3FpV2M5bDN6UzZaU1kxSlZXL0lUelVPRFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWXVEU1Z5M0VqdWZHL2wwS0tsNUp1RlhvUWF6TTZ1bjNtS2FNNnB6OGhoU0grTkNCY3V1UUZWOUxFbG5DTEg4OHV5QzZyL2gxQmJZYVd3RTg2UzZrQkE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA4MTczMjcwMjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAyMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzQ1Mzg5OTA4XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
