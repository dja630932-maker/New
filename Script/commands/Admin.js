const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");
const moment = require("moment-timezone");

module.exports.config = {
 name: "admin",
 version: "1.0.0",
 hasPermssion: 0,
 credits: "𝐒𝐡𝐚𝐡𝐚𝐝𝐚𝐭 𝐈𝐬𝐥𝐚𝐦",
 description: "Show Owner Info",
 commandCategory: "info",
 usages: "admin",
 cooldowns: 2
};

module.exports.run = async function({ api, event }) {
 const time = moment().tz("Asia/Dhaka").format("DD/MM/YYYY hh:mm:ss A");

 const callback = () => api.sendMessage({
 body: `
┌───────────────⭓
│ 𝗢𝗪𝗡𝗘𝗥 𝗗𝗘𝗧𝗔𝗜𝗟𝗦
├───────────────
│ 👤 𝐍𝐚𝐦𝐞   : 𝕚𝕧𝕒𝕣 𝕥𝕙𝕖 𝕓𝕠𝕟𝕖𝕝𝕖𝕤𝕤
│ 🚹 𝐆𝐞𝐧𝐝𝐞𝐫  : 𝕄𝕒𝕝𝕖𝕤
│ ❤️ 𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧 : 𝕊𝕚𝕟𝕘𝕝𝕖
│ 🎂 𝐀𝐠𝐞     :💚🌼🍒
│ 🎓 𝐄𝐝𝐮𝐜𝐚𝐭𝐢𝐨𝐧 :💚🌼🍒
│ 🏡 𝐀𝐝𝐝𝐫𝐞𝐬𝐬  : 𝕂𝕒𝕥𝕥𝕖𝕘𝕒𝕥, 𝔻𝕣𝕖𝕒𝕞𝕝𝕒𝕟𝕕
├───────────────
│ 📘 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: https://www.facebook.com/profile.php?id=100081383671798
│ 
│ 💬 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽: 01307*******
└───────────────⭓

┌───────────────⭓
│ 🕒 𝗨𝗽𝗱𝗮𝘁𝗲𝗱 𝗧𝗶𝗺𝗲
├───────────────
│ ${time}
└───────────────⭓
 `,
 attachment: fs.createReadStream(__dirname + "/cache/owner.jpg")
 }, event.threadID, () => fs.unlinkSync(__dirname + "/cache/owner.jpg"));

 return request("https://i.imgur.com/idyXtoO.jpeg")
 .pipe(fs.createWriteStream(__dirname + '/cache/owner.jpg'))
 .on('close', () => callback());
};
