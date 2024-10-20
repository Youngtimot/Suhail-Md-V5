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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_25_10_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDksXG4gICAgICAgIDUxLFxuICAgICAgICA4MCxcbiAgICAgICAgNjksXG4gICAgICAgIDc2LFxuICAgICAgICAxODEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNjgsXG4gICAgICAgIDg1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICA2OSxcbiAgICAgICAgMTMsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDkwLFxuICAgICAgICAxNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNjksXG4gICAgICAgIDI3LFxuICAgICAgICA5OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzUsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk5LFxuICAgICAgICAyNDEsXG4gICAgICAgIDkzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgODEsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIsXG4gICAgICAgIDkzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyNixcbiAgICAgICAgMjYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc2LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDQyLFxuICAgICAgICAxNjksXG4gICAgICAgIDExOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDIsXG4gICAgICAgIDIwLFxuICAgICAgICAzMCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMixcbiAgICAgICAgMjIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTk1LFxuICAgICAgICAxODYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgODEsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTExLFxuICAgICAgICAxODUsXG4gICAgICAgIDg1LFxuICAgICAgICA2NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYyLFxuICAgICAgICA5OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMjksXG4gICAgICAgIDk1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE0LFxuICAgICAgICAxODksXG4gICAgICAgIDEyNixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMjMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MixcbiAgICAgICAgMTYsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDIyLFxuICAgICAgICA3MixcbiAgICAgICAgODMsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTQwLFxuICAgICAgICA3NyxcbiAgICAgICAgMTk1LFxuICAgICAgICA0MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDg5LFxuICAgICAgICAyMDksXG4gICAgICAgIDcyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyMixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzOSxcbiAgICAgICAgMTYsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMDksXG4gICAgICAgIDk1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTI1LFxuICAgICAgICA1NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDgzLFxuICAgICAgICA2NyxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDMxLFxuICAgICAgICAxMzAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDQzLFxuICAgICAgICA4MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMSxcbiAgICAgICAgMzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMTA1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTE5LFxuICAgICAgICAyMDUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDM3LFxuICAgICAgICA3MCxcbiAgICAgICAgODcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTIsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIwMVVuWkR6dzY3a0ZWL3orZmdmTG5jbjVnT1pDVEdObFU2VWZuVFNXdDRBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNjc4OTMxMzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjQ5QTk2MDA2NkE1ODc3MjU0MkNENzE4RkY0NTJCRDJEXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyOTQzNzkwNFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJER2pMNUhnS1JUS01HbFhTRU81Z2Z3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjA0ZWM3ZmJmLTBiZDYtNGIzYy1iNTlmLWM0NDY5ZWY5MmU2NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NSxcbiAgICAgIDE1MCxcbiAgICAgIDE5NCxcbiAgICAgIDE1OCxcbiAgICAgIDY0LFxuICAgICAgMTMxLFxuICAgICAgMTE1LFxuICAgICAgMTA3LFxuICAgICAgMTQ5LFxuICAgICAgMjI5LFxuICAgICAgMzUsXG4gICAgICA3NCxcbiAgICAgIDgwLFxuICAgICAgMTA1LFxuICAgICAgMjUzLFxuICAgICAgMjA5LFxuICAgICAgMTEyLFxuICAgICAgMTE5LFxuICAgICAgODIsXG4gICAgICAyNTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTcsXG4gICAgICAyMzQsXG4gICAgICAyNDMsXG4gICAgICAzNixcbiAgICAgIDE5LFxuICAgICAgMjUzLFxuICAgICAgMTg2LFxuICAgICAgMTMyLFxuICAgICAgMjE3LFxuICAgICAgMzMsXG4gICAgICA0NixcbiAgICAgIDE5MixcbiAgICAgIDEyMSxcbiAgICAgIDIyNCxcbiAgICAgIDIzOCxcbiAgICAgIDE1LFxuICAgICAgMTgwLFxuICAgICAgMjI0LFxuICAgICAgMTY4LFxuICAgICAgMTY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlpOQUJLTkRIXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTY3ODkzMTM4OjYxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTQ3NzY3ODM2NTUwMjg6NjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTEsxcW9FSEVNSEIxTGdHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpS1pMZlVHOEM3NVd5aUc2QmNjZ2MydThpSGZqNGNnOExjOWNTSWJJWjIwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjVyMm50dXJzVzVsRkd5VmduL3owRmtjUEh3WE5IRE9LQTVZM2d6RkNJbVFHUU9odzFBUmtWUklKa2xmTmtwNEx0VUthQml4Ni9lTXlnMDZOWmhjUkJBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkdtVDN3NlZLUFBrYXZuanRnSklCT1V5NVF0VEtIY0Y5a0ZyOElWaDUveHlOVDhSVWVsTnBXRlBENlQ4cTFzTkIrQnBSZzAzalp2OWZRZkJKZzVwMGpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxNjc4OTMxMzg6NjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgOTIsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTA5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjk0Mzc5MDAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFDMnZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUMydi5qc29uIjogIntcImtleURhdGFcIjpcIjZsODFBN0ZodHpHUWl2OFpydEI0K2ttUHpVWGo5UzVpcWduRUZyQUUzOTQ9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTg4MTg0MDMwNCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTcyNjgxNDg0NTQ1NlwifSIKfQ=="  // PUT your SESSION_ID 


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
