let media = './Menu7.png'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
    await conn.sendMessage(m.chat, { react: { text: '📇', key: m.key } })
let str = `🔰 𝙂𝙍𝙐𝙋𝙊𝙎 𝙊𝙁𝙄𝘾𝙄𝘼𝙇𝙀𝙎 🔰

    *_╭━━━⊜ 𝙔𝙚𝙧𝙖𝙮𝘽𝙤𝙩-𝙈𝘿 👽💥_*
  *_┃💎❏ ${gp1}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

    *_╭━━━⊜ 𝙔𝙚𝙧𝙖𝙮𝘽𝙤𝙩 - 𝘾𝙤𝙢𝙢𝙪𝙣𝙞𝙩𝙮 👽💥
  *_┃💎❏ ${gp4}_*
*_╰━━━━━━━━━━━━━━━━⊜_*


    *_╭━━━⊜ 𝘾𝙖𝙣𝙖𝙡 𝘿𝙚 𝙔𝙚𝙧𝙖𝙮𝘽𝙤𝙩-𝙈𝘿
  *_┃💎❏ ${channel}_*
*_╰━━━━━━━━━━━━━━━━⊜_*

`
await conn.sendFile(m.chat, media, 'gata.mp4', str, fkontak)}

handler.command = /^grupos|linksk|gruposofc|gruposoficiales$/i
handler.register = true
handler.exp = 33

export default handler
