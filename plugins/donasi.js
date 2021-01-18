let handler = async m => m.reply(`
╭────────
╭⟢ *_Donasi_* ⟣╯
╭────────
┝༗ *Pulsa*
┝ ➣ 0897-8842-567
┝༗ Ovo
┝ ➣ 0897-8842-567
┝༗ Dana
┝ ➣ 0897-8842-567
┝༗ gopay
┝ ➣ 0897-8842-567
╭────────
┝༗ *Sosial*
┝ ➣ _Instagram_
┝❑ https://instagram.com/aewoii434?igshid=tzws538qihwe
┝ ➣ _Telegram_
┝❑ https://t.me/aewoii
┝ ➣ _Github_
┝❑ https://github.com/aeroyals/AE
▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄
█▄▄░▄▄█░██░█░▄▄▀█░▄▄▀█░█▀█░▄▄█
███░███░▄▄░█░▀▀░█░██░█░▄▀█▄▄▀█
███░███▄██▄█▄██▄█▄██▄█▄█▄█▄▄▄█
▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
