export async function before(m) {

const username = conn.getName(m.sender)

if (m.chat.endsWith('broadcast') || m.fromMe || m.isGroup) return

let user = global.db.data.users[m.sender]

if (new Date() - user.pc < 21600000) return
await m.reply(`👽 𝙃𝙤𝙡𝙖! 𝙈𝙞 𝙀𝙨𝙩𝙞𝙢𝙖𝙙@.. ${username}¡!

 ⚠️ 𝙉𝙤𝙩𝙖: 𝙉𝙤 𝙀𝙨𝙩𝙖 𝙋𝙚𝙢𝙞𝙩𝙞𝙙𝙤 𝙀𝙨𝙘𝙧𝙞𝙗𝙞𝙧𝙢𝙚 𝘼𝙡 𝙋𝙧𝙞𝙫𝙖𝙙𝙤

ꨄ︎ 𝘾𝙤𝙣𝙩𝙖𝙘𝙩𝙖 𝘼 𝙈𝙞 𝘾𝙧𝙚𝙖𝙙𝙤𝙧: 🌴
👑 Wa.me/593992402778 ⚡`)

user.pc = new Date * 1
}
