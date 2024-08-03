const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254794156221";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_39_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMixcbiAgICAgICAgODMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDM5LFxuICAgICAgICAxMDYsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDg3LFxuICAgICAgICAxODQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTMxLFxuICAgICAgICA4NCxcbiAgICAgICAgMjExLFxuICAgICAgICA5NixcbiAgICAgICAgMTc4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxLFxuICAgICAgICAxNCxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI3LFxuICAgICAgICAxMCxcbiAgICAgICAgODEsXG4gICAgICAgIDM5LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjM3LFxuICAgICAgICAxODMsXG4gICAgICAgIDE5MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjI5LFxuICAgICAgICA4NyxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAyNSxcbiAgICAgICAgODIsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDU5LFxuICAgICAgICAxODYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjksXG4gICAgICAgIDExOCxcbiAgICAgICAgMTU4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxNjksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTIwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyLFxuICAgICAgICAzNixcbiAgICAgICAgMzIsXG4gICAgICAgIDQzLFxuICAgICAgICAxMjMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTI0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICAxODQsXG4gICAgICAgIDk1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyNDgsXG4gICAgICAgIDM1LFxuICAgICAgICAxNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNDcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDkyLFxuICAgICAgICA3NixcbiAgICAgICAgMTk3LFxuICAgICAgICA2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDI1LFxuICAgICAgICA3NixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0OCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNjYsXG4gICAgICAgIDc4LFxuICAgICAgICAxODUsXG4gICAgICAgIDE3NixcbiAgICAgICAgODMsXG4gICAgICAgIDYyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDI2LFxuICAgICAgICA2MixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMixcbiAgICAgICAgMjAsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjA1LFxuICAgICAgICA3MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODMsXG4gICAgICAgIDQwLFxuICAgICAgICA2NixcbiAgICAgICAgMjQ0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjA5LFxuICAgICAgICA5MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDcxLFxuICAgICAgICA2OSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE0LFxuICAgICAgICAxOTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgNTQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDUsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDYyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI0MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA5MixcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgOThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDYwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDgzLFxuICAgICAgICAxODUsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNTksXG4gICAgICAgIDE5MixcbiAgICAgICAgNTQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNjksXG4gICAgICAgIDI1LFxuICAgICAgICA4MSxcbiAgICAgICAgNDgsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIzNixcbiAgICAgICAgNjUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjYsXG4gICAgICAgIDc1LFxuICAgICAgICAxNjksXG4gICAgICAgIDI1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjUsXG4gICAgICAgIDU5LFxuICAgICAgICAxOCxcbiAgICAgICAgMTU1LFxuICAgICAgICA5MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDExLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDczLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxOTAsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiMzdaSXZ5V3VDZjJQeFJVUkF2anhGM1Y5aWdkam9KQjdjc1k4Z1RRaU5FWT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3OTQxNTYyMjFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkU0NkRBQjZEMzRERjQ0QkFENzRFNDdBMzJGRDAzRTgzXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMjY3MDc3NVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDEsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlSGhvc2tKSVFucUxmOTZaWGd0a2l3XCIsXG4gIFwicGhvbmVJZFwiOiBcImYwZjUzOTg0LTFhMWUtNDJjZC1iY2FmLTM5OTI0YWY5NWJmN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDksXG4gICAgICAxMTEsXG4gICAgICAyMzEsXG4gICAgICAyNTIsXG4gICAgICAyMjAsXG4gICAgICA2MixcbiAgICAgIDE5OCxcbiAgICAgIDEzMSxcbiAgICAgIDIzNCxcbiAgICAgIDY2LFxuICAgICAgMjM1LFxuICAgICAgODMsXG4gICAgICAyNTQsXG4gICAgICA3NixcbiAgICAgIDE4MyxcbiAgICAgIDE4NixcbiAgICAgIDUyLFxuICAgICAgMTk1LFxuICAgICAgMTYxLFxuICAgICAgMTY5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMCxcbiAgICAgIDE1LFxuICAgICAgMTk4LFxuICAgICAgNTMsXG4gICAgICAyMDYsXG4gICAgICAyNCxcbiAgICAgIDQ1LFxuICAgICAgMTIxLFxuICAgICAgMjQyLFxuICAgICAgMTQ1LFxuICAgICAgMTY0LFxuICAgICAgMTYzLFxuICAgICAgMTQ1LFxuICAgICAgMTU5LFxuICAgICAgNjAsXG4gICAgICAxMTEsXG4gICAgICAxODIsXG4gICAgICA5MixcbiAgICAgIDE3NCxcbiAgICAgIDVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVjVYWDE0S1BcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc5NDE1NjIyMToyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiTVwiLFxuICAgIFwibGlkXCI6IFwiMzIzMTk3NjMxNjUzMTQ6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNWDQ3cVlGRUsrOXQ3VUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkpYUzhSSU1ZTEdDbU5kTE9tWjFIbmc5Q2J1MHNkRi9kVGVuOUllcTR0RUU9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNjhOTkNoSmxjR1hFU2EveXQxM2ZxdzRpSjhLY2pkK3ZhWmJuZ2RYUmFWeTU3c0o3SDZXclVCU0FRelRsRURJZ1AzblBLWkpsNVRCSGF4Q1RYZkZ4Qnc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNHBNQS9RcjJ6THE4YnE3b0V1M2dYT1Jhd25QeWJxcGNQcnNOQUxDak9FUFhHaUZsRUZLM2lvcjNEZDlySEZYM3lZR05HU3JwMGdqaiswanJPWXRwQWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0Nzk0MTU2MjIxOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA2NVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjcwNzcxLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSldSXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKV1IuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJGSVJTUFVuYzdsRm5qei9xRVVHanN6WGdheTBhQnlUeXJuVnpkTGJzeGh3PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0MjM2ODY3MjUsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTU2NzYyMTgwMFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "mahrez",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
