let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
◈ *Buat WhatsApp Bot* ◈
╭─────────
╭⟢ *TERMUX*
╭─────────
┝❑ pkg update && pkg upgrade
┝❑ pkg install ffmpeg
┝❑ pkg install imagemagick
┝❑ pkg install nodejs
┝❑ pkg install git
┝❑ git clone https://github.com/aeroyals/AE
┝❑ cd AE
┝❑ npm i
┝❑ node index.js
╭─────────
╭⟢ Blom Paham!cek Instagram
╭─────────
☛

`.trim(), m)
}
handler.help = ['tutorial']
handler.tags = ['about']
handler.command = /^(tutorial)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

