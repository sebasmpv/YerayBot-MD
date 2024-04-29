import fetch from 'node-fetch'

var handler = async (m, { text,  usedPrefix, command }) => {

if (!text) throw `🔰 𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙐𝙉 𝙏𝙀𝙓𝙏𝙊`

try {

await m.reply(wait)
var apii = await fetch(`https://aemt.me/bard?text=${text}`)
var res = await apii.json()
await m.reply(res.result)

} catch (error) {
console.error(error)
throw '⚠ *𝙊𝙘𝙪𝙧𝙧𝙞𝙤 𝙐𝙣 𝙀𝙧𝙧𝙤𝙧*'
}

}
handler.command = ['bard']
handler.help = ['bard']
handler.tags = ['herramientas']

handler.premium = false

export default handler
