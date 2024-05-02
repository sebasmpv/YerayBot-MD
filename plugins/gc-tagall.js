const handler = async (m, {isOwner, isAdmin, conn, text, participants, args, command, usedPrefix}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const pesan = args.join` `;
  const oi = `𝙈𝙀𝙉𝙎𝘼𝙅𝙀: ${pesan}`;
  let teks = `𝙃𝙄𝙅𝙊𝙎 𝙈𝙄𝙊𝙎 𝘿𝙀𝙎𝙋𝙄𝙀𝙍𝙏𝙀𝙉\n\nꨄ︎ ${oi}\n\nꨄ︎ 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙎:\n`;
  for (const mem of participants) {
    teks += `┣☞ @${mem.id.split('@')[0]}\n`;
  }
  teks += `└ 𝐘𝐞𝐫𝐚𝐲𝐁𝐨𝐭-𝐌𝐃\n\n`;
  conn.sendMessage(m.chat, {text: teks, mentions: participants.map((a) => a.id)} );
};
handler.help = ['tagall <mesaje>', 'invocar <mesaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i;
handler.admin = true;
handler.group = true;
export default handler;
