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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_53_12_21_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMyxcbiAgICAgICAgODQsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2MixcbiAgICAgICAgMTMwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTYxLFxuICAgICAgICA2NixcbiAgICAgICAgMjU1LFxuICAgICAgICAyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTcwLFxuICAgICAgICA2MyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTUsXG4gICAgICAgIDQzLFxuICAgICAgICA3NixcbiAgICAgICAgMTQyLFxuICAgICAgICAyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA5NCxcbiAgICAgICAgMTY1LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTAsXG4gICAgICAgIDg4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDksXG4gICAgICAgIDU4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNjQsXG4gICAgICAgIDc2LFxuICAgICAgICAzNyxcbiAgICAgICAgMCxcbiAgICAgICAgMjI0LFxuICAgICAgICA2MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzMyxcbiAgICAgICAgMTYsXG4gICAgICAgIDU1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTExLFxuICAgICAgICAyOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDUwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDMwLFxuICAgICAgICAxOCxcbiAgICAgICAgMjM2LFxuICAgICAgICA0MixcbiAgICAgICAgMTcwLFxuICAgICAgICAxMjIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNixcbiAgICAgICAgMTE3LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA3MixcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4LFxuICAgICAgICAyMjcsXG4gICAgICAgIDUsXG4gICAgICAgIDI3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTEzLFxuICAgICAgICA0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDM1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDE1LFxuICAgICAgICA4MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjM1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDAsXG4gICAgICAgIDE5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTMsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDYyLFxuICAgICAgICAzMixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjgsXG4gICAgICAgIDQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTE0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDczLFxuICAgICAgICAxMjgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM3LFxuICAgICAgICAxODEsXG4gICAgICAgIDE5LFxuICAgICAgICAxNDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTcwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEyMixcbiAgICAgICAgOTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzksXG4gICAgICAgIDMyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE5MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgODAsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjM3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDM1LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTk1LFxuICAgICAgICAzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDE1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMyxcbiAgICAgICAgNjAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNixcbiAgICAgICAgMTE3LFxuICAgICAgICAzOCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDQzLFxuICAgICAgICAxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NixcbiAgICAgICAgNjEsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEwNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJobTlwcTdxb2lNNEEySlZTdDh4d3BSdWRqaTh2djFUZDZtSFNrSDl6TjBBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNjc4OTMxMzhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkMxRDM2QjU4MUZFOTIwRDAxM0NGNkY2OTA0QTYzRkVBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczNDgxODAwNlxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJSWmVfUVdwcVN1V3hKajBzRmJma0hBXCIsXG4gIFwicGhvbmVJZFwiOiBcImE3NmJhYTgwLTEyNjgtNDY3Yi05NjA3LTNhMjI5MTUyMDRjN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMDEsXG4gICAgICAyMDYsXG4gICAgICAxMDAsXG4gICAgICAxMjgsXG4gICAgICAxMyxcbiAgICAgIDE0NCxcbiAgICAgIDIwMyxcbiAgICAgIDE0OSxcbiAgICAgIDI0OCxcbiAgICAgIDI4LFxuICAgICAgMTc1LFxuICAgICAgMTU5LFxuICAgICAgMTMxLFxuICAgICAgMTE2LFxuICAgICAgMjE5LFxuICAgICAgMjMwLFxuICAgICAgMTM1LFxuICAgICAgMTU5LFxuICAgICAgMTUzLFxuICAgICAgMjA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyLFxuICAgICAgMTEsXG4gICAgICAxNDEsXG4gICAgICA0MixcbiAgICAgIDIxMyxcbiAgICAgIDQ2LFxuICAgICAgMTY5LFxuICAgICAgMzMsXG4gICAgICAxNzMsXG4gICAgICAyMTEsXG4gICAgICAyNDcsXG4gICAgICAxMTYsXG4gICAgICA3MyxcbiAgICAgIDIxMyxcbiAgICAgIDE2MSxcbiAgICAgIDMyLFxuICAgICAgMTI1LFxuICAgICAgMTY3LFxuICAgICAgODEsXG4gICAgICAyMjhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiV1dQQ0xWRFRcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjc4OTMxMzg6NjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5NDc3Njc4MzY1NTAyODo2NEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMUzFxb0VIRU12eG5Mc0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImlLWkxmVUc4Qzc1V3lpRzZCY2NnYzJ1OGlIZmo0Y2c4TGM5Y1NJYklaMjA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ2J0K0FjaGVjWEF1NFNUNEVlQTFqZmxJT2k0cW1QMTFManZVOGF5RG16VWtXK2thM3UvR1lTM0tWREZJUDVISzZ4QjQzOFgrZUVaRHVITGN6Lzh3RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWVAwY0tNTmdYVjNjbUwrUURWR21lYXFVUXgyVEs4UG82NGRNdngzNWtLaEQ1MlBML1NJaENmdElkMGZUQUtPTUs2WWJGdndRUjFNbTh2b3o5TTNHQ1E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2Nzg5MzEzODo2NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDgxNzk5OSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUMyMVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQzIxLmpzb24iOiAie1wia2V5RGF0YVwiOlwiYmNrRDVvQngzekxrc1ZuWlk3MXZEUkFmVnE2a0dYbFhNbm9FcEo0Tk02cz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODgxODQwMzA2LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzMyMjE2NjY3ODg3XCJ9Igp9"  // PUT your SESSION_ID 


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
