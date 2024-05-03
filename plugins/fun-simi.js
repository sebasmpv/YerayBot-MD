import translate from '@vitalets/google-translate-api';
import fetch from 'node-fetch';
const handler = async (m, {text, command, args, usedPrefix}) => {
  if (!text) throw `*📌 𝙄𝙣𝙜𝙧𝙚𝙨𝙚 𝙐𝙣 𝙏𝙚𝙭𝙩𝙤 𝙋𝙖𝙧𝙖 𝙋𝙡𝙖𝙩𝙞𝙘𝙖𝙧 𝘾𝙤𝙣 𝙎𝙞𝙢𝙨𝙞𝙢𝙞 𝙊 𝙔𝙚𝙧𝙖𝙮\n\n𝑬𝒋𝒆𝒏𝒑𝒍𝒐 : ${usedPrefix + command} hola yeray*`;
  try {
    const api = await fetch('https://api.simsimi.net/v2/?text=' + text + '&lc=es');
    const resSimi = await api.json();
    m.reply(resSimi.success);
  } catch {
    try {
      if (text.includes('Hola')) text = text.replace('Hola', 'Hello');
      if (text.includes('hola')) text = text.replace('hola', 'Hello');
      if (text.includes('HOLA')) text = text.replace('HOLA', 'HELLO');
      const reis = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + text);
      const resu = await reis.json();
      const nama = m.pushName || '1';
      const api = await fetch('http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=' + nama + '&msg=' + resu[0][0][0]);
      const res = await api.json();
      const reis2 = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=' + res.cnt);
      const resu2 = await reis2.json();
      m.reply(resu2[0][0][0]);
    } catch {
      throw `⚠️ 𝙊𝘾𝙐𝙍𝙍𝙄𝙊 𝙐𝙉 𝙀𝙍𝙍𝙊𝙍`;
    }
  }
};
handler.help = ['simi', 'bot'].map((v) => v + ' <teks>');
handler.tags = ['fun'];
handler.command = /^((sim)?simi|yeray|alexa|bot)$/i;
export default handler;
