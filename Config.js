// 👈 You Can change this your choice 
// 👈 You Can change this your choice 
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}
// 👈 You Can change this your choice
global.emoji01 = ['🐼'] // 👈 Enter your Emoji 
global.emoji02 = ['🦋'] //👈 Enter your Emoji
global.notice = ` *Hi 🥰 I m*
*Zenitsu Ξ*
*I am 17 years old developer...*
*From Egypt 🇪🇬*
*I am a Learning.*
*Not more..*
*Also I am Student*
*Follow My Tik Tok - https://vm.tiktok.com/ZMN7J8yWP/  // 👈 Enter Your details and Social Media Links and Anything
global.owner =  ['+201022506066'] //👈  Enter Your number
global.premium =  ['+201022506066'] //👈  Enter Your number
global.ownernomer = '+201022506066' //👈  Enter Your number
global.ownername = 'Zenitsu' //👈 Enter Your name
global.botname = 'ZENITSU ＢＯＴ' //👈 Enter Your Bot name
global.footer = '© 𝖯𝗈𝗐𝖾𝗋𝖾𝖽 𝖡𝗒 ZENITSU 𝖡𝗈𝗍' //👈 Enter Your Name
global.ig = 'https://github.com/Zenitsubot/GARFIELD-WHATSAPP-BOT-v8' // 👈 You Can change this your choice
global.region = 'Egypt, Cairo, Ain shams ' // 👈 You Can change this your choice
global.sc = 'https://github.com/Zenitsubot/GARFIELD-WHATSAPP-BOT-v8'
global.fbt = 'Follw Us ℹ️' // 👈 Enter (Subscribe/Follow/Like now)
global.myweb = 'https://vm.tiktok.com/ZMN7J8yWP/'// 👈 Enter your Social media link to follow now button
global.welcome = '*Welcome To The Group 🦋*' // 👈 You Can change this your choice
global.bye = '*Bye bye 🐼*' // 👈 You Can change this your choice
global.packname = 'Zenitsu-BOT'  // 👈 You Can change this your choice 
global.author = 'NOIZE DEVELOPMENT' // 👈 You Can change this your choice 
global.sessionName = 'session' // 👈 You Can change this your choice
global.prefa = ['','!','.','🛰️','⚓','🍎'] // 👈 You Can change this your choice
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  'https://ibb.co/tHsN7GP'
global.spoty = 'https://ibb.co/qWhg5PP'
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.sp = '⭔'
global.mess = {
    success: 'تم 🦋', // 👈 You Can change this your choice
    admin: 'هذه الميزة للمشرف فقط يغالي!', // 👈 You Can change this your choice
    botAdmin: 'خليني ادمن الاول!', // 👈 You Can change this your choice
    owner: 'هذه الميزة للمالك فقط (الي هو زينيتسو الفاجر)!', // 👈 You Can change this your choice
    group: 'في الجروب بس يغالي!', // 👈 You Can change this your choice
    private: 'في الخاص بس يغالس!', // 👈 You Can change this your choice
    bot: 'للبوت بس يغالي اتقي الله', // 👈 You Can change this your choice
    wait: '```Please Wait...```', // 👈 You Can change this your choice
    error: 'Error! بطل تلعب🤔!', // 👈 You Can change this your choice
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
} // 👈 You Can change this your choice
/// Do Not Change 👇 
global.limitAwal = "99999999999999999"
global.lolkey = "835641f3d2d1b6971e1fd132"
global.xteam = "apivproject"
global.xcodeapi = "5S3epf7hC2"
global.dapaapi = "piceg"
global.sankey = "sanuwa"
global.xteamkey = "nandowangy"
global.carkey = "cakrayp24Q6"
global.violkey = "beta"
global.HunterApi = "FuckBitch"
global.neokey = "V8qnSaTq"
global.riy = "RiyGanz"

    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
