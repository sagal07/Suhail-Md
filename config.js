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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_34_07_18_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAzMixcbiAgICAgICAgMTUzLFxuICAgICAgICAyNCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTYsXG4gICAgICAgIDc2LFxuICAgICAgICA3MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjcsXG4gICAgICAgIDM5LFxuICAgICAgICAyNDksXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzksXG4gICAgICAgIDY5LFxuICAgICAgICAxMTksXG4gICAgICAgIDIwNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTE3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwNSxcbiAgICAgICAgNTEsXG4gICAgICAgIDYwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE4NixcbiAgICAgICAgNjUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDIxLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzYsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgzLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE2LFxuICAgICAgICA5NixcbiAgICAgICAgODNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICA5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDU5LFxuICAgICAgICAyMzEsXG4gICAgICAgIDgsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMwLFxuICAgICAgICA3MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDUxLFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQxLFxuICAgICAgICA4NyxcbiAgICAgICAgODMsXG4gICAgICAgIDk2LFxuICAgICAgICAyOCxcbiAgICAgICAgNCxcbiAgICAgICAgODAsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDU0LFxuICAgICAgICA3NixcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDEsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDc2LFxuICAgICAgICAyMixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMCxcbiAgICAgICAgMjU1LFxuICAgICAgICA3MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjQzLFxuICAgICAgICA5MixcbiAgICAgICAgMTQsXG4gICAgICAgIDcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTIwLFxuICAgICAgICAyMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTEzLFxuICAgICAgICAyNDQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTY0LFxuICAgICAgICAyNTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxODksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMzEsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDI3LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NixcbiAgICAgICAgNzMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDQxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNSxcbiAgICAgICAgMjA5LFxuICAgICAgICA0MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA1NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA3NyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMDEsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDksXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1LFxuICAgICAgICAxNixcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDExLFxuICAgICAgICAzNSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTcsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMTksXG4gICAgICAgIDExLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjE3LFxuICAgICAgICA0NixcbiAgICAgICAgMjQ2LFxuICAgICAgICA5OCxcbiAgICAgICAgODksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIsXG4gICAgICAgIDMzLFxuICAgICAgICAxOCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDM3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNTIsXG4gICAgICAgIDQ2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTU0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImp4ZEZ6MmwzVjBUaHBiNGM3K1k4S1BNYUVGT09KdjNReGpYRWhDZDlPUGM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInB5SDdaOUpaUnBpM2pzcVlIcU5wOXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmZiZTY5NmMtZWI1Yy00ZjQyLWIyMzAtOWFjOGM3NDhiMzNkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzMyxcbiAgICAgIDExMyxcbiAgICAgIDE1MSxcbiAgICAgIDE0MixcbiAgICAgIDI3LFxuICAgICAgMjIzLFxuICAgICAgMTI0LFxuICAgICAgMTEsXG4gICAgICAyMjYsXG4gICAgICAxODUsXG4gICAgICAxMzksXG4gICAgICAyMTQsXG4gICAgICAxMTIsXG4gICAgICA2MyxcbiAgICAgIDUzLFxuICAgICAgMjQsXG4gICAgICAyMTgsXG4gICAgICAyMDksXG4gICAgICAyNTQsXG4gICAgICAxMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjEsXG4gICAgICA2NixcbiAgICAgIDc5LFxuICAgICAgMjI0LFxuICAgICAgMzksXG4gICAgICA3MSxcbiAgICAgIDE3NCxcbiAgICAgIDMwLFxuICAgICAgMTU1LFxuICAgICAgNTgsXG4gICAgICAyMTEsXG4gICAgICAxOTAsXG4gICAgICA2NCxcbiAgICAgIDIxMyxcbiAgICAgIDEyNSxcbiAgICAgIDMyLFxuICAgICAgMTEsXG4gICAgICAxNixcbiAgICAgIDIzMixcbiAgICAgIDE4N1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI2S1Q1N1JLOVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMTMyMDIyNDQxMzk6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE2NzgwNDQzOTQyNTA0MToxM0BsaWRcIixcbiAgICBcIm5hbWVcIjogXCJBIEsgUiBBIE3wn6Sk8J+HuvCfh7Pwn5KmXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTU8zMDc4Q0VNK3c1clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJnYW5VeWk3bVRvNWwzL0UvTXAwWGhzelpBaXdBdlNIbjlRSVJPMDZ5bERNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInVNTFdzYmEya2Q2ZmJQQ1ZxUHp2Nm1LdEorc1VacWpjaWQwMGpOOWt1RHZzaTVoUFVTSWhxeitIc2NLTDMrRE04RW5MNlJ6cW12RG5vVmpuZS9uZkNRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInRBOFg1UnVRWitXVmdRTVdHN0ZJUVJZeWtNV2VHcVd0cE11Qmw1RXN5cEhYQ1VkWmxZQUU4UFRUNVNFWnJjVkhpSzRJbXhwamQ5ZmJQUG5uZU03a2lRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjEzMjAyMjQ0MTM5OjEzQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjAyLFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDIsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgNTFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIxMzQyMDMzLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSnlvXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFKeW8uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJuV2YyUGd4YU1YV3UwVDVseWQ5RmsxcFFMcHcyRCtQbndIQ0JORlB2c1UwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjY3MDM1ODQ2NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIxMzQyMDM2Nzk5XCJ9Igp9"  // PUT your SESSION_ID 


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
