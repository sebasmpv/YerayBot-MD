/* ---------------------------------------------------------------------------------------
  🍀 • By https://github.com/ALBERTO9883
  🍀 • ⚘Alberto Y Ashly⚘
-----------------------------------------------------------------------------------------*/

import {randomBytes} from 'crypto';
const link = /chat.whatsapp.com/;
const handler = async (m, {conn, text, groupMetadata}) => {
  if (m.isBaileys && m.fromMe) {
    return !0;
  }
  if (!m.isGroup) return !1;
  if (!text) throw '⚠️ 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙐𝙉 𝙏𝙀𝙓𝙏𝙊 𝙋𝘼𝙍𝘼 𝙀𝙉𝙑𝙄𝘼𝙍 𝘼 𝙏𝙊𝘿𝙊𝙎 𝙇𝙊𝙎 𝙂𝙍𝙐𝙋𝙊𝙎';
  const linkThisGroup = `${link}`;
  if (m.text.includes(linkThisGroup)) return conn.reply(m.chat, '❌ 𝙉𝙊 𝙋𝙐𝙀𝘿𝙀𝙎 𝙎𝙋𝘼𝙈𝙀𝘼𝙍 𝘼 𝙊𝙏𝙍𝙊𝙎 𝙂𝙍𝙐𝙋𝙊𝙎', m);
  const time = global.db.data.users[m.sender].msgwait + 300000;
  if (new Date - db.data.users[m.sender].msgwait < 300000) throw `⚠️ 𝙏𝙄𝙀𝙉𝙀𝙎 𝙌𝙐𝙀 𝙀𝙎𝙋𝙀𝙍𝘼𝙍 ${msToTime(time - new Date())} 𝙋𝘼𝙍𝘼 𝙑𝙊𝙇𝙑𝙀𝙍 𝘼 𝙀𝙉𝙑𝙄𝘼𝙍 𝙐𝙉 𝙈𝙀𝙉𝙎𝘼𝙅𝙀`;
  const who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender;
  const name = await conn.getName(m.sender);
  const groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map((v) => v[0]);
  const fakegif = {key: {participant: `0@s.whatsapp.net`, ...('6289643739077-1613049930@g.us' ? {remoteJid: '6289643739077-1613049930@g.us'} : {})}, message: {'videoMessage': {'title': '𝙔𝙚𝙧𝙖𝙮𝘽𝙤𝙩-𝙈𝘿', 'h': `Hmm`, 'seconds': '99999', 'gifPlayback': 'true', 'caption': '𝙔𝙚𝙧𝙖𝙮𝘽𝙤𝙩-𝙈𝘿🎖️', 'jpegThumbnail': false}}};
  const teks = `🔰 𝙂𝙧𝙪𝙥𝙤: ${groupMetadata.subject}\n💎𝙉𝙤𝙢𝙗𝙧𝙚: ${name}\n🔱𝙉𝙪𝙢𝙚𝙧𝙤: wa.me/${who.split`@`[0]}\n📃 𝙈𝙚𝙣𝙨𝙖𝙟𝙚: ${text}`;
  for (const id of groups) {
    await conn.sendMessage(id, {text: teks}, {quoted: fakegif});
    global.db.data.users[m.sender].msgwait = new Date * 1;
  }
};
handler.command = /^(msg)$/i;
handler.owner = true;
handler.group = true;
export default handler;
function msToTime(duration) {
  const milliseconds = parseInt((duration % 1000) / 100);
  let seconds = Math.floor((duration / 1000) % 60);
  let minutes = Math.floor((duration / (1000 * 60)) % 60);
  let hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  hours = (hours < 10) ? '0' + hours : hours;
  minutes = (minutes < 10) ? '0' + minutes : minutes;
  seconds = (seconds < 10) ? '0' + seconds : seconds;
  return minutes + ' m ' + seconds + ' s ';
}
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
const randomID = (length) => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length);
