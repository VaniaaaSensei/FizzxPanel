// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Samp Nipu Apalagi Lari Dari Tanggung Jawab

// Base Haikal Hw Mods : Copyan Dari Base Dika


const fs = require('fs')
const chalk = require('chalk')
const tiktok = require("./baseikal/download/tiktok")
const facebook = require("./baseikal/download/facebook")
const instagram = require("./baseikal/download/instagram")
const twitter = require("./baseikal/download/twitter")


//MODULNYA BY HW
global.baileys = require('@whiskeysockets/baileys') 
global.adiwajshing = require('@adiwajshing/baileys') 
global.baileyssockets = require('@whiskeysockets/baileys/WAProto/index'),
  

global.domain = 'https://celiabothosting.panellstore.icu' // Isi Domain Lu
global.apikey = 'ptla_hPlhdImpUoe40npWJL4u4JdZQtljjSwfM5j7fOqwleC' // Isi Apikey Plta Lu
global.capikey = 'ptlc_7exE4fCg8E4dR7i0ci4qBVHKk64kVo7kvTKSvR5QkvS' // Isi Apikey Pltc Lu
global.eggsnya = '5' // id eggs yang dipakai
global.location = '1' // id location

global.gr = 'https://chat.whatsapp.com/'
global.ig = '@Fizzx' // ubah aja
global.email = 'fizzxstore11@gmail.com' //serah
global.region = 'indonesia' // serah
//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'Fizzx' //ubah jadi nama mu, note tanda ' gausah di hapus!
//=================================================//
global.owner = ['6285172200670'] // ubah aja pake nomor lu
global.walikelas = ["6281372920283"]
//==========================BY Hw Mods=======================//
global.keyopenai = `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`
//====================BY Hw Mods=============================//
global.botname = 'Fizzx' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.packname = 'FizzxAuth' // ubah aja ini nama sticker
global.author = 'Store' // ubah aja ini nama sticker
global.prefa = ['','!','.',',','🐤','🗿']
global.sessionName = 'haikal' //Gausah Juga
global.sp = '⭔' // Gausah Juga
global.wlcm = []
global.wlcmm = []
//=================================================//
//Gausah Juga
global.limitawal = {
    free: 10
}
//=================================================//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})