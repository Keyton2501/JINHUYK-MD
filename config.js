//#ENJOY BRO😍
// Credit: JINHUYK|KangJinhuyk 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kangjinhuyk@yahoo.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/KangJinhuyk/JINHUYK-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/TAGPcMC.jpeg,https://files.catbox.moe/59iafh.jpg,https://files.catbox.moe/jynitk.jpg,https://files.catbox.moe/dohubs.jpg,https://files.catbox.moe/nm85c3.jpg";
global.devs = "https://wa.me/242053171047 , https://wa.me/243849962848";
global.sudo = process.env.SUDO || "242053171047";
global.owner = process.env.OWNER_NUMBER || "242053171047";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/xvYDAsD.jpeg,https://i.imgur.com/TAGPcMC.jpeg,https://endpoint.web.id/server/file/I8dkDXm1nJDtOI75.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://unknown-md-sessions-generator-1.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibU1TZE5Jd2wxV0FLWm9lZmtIaWhlMVpPSXNtYnJlejJVMGlkcDFRZXRYND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicTI3NFRTdVRNVElROHVma2V1Tld4STVrS3VoeW5FeTg5Nlh4RElNTndCcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhRHg4cEVRenJManYxYnUyMGplUHY2NUhiNzI4c1FqQWVNRmxCcEtvSW5zPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyZW5zRDlTckVTd1FyTEZNeGtnT2tOWndNRFExK08vMWRrVTIrQ0lFamw4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndJWEVZRTZ2elR6enJwN29iMktjMFdtODJpZFduNDJiTG1JczQxdk92MkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjE5M0h4YVQvWGMzS1I0NnpLVkwxUXhlK3lLUWN6L0txN2xqYUQvdmVpMDA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUE1ZmFQWWtWbi81eWJHQjFBc1YyMVZsUlR1RjJlRmQ3VW4xM0JPTXhGZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTlJhUEQyUS9jUGU3ZE8rOVA1b2Nsc1hTb1BwSWhRbFRFR0dhUlpQTC9WZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlIxdWsybWpWWXp4RXdRenU3OUVVa21PK0tPQkg0ZXo1VzFUWDZ5c2VKOEpQWVU2THdVSFFwZmZZZ05iWmhwQmpwR0MwbTMxcjZCQmMxbzJpK1BMTER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA2LCJhZHZTZWNyZXRLZXkiOiJxMGcyRndFc1pEN0dVY1V2TVRZOE1xclpidnRMdGJOQlczVkNzZFJ6YjM0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJNRmgtTDk0QlJGZTczVktJbjZ4bjdRIiwicGhvbmVJZCI6IjA0YjQ1Y2Q4LTY2OWQtNGMyMy04Yzg0LTg4NWZjZmJiN2IyZSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJSVkRWSUhLbWprZDZTQ2UvSGtldktCV1pRQ289In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWFg0SG1Jc2EzTTljS1UyZU9pN1FnMWpnaXc4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlgxVkZES0JUIiwibWUiOnsiaWQiOiIyNDIwNTMxNzEwNDc6MjNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2QjOqdm+GNndafIPCdkIPwnZCA8J2QkfCdkIog4p+s8J2Qg/CdkIzwnZCF4p+tIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNMei8yZEFIRU1pTWg3c0dHQWNnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ6dGNmeWYvTmlCVXh2STlldWdjbjBabDVMRHZxeVZkVjAwaUMvSkhDTmxRPSIsImFjY291bnRTaWduYXR1cmUiOiJZczJ4RkIvSHVkY3RJZE9qenl2MTNTWXpKMk5rU1lTOW0rZmpnNDlyd0tXTkVvNG92b0E0QlJURVZBejJVeHovUTlIcFA3clU1a1hDQ2xlQXZaZWJDUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiMU5lendoNHY5VTM5NjlkU0RENDdMZHhFd2MzWGFMcGhnb0ZVMVVmTWhJeVVKa2kvNjBGWHJqM3pwdmtud1RKOHREeERVR2V5Y0taS2RzZHB5cWVJQ0E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDIwNTMxNzEwNDc6MjNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYzdYSDhuL3pZZ1ZNYnlQWHJvSEo5R1plU3c3NnNsWFZkTklndnlSd2paVSJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDQ2MTAxNH0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊",
  packname: process.env.PACK_NAME || "𝐉𝐈𝐍𝐇𝐘𝐔𝐊-𝐌𝐃",
  botname: process.env.BOT_NAME || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊-𝚳𝐃",
  ownername: process.env.OWNER_NAME || "𝑃𝒂𝒚𝒆𝒓 𝑈𝒏𝒌𝒏𝒐𝒘𝒏",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "JINHUYK").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
