const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_14_12_17_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA2NyxcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA0NCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMjksXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAyOCxcbiAgICAgICAgNSxcbiAgICAgICAgMTgsXG4gICAgICAgIDAsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjksXG4gICAgICAgIDEzNixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMDAsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNzQsXG4gICAgICAgIDExNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyLFxuICAgICAgICA1NyxcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDksXG4gICAgICAgIDE2MixcbiAgICAgICAgMjUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNzAsXG4gICAgICAgIDY3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDExMixcbiAgICAgICAgMzQsXG4gICAgICAgIDU1LFxuICAgICAgICAxOTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMjAsXG4gICAgICAgIDk2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjI4LFxuICAgICAgICA0MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2LFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDkzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDQwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDMsXG4gICAgICAgIDc5LFxuICAgICAgICA0MixcbiAgICAgICAgMTgzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQ3LFxuICAgICAgICAxOSxcbiAgICAgICAgNTcsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTEzLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNjMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzMsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTYsXG4gICAgICAgIDM1LFxuICAgICAgICA0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI1LFxuICAgICAgICA2LFxuICAgICAgICA2MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI2LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3OSxcbiAgICAgICAgNjEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMCxcbiAgICAgICAgMTAsXG4gICAgICAgIDY4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjIzLFxuICAgICAgICA4MixcbiAgICAgICAgMjksXG4gICAgICAgIDEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDk2LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgODYsXG4gICAgICAgIDkwLFxuICAgICAgICAyMCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEzMixcbiAgICAgICAgOTcsXG4gICAgICAgIDc2LFxuICAgICAgICAxMjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMzAsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDE4MyxcbiAgICAgICAgNzUsXG4gICAgICAgIDg2LFxuICAgICAgICAxODAsXG4gICAgICAgIDY1LFxuICAgICAgICA5MyxcbiAgICAgICAgMTQxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMixcbiAgICAgICAgMjAzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMTRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICA3NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMjksXG4gICAgICAgIDg4LFxuICAgICAgICAxOCxcbiAgICAgICAgMTEsXG4gICAgICAgIDU2LFxuICAgICAgICA3MixcbiAgICAgICAgMTI2LFxuICAgICAgICA3MixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgODYsXG4gICAgICAgIDUsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIzLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgNDIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA2MixcbiAgICAgICAgMTQxLFxuICAgICAgICA4NSxcbiAgICAgICAgNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTk3LFxuICAgICAgICA5MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAwLFxuICAgICAgICA0MCxcbiAgICAgICAgNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5OCxcbiAgICAgICAgODgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI5LFxuICAgICAgICA4MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzNixcbiAgICAgICAgMCxcbiAgICAgICAgMTU4LFxuICAgICAgICAxNzYsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNixcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiZXJ0VWZ2SzF2NjZkdUh6VjJDcXhDMkF4K25WNkxMY2V0NXlHcUdCTS9kMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRF9xcWN5VDNSNGVBSURmQXBkYXhHQVwiLFxuICBcInBob25lSWRcIjogXCI1MGVmZGIwMS0xOTYwLTQyNzUtYTIzYS0wN2RmYzQyM2FhNWNcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjE4LFxuICAgICAgMTA5LFxuICAgICAgMjM4LFxuICAgICAgMTQwLFxuICAgICAgMTMwLFxuICAgICAgOTMsXG4gICAgICAyNDYsXG4gICAgICA4LFxuICAgICAgMTU5LFxuICAgICAgMTM3LFxuICAgICAgMjQxLFxuICAgICAgMTk5LFxuICAgICAgNTAsXG4gICAgICAxMTIsXG4gICAgICAxOTAsXG4gICAgICA1MCxcbiAgICAgIDgzLFxuICAgICAgOTUsXG4gICAgICAyNDksXG4gICAgICA2MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzAsXG4gICAgICA5NSxcbiAgICAgIDIxOSxcbiAgICAgIDEwMyxcbiAgICAgIDMsXG4gICAgICAxNDEsXG4gICAgICA4NSxcbiAgICAgIDkyLFxuICAgICAgMjAxLFxuICAgICAgMjEwLFxuICAgICAgMTksXG4gICAgICA4LFxuICAgICAgMTQ0LFxuICAgICAgNDIsXG4gICAgICAyMTksXG4gICAgICAxNSxcbiAgICAgIDM1LFxuICAgICAgNzcsXG4gICAgICAxNTcsXG4gICAgICAxMzJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNL1FwSVFGRU8yQmhic0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIi9mTGVJVjZqOXFtM2xzZ3VwSVZweFdrMm45WGxWaDF3SWg4RlpvK0w5V2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiM1pxN2FXNS9tVWhjMUY0cnZEOU5kYWg2K0R4cm5GSTV1U3BjTXlvZHRoUTlLWjZIUlhVTUJYUzlRWTVHSzJnd01KS0gvdmdET0hMVUdnbjFsUHJOQ3c9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwieUgyOUo5dC9iTjJuOEZhTWowYVNFaFhNaFlsYkRYZkF6WktYQll0Tm5SemJnaHl2RU1Balh4Q3FUampiaGVHNHIxR0NFSVBjaWJ6ZkNHY3ZOL0YxQ2c9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc2NjM0MjUwMzoxMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzgzODgzNTQyMTIzNzoxMEBsaWRcIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzY2MzQyNTAzOjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTA1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ0MjY4NjVcbn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
