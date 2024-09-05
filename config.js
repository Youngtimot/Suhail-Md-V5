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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_47_09_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMjQsXG4gICAgICAgIDQyLFxuICAgICAgICAxODEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDU0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NCxcbiAgICAgICAgODAsXG4gICAgICAgIDM2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODAsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzMsXG4gICAgICAgIDMzLFxuICAgICAgICAyMixcbiAgICAgICAgNjcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA0OSxcbiAgICAgICAgNDQsXG4gICAgICAgIDAsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU3LFxuICAgICAgICA5MyxcbiAgICAgICAgMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzgsXG4gICAgICAgIDMxLFxuICAgICAgICAyMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzNixcbiAgICAgICAgNDAsXG4gICAgICAgIDc1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDg3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjI2LFxuICAgICAgICA3N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA3NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDE5LFxuICAgICAgICAzNyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDksXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDU0LFxuICAgICAgICAzNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYzLFxuICAgICAgICA2NCxcbiAgICAgICAgNTEsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgMjUzLFxuICAgICAgICAzNixcbiAgICAgICAgNTQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjA1LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA4MSxcbiAgICAgICAgMTEzLFxuICAgICAgICA3OSxcbiAgICAgICAgNzUsXG4gICAgICAgIDI5LFxuICAgICAgICAxNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NyxcbiAgICAgICAgOSxcbiAgICAgICAgNzIsXG4gICAgICAgIDc3LFxuICAgICAgICAzMCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI1LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEwNlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgNjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDE4LFxuICAgICAgICAxMCxcbiAgICAgICAgODEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3OCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA1OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDY5LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjMxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTc4LFxuICAgICAgICAxMzksXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDExLFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDksXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjUxLFxuICAgICAgICA1NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDk4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NixcbiAgICAgICAgNzIsXG4gICAgICAgIDExNixcbiAgICAgICAgMjIyLFxuICAgICAgICAyMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTMzLFxuICAgICAgICA4LFxuICAgICAgICAxNDJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE2NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJQdXNMWE5WZG05cjA4dzRXVVJZdmhvVUN2S0NGYkZLTXVEQi9jelR1eDE4PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJrbFp6YUQ2TFRqNnZMdVIwUjVaMVJRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjlmNmQ3MWQzLTE0YmYtNGMzNi04N2NlLWU4YmFjNjc3NDFiYlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODMsXG4gICAgICAyMDcsXG4gICAgICAxMTUsXG4gICAgICAxMTQsXG4gICAgICA4NixcbiAgICAgIDI0MyxcbiAgICAgIDEwNixcbiAgICAgIDIyMixcbiAgICAgIDM4LFxuICAgICAgNzUsXG4gICAgICAyMixcbiAgICAgIDE3NyxcbiAgICAgIDkzLFxuICAgICAgNzgsXG4gICAgICAzNixcbiAgICAgIDE0NCxcbiAgICAgIDE2OCxcbiAgICAgIDI1NCxcbiAgICAgIDIxMCxcbiAgICAgIDE0MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzAsXG4gICAgICA1LFxuICAgICAgMjQxLFxuICAgICAgNTksXG4gICAgICAyMTEsXG4gICAgICA4MSxcbiAgICAgIDE3NSxcbiAgICAgIDY1LFxuICAgICAgMTgxLFxuICAgICAgOSxcbiAgICAgIDAsXG4gICAgICAxODIsXG4gICAgICAxNDUsXG4gICAgICAxODMsXG4gICAgICAxOTAsXG4gICAgICAxMjYsXG4gICAgICA2MixcbiAgICAgIDE3MyxcbiAgICAgIDExMCxcbiAgICAgIDEwN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSVzFOQVpRQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODE2Nzg5MzEzODo1OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk0Nzc2NzgzNjU1MDI4OjU4QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09qUTlKb0JFTHY1NTdZR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiNUNlaUo5c0s0QU4wMHJCN0c1KysreXQ1TmYraW1WVUNmUlFpbFEwTVdEbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJHaytTc2pVeVcyOWdGbjg3blh5K3p6ME8zdGVpY0MvcGhZUWx4M2FmRDA0VjlnY3JIVGc4enZhdjhoNGZSclUyUVIwb0tjQjFOVGdHRkZkUjAvQzdBZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJUdTcvMlExVnhpVHM1NTE4VWd4NFY4QU9DLzdodTMzbmNjT3daQVc2eTlzVFhIaHBrQThjYVc1WVBtNDZFdjZlSHF6SElvWFhJcWxtQjAxdVh0S1hnQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTY3ODkzMTM4OjU4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAxNzYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgNThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyNTU2MjA0N1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
