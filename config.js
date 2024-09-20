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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_36_09_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTIsXG4gICAgICAgIDczLFxuICAgICAgICAxNDQsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDU5LFxuICAgICAgICA3MixcbiAgICAgICAgMjQwLFxuICAgICAgICA3NixcbiAgICAgICAgMTYyLFxuICAgICAgICAxNjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgOSxcbiAgICAgICAgOTBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDUxLFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTI3LFxuICAgICAgICAzMyxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjEsXG4gICAgICAgIDc2LFxuICAgICAgICAxODksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjU0LFxuICAgICAgICA4MixcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjIxLFxuICAgICAgICA1MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDMzLFxuICAgICAgICA3OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTA2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTgzLFxuICAgICAgICA5NyxcbiAgICAgICAgODMsXG4gICAgICAgIDU0LFxuICAgICAgICA0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDM0LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODAsXG4gICAgICAgIDcwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDMxLFxuICAgICAgICAxODAsXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICAxODQsXG4gICAgICAgIDMsXG4gICAgICAgIDc5LFxuICAgICAgICAzMixcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIwMCxcbiAgICAgICAgOTAsXG4gICAgICAgIDYwLFxuICAgICAgICA3MCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMzksXG4gICAgICAgIDQ0LFxuICAgICAgICA1MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTM3LFxuICAgICAgICA3NCxcbiAgICAgICAgMTcxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjksXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxNDMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOSxcbiAgICAgICAgODFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDg5LFxuICAgICAgICA3NixcbiAgICAgICAgMjMzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNTcsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDYzLFxuICAgICAgICA1OCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMjksXG4gICAgICAgIDgsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI5LFxuICAgICAgICA5NSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDk5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjQsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDU4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzLFxuICAgICAgICA1MCxcbiAgICAgICAgMTg0LFxuICAgICAgICA0MSxcbiAgICAgICAgMjE0LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMxLFxuICAgICAgICA2NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDc2LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDY2LFxuICAgICAgICA1MSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDI5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDMyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA2MixcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjUzLFxuICAgICAgICA2MyxcbiAgICAgICAgNDAsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDgxLFxuICAgICAgICAxNzAsXG4gICAgICAgIDExMixcbiAgICAgICAgMjQ3LFxuICAgICAgICA0NyxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjE0LFxuICAgICAgICA2NyxcbiAgICAgICAgMzksXG4gICAgICAgIDQ2LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNDMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICA1NyxcbiAgICAgICAgNTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODIsXG4gICAgICAgIDg2LFxuICAgICAgICA5NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDY1LFxuICAgICAgICA4OSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJkVmZqclJ0Nk9kWVlvd1NRbjJZeUNLK0Q2OVY5TlNBbGx3UVV5aTg0MzZVPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTdVlCRXJzc1JrMmsxUm1KTUY3SE5nXCIsXG4gIFwicGhvbmVJZFwiOiBcIjJkNmFiNDExLTM5ZTMtNGY4NC05NTM4LWNlZjg0NzU0MGNkY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDQsXG4gICAgICA4OCxcbiAgICAgIDE1LFxuICAgICAgMTAxLFxuICAgICAgMTQ3LFxuICAgICAgMjUxLFxuICAgICAgMjIyLFxuICAgICAgNDYsXG4gICAgICAyMjQsXG4gICAgICA1MyxcbiAgICAgIDEwOSxcbiAgICAgIDE3NixcbiAgICAgIDM3LFxuICAgICAgMTYzLFxuICAgICAgMjA2LFxuICAgICAgMTMyLFxuICAgICAgMTA1LFxuICAgICAgMTcyLFxuICAgICAgMzQsXG4gICAgICAxMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODUsXG4gICAgICAyMzEsXG4gICAgICAxNDUsXG4gICAgICAxMTYsXG4gICAgICAyMTgsXG4gICAgICAxMDMsXG4gICAgICAxMTMsXG4gICAgICA5MyxcbiAgICAgIDU1LFxuICAgICAgODksXG4gICAgICAxNTgsXG4gICAgICAyNDMsXG4gICAgICAxMjYsXG4gICAgICAxOTYsXG4gICAgICAxLFxuICAgICAgMTQxLFxuICAgICAgMTI3LFxuICAgICAgMTgxLFxuICAgICAgMTg1LFxuICAgICAgMTM0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkxKSk5TUzREXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY3ODkzMTM4OjYwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTQ3NzY3ODM2NTUwMjg6NjBAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEcxcW9FSEVMWDB0YmNHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpS1pMZlVHOEM3NVd5aUc2QmNjZ2MydThpSGZqNGNnOExjOWNTSWJJWjIwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImhOeHI1ZDdGMnJsNklXUWJjeG0rUUlKb0lnQ0k2VmdJaURwUktXOVN5bldTVjhRRjdOcmNSZlZzMVNYZmhyMFVZUnNaekZBY2pmVGNFOHpFQjVkZkN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjdIQUk2MjZTaThHckwzVFpEeFBJYmQrQ25CZ2IzbTJzc0hrNmt6Tk9veXhvaGJwMnpzSXlOZm1CVElMSG0wRXZYWnY3ZVl5LzVRMXoyam44anM2QUNnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjc4OTMxMzg6NjBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjY4MzkzNTQsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDMnZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUMydi5qc29uIjogIntcImtleURhdGFcIjpcIjZsODFBN0ZodHpHUWl2OFpydEI0K2ttUHpVWGo5UzVpcWduRUZyQUUzOTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg4MTg0MDMwNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyNjgxNDg0NTQ1NlwifSIKfQ="  // PUT your SESSION_ID 


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
