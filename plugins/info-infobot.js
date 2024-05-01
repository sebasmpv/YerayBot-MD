import { generateWAMessageFromContent } from "@whiskeysockets/baileys";
import os from "os";
import util from "util";
import sizeFormatter from "human-readable";
import MessageType from "@whiskeysockets/baileys";
import fs from "fs";
import { performance } from "perf_hooks";
const handler = async (m, { conn, usedPrefix }) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const totalreg = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(
    ([id, data]) => id && data.isChats,
  );
  const groupsIn = chats.filter(([id]) => id.endsWith("@g.us"));
  const groups = chats.filter(([id]) => id.endsWith("@g.us"));
  const used = process.memoryUsage();
  const { restrict, antiCall, antiprivado, modejadibot } =
    global.db.data.settings[conn.user.jid] || {};
  const { autoread, gconly, pconly, self } = global.opts || {};
  const old = performance.now();
  const neww = performance.now();
  const speed = neww - old;
    await conn.sendMessage(m.chat, { react: { text: '🥀', key: m.key } })
  const info = `

╭━━━━━━･❪ ❁ ❫ ･━━━━━━━━❖
│➸ ⏰️𝘼𝙘𝙩𝙞𝙫𝙞𝙙𝙖𝙙
│➸ *${uptime}*
│━━━━━━━━━━━━━━━━━━━
│➸ 💎𝘾𝙝𝙖𝙩𝙨
│➸ 𝐂𝐡𝐚𝐭𝐬 𝐏𝐞𝐫𝐬𝐨𝐧𝐚𝐥𝐞𝐬: *${chats.length - groups.length}*
│➸ 𝐂𝐡𝐚𝐭𝐬 𝐆𝐫𝐮𝐩𝐨𝐬: *${groups.length}* 
│➸ 𝐂𝐡𝐚𝐭 𝐓𝐨𝐭𝐚𝐥: *${chats.length}* 
│━━━━━━━━━━━━━━━━━━━
│➸ 𝙆𝙞𝙢𝘽𝙤𝙩-𝙈𝘿
╰━━━━━━･❪ ❁ ❫ ･━━━━━━━━❖`.trim();
  const doc = [
    "pdf",
    "zip",
    "vnd.openxmlformats-officedocument.presentationml.presentation",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const Message = {
    document: { url: `https://www.instagram.com/yeray_bot_md?igsh=MTZwNGt5YXBuaWFydQ==` },
    mimetype: `application/${document}`,
    fileName: `𝙔𝙚𝙧𝙖𝙮 𝘽𝙤𝙩🌸`,
    fileLength: 99999999999999,
    pageCount: 200,
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
        mediaUrl: "https://www.instagram.com/yeray_bot_md?igsh=MTZwNGt5YXBuaWFydQ==",
        mediaType: 2,
        previewType: "pdf",
        title: "Tᴜ Mᴇᴊᴏʀ Bᴏᴛ!",
        body: wm,
        thumbnail: imagen6,
        sourceUrl: "https://atom.bio/sebas_official",
      },
    },
    caption: info,
    footer: wm,
    headerType: 6,
  };
  conn.sendMessage(m.chat, Message, { quoted: m });
};
handler.help = ["infobot", "speed"];
handler.tags = ["info", "tools"];
handler.command = /^(ping|speed|infobot)$/i;
handler.register = true
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
