export async function before(m, {conn, isAdmin, isBotAdmin, isOwner, isROwner}) {
  if (m.isBaileys && m.fromMe) return !0;
  if (m.isGroup) return !1;
  if (!m.message) return !0;
  if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA')) return !0;
  const chat = global.db.data.chats[m.chat];
  const bot = global.db.data.settings[this.user.jid] || {};
  if (bot.antiPrivate && !isOwner && !isROwner) {
    await m.reply(`💎 𝙃𝙤𝙡𝙖 𝙈𝙞 𝙀𝙨𝙩𝙞𝙢𝙖𝙙𝙤 @${m.sender.split`@`[0]}, 𝙋𝙚𝙧𝙙𝙤𝙣 𝙋𝙚𝙧𝙤 𝙉𝙤 𝙀𝙨𝙩𝙖 𝙋𝙚𝙧𝙢𝙞𝙩𝙞𝙙𝙤 𝙀𝙨𝙘𝙧𝙞𝙗𝙞𝙧𝙢𝙚 𝘼𝙡 𝙋𝙧𝙞𝙫𝙖𝙙𝙤\n\n𝙋𝙤𝙧 𝙇𝙤 𝘾𝙪𝙖𝙡 𝘾𝙤𝙣𝙩𝙖𝙘𝙩𝙖 𝘾𝙤𝙣 𝙈𝙞 𝘾𝙧𝙚𝙖𝙙𝙤𝙧\n\n*😼 Wa.me/593992402778 💥*`, false, {mentions: [m.sender]});
    await this.updateBlockStatus(m.chat, 'block');
  }
  return !1;
}