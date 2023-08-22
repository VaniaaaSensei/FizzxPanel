/*
// Buat Lu Yang Jual Sc Ini Yang Jujur Jangan Sampe Nipu 
   Apalagi Lari Dari Tanggung Jawab

// Base ${botname}

› Create By HW MODS WA
› Base Ori HW MODS WA

🌷 KALAU MAU RENAME TARO CREDITS GUA : ${botname}*/

//=================================================//
require('./hwkal')
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType } = global.baileys
const fs = require('fs')
const cheerio = require('cheerio')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const ffmpeg = require('fluent-ffmpeg')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { JSDOM } = require('jsdom')
const { apikey } = require('./apikey.json')
const { color, bgcolor } = require('./lib/color')
const maker = require('mumaker')
const textpro = require('./lib/textpro')
const { uptotelegra } = require('./lib/upload')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { sizeFormatter } = require('human-readable')
const { Configuration, OpenAIApi } = require('openai')
const { exec, spawn, execSync } = require("child_process")
const { ngazap } = require('./baseikal/virtex/ngazap')
const { buttonkal } = require('./baseikal/virtex/buttonkal')
const { cttl } = require('./baseikal/virtex/cttl')
const { tizi } = require('./baseikal/virtex/tizi')
const { weg } = require('./baseikal/virtex/weg')
const { virtex7 } = require('./baseikal/virtex/virtex7')
const { allfizz } = require('./baseikal/allfizz') 
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, formatp} = require('./lib/myfunc')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
//=================================================//
global.domain = 'https://celiabothosting.panellstore.icu' // Isi Domain Lu
global.apikey = 'ptla_qTNzBFeiVixJBOcgg1jJlu40dDjIjNPfYpKp2UHcUxP' // Isi Apikey Plta Lu
global.capikey = 'ptlc_c4rJvV7a4RrsEHp5MNPjezto2Em5pBnIvlZKXZORcRK' // Isi Apikey Pltc Lu
global.eggsnya = '5' // id eggs yang dipakai
global.location = '1' // id location
const data_smk = JSON.parse(fs.readFileSync('./database/idgrup.json').toString())
//=================================================//


const thumbnail = fs.readFileSync ('./baseikal/mamak.jpg')
const thumb = fs.readFileSync ('./baseikal/mamak.jpg')
const kalimage = fs.readFileSync ('./baseikal/mamak.jpg')
const openai = fs.readFileSync ('./ai.jpg')
const owner = JSON.parse(fs.readFileSync('./premium.json'))
const vnnye = JSON.parse(fs.readFileSync('./database/vnadd.json'))
const docunye = JSON.parse(fs.readFileSync('./database/docu.json'))
const zipnye = JSON.parse(fs.readFileSync('./database/zip.json'))
const apknye = JSON.parse(fs.readFileSync('./database/apk.json'))
const ntilink = JSON.parse(fs.readFileSync("./lib/antilink.json"))
const banned = JSON.parse(fs.readFileSync('./baseikal/dbnye/banned.json'))
virgam = `https://telegra.ph/file/458222b35db2c8b39dc27.jpg`
//=================================================//
module.exports = haikal = async (haikal, m, chatUpdate, store) => {
 try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype === 'messageContextInfo') ? (m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
//=================================================//
const isCmd = body.startsWith(prefix)
const isCmd2 = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
//Kalau mau Single prefix Lu ganti pake ini = const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
/*const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()*/
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await haikal.decodeJid(haikal.user.id)
const isCreator = [global.owner]
const text = q = args.join(" ")
const { type, quotedMsg, mentioned, now, fromMe } = m
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const alhidayah = m.isGroup ? data_smk.includes(m.chat) : false
const groupMetadata = m.isGroup ? await haikal.groupMetadata(from).catch(e => {}) : ''
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const welcm = m.isGroup ? wlcm.includes(from) : false
const welcmm = m.isGroup ? wlcmm.includes(from) : false
const AntiLink = m.isGroup ? ntilink.includes(from) : false 
const isBan = banned.includes(m.sender)
const content = JSON.stringify(m.message)
const numberQuery = text.replace(new RegExp("[()+-/ +/]", "gi"), "") + "@s.whatsapp.net"
const mentionByTag = m.mtype == "extendedTextMessage" && m.message.extendedTextMessage.contextInfo != null ? m.message.extendedTextMessage.contextInfo.mentionedJid : []
const Input = mentionByTag[0] ? mentionByTag[0] : q ? numberQuery : false
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const qtod = m.quoted? "true":"false"

const senderNumber = sender.split('@')[0]
const forward999 = `forwardingScore: 9999, isForwarded: true`
const forward99 = `forwardingScore: 99, isForwarded: true` 
//=================================================//}
//_______________________ [ DOC ] _______________________//
global.doc1 = "application/vnd.openxmlformats-officedocument.presentationml.presentation"; //PPTX
global.doc2 =
 "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet";  //XLSX
global.doc3 =
 "application/vnd.openxmlformats-officedocument.wordprocessingml.document"; //DOCX
global.doc4 = "application/zip";  //ZIP
global.doc5 = "application/pdf";  //PDF
global.doc6 = "application/vnd.android.package-archive";  //APK
//____________________ [ FAKE SIZE ] ____________________//
global.jumlha = '999'
global.jumhal = '5000000000000000000000'
global.jumlah = '1000000000'
//____________________ [ JADWAL SEKOLAH ] ____________________//

let senin = `*Senin* :
★ Matematika [2 Jam]
★ Bahasa Jepang [1 Jam]
★ Bahasa Inggris [2 Jam]
★ Kewirausahaan [3 Jam]`

let selasa = `*Selasa* :
★ PJOK [2 Jam]
★ Matematika [2 Jam]
★ Desain Grafis Percetakan [2 Jam]
★ Teknik Animasi 2D & 3D [3 Jam]`

let rabu = `*Rabu* :
★ Desain Grafis Percetakan  [2 Jam]
★ Bahasa Indonesia [3 Jam] 
★ Pendidikan Agama Islam  [1 Jam]`

let kamis = `*Kamis* :
★ Kewirausahaan  [2 Jam]
★ Desain Grafis Percetakan  [3 Jam]
★ Matematika  [1 Jam]
★ Teknik Animasi 2D & 3D  [2 Jam]`

let jumat = `*Jum'at* :
★ Desain Grafis Percetakan  [3 Jam]
★ Pendidikan Kewarganegaraan  [2 Jam]
★ Teknik Animasi 2D & 3D  [3 Jam]`

let sabtu = `*Sabtu* :
★ Pendidikan Agama Islam  [2 Jam]
★ Teknik Animasi 2D & 3D  [4 Jam]`


//____________________ [ BATAS BANGG ] ____________________//
async function getMessage(key){
        if (store) {
            const m = await store.loadMessage(key.remoteJid, key.id)
            return m?.message
        }
        return {
            conversation: "Hai Im Ai Bot"
        }
    }
const cmdGrup = ["MakasihhAi"]
const allCmd = [...cmdGrup]


/*function pinterest(querry){
	return new Promise(async(resolve,reject) => {
		 axios.get('https://id.pinterest.com/search/pins/?autologin=true&q=' + querry, {
			headers: {
			"cookie" : "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
		}
			}).then(({ data }) => {
		const $ = cheerio.load(data)
		const result = [];
		const hasil = [];
   		 $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
            result.push(link)
		});
   		result.forEach(v => {
		 if(v == undefined) return
		 hasil.push(v.replace(/236/g,'736'))
			})
			hasil.shift();
		resolve(hasil)
		})
	})
}*/



const { Apikey } = { Apikey: "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"};

const getResponseAI = async (pesanMasuk) => {
	const response = await ChatRequest(pesanMasuk);
    if (!response.success) {
        return response.message;
    }
    return response.data;
}
const ChatRequest = async (pesanMasuk) => {
    //buat tampungan hasil respons dari Open AI
	const result = {
        success: false,
        data: "",
        message: "",
    }
	//request ke server open ai 
    return await axios({
        method: 'post',
        url: 'https://api.openai.com/v1/completions',
        data: {
            model: "text-davinci-003",
            prompt: pesanMasuk,
            max_tokens: 1000,
            temperature: 0
        },
        headers: {
            "accept": "application/json",
            "Content-Type": "application/json",
            "Accept-Language": "in-ID",
            "Authorization": `Bearer ${Apikey}`
        },
    }).then((response) => {
		if (response.status == 200) {
			const { choices } = response.data;
			if (choices && choices.length) {
				result.success = true;
				result.data = choices[0].text;
			}
		}
		else {
			result.message = "Failed response";
		}
		return result;
		
	}).catch((error) => {
		result.message = "Error : " + error.message;
		return result;
	});
}

	const kontol = { key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { 'contactMessage': { 'displayName': `${time}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;OpenAi,;;;\nFN:${pushname},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': { url: 'https://telegra.ph/file/3c485ff201d9337be14ef.jpg' }}}}
function parseMention(text = '') {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}
const kalgans = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},

'message': {
 "stickerMessage": {
"url": "https://mmg.whatsapp.net/d/f/At6EVDFyEc1w_uTN5aOC6eCr-ID6LEkQYNw6btYWG75v.enc",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 40,
"width": 40,
"directPath": "/v/t62.7118-24/19433981_407048238051891_5533188357877463200_n.enc?ccb=11-4&oh=01_AVwXO525CP-5rmcfl6wgs6x9pkGaO6deOX4l6pmvZBGD-A&oe=62ECA781",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
        'isAnimated': false, 
     "isAvatar": true,
}}}
const kntl = { 
key: {
fromMe: [], 
participant: "0@s.whatsapp.net", ...(from ? { remoteJid: "" } : {}) 
},

'message': {
 "stickerMessage": {
"url": "https://mmg.whatsapp.net/o1/v/t62.7118-24/f1/m231/up-oil-image-fbefbb83-2fc4-4c02-8383-cfe1c9455a30?ccb=9-4&oh=01_AdSi1RSj3fQ_mbX_kXnrODijk9U2aB96R_1ZYMUYoMcJ8g&oe=6509332F&mms3=true'",
"fileSha256": "YEkt1kHkOx7vfb57mhnFsiu6ksRDxNzRBAxqZ5O461U=",
"fileEncSha256": "9ryK8ZNEb3k3CXA0X89UjCiaHAoovwYoX7Ml1tzDRl8=",
"mediaKey": "nY85saH7JH45mqINzocyAWSszwHqJFm0M0NvL7eyIDM=",
"mimetype": "image/webp",
"height": 64,
"width": 64,
"directPath": "'/o1/v/t62.7118-24/f1/m231/up-oil-image-fbefbb83-2fc4-4c02-8383-cfe1c9455a30?ccb=9-4&oh=01_AdSi1RSj3fQ_mbX_kXnrODijk9U2aB96R_1ZYMUYoMcJ8g&oe=6509332F&_nc_hot=1692510333",
"fileLength": "99999999",
"mediaKeyTimestamp": "16572901099967",
        'isAnimated': []
}}}

const sendOrder = async(jid, text, title,) => {
const order = generateWAMessageFromContent(jid, proto.Message.fromObject({
"orderMessage": {
"orderId": 1000000000000000000000,
"thumbnail": openai,
"itemCount": 1000000000000000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": title,
"message": text,
"sellerJid": senderNumber,
"token": 1000000000000000000000,
"totalAmount1000": 1000000000000000000000,
"totalCurrencyCode": "IDR",
}
}), { userJid: jid, quoted: m })
haikal.relayMessage(jid, order.message, { forwardingScore: 9999, isForwarded: true , messageId: order.key.id})
}
const sendOpenai = (teks) => {
return haikal.sendMessage(from, { text: teks, contextInfo:
{"externalAdReply":
{"title": `Beta Open Ai By Ellon Musk`,"body": `Selamat ${salam} kak ${pushname}`, 
"previewType": "PHOTO",
"thumbnailUrl": 'https://telegra.ph/file/0c7020eed7bc3768450bd.jpg',
"thumbnail": thumb,
"sourceUrl": `https://beta.openai.com/account`}}}, { quoted:m})} 
haikal.sendContact = async (jid, kon, quoted = '', opts = {}) => {
	let listt = []
	let namaguru = "Bu Sari Pusvita"
	for (let i of kon) {
	    listt.push({
	    	displayName: `${namaguru}`,
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${namaguru}\nFN:${namaguru}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:saripusvita@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/sari_pusvita\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	haikal.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: listt }, ...opts }, { quoted })
    }
haikal.sendContactv2 = async (jid, kon, quoted = '', opts = {}) => {
	let listt = []
	let nama = "Muhammad Hafiz"
	for (let i of kon) {
	    listt.push({
	    	displayName: `${nama}`,
	    	vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${nama}\nFN:${nama}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:fizzxstore11@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://instagram.com/fizzxstore\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`
	    })
	}
	haikal.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: listt }, ...opts }, { quoted })
    }
    global.mess = {
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Oleh Owner',
    }
function pickRandom(list) {
return list[Math.floor(Math.random() * list.length)]
}

async function LoadOpenAi () {
var hawemod = [
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳..."
]
let { key } = await haikal.sendMessage(from, {text: '𝙻𝙾𝙰𝙳𝙸𝙽𝙶....'})//Pengalih isu

for (let i = 0; i < hawemod.length; i++) {
await sleep(1500)
await haikal.sendMessage(from, {text: hawemod[i], edit: key });//PESAN LEPAS
}
}
async function LoadOpenAiV2 () {
var hawemod = [
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳..."
]
let { key } = await haikal.sendMessage(from, {text: '𝙻𝙾𝙰𝙳𝙸𝙽𝙶....'})//Pengalih isu

for (let i = 0; i < hawemod.length; i++) {
await sleep(1500)
await haikal.sendMessage(from, {text: hawemod[i], edit: key });//PESAN LEPAS
}
}

async function loading () {
var hawemod = [
"■□□", 
"□■□", 
"□□■", 
"■□□", 
"■■□", 
"■■■", 
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳..."
]
let { key } = await haikal.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...',contextInfo: { mentionedJid: [sender], forwardingScore: 99, isForwarded: true }})//Pengalih isu

for (let i = 0; i < hawemod.length; i++) {
await sleep(1000)
await haikal.sendMessage(from, {text: hawemod[i], edit: key, contextInfo: { mentionedJid: [sender, Fizzxx], forwardingScore: 99, isForwarded: true }});//PESAN LEPAS
}
}
async function loadmenu () {
	
	let kumpu = `𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳`
let kuwa = `https://wa.me/6285172200670`
	let menunya = `
*Hay Kak ${pushname} 👋 Selamat ${salam}*
Total Pengguna Premium :  ${owner.length}
Status : ${isCreator ? 'Owner' : 'Free'}
Tahun 2024 : ⏳${downdate}

▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*UNTUK MEMBERIKAN AKSES*
🔏 addprem (628xx)
🔏 delprem (628xx)
🔏 listprem
▬▭▬▭▬▭▬▭▬▬▭▬▭▬

*BLOCKIR PENGGUNA AKSES*
🔏 pengguna add (628xx)
🔏 pengguna del (628xx)
🔏 listban
▬▭▬▭▬▭▬▭▬▬▭▬▭▬
*FITUR MENU*
⏳ ɢᴀꜱᴍᴇɴᴜ
⏳ ɪꜱʟᴀᴍᴍᴇɴᴜ
⏳ ʙᴜɢᴍᴇɴᴜ
⏳ ɢʀᴏᴜᴘᴍᴇɴᴜ
⏳ ʙᴇʀɪᴛᴀᴍᴇɴᴜ
⏳ ꜰᴜɴᴍᴇɴᴜ
⏳ ᴀᴅᴅᴍᴇɴᴜ
⏳ ʀᴀɴᴅᴏᴍᴍᴇɴᴜ
⏳ ᴅᴏᴡɴʟᴏᴀᴅᴍᴇɴᴜ
⏳ ᴛᴇxᴛᴍᴀᴋᴇʀ
⏳ ʟɪꜱᴛᴍᴜꜱɪᴋ
⏳ ᴄᴜᴄɪᴍᴀᴛᴀ
⏳ ᴀꜱᴜᴘᴀɴ
⏳ ᴘᴜʙʟɪᴄ
⏳ ꜱᴇʟꜰ
▬▭▬▭▬▭▬▭▬▬▭▬▭▬`
let dino = `
█████████
█▄█████▄█
█▼▼▼▼▼
█ 
█▲▲▲▲▲
█████████
__██____██___`

var hawemod = [
"■□□", 
"□■□", 
"□□■", 
"■□□", 
"□■□", 
"□□■", 
"■□□", 
"■■□", 
"■■■", 
"𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳...", 
`${menunya}`
]

let { key } = await haikal.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'}, {quoted: m})

for (let i = 0; i < hawemod.length; i++) {
/*await sleep(500)*/
let compu = `𝙻𝙾𝙰𝙳𝙸𝙽𝙶 𝙲𝙾𝙼𝙿𝙻𝙴𝚃𝙴𝙳`
let waku = `https://wa.me/6285172200670`
await haikal.sendMessage(from, {text: hawemod[i], edit: key}, {quoted: m});
//PESAN LEPAS
}
}

//BATAS
//
const jimp_1 = require('jimp')
async function pepe(media) {
	const jimp = await jimp_1.read(media)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(jimp_1.MIME_JPEG),
		preview: await cropped.normalize().getBufferAsync(jimp_1.MIME_JPEG)
	}
}
haikal.setStatus = (status) => {
  haikal.query({
  tag: 'iq',
  attrs: {
  to: '@s.whatsapp.net',
  type: 'set',
  xmlns: 'status',
  },
  content: [{
  tag: 'status',
  attrs: {},
  content: Buffer.from(status, 'utf-8')
  }]
  })
  return status
  }
let list = []
let ownerku = "6285172200670"
for (let i of ownerku) {
list.push({
displayName: await haikal.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\n
VERSION:3.0\n
N:${await haikal.getName(i + '@s.whatsapp.net')}\n
FN:${await haikal.getName(i + '@s.whatsapp.net')}\n
item1.TEL;waid=${i}:${i}\n
item1.X-ABLabel:Ponsel\n
item2.EMAIL;type=INTERNET:fizzxstore11@gmail.com\n
item2.X-ABLabel:Email\n
item3.URL:https://linkbio.co/FizzxYzz\n
item3.X-ABLabel:YouTube\n
item4.ADR:;;Indonesia;;;;\n
item4.X-ABLabel:Region\n
END:VCARD`
})
}
//=================================================//

if (!haikal.public) {
if (!m.key.fromMe) return
}
let rn = ['composing','recording', 'paused','available']
let jd = rn[Math.floor(Math.random() * rn.length)];
if (m.message) {
haikal.readMessages([m.key])
let packnama = `WhatsApp Using Lib Baileys Multi Device`
await haikal.setStatus(`${packnama} || Created By Fizzx || ⌚ Runtime : ${runtime(process.uptime())}`);
haikal.sendPresenceUpdate(jd, from)
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}

// Anti Link
if (AntiLink) {
if (body.match(/(chat.whatsapp.com\/)/gi)) {
if (!isBotAdmins) return m.reply(`${mess.botAdmin}, _Untuk menendang orang yang mengirim link group_`)
let gclink = (`https://chat.whatsapp.com/`+await haikal.groupInviteCode(m.chat))
let isLinkThisGc = new RegExp(gclink, 'i')
let isgclink = isLinkThisGc.test(m.text)
if (isgclink) return haikal.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAnda tidak akan ditendang oleh bot karena yang Anda kirim adalah link ke grup ini`})
if (isAdmins) return haikal.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\nAdmin sudah mengirimkan link, admin bebas memposting link apapun`})
if (isCreator) return haikal.sendMessage(m.chat, {text: `\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\Owner telah mengirim link, owner bebas memposting link apa pun`})
await haikal.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: false,
id: mek.key.id,
participant: mek.key.participant
}
})
haikal.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
haikal.sendMessage(from, {text:`\`\`\`「 Group Link Terdeteksi 」\`\`\`\n\n@${m.sender.split("@")[0]} Jangan kirim group link di group ini`, contextInfo:{mentionedJid:[sender]}}, {quoted:m})
}
}

haikal.sendPoll = (jid, name = '', values = [], selectableCount = 1) => { return haikal.sendMessage(jid, { poll: { name, values, selectableCount }}) }
haikal.sendDocu = async (jid, caption = {}) => {
	let documen2 = [doc1, doc2, doc3, doc4, doc5, doc6];
let dok = pickRandom(documen2);
haikal.sendMessage(jid, { 
    document: fs.readFileSync('./doc.pdf'), 
    jpegThumbnail: thumbnail,
    fileName: `${pushname}`,
    mimetype: dok,
    fileLength: 50000000000000000000001000000000000,
    pageCount: "1",
    caption: caption,
      contextInfo: {
               forwardingScore: global.jumhal,
               externalAdReply: {
               containsAutoReply: true,
               mediaType: 1,
               mediaUrl: ppuser,
               renderLargerThumbnail: true,
               showAdAttribution: true,
               sourceUrl: 'https://www.instagram.com/allrecode_',
               thumbnailUrl: ppuser,
               title: `HALO ${pushname}`,
               body: salam}}
         }
     );
}

haikal.sendPPTX= async (jid, caption = {}) => {
haikal.sendMessage(jid, { 
    document: fs.readFileSync('./doc.pdf'), 
    jpegThumbnail: thumbnail,
    fileName: `${pushname}`,
    mimetype: doc1,
    fileLength: 50000000000000000000001000000000000,
    pageCount: "1",
    caption: caption,
      contextInfo: {
               forwardingScore: global.jumhal,
               externalAdReply: {
               containsAutoReply: true,
               mediaType: 1,
               mediaUrl: ppuser,
               renderLargerThumbnail: true,
               showAdAttribution: true,
               sourceUrl: 'https://www.instagram.com/allrecode_',
               thumbnailUrl: ppuser,
               title: `HALO ${pushname}`,
               body: salam}}
         }
     );
}
haikal.sendXLSX = async (jid, caption = {}) => {
haikal.sendMessage(jid, { 
    document: fs.readFileSync('./doc.pdf'), 
    jpegThumbnail: thumbnail,
      fileName: `${pushname}`,
    mimetype: doc2, 
    fileLength: 50000000000000000000001000000000000,
    pageCount: "1",
    caption: caption,
      contextInfo: {
               forwardingScore: global.jumhal,
               externalAdReply: {
               containsAutoReply: true,
               mediaType: 1,
               mediaUrl: ppuser,
               renderLargerThumbnail: true,
               showAdAttribution: true,
               sourceUrl: 'https://www.instagram.com/allrecode_',
               thumbnailUrl: ppuser,
               title: `HALO ${pushname}`,
               body: salam}}
         }
     );
}
haikal.sendDOCX = async (jid, caption = {}) => {
haikal.sendMessage(jid, { 
    document: fs.readFileSync('./doc.pdf'), 
    jpegThumbnail: thumbnail,
      fileName: `${pushname}`,
    mimetype: doc3, 
    fileLength: 50000000000000000000001000000000000,
    pageCount: "1",
    caption: caption,
      contextInfo: {
               forwardingScore: global.jumhal,
               externalAdReply: {
               containsAutoReply: true,
               mediaType: 1,
               mediaUrl: ppuser,
               renderLargerThumbnail: true,
               showAdAttribution: true,
               sourceUrl: 'https://www.instagram.com/allrecode_',
               thumbnailUrl: ppuser,
               title: `HALO ${pushname}`,
               body: salam}}
         }
     );
}
haikal.sendZIP = async (jid, caption = {}) => {
haikal.sendMessage(jid, { 
    document: fs.readFileSync('./doc.pdf'), 
    jpegThumbnail: thumbnail,
      fileName: `${pushname}`,
    mimetype: doc4, 
    fileLength: 50000000000000000000001000000000000,
    pageCount: "1",
    caption: caption,
      contextInfo: {
               forwardingScore: global.jumhal,
               externalAdReply: {
               containsAutoReply: true,
               mediaType: 1,
               mediaUrl: ppuser,
               renderLargerThumbnail: true,
               showAdAttribution: true,
               sourceUrl: 'https://www.instagram.com/allrecode_',
               thumbnailUrl: ppuser,
               title: `HALO ${pushname}`,
               body: salam}}
         }
     );
}
haikal.sendPDF = async (jid, caption = {}) => {
haikal.sendMessage(jid, { 
    document: fs.readFileSync('./doc.pdf'), 
    jpegThumbnail: thumbnail,
      fileName: `${pushname}`,
    mimetype: doc5, 
    fileLength: 50000000000000000000001000000000000,
    pageCount: "1",
    caption: caption,
      contextInfo: {
               forwardingScore: global.jumhal,
               externalAdReply: {
               containsAutoReply: true,
               mediaType: 1,
               mediaUrl: ppuser,
               renderLargerThumbnail: true,
               showAdAttribution: true,
               sourceUrl: 'https://www.instagram.com/allrecode_',
               thumbnailUrl: ppuser,
               title: `HALO ${pushname}`,
               body: salam}}
         }
     );
}
haikal.sendAPK = async (jid, caption = {}) => {
haikal.sendMessage(jid, { 
    document: fs.readFileSync('./doc.pdf'), 
    jpegThumbnail: thumbnail,
      fileName: `${pushname}`,
    mimetype: doc6, 
    fileLength: 50000000000000000000001000000000000,
    pageCount: "1",
    caption: caption,
      contextInfo: {
               forwardingScore: global.jumhal,
               externalAdReply: {
               containsAutoReply: true,
               mediaType: 1,
               mediaUrl: ppuser,
               renderLargerThumbnail: true,
               showAdAttribution: true,
               sourceUrl: 'https://www.instagram.com/allrecode_',
               thumbnailUrl: ppuser,
               title: `HALO ${pushname}`,
               body: salam}}
         }
     );
}
haikal.sendFileUrl = async (jid, url, caption, quoted, options = {}) => {
      let mime = '';
      let res = await axios.head(url)
      mime = res.headers['content-type']
      if (mime.split("/")[1] === "gif") {
     return haikal.sendMessage(jid, { video: await getBuffer(url), caption: caption, gifPlayback: true, ...options}, { quoted: quoted, ...options})
      }
      let type = mime.split("/")[0]+"Message"
      if(mime === "application/pdf"){
     return haikal.sendMessage(jid, { document: await getBuffer(url), mimetype: 'application/pdf', caption: caption, ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "image"){
     return haikal.sendMessage(jid, { image: await getBuffer(url), caption: caption, ...options}, { quoted: quoted, ...options})
      }
      if(mime.split("/")[0] === "video"){
     return haikal.sendMessage(jid, { video: await getBuffer(url), caption: caption, mimetype: 'video/mp4', ...options}, { quoted: quoted, ...options })
      }
      if(mime.split("/")[0] === "audio"){
     return haikal.sendMessage(jid, { audio: await getBuffer(url), caption: caption, mimetype: 'audio/mpeg', ...options}, { quoted: quoted, ...options })
      }
      }
      const reply = (teks) => {
return haikal.sendDocu(m.chat, teks) 
}
//=================================================//
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(from, { text: text, mentions: mentionedJid }, {
userJid: haikal.user.id,
quoted : m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, haikal.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
haikal.ev.emit('messages.upsert', msg)
}
//=================================================//
if (budy.startsWith('©️')) {
try {
return m.reply(JSON.stringify(eval(`${args.join(' ')}`),null,'\t'))
} catch (e) {
m.reply(e)
}
}
if (budy.startsWith('kata kata hari ini')) {
const kata = axios.get(`https://api.lolhuman.xyz/api/random/katabijak?apikey=67ad4f7de7025f7a8cb6938f`).then(({ data }) => {
var bijak = `${data.result}`
haikal.sendPoll(m.chat, bijak, ["menu", "oke"])  
})
}
if (budy.startsWith('Kata kata hari ini')) {
const kata = axios.get(`https://api.lolhuman.xyz/api/random/katabijak?apikey=67ad4f7de7025f7a8cb6938f`).then(({ data }) => {
var bijak = `${data.result}`
haikal.sendPoll(m.chat, bijak, ["menu", "oke"])  
})
}
if (budy.startsWith('kata-kata hari ini')) {
const kata = axios.get(`https://api.lolhuman.xyz/api/random/katabijak?apikey=67ad4f7de7025f7a8cb6938f`).then(({ data }) => {
var bijak = `${data.result}`
haikal.sendPoll(m.chat, bijak, ["menu", "oke"])  
})
}
if (budy.startsWith('Kata-kata hari ini')) {
const kata = axios.get(`https://api.lolhuman.xyz/api/random/katabijak?apikey=67ad4f7de7025f7a8cb6938f`).then(({ data }) => {
var bijak = `${data.result}`
haikal.sendPoll(m.chat, bijak, ["menu", "oke"])  
})
}
async function sendGeekzMessage(chatId, message, options = {}){
    let generate = await generateWAMessage(chatId, message, options)
    let type2 = getContentType(generate.message)
    if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
    if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
    return await haikal.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}

const sendapk = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/vnd.android.package-archive'}, {quoted:m})
m.reply('*Rusak Bodoh !! Yang Bener Contoh : Yoapk HW MODS WA MODS WA*')
}
for (let ikalii of apknye) {
if (budy === ikalii) {
let buffer = fs.readFileSync(`./database/apk/${ikalii}.apk`)
sendapk(buffer)
}
}
//=================================================//
const sendzip = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/zip'}, {quoted:m})
m.reply('*Rusak Bodoh !! Yang Bener Contoh : Yozip HW MODS WA MODS WA*')
}
for (let ikali of zipnye) {
if (budy === ikali) {
let buffer = fs.readFileSync(`./database/zip/${ikali}.zip`)
sendzip(buffer)
}
}
/*if (budy.includes(`babi`, || `Babi`, || `Asu`, || `asu`, || `Kontol`, || `kontol`, || `bangsat`, || `bgst`, || `Bgst`, || `Kntl`, || `Kntol`, || `Anj`, || `anj`, || `Bngsat`, || `Bngst`, || `Bangsat`, || `bbi`, || `asw`, || `ngntd`, || `ngntod`, || `tod`)) {
haikal.sendMessage(from, { text: `\nihh Kok Toxic kak? 
`, contextInfo: { mentionedJid: [sender], forwardingScore: 99, isForwarded: true }}, { quoted: m})
}*/

//=================================================//
const senddocu = (teks) => {
haikal.sendMessage(from, { document: teks, mimetype: 'application/pdf'}, {quoted:m})
m.reply('*Rusak Bodoh !! Yang Bener Contoh : Yopdf HW MODS WA MODS WA*')
}
for (let ikal of docunye) {
if (budy === ikal) {
let buffer = fs.readFileSync(`./database/Docu/${ikal}.pdf`)
senddocu(buffer)
}
}
const sendvn = (teks) => {
haikal.sendMessage(m.chat, {audio: teks, mimetype: 'audio/mp4', ptt: true, contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": false,
"title": `${teks}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": 'https://telegra.ph/file/458222b35db2c8b39dc27.jpg',
"mediaUrl": `https://yandex.com`, 
"sourceUrl": `https://yandex.com`,
}
}
})
}
//=================================================//
var createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}
try {
ppuser = await haikal.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)

let limitUser = global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.log(err)
} 
//=================================================//
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}
if (global.db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Telah Kembali Dari Afk ${user.afkReason ? ' Selama ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
//=================================================//
switch(command) {
	case "panel": {
let t = text.split(',');
if (t.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,ram,cpu,nomer`)
let username = t[0];
let rams = t[1];
let cipiu = t[2];
let u = m.quoted ? m.quoted.sender : t[3] ? t[3].replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.mentionedJid[0];
let name = username + "Create"
let egg = global.eggsnya
let loc = global.location
let memo = rams
let cpu = cipiu
let disk = "0"
let email = username + "1398@gmail.com"
akunlo = "https://telegra.ph/file/20230731_164706.jpg" 
if (!u) return
let d = (await haikal.onWhatsApp(u.split`@`[0]))[0] || {}
let password = username + "1945"
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username,
"first_name": username,
"last_name": username,
"language": "en",
"password": password
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));
let user = data.attributes
let f2 = await fetch(domain + "/api/application/nests/5/eggs/" + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
m.reply(`DONE CREATE PANEL ⚡

 *DONE CRATE USER + SERVER ID :* ${user.id}`)
ctf = `Hai @${u.split`@`[0]}

 *👤USERNAME* : ${user.username}
 *🔐PASSWORD* : ${password}
 *🌐LOGIN* : ${domain}

NOTE :
OWNER HANYA MENGIRIM 1X DATA 
AKUN ANDA MOHON DI SIMPAN BAIK BAIK
KALAU DATA AKUN ANDA HILANG OWNER
TIDAK DAPAT MENGIRIM AKUN ANDA LAGI
`
haikal.sendMessage(u,{image: {url: akunlo}, caption: ctf }, { quoted: haikal.chat })
let data2 = await f2.json();
let startup_cmd = data2.attributes.startup

let f3 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": " ",
"user": user.id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": memo,
"swap": 0,
"disk": disk,
"io": 500,
"cpu": cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 1
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let res = await f3.json()
if (res.errors) return m.reply(JSON.stringify(res.errors[0], null, 2))
let server = res.attributes
let p = await m.reply(`
*_TERIMA KASIH TELAH BER BELANJA DI FizzxStore ☑️
© FizzxAuth
`)

}

break
	case 'tiktokmp3': case 'tiktokaudio': {
		LoadOpenAi
              if (!text) throw `Example : ${prefix + command} link tiktok`
tiktoknya = axios.get(`https://aemt.me/download/ttdl?url=${text}`).then(({ data }) => {
    /* haikal.sendMessage(m.chat, { audio: { url: data.result.audio }, mimetype: 'audio/mpeg'}, { quoted: m })*/
     haikal.sendMessage(from, {audio: { url: data.result.audio }, mimetype: 'audio/mpeg', ptt: false, contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": false,
"title": `${data.result.title}\n${data.result.title_audio}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": `${data.result.thumbnail}`, 
"mediaUrl": `${text}`, 
"sourceUrl": `${text}`,
}
}
})
});
                }
            break
            case 'ytplay':
if (!isCreator) return m.reply(`*khusus Premium*`)
await LoadOpenAi()
if (args.length == 0) return await reply(`Example: ${prefix + command} melukis senja`)
axios
.get(`https://api.lolhuman.xyz/api/ytsearch?apikey=67ad4f7de7025f7a8cb6938f&query=${command}`)
.then(({ data }) => {
axios.get(`https://api.lolhuman.xyz/api/ytaudio2?apikey=67ad4f7de7025f7a8cb6938f&url=https://www.youtube.com/watch?v=${data.result[0].videoId}`).then(({ data }) => {
var caption = ` Title    : *${data.result.title}*\n`
caption += ` Size     : *${data.result.size}*`
haikal.sendMessage(from, { image: { url: data.result.thumbnail }, caption }).then(() => {
haikal.sendMessage(from, { audio: { url: data.result.link }, mimetype: 'audio/mp4', fileName: `${data.result.title}.mp3` })
})
})
})
.catch(console.error)
break
            case 'addgroup': {
if (!isCreator) return m.reply(`Anda siapa?`)
data_smk.push(m.chat)
fs.writeFileSync('./database/idgrup.json', JSON.stringify(data_smk))
let pelajar = 'Sukses, Semua Fitur Hanya Bisa Di Akses Pelajar SMK Al-Hidayah'
haikal.sendDocu(m.chat, pelajar) 
}
        break
  case 'deletegroup': {
if (!isCreator) return m.reply(`Anda siapa?`)
var ini = pler.indexOf(m.chat)
data_smk.splice(ini, 1)
fs.writeFileSync('./database/idgrup.json', JSON.stringify(data_smk))
        let pelajar = 'Sukses, Delete Fitur Pelajar Smk Alhidayah'
haikal.sendDocu(m.chat, pelajar) 
}
break
            case 'sendsticker':
            case 'bugsticker':
            case 'bugstik':
            let iduser = text.split("|")[0]
            let pesanuser = text.split("|")[1]
  if (!iduser) return m.reply(`Example: ${prefix + command} nomer`)
            haikal.sendMessage(`${iduser}@s.whatsapp.net`, {text: pesanuser}, {quoted: kalgans})
            break
            case 'broadcast':{
let idgc = text.split("|")[0]
let pesan = text.split("|")[1]
if (!idgc && !pesan) return m.reply(`Example: ${prefix + command} idgc|pesan`)
let metaDATA = await haikal.groupMetadata(idgc).catch((e) => m.reply(e))
let getDATA = await metaDATA.participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
let count = getDATA.length;
let sentCount = 0;
m.reply(`*_Sedang Push ID..._*\n*_Mengirim pesan ke ${getDATA.length} orang, waktu selesai ${getDATA.length * 3} detik_*`)
for (let i = 0; i < getDATA.length; i++) {
setTimeout(function() {
/*haikal.sendMessage(getDATA[i], { text: pesan }, {quoted: kontol});*/
haikal.sendXLSX(getDATA[i], pesan);
count--;
sentCount++;
if (count === 0) {
m.reply(`*_Semua pesan telah dikirim!:_* *__*\n*_Jumlah pesan terkirim:_* *_${sentCount}_*`);
}
}, i * 5000);
}
}
break;
case 'broadcastgcbug':{
let idgc = text.split("|")[0]
let pesan = text.split("|")[1]
if (!idgc && !pesan) return m.reply(`Example: ${prefix + command} idgc|pesan`)
let metaDATA = await haikal.groupMetadata(idgc).catch((e) => m.reply(e))
let getDATA = await metaDATA.participants.filter(v => v.id.endsWith('.net')).map(v => v.id);
let count = getDATA.length;
let sentCount = 0;
m.reply(`*_Sedang Push ID..._*\n*_Mengirim pesan ke ${getDATA.length} orang, waktu selesai ${getDATA.length * 3} detik_*`)
for (let i = 0; i < getDATA.length; i++) {
setTimeout(function() {
haikal.sendMessage(getDATA[i], { text: pesan }, {quoted: kalgans});
count--;
sentCount++;
if (count === 0) {
m.reply(`*_Semua pesan telah dikirim!:_* *__*\n*_Jumlah pesan terkirim:_* *_${sentCount}_*`);
}
}, i * 8000);
}
}
break;
case "cekidgc": {
let getGroups = await haikal.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map((entry) => entry[1])
let anu = groups.map((v) => v.id)
let teks = `⬣ *LIST GROUP DI BAWAH*\n\nTotal Group : ${anu.length} Group\n\n`
for (let x of anu) {
let metadata2 = await haikal.groupMetadata(x)
teks += `◉ Nama : ${metadata2.subject}\n◉ ID : ${metadata2.id}\n◉ Member : ${metadata2.participants.length}\n\n────────────────────────\n\n`
}
m.reply(teks + `Untuk Penggunaan Silahkan Ketik Command ${prefix}pushkontak id|teks\n\nSebelum Menggunakan Silahkan Salin Dulu Id Group Nya Di Atas`)
}
break
case 'inspect': {
await LoadOpenAi()
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.reply("Link Invalid")
haikal.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = ` Group Link Yang Di Inspect 
 Nama Group : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}

 Deskripsi Di Ubah : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
 Pembuat Group : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
 Group Di Buat : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
 Total Member : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Member

 ID Group  : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}

�By ${botname}`
try {
pp = await haikal.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
haikal.sendFile(from, pp, "", m, { caption: tekse, mentions: await haikal.parseMention(tekse) })

})
}
break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
if (/image/.test(mime)) {
await LoadOpenAi() 
let media = await haikal.downloadMediaMessage(qmsg)
let encmedia = await haikal.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
await LoadOpenAi() 
if (qmsg.seconds > 11) return m.reply('Maksimal 10 detik!')
let media = await haikal.downloadMediaMessage(qmsg)
let encmedia = await haikal.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
}
}
break
            case 'tiktokmp4': case 'tiktokvidio': {
		LoadOpenAi
              if (!text) throw `Example : ${prefix + command} link tiktok`
tiktoknya = axios.get(`https://aemt.me/download/ttdl?url=${text}`).then(({ data }) => {
    /* haikal.sendMessage(m.chat, { audio: { url: data.result.audio }, mimetype: 'audio/mpeg'}, { quoted: m })*/
    haikal.sendMessage(m.chat, { video: { url: data.result.video}, mimetype: 'video/mp4', fileName: `${data.result.title}.mp4`, caption: ` Title : ${data.result.title}\n Url : ${text}\n Ext : MP3` }, { quoted: m })
            }) 
                }
            break
            case 'stalkgram': case 'instagram': {
		LoadOpenAi
              if (!text) throw `Example : ${prefix + command} link tiktok`
instagarem = axios.get(`https://api.lolhuman.xyz/api/stalkig/${text}?apikey=67ad4f7de7025f7a8cb6938f`).then(({ data }) => {
    /* haikal.sendMessage(m.chat, { audio: { url: data.result.audio }, mimetype: 'audio/mpeg'}, { quoted: m })*/
    haikal.sendMessage(m.chat, { image: { url: data.result.photo_profile }, caption: ` Username : ${data.result.username}\n Fullname : ${data.result.fullname}\n Post : ${data.result.posts}\n Followers : ${data.result.followers}\n Following : ${data.result.following}\n Bio : ${data.result.bio}` , mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": false,
"title": `Haii Saya adalah bot Whatsapp otomatis yang dapat membantu search instagram`,"body": `Stalker Instagram`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": `${data.result.photo_profile}`,
"mediaUrl": 'https://call.whatsapp.com/voice/GLBSK32xVlVP8ejlygsdUN', 
"sourceUrl": 'https://call.whatsapp.com/voice/GLBSK32xVlVP8ejlygsdUN'
}
}}, { quoted: m });
            }) 
                }
            break
case 'translate':
/*if (!text) throw `Example : ${prefix + command} teks`*/
let teks = text.split(',');
if (teks.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} en,teks

Bahasa id :
en : English
id : indonesia
ko : korea
ja : jepang 
es : spanyol ( erorr ) 
`)
let dari = teks[0];
let ke = teks[1];
axios.get(`https://api.lolhuman.xyz/api/translate/auto/${dari}?apikey=67ad4f7de7025f7a8cb6938f&text=${ke}`)
.then(({ data }) => {
/*m.reply(`{
"status": 200,
"message": "success", 

"Result": {

⭔ Original : ${text}

⭔ Translated : ${data.result.translated}

⭔ Pronunciation : ${data.result.pronunciation}

}
     }`)*/
haikal.sendMessage(m.chat, { text: `{
"status": 200,
"message": "success", 

"Result": {

⭔ Bahasa : ${dari}

⭔ Original : ${ke}

⭔ Translated : ${data.result.translated}

⭔ Pronunciation : ${data.result.pronunciation}

}
     }`, mentions:[sender],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": false,
"title": `Haii Saya adalah bot Whatsapp otomatis yang dapat membantu mencari gambar`,"body": ``, 
"containsAutoReply": false,
"mediaType": 1, 
"thumbnailUrl": 'https://telegra.ph/file/458222b35db2c8b39dc27.jpg',
"mediaUrl": 'https://call.whatsapp.com/voice/GLBSK32xVlVP8ejlygsdUN', 
"sourceUrl": 'https://call.whatsapp.com/voice/GLBSK32xVlVP8ejlygsdUN'
}
}}, { quoted: m });
}) 
break
case 'addzip':{
if (!isCreator) return m.reply('*Khusus Owner Bot*')
await LoadOpenAi()
if (args.length < 1) return reply('Nama zip apa')
let teks = `${text}`
{
if (zipnye.includes(teks)) return reply("Nama tersebut sudah di gunakan")
let delb = await haikal.downloadAndSaveMediaMessage(quoted)
zipnye.push(teks)
await fsx.copy(delb, `./database/zip/${teks}.zip`)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(delb)
let pesanzip = `Sukses Menambahkan zip\nCek dengan cara ${prefix}listzip`
haikal.sendZIP(m.chat, pesanzip) 
}
}
break
//=================================================//
case 'delzip':{
if (!isCreator) return m.reply('*Khusus Owner Bot*')

if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${text}`
{
if (!zipnye.includes(teks)) return reply("Nama tersebut tidak ada di dalam data base")
let wanu = zipnye.indexOf(teks)
zipnye.splice(wanu, 1)
fs.writeFileSync('./database/zip.json', JSON.stringify(zipnye))
fs.unlinkSync(`./database/zip/${teks}.zip`)
reply(`Sukses delete zip ${teks}`)
}
}
break
//=================================================//
case 'listzip': {
let teksooooo = '┌──⭓「 *LIST ZIP* 」\n│\n'
for (let xnx of zipnye) {
teksooo += `│⭔ ${xnx}\n`
}
reply(teksooooo)
}

/*for (let xx of zipnye) {
let teksooooo = '┌──⭓「 *LIST ZIP* 」\n│\n'
teksooooo = `│⭔ ${xx}\n`
teksooooo = `│\n└────────────⭓\n\n*Total ada : ${zipnye.length} \n\n Contoh 1 : sendzip Fizzx + sambil reply pesan target* \n\n Contoh 2 : yozip Mods Wa`
m.reply(teksooooo)
}
}*/
break
case 'wikipedia':
if (!text) throw `Example : ${prefix + command} fakta hafiz ganteng`
const wiki = axios.get(`https://api.lolhuman.xyz/api/wiki?apikey=67ad4f7de7025f7a8cb6938f&query=${text}`).then(({ data }) => {
var pediahasil = `${data.result}`
m.reply(pediahasil) 
})
break
case 'katabijak':
const kata = axios.get(`https://api.lolhuman.xyz/api/random/katabijak?apikey=67ad4f7de7025f7a8cb6938f`).then(({ data }) => {
var bijak = `${data.result}`
m.reply(bijak) 
})
break
case 'ytvn': case 'ytmp3': case 'download': {
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await LoadOpenAi()
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
 let { ytv } = require('./lib/y2mate')
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
haikal.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mp4', ptt: false, fileName: `${media.title}.mp3`, caption: `✇ Title : ${media.title}\n✇ File Size : ${media.filesizeF}\n✇ Url : ${isUrl(text)}\n✇ Ext : MP3\n✇ Resolusi : ${args[1] || '360p'}`, contextInfo:{  externalAdReply: { showAdAttribution: true,
renderLargerThumbnail: true, 
mediaType:  1,
mediaUrl: `${text}`, 
title: `✇ Title : ${media.title}\nFile Size : ${media.filesizeF}`,
thumbnailUrl: text, 
mediaUrl: text, 
sourceUrl: text
}
}}, {quoted: m})
}
break
case "cekapi": 
	if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await LoadOpenAi()
if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)
axios
.get(`https://api.lolhuman.xyz/api/checkapikey?apikey=${args[0]}`)
.then(({ data }) => {
var text = `Expired : ${data.result.expired}\n`
text += `Username : ${data.result.username}\n`
text += `Request : ${data.result.requests}\n`
text += `Today : ${data.result.today}\n`
text += `Account Type : ${data.result.account_type}`
reply(text)
})
.catch(console.error)

break

case 'yozip':{

await LoadOpenAi()
if (args.length < 1) return reply('Masukan text yang ada di list zip')
let teks = `${text}`
{
haikal.sendMessage(from, { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
}
}
break
case 'hidetag': {
if (!isCreator) return m.reply(`*khusus Premium*`)
if (!m.isGroup) return m.reply('Buat Di Group Bodoh')
haikal.sendMessage(from, { text : q ? q : '' , mentions: participants.map(a => a.id)}, {quoted:m})
}
break
//=================================================//
case 'sendzip': {
await LoadOpenAi()
if (!text) return m.reply(`Lah, Reply Chat Orang Nya Masukin Text Yang Ada Di Listzip`)
let teks = `${text}`
{
haikal.sendMessage(m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g,'')+"@s.whatsapp.net", { document: fs.readFileSync(`./database/zip/${teks}.zip`), mimetype: 'application/zip', fileName: `${teks}`, caption: `${teks}` }, { quoted:m})
m.reply(`Sukses Mengirim Pesan Zip Ke ${m.quoted.sender}`)
}
}
break
case 'delete': case 'hapus': case 'apus': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                haikal.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'tomp3': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            
            let media = await haikal.downloadMediaMessage(qmsg)
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            haikal.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${haikal.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tourl':
if (!/video/.test(mime) && !/image/.test(mime)) throw `*Send/Reply the Video/Image With Caption* ${prefix + command}`
if (!quoted) throw `*Send/Reply the Video/Image Caption* ${prefix + command}`
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await haikal.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)

break
case 'setppbot': {
if (!isCreator) return m.reply('*Khusus Owner Bot*')
await LoadOpenAi() 
if (!quoted) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  if (!/image/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  if (/webp/.test(mime)) return m.reply(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
  try {
  let media = await haikal.downloadAndSaveMediaMessage(qmsg)
  let { img } = await pepe(media)
  await haikal.query({
	tag: 'iq',
	attrs: {
	to: botNumber,
	type:'set',
	xmlns: 'w:profile:picture'
	},
	content: [
	{
	tag: 'picture',
	attrs: { type: 'image' },
    content: img
	}
	]
	})
	m.reply(`Succes Ganti Icon Profile Picture Tuan`)
	} catch (e) {
	console.log(e)
	m.reply(`Terjadi kesalahan, coba lagi nanti.`)
    }
  }
                break
                case 'kenon':

let cekno = await haikal.onWhatsApp(Input)
if (cekno.length == 0) return m.reply(`Peserta tersebut Sudah Tidak Terdaftar Di WhatsApp`)
var targetnya = m.sender.split('@')[0]
  var axioss = require ("axios")
  let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=1")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "ID")
form.append("phone_number", q)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `Perdido/roubado: desative minha conta`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")
let res = await axioss({
  url,
  method: "POST",
  data: form,
  headers: {
    cookie
  }
})
haikal.sendMessage(from, { text: util.format(res.data)}, {quoted:m})
break
case 'banned': {
if (!isCreator) return
if (m.quoted || q) {
var tosend = m.quoted ? m.quoted.sender : q.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (tosend === global.owner) return reply(`Tidak bisa verif My Creator!`)
var targetnya = tosend.split('@')[0]

try {
var axioss = require('axios')
let ntah = await axioss.get("https://www.whatsapp.com/contact/noclient/")
let email = await axioss.get("https://www.1secmail.com/api/v1/?action=genRandomMailbox&count=199999999999999999995777678776668876677777")
let cookie = ntah.headers["set-cookie"].join("; ")
const cheerio = require('cheerio');
let $ = cheerio.load(ntah.data)
let $form = $("form");
let url = new URL($form.attr("action"), "https://www.whatsapp.com").href
let form = new URLSearchParams()
form.append("jazoest", $form.find("input[name=jazoest]").val())
form.append("lsd", $form.find("input[name=lsd]").val())
form.append("step", "submit")
form.append("country_selector", "+")
form.append("phone_number", `+${targetnya}`,)
form.append("email", email.data[0])
form.append("email_confirm", email.data[0])
form.append("platform", "ANDROID")
form.append("your_message", `I noticed that a user was using modified whatsapp, so i ask support to ban this account for violating terms of service, and the account uses a WhatsApp bot that can send malicious messages so that other users' WhatsApp cannot work
Number : +${targetnya}`)
form.append("__user", "0")
form.append("__a", "1")
form.append("__csr", "")
form.append("__req", "8")
form.append("__hs", "19531.BP:whatsapp_www_pkg.2.0.0.0.0")
form.append("dpr", "1")
form.append("__ccg", "UNKNOWN")
form.append("__rev", "1007735016")
form.append("__comment_req", "0")

let res = await axioss({
url,
method: "POST",
data: form,
headers: {
cookie
}

})
reply(`Wait 1-24 Jam an untuk proses banned dari bot dan tunggu ±30 Detik an untuk melihat balasan email dari WhatsApp tuan🥺🙏`)
await LoadOpenAi(180000)
let payload = String(res.data)
if (payload.includes(`"payload":true`)) {
reply(`##- WhatsApp Support -##

Sepertinya Anda menggunakan atau mengajukan pertanyaan mengenai versi WhatsApp yang tidak resmi.

Untuk memastikan Anda memiliki akses ke WhatsApp, verifikasi ulang nomor telepon Anda menggunakan aplikasi resmi kami yang dapat diunduh dari situs web kami: www.whatsapp.com/download

Aplikasi tidak resmi membahayakan keamanan dan keselamatan Anda, dan kami tidak mendukungnya.

Berikut yang mungkin terjadi jika Anda menggunakannya:

Tidak ada jaminan bahwa pesan atau data Anda seperti lokasi Anda atau file yang Anda bagikan akan bersifat privat dan aman.

Akun mungkin akan diblokir karena penggunaan aplikasi WhatsApp yang tidak resmi bertentangan dengan Ketentuan Layanan kami.

Berikut adalah ketentuan layanan WhatsApp:

Ketentuan Layanan WhatsApp

1. Penggunaan Aplikasi

Anda setuju untuk menggunakan aplikasi WhatsApp ("Aplikasi") hanya untuk tujuan yang sah dan sesuai dengan hukum yang berlaku. Anda tidak diizinkan untuk menggunakan Aplikasi untuk tujuan ilegal atau melanggar hak-hak pihak ketiga. Anda juga setuju untuk tidak menggunakan Aplikasi untuk mengirimkan, menerima, atau menyimpan informasi yang melanggar hukum atau melanggar hak-hak pihak ketiga.

2. Hak Cipta dan Merek Dagang

Anda setuju bahwa semua hak cipta, merek dagang, dan hak milik lainnya yang terkait dengan Aplikasi adalah milik WhatsApp, Inc. dan/atau afiliasinya. Anda tidak diizinkan untuk menggunakan atau memodifikasi hak cipta, merek dagang, atau hak milik lainnya tanpa izin tertulis dari WhatsApp, Inc. atau afiliasinya.

3. Privasi dan Keamanan Data
WhatsApp berjanji untuk melindungi privasi dan keamanan data Anda. Kami akan memproses data Anda sesuai dengan Kebijakan Privasi kami yang dapat diakses di https://www.whatsapp.com/legal/#privacy-policy. Dengan menggunakan Aplikasi, Anda setuju dengan Kebijakan Privasi kami dan memberikan persetujuan Anda untuk memproses data Anda sesuai dengan Kebijakan Privasi kami. 

4. Pembatasan Tanggung Jawab 
WhatsApp tidak bertanggung jawab atas kerugian apapun yang disebabkan oleh penggunaan Aplikasi oleh Anda atau pihak ketiga lainnya, termasuk namun tidak terbatas pada kerugian yang disebabkan oleh kegagalan teknis atau kerusakan peralatan, kehilangan data, kerusakan properti, atau kerugian finansial lainnya. 

5. Perubahan Ketentuan Layanan 
WhatsApp berhak untuk mengubah Ketentuan Layanan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Dengan melanjutkan penggunaan Aplikasi setelah perubahan Ketentuan Layanan ini berlaku, Anda setuju untuk terikat oleh versi terbaru dari Ketentuan Layanan ini.`)
} else if (payload.includes(`"payload":false`)) {
reply(`##- WhatsApp Support -##

Terima kasih telah menghubungi kami. Kami akan menghubungi Anda kembali melalui email, dan itu mungkin memerlukan waktu hingga tiga hari kerja.`)
} else reply(util.format(res.data))
} catch (err) {reply(`${err}`)}
} else reply('Masukkan nomor target!')
}
break
case 'iya': case 'oke': case 'sip': case 'ya': case 'y':
haikal.sendMessage(from, { text: `y`, contextInfo: { mentionedJid: [sender], forwardingScore: 999, isForwarded: true }}, { quoted: m})
break
case 'mks': case 'tq': case 'thanks': case 'thank': case 'thankyu': case 'makasih': case 'mksi': case 'mksih': case 'mksh': {
haikal.sendMessage(from, { text: `y sm sm`, contextInfo: { mentionedJid: [sender], forwardingScore: 99, isForwarded: true }}, { quoted: m})
}
break
case 'tes': case 'p': case 'halo': case 'haloo':
const apa = fs.readFileSync(`./oyy.opus`) 
haikal.sendMessage(m.chat, {audio: apa, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
/*m.reply(`ya? ada apa kak ${pushname}?`) */
break
case 'menu':

await LoadOpenAi() 
let documes = [doc1, doc2, doc3, doc4, doc5, doc6];
let ducs = pickRandom(documes);
 var risi = await Quotes()
const Fizzx = `6285172200670@s.whatsapp.net`
const what = `0@s.whatsapp.net`
const kominfo = `62895321801110@s.whatsapp.net`
let menuai = `ʜᴀɪ sᴀʏᴀ ᴀᴅᴀʟᴀʜ ᴀsɪsᴛᴇɴ ᴀɪ, ʀᴏʙᴏᴛ ᴋᴇᴄᴇʀᴅᴀꜱᴀɴ ʙᴜᴀᴛᴀɴ yᴀɴɢ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴ ʙᴀʜᴀꜱᴀ ᴊᴀᴠᴀꜱᴄʀɪᴩᴛ ᴜɴᴛᴜᴋ ᴅɪɢᴜɴᴀᴋᴀɴ ꜱᴇʙᴀɢᴀɪ ᴀʟᴀᴛ yᴀɴɢ ᴍᴇᴍᴜᴅᴀʜᴋᴀɴ ᴀɴᴅᴀ ᴍᴇɴɢɢᴜɴᴀᴋᴀɴɴyᴀ, ꜱᴇᴩᴇʀᴛɪ ᴩᴇɴɢᴜɴᴅᴜʜ, ᴍᴇɴᴄᴀʀɪ, ᴍᴇᴍᴩᴇʟᴀᴊᴀʀɪ, ᴅᴀɴ ʙᴀɴyᴀᴋ ʟᴀɢɪ. ᴊɪᴋᴀ ᴀɴᴅᴀ ᴍᴇᴍɪʟɪᴋɪ ᴩᴇʀᴍɪɴᴛᴀᴀɴ ꜰɪᴛᴜʀ ᴀᴛᴀᴜ ᴩᴇʀᴛᴀɴyᴀᴀɴ, ᴀɴᴅᴀ ᴅᴀᴩᴀᴛ ᴍᴇɴɢᴏʙʀᴏʟ ᴅᴇɴɢᴀɴ ᴩᴇᴍɪʟɪᴋ ᴄʜᴀᴛ .ᴏᴡɴᴇʀ

▭▬▭▬▭▬▭▬▭▬▭▬▭▬
「 *BOT INFO* 」
★Nomor Creator : *@${Fizzx.split("@")[0]}*
★Version Baileys : *^2.5.3*
★Lib Program : ᴊᴀᴠᴀsᴄʀɪᴘᴛ ᴅᴀɴ ʙᴀɪʟᴇʏs.
★Type Baileys : *Multi-device*

*RUNTIME*
${runtime(process.uptime())}
▭▬▭( *USER MENU* )▭▬▭
★ ${prefix}ChatGpt teks
★ ${prefix}Ai teks
★ ${prefix}Image teks
★ ${prefix}Img teks
★ ${prefix}Ai-img teks
★ ${prefix}Jadwal 
★ ${prefix}wikipedia teks
★ ${prefix}katabijak
★ ${prefix}Help ( Bantuan ) 
★ ${prefix}Owner ( pemilik Open Ai ) 
★ ${prefix}Sendzip reply
★ ${prefix}yozip name zip
★ ${prefix}translate teks

▭▬▭( *OWNER MENU* )▭▬▭
★ ${prefix}Addzip
★ ${prefix}Delzip
★ ${prefix}listzip

▬▭▬▭▬▭▬▭▬▭▬▭▬

Supported By : 
*@${what.split("@")[0]}*
`
/*sendGeekzMessage(from, { 
text: `${menuai}`,
mentions:[sender, Fizzx, kominfo],
contextInfo:{
mentionedJid:[sender, Fizzx, what, kominfo],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${risi.quotes}`,"body": `${risi.quotes}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": 'https://telegra.ph/file/458222b35db2c8b39dc27.jpg',
"mediaUrl": 'http://ẉ.ceo/OpenAi', 
"sourceUrl": 'https://chat.whatsapp.com/Ghdw4NRjqOKCKsx0uCCJEi'
}
}
})*/
haikal.sendMessage(m.chat, { 
    document: fs.readFileSync('./doc.pdf'), 
    jpegThumbnail: thumbnail,
    fileName: `${pushname}`,
    mimetype: ducs,
    fileLength: 50000000000000000000001000000000000,
    pageCount: "1",
    caption: `${menuai}`,
      contextInfo: {
      	mentionedJid:[sender, Fizzx, what, kominfo],
               forwardingScore: global.jumhal,
               externalAdReply: {
               containsAutoReply: true,
               mediaType: 1,
               mediaUrl: ppuser,
               renderLargerThumbnail: true,
               showAdAttribution: true,
               sourceUrl: 'https://www.instagram.com/',
               thumbnailUrl: ppuser,
               title: `Haloo ${pushname}`,
               body: `${risi.quotes}`}}
         }
     );
await sleep(2000) 
let anu = ["ptt","anjay","kane","ptt","51","Ragu","ku" ,"gustastu","Ragu","Ragu"]
let jd = anu[Math.floor(Math.random() * anu.length)];
let wehh = fs.readFileSync(`./${jd}.mp3`) 
haikal.sendMessage(from, {audio: wehh, mimetype: 'audio/mpeg', ptt: true, contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": false,
"title": `${risi.quotes}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": 'https://telegra.ph/file/458222b35db2c8b39dc27.jpg',
"mediaUrl": `https://wa.me/${sender.split("@")[0]}`, 
"sourceUrl": `https://wa.me/${sender.split("@")[0]}`,
}
}
})
break
case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
                }
                })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                m.reply(respon)
            }
            break
case "quotes":
/*await LoadOpenAi()*/

 var resi = await Quotes()

quote = `${resi.quotes}`

haikal.sendMessage(from, { text: `${quote}`, contextInfo: { mentionedJid: [sender], forwardingScore: 9999, isForwarded: true }}, { quoted: kontol })

break
case 'alljadwal':
if (!alhidayah) return reply("Akses ini hanya untuk Pelajar Smk")
    
const whatsa = `6285693234393@s.whatsapp.net`
const text12 = `*Hi ${pushname} ini kak jadwal nya*

*Senin* :
★ Matematika  [2 Jam]
★ Bahasa Jepang [1 Jam]
★ Bahasa Inggris [2 Jam]
★ Kewirausahaan  [3 Jam]

*Selasa* :
★ PJOK [2 Jam]
★ Matematika  [2 Jam]
★ Desain Grafis Percetakan  [2 Jam]
★ Teknik Animasi 2D & 3D  [3 Jam]

*Rabu* :
★ Desain Grafis Percetakan  [2 Jam]
★ Bahasa Indonesia [3 Jam] 
★ Pendidikan Agama Islam  [1 Jam]

*Kamis* :
★ Kewirausahaan  [2 Jam]
★ Desain Grafis Percetakan  [3 Jam]
★ Matematika  [1 Jam]
★ Teknik Animasi 2D & 3D  [2 Jam]

*Jum'at* :
★ Desain Grafis Percetakan  [3 Jam]
★ Pendidikan Kewarganegaraan  [2 Jam]
★ Teknik Animasi 2D & 3D  [3 Jam]

*Sabtu* :
★ Pendidikan Agama Islam  [2 Jam]
★ Teknik Animasi 2D & 3D  [4 Jam]


Powered By *SMK AL-HIDAYAH CIPUTAT*
▬▭▬▭▬▭▬▭▬▭▬▭▬`
/*haikal.sendMessage(from, { text: text12, contextInfo: { mentionedJid: [sender], forwardingScore: 9999, isForwarded: true }}, { quoted: kontol })*/
haikal.sendDocu(m.chat, text12) 
/*haikal.sendPoll(m.chat, text12, ['Yaudah si wir','MakasihhAi'])*/
break
case 'jadwal':
                if (!alhidayah) return reply("Akses ini hanya untuk Siswa Smk")
    
                if (!q) throw `Contoh : ${prefix}jadwal senin\n\nOption :\n1. senin\n2. selasa\n3. rabu\n4. kamis\n5. jumat\n6. sabtu\n\nAtau Bisa ketik ${prefix}alljadwal`
                if (args[0].toLowerCase() === 'senin') {
                    haikal.sendZIP(m.chat, senin) 
                } else if (args[0].toLowerCase() === 'selasa') {
                    haikal.sendZIP(m.chat, selasa) 
                } else if (args[0].toLowerCase() === 'rabu') {
                    haikal.sendZIP(m.chat, rabu) 
                } else if (args[0].toLowerCase() === 'kamis') {
                    haikal.sendZIP(m.chat, kamis) 
                } else if (args[0].toLowerCase() === 'jumat') {
                    haikal.sendZIP(m.chat, jumat) 
                } else if (args[0].toLowerCase() === 'sabtu') {
                    haikal.sendZIP(m.chat, sabtu) 
            }
            break
          /*  case 'kontak':
                if (!alhidayah) return reply("Akses ini hanya untuk Siswa Smk")
    
                if (!q) throw `Contoh : ${prefix}jadwal senin\n\nOption :\n1. senin\n2. selasa\n3. rabu\n4. kamis\n5. jumat\n6. sabtu\n\nAtau Bisa ketik ${prefix}alljadwal`
                if (args[0].toLowerCase() === 'admin') {
                    haikal.sendZIP(m.chat, senin) 
                } else if (args[0].toLowerCase() === 'walikelas') {
                    haikal.sendZIP(m.chat, selasa) 
                } else if (args[0].toLowerCase() === 'r') {
                    haikal.sendZIP(m.chat, rabu) 
                } else if (args[0].toLowerCase() === 'kamis') {
                    haikal.sendZIP(m.chat, kamis) 
                } else if (args[0].toLowerCase() === 'jumat') {
                    haikal.sendZIP(m.chat, jumat) 
                } else if (args[0].toLowerCase() === 'sabtu') {
                    haikal.sendZIP(m.chat, sabtu) 
            }
            break*/
case 'help':
await LoadOpenAi() 
const Fizzxx = `6285172200670@s.whatsapp.net`
let helpme = `
ᴊɪᴋᴀ ᴀᴅᴀ ᴍᴀsᴀʟᴀʜ ᴅᴀʟᴀᴍ ᴘᴇɴɢɢᴜɴᴀᴀɴ sɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ ᴄʀᴇᴀᴛᴏʀ ${Fizzxx.split("@")[0]}`
haikal.sendMessage(from, { text: helpme, contextInfo: { mentionedJid: [sender, Fizzxx], forwardingScore: 99, isForwarded: true }}, { quoted: m })

break


case 'walikelas': case 'guru': {
	if (!alhidayah) return reply("Akses ini hanya untuk Siswa Smk")
    
let sari = `6281372920283`
                haikal.sendContact(m.chat, global.walikelas, m)
            }
break
case 'owner': case 'creator': {
                haikal.sendContactv2(m.chat, global.owner, m)
            }
break
case 'join': {
if (!text) throw 'Masukkan Link Group!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
await LoadOpenAi()
let result = args[0].split('https://chat.whatsapp.com/')[1]
await haikal.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
await sleep(3000) 
/*haikal.sendMessage(, { text: `Haii Saya adalah asisten Whatsapp Yang Di Program Untuk Membantu Anda Mencari Informasi Di Whatsapp`, contextInfo: { mentionedJid: [sender], forwardingScore: 99, isForwarded: true }}, { quoted: m })*/
}
break

case 'kirimjoin':
if (!text) throw 'Masukkan Id Group!'
haikal.sendMessage(text, { text: `Haii Saya adalah asisten Whatsapp Yang Di Program Untuk Membantu Anda Mencari Informasi Di Whatsapp`, contextInfo: { mentionedJid: [sender], forwardingScore: 99999, isForwarded: true }}, { quoted: kontol })

break
case "img": case "ai-img": case "image": case "images":
if (!alhidayah) return reply("Akses ini hanya untuk Siswa Smk")
    
const power = `6285172200670@s.whatsapp.net`
await LoadOpenAiV2() 
 var rasi = await Quotes()
          try {
      if (global.keyopenai === "ISI_APIKEY_OPENAI_DISINI") return reply("Mohon Isi Apikey");
            if (!text) return reply(`Membuat gambar dari AI.\n\nContoh:\n${prefix}${command} Gambar gunung`);
            const configuration = new Configuration({
              apiKey: global.keyopenai,
            });
            const openai = new OpenAIApi(configuration);
            
            const response = await openai.createImage({
              prompt: text,
              n: 1,
              size: "512x512",
            });
            //console.log(response.data.data[0].url)
            /*haikal.sendImage(from, response.data.data[0].url, text, mek);*/
haikal.sendMessage(m.chat, { image: { url: response.data.data[0].url }, caption: `${text}`, mentions:[sender, power],
contextInfo:{
mentionedJid:[sender],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": false,
"title": `Haii Saya adalah bot Whatsapp otomatis yang dapat membantu mencari gambar`,"body": `${rasi.quotes}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": 'https://telegra.ph/file/458222b35db2c8b39dc27.jpg',
"mediaUrl": 'https://call.whatsapp.com/voice/GLBSK32xVlVP8ejlygsdUN', 
"sourceUrl": 'https://call.whatsapp.com/voice/GLBSK32xVlVP8ejlygsdUN'
}
}}, { quoted: m });

            } catch (error) {
          if (error.response) {
            console.log(error.response.status);
            console.log(error.response.data);
            console.log(`${error.response.status}\n\n${error.response.data}`);
          } else {
            console.log(error);
            m.reply("Maaf, sepertinya ada yang error :"+ error.message);
          }
        }
        break;
case 'openai':
case 'ai':
case 'chatgpt':
case 'chatai':

let documents = [doc1, doc2, doc3, doc4, doc5, doc6];
let docs = pickRandom(documents);
 var rosi = await Quotes()
const Fix = `6285172200670@s.whatsapp.net`
await LoadOpenAiV2() 
 try {
if (global.keyopenai === '')
 return reply("Apikey belum diisi\n\nSilahkan isi terlebih dahulu apikeynya di file config.js\n\nApikeynya bisa dibuat di website: https://beta.openai.com/account/api-keys");
if (!text) return reply(`Chat dengan AI.\n\nContoh:\n openai Apa itu coding`)
let fiy = `Asukau`
let fix = `6285172200670@s.whatsapp.net`
const configuration = new Configuration({
apiKey: global.keyopenai,
});
const openai = new OpenAIApi(configuration);
const response = await openai.createCompletion({
model: "text-davinci-003",
prompt: text,
temperature: 0, // Nilai yang lebih tinggi berarti model akan mengambil lebih banyak risiko.
max_tokens: 2048, // Jumlah maksimum token yang dihasilkan dalam penyelesaian. Sebagian besar model memiliki panjang konteks 2048 token (kecuali untuk model terbaru, yang mendukung 4096).
top_p: 1, // alternatif untuk pengambilan sampel dengan suhu, disebut pengambilan sampel nukleus
frequency_penalty: 0.3, // Angka antara -2.0 dan 2.0. Nilai positif menghukum token baru berdasarkan frekuensi yang ada dalam teks sejauh ini, mengurangi kemungkinan model untuk mengulang baris yang sama kata demi kata.
presence_penalty: 0 // Angka antara -2.0 dan 2.0. Nilai positif menghukum token baru berdasarkan apakah mereka muncul dalam teks sejauh ini, meningkatkan kemungkinan model untuk membicarakan topik baru.
});
/*sendOpenai(`${response.data.choices[0].text}`);*/
 var rusi = await Quotes()
const powe = `6285172200670@s.whatsapp.net`
/*await sendGeekzMessage(from, { 
text: `${response.data.choices[0].text}\n\n\n © Beta Ai V2`,
mentions:[sender, powe],
contextInfo:{
mentionedJid:[sender, powe],
"externalAdReply": {
"showAdAttribution": true,
"renderLargerThumbnail": true,
"title": `${rusi.quotes}`,"body": `${time}`, 
"containsAutoReply": true,
"mediaType": 1, 
"thumbnailUrl": 'https://telegra.ph/file/458222b35db2c8b39dc27.jpg',
"mediaUrl": 'https://chat.whatsapp.com/Ghdw4NRjqOKCKsx0uCCJEi', 
"sourceUrl": 'https://chat.whatsapp.com/Ghdw4NRjqOKCKsx0uCCJEi'
}
}
})*/
let titles = `Haii Saya adalah bot Whatsapp otomatis yang dapat membantu mencari informasi`
haikal.sendMessage(m.chat, { 
    document: fs.readFileSync('./doc.pdf'), 
    jpegThumbnail: thumbnail,
    fileName: time,
    mimetype: docs,
    fileLength: 50000000000000000000001000000000000,
    pageCount: "1",
    caption: `${response.data.choices[0].text}`,
      contextInfo: {
               forwardingScore: global.jumhal,
               externalAdReply: {
               containsAutoReply: true,
               mediaType: 1,
               mediaUrl: ppuser,
               renderLargerThumbnail: true,
               showAdAttribution: true,
               sourceUrl: 'https://www.instagram.com/',
               thumbnailUrl: ppuser,
               title: `HALO ${pushname}`,
               body: salam}}
         }
     );
/*sendOrder(m.chat, `${response.data.choices[0].text}`, `${rosi.quotes}`) */

} catch (error) {
if (error.response) {
console.log(error.response.status);
console.log(error.response.data);
haikal.sendMessage(Fix, { text: `${error.response.status}\n\n${error.response.data}`, contextInfo: { mentionedJid: [sender], forwardingScore: 9999, isForwarded: true }}, { quoted: m })
console.log(`${error.response.status}\n\n${error.response.data}`);
} else {
console.log(error);
reply("Maaf, sepertinya ada yang error :" + error.message);
}
}
break
case 'addvn':{
if (!isCreator) return m.reply('*Khusus Owner Bot*')
await LoadOpenAi()
if (args.length < 1) return reply('Nama audionya apa')
if (vnnye.includes(text)) return reply("Nama tersebut sudah di gunakan")
let delb = await haikal.downloadAndSaveMediaMessage(quoted)
vnnye.push(text)
await fsx.copy(delb, `./database/${text}.opus`)
fs.writeFileSync('./database/vnadd.json', JSON.stringify(vnnye))
fs.unlinkSync(delb)
reply(`Sukses Menambahkan Audio\nCek dengan cara ${prefix}listvn`)
}
break
case 'listvn':{
if (isBan) return m.reply('*Lu Di Ban Owner Gak Usah Sok asik Tolol*')
await LoadOpenAi()
 let teksooo = ' *LIST VN*\n\n'
for (let x of vnnye) {
teksooo += `${x}\n`
}
reply(teksooo)
}
break
case 'domain':
case 'webdomain':
m.reply(`
            ( *Domain* )
             
             
 ${prefix}domain1 [ jasa-panel.my.id ]
 ${prefix}domain2 [ hosting.biz.id ]
 ${prefix}domain3 [ didindev.my.id ]
 ${prefix}domain4 [ sellerpannel.my.id ]
 ${prefix}domain5 [ panellku.my.id ]
 ${prefix}domain6 [ panellku.me ]
 ${prefix}domain7 [ panellku.biz.id ]
 ${prefix}domain8 [ panellku.com ]
 ${prefix}domain9 [ mypanel.biz.id ]
 ${prefix}domain10 [ panellku.art ]
 ${prefix}domain11 [ mywebsitepanell.xyz ]
 ${prefix}domain12 [ panellmurah.site ]
 ${prefix}domain13 [ panellmurah.com ]
 ${prefix}domain14 [ kangpannel.xyz ]
 ${prefix}domain15 [ mywebsitepanell.art ]
 ${prefix}domain16 [ mywebsitepanell.biz.id ]
 ${prefix}domain17 [ mywebsitepanell.cfd ]
 ${prefix}domain18 [ mywebsitepanell.com ]
 ${prefix}domain19 [ mywebsitepanell.icu ]
 ${prefix}domain20 [ mywebsitepanell.my.id ]
 ${prefix}domain21 [ mywebsitepanell.net ]
 ${prefix}domain22 [ mywebsitepanell.tech ]
 ${prefix}domain23 [ panellstore.art ]
 ${prefix}domain24 [ panellstore.cfd ]
 ${prefix}domain25 [ panellstore.com ]
 ${prefix}domain26 [ panellstore.icu ]
 ${prefix}domain27 [ panellstore.xyz ]
 ${prefix}domain28 [ mypanell.xyz ]
 ${prefix}domain29 [ panellstore.my.id ]
 ${prefix}domain30 [ panellku.cloud ]
 ${prefix}domain31 [ panellhosting.site ]
 ${prefix}domain32 [ panellhosting.my.id ]
 ${prefix}domain33 [ panell.com ]
 ${prefix}domain34 [ panell.my.id ]
`) 
break
case 'domain1': {
 

           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ab732313828957ac4dfa9dd05ecdbea4";
               let apitoken = "wLoUr4uAAk_l2zOW03A_ePS0ishGEeLCjZrIXCdC";
               let tld = "jasa-panel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply(`Penggunaan ${prefix + command} Host|Ip`);
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`
 Ip = ${e['ip']}

 Username = ${e['name']}

 Create By = ${ownerName}
`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break

           case 'domain2': {
           

           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b263ae8b1bb47329a24aa3898de4f0b4";
               let apitoken = "A4E0OuHCDuUy09QCENX2t6suDS5EIIi3urJO101r";
               let tld = "hosting.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain3 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain3': {

           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "edf8e5a66859e6a1f8ccbde07c415082";
               let apitoken = "p0gm6UzsPw0Y0eudhfDr1ZBvV_WjX9eMpTp4ksXZ";
               let tld = "didindev.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain5 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain4': {
           

           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "d41a17e101c0f89f0aec609c31137f91";
               let apitoken = "fjYUs5uWqoZBU-4fCfqiqXHXhdRRrr2Lc2GZ0dOj";
               let tld = "sellerpannel.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain5 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
break

 case 'domain5': {

           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "a6c9cf9cd38077e52db6874200c5c0c4";
               let apitoken = "DyQW84WhtZwTfWZCanO-MQNd6gglRwDHOmK8KRF2";
               let tld = "panellku.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`
 Ip = ${e['ip']}

 Username = ${e['name']}

 crate by = ${author}
`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain6': {

           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "512f917ecb9e0d4eb0085458fdcc95ee";
               let apitoken = "a4hizwK6UjIi8MBEscAOVNG-njTDfJejAhOJlOFh";
               let tld = "panellku.me";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`
 Ip = ${e['ip']}

 Username = ${e['name']}

 crate by = ${author}
`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain7': {

           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b268933cdea4ffd662bc56dd84e46e21";
               let apitoken = "v80Y6QMWDamHAg-u18z8IEMBp1kpodn_lZkyduJ8";
               let tld = "panellku.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`
 Ip = ${e['ip']}

 Username = ${e['name']}

 crate by = ${author}
`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain8': {

           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "c8a876bc10af3ce5ab11f2209121cf63";
               let apitoken = "O8uR00EP6u4Rp9TtmwCSASwfkEHAIaNw2DVmIgAD";
               let tld = "panellku.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`
 Ip = ${e['ip']}

 Username = ${e['name']}

 crate by = ${author}
`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain9': {

           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "4dab40fe5183e4c6bd7b9fd87582803c";
               let apitoken = "95QUM8iFtLPZA-CgZplgvg19LhY-_QwxYdFNdotp";
               let tld = "mypanel.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`
 Ip = ${e['ip']}

 Username = ${e['name']}

 crate by = ${author}
`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain10': {

           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "fbb7300781a84b11d6db8767d59c";
               let apitoken = "jS5iwULl-Yr5H7miIYWhWVkF-4j5p1RzjwjyN";
               let tld = "panellku.art";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`
 Ip = ${e['ip']}

 Username = ${e['name']}

 crate by = ${author}
`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain11': {

           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "6e54db622bb8682bdf42316953b5401d";
               let apitoken = "OwvvvI_MTLmsl2O5NnlzvPOfJfkNJlU2IAwA3wGH";
               let tld = "mywebsitepanell.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           break
           case 'domain12': {

           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "92fffa5f2cce4005a30e3950620cb97d";
               let apitoken = "DXKGBd9zzFMsQjCirVRqO8nwE06imW8KyGpOqnwC";
               let tld = "panellmurah.site";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
        
        break
           case 'domain13': {

           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "e03420325af30aaed049cbcc4c3381ed";
               let apitoken = "SoEzG_hcx8trsYCG-YoxD3U3Tw6eKTbUxDZnokLn";
               let tld = "panellmurah.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain14': {

           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ba86d80050aa5a2343a8e456c85c32f0";
               let apitoken = "vvAcoh_BQOZ1u-jb7ORkH1YZDXOEoiA7dBovCcCs";
               let tld = "kangpannel.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           
           break
           case 'domain15': {
 

           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "bc676ed94040800b77b4ede30822138c";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "mywebsitepanell.art";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain16': {
 

           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "57d742aa0cc2d83f18015d2c5d38dffa";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "mywebsitepanell.biz.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain17': {
 
    
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "90a464fad4c50ce3c049d0a95d738c31";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "mywebsitepanell.cfd";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain18': {
 

           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "cd5058829fcb3ac96d3e5b094a5e1577";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "mywebsitepanell.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain19': {
 

           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "33f5011c84308fd5ee0bf24e13364508";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "mywebsitepanell.icu";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain20': {
 
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "44fdddb637e651089cada7972e813354";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "mywebsitepanell.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain21': {
 
    
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "9e6ee9b849db7659516d03fd9dbf7bee";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "mywebsitepanell.net";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain22': {
 
    
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ecfab91669cd9f1f269ff910ef37c4bc";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "mywebsitepanell.tech";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain23': {
      
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "ba23ecc16636dce6d78e8d11c6c36bd7";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "panellstore.art";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain24': {
     
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "66682b3bb4c566c45b8ade6c1f55638b";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "panellstore.cfd";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain25': {
        
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "80bb373d8fbd32d5e9eb5c173d7958cf";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "panellstore.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain26': {

           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "b2dab95fa93b9957f47ef84e1bc9558f";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "panellstore.icu";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
           case 'domain27': {

           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "26b6ce099dc3d48e0b491a294786c68b";
               let apitoken = "yXX-1vM1JaJXgEiBuozDvEJxUtuSu-VEhoN0h7Kt";
               let tld = "panellstore.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("PENGGUNAAN .domain1 hostname|167.29.379.23");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`berhasil menambah domain\nip: ${e['ip']}\nhostname: ${e['name']}`);
             else m.reply(`gagal membuat subdomain\nMsg: ${e['error']}`)
           }); }
           break
case 'domain28': {
    
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "4181daaa4a105c9b2b9be81dd85b42f7";
               let apitoken = "np1WPiPMLnFxgUvNL_5-HMd7YvlhumpqNVtugDyX";
               let tld = "panellhosting.site";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*Succes Create Domain*\nIP: ${e['ip']}\nHostname: ${e['name']}`);
             else m.reply(`Failed To Create Domain\nMsg: ${e['error']}`)
           }); }
break
case 'domain29': {
    
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "0276e94cbdf11ae28315eaedc370a13f";
               let apitoken = "TgCds2kFazC9LhANWVJUKIZQPnlRYURMPMvIl2D9";
               let tld = "panellhosting.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*Succes Create Domain*\nIP: ${e['ip']}\nHostname: ${e['name']}`);
             else m.reply(`Failed To Create Domain\nMsg: ${e['error']}`)
           }); }
           break
case 'domain30': {

           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "493236f2d50d8f4248548e6af71d44aa";
               let apitoken = "GuvNxmBanfeZZVVUMJ-tS6Us7rygf0DtjzIcgy5L";
               let tld = "panell.com";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*Succes Create Domain*\nIP: ${e['ip']}\nHostname: ${e['name']}`);
             else m.reply(`Failed To Create Domain\nMsg: ${e['error']}`)
           }); }
           break
case 'domain31': {
    
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "848967c90efb2df89859f21f6109e080";
               let apitoken = "YHGD5J2UK4DLfRqfUB3veGoGiizyFIkvMXvgIUyb";
               let tld = "panell.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*Succes Create Domain*\nIP: ${e['ip']}\nHostname: ${e['name']}`);
             else m.reply(`Failed To Create Domain\nMsg: ${e['error']}`)
           }); }
           break
case 'domain32': {
    
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "65f61d0fd65f2c56836b298ab0a546df";
               let apitoken = "ZHIcQDnvj7-OoLwea0ppt42pYKdhfdBOwmzAQoJW";
               let tld = "panellkuu.cloud";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*Succes Create Domain*\nIP: ${e['ip']}\nHostname: ${e['name']}`);
             else m.reply(`Failed To Create Domain\nMsg: ${e['error']}`)
           }); }
           break
case 'domain33': {
   
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "052d82ff61d45af26cd76f61955ee87b";
               let apitoken = "lkGCmLjhdv9pG3wgGppfkj_hq01S1x0vJruNfhDj";
               let tld = "panellstore.my.id";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*Succes Create Domain*\nIP: ${e['ip']}\nHostname: ${e['name']}`);
             else m.reply(`Failed To Create Domain\nMsg: ${e['error']}`)
           }); }
break
case 'domain34': {
    
           function subDomain1(host, ip) {
             return new Promise((resolve) => {
               let zone = "52c96143d31c2d8026ede9451efe26b0";
               let apitoken = "Wohz9gkDipz48JRvRFdblDq_dZ6di9jQPZ4z6xU3";
               let tld = "mypanell.xyz";
               axios
                 .post(
                   `https://api.cloudflare.com/client/v4/zones/${zone}/dns_records`,
                   { type: "A", name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tld, content: ip.replace(/[^0-9.]/gi, ""), ttl: 3600, priority: 10, proxied: false },
                   {
                     headers: {
                       Authorization: "Bearer " + apitoken,
                       "Content-Type": "application/json",
                     },
                   }
                 )
                 .then((e) => {
                   let res = e.data;
                   if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content });
                 })
                 .catch((e) => {
                   let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e;
                   let err1Str = String(err1);
                   resolve({ success: false, error: err1Str });
                 });
             });
           }
   
           let raw1 = args?.join(" ")?.trim();
           if (!raw1) return m.reply("mana host & ip nya?");
           let host1 = raw1
             .split("|")[0]
             .trim()
             .replace(/[^a-z0-9.-]/gi, "");
           if (!host1) return m.reply("host tidak valid, pastikan host hanya mengandung huruf, angka, - (strip), dan . (titik)");
           let ip1 = raw1.split("|")[1]?.replace(/[^0-9.]/gi, "");
           if (!ip1 || ip1.split(".").length < 4) return m.reply(ip1 ? "ip tidak valid" : "mana ip nya");
   
           subDomain1(host1, ip1).then((e) => {
             if (e['success']) m.reply(`*Succes Create Domain*\nIP: ${e['ip']}\nHostname: ${e['name']}`);
             else m.reply(`Failed To Create Domain\nMsg: ${e['error']}`)
           }); }
break
break
//=================================================
default:
for (let fizzx of vnnye) {
if (budy === fizzx) {
let buffer = fs.readFileSync(`./database/${fizzx}.opus`)
sendvn(buffer)
}
}
if (budy.startsWith('=>')) {

function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {

try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))}}
if (budy.startsWith('$')) {
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)})}
//=================================================//
if (isCmd && budy.toLowerCase() != undefined) {
if (from.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
haikal.copyNForward(from, msgs[budy.toLowerCase()], true)}}
} catch (err) {
m.reply(util.format(err))}}

//=================================================//

          

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
