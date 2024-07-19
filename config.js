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
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/2b31dbe4c4e026973e6a7.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "13202821256";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "13202244139";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/ce24c6873660eae1beb8b.jpg" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_00_41_07_19_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTMsXG4gICAgICAgIDE2OSxcbiAgICAgICAgODcsXG4gICAgICAgIDEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzgsXG4gICAgICAgIDQxLFxuICAgICAgICAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyNixcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNDQsXG4gICAgICAgIDU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExOFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTQyLFxuICAgICAgICAwLFxuICAgICAgICAxOTAsXG4gICAgICAgIDk0LFxuICAgICAgICA4MyxcbiAgICAgICAgMSxcbiAgICAgICAgNjAsXG4gICAgICAgIDYzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOSxcbiAgICAgICAgMCxcbiAgICAgICAgMjE2LFxuICAgICAgICA1NixcbiAgICAgICAgMjQsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI2LFxuICAgICAgICA2OSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTc0LFxuICAgICAgICA0MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTA1LFxuICAgICAgICA5MixcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExMixcbiAgICAgICAgMjM4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyOSxcbiAgICAgICAgMTg4LFxuICAgICAgICA4OCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgODksXG4gICAgICAgIDcxLFxuICAgICAgICAxNzksXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICA0NyxcbiAgICAgICAgOTAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzksXG4gICAgICAgIDQyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMixcbiAgICAgICAgMTM2LFxuICAgICAgICAyMyxcbiAgICAgICAgOTUsXG4gICAgICAgIDYyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDU3LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTEsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODQsXG4gICAgICAgIDcsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI0LFxuICAgICAgICA5NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NCxcbiAgICAgICAgODAsXG4gICAgICAgIDkyLFxuICAgICAgICAyMTEsXG4gICAgICAgIDc4LFxuICAgICAgICA2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDMxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDk1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI1LFxuICAgICAgICAxMyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzUsXG4gICAgICAgIDgyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDU4LFxuICAgICAgICA5MSxcbiAgICAgICAgMTEzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUxLFxuICAgICAgICA3MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTM0LFxuICAgICAgICA2LFxuICAgICAgICAyMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxOCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTAxXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA5MixcbiAgICAgICAgNTksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDksXG4gICAgICAgIDcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTY3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjIyLFxuICAgICAgICAxMzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAwLFxuICAgICAgICAwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTkzLFxuICAgICAgICAxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA2NyxcbiAgICAgICAgODIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjAzLFxuICAgICAgICA3NixcbiAgICAgICAgNzksXG4gICAgICAgIDE1MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDc1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDc0LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjksXG4gICAgICAgIDEzLFxuICAgICAgICA0MixcbiAgICAgICAgOSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxMzksXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQkpHRG9BeEFpdXJ4NmpuNFJMVm1XVXlBYldDRmtxWHIyaTBOMTA5KzZPVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiSl92SHFxTWxRYmVaV01waUdSZ2dnZ1wiLFxuICBcInBob25lSWRcIjogXCI1MDAyNTM4YS04Y2NlLTRhM2EtYjIxYS0zYWQ1M2ZjNWI5ZTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNzUsXG4gICAgICAyNDIsXG4gICAgICAxNzEsXG4gICAgICAyMjQsXG4gICAgICA1MixcbiAgICAgIDE2MSxcbiAgICAgIDM2LFxuICAgICAgMTgyLFxuICAgICAgMSxcbiAgICAgIDkxLFxuICAgICAgMTU1LFxuICAgICAgMjQ2LFxuICAgICAgMzMsXG4gICAgICAxMTgsXG4gICAgICAxNixcbiAgICAgIDI0MyxcbiAgICAgIDIyMyxcbiAgICAgIDExMSxcbiAgICAgIDExMSxcbiAgICAgIDg4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIxMSxcbiAgICAgIDE3MixcbiAgICAgIDE2MSxcbiAgICAgIDE1MSxcbiAgICAgIDgwLFxuICAgICAgMTAzLFxuICAgICAgMTE4LFxuICAgICAgMjQsXG4gICAgICAxMjUsXG4gICAgICAxODUsXG4gICAgICAxNjcsXG4gICAgICAxNDMsXG4gICAgICA1OSxcbiAgICAgIDIzMSxcbiAgICAgIDI0OSxcbiAgICAgIDkzLFxuICAgICAgMTM2LFxuICAgICAgMjMsXG4gICAgICAxODgsXG4gICAgICA1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJTWUtYQlpERFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTMyMDIyNDQxMzk6MTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2NzgwNDQzOTQyNTA0MToxNEBsaWRcIixcbiAgICBcIm5hbWVcIjogXCJBIEsgUiBBIE3wn6Sk8J+HuvCfh7Pwn5KmXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTDZrcmRjSkVNenM1clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnYW5VeWk3bVRvNWwzL0UvTXAwWGhzelpBaXdBdlNIbjlRSVJPMDZ5bERNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInZ2V3Y2T3hiWmdKeGRUaUpBbXdlQ3FNUVpRV213OVdpeitMekc0dDZhNFZITEVRYXRrRGNTdXVMSTRRN1NxWWoyWDN2YXQ1bG5hamVYWEtOWDhMbEJRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInVqNVc5VkExYVdnQ2NIeVVxWXhrZVJleTFKcTBrQXlzSjA2SXpzMkY0Rm9qVDFGNnd1ak5sMm8rT0pFbUxiUTFIZEJURHdML29WUzdHbkpFVDVXQkNBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjEzMjAyMjQ0MTM5OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzQ5NzEwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSE9FXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFIT0UuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJZZlBJKzNSNUp3bDJ0d1kzcFpORnRIMDZyT2ZaQlBQeHRxK0Q5bFc1THBBPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjI1OTkxMTMyNzgsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlsxLDBdfSxcInRpbWVzdGFtcFwiOlwiMTcyMTM0OTcxNjA5NVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Akram",


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
