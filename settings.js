const chalk = require("chalk")
const fs = require("fs")

//aumto presence update
global.autoTyping = true //auto tying in gc (true to on, false to off)
global.autoRecord = true //auto recording (true to on, false to off)
global.autoblockmorroco = false //auto block 212 (true to on, false to off)
global.autokickmorroco = false //auto kick 212 (true to on, false to off) 
global.antispam = false //auto kick spammer (true to on, false to off)


//if api key expire, u can generate one from here: https://beta.openai.com/account/api-keys
global.keyopenai = "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"

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['254700569709'] //ur owner number
global.ownernomer = "254700569709" //ur owner number2
global.ownername = "亗『ＧＥＥ』亗" //ur owner name
global.ytname = "YT: nonesencelover" //ur yt chanel name
global.socialm = "GitHub: Geemkuu" //ur github or insta name
global.location = "Africa,Nairobi " //ur location

//new
global.botname = "n͜͡önesence ×"
global.ownernumber = '254700569709'
global.ownername = '亗『ＧＥＥ』亗'
global.ownerNumber = ["254700569709@s.whatsapp.net"]
global.ownerweb = "https://youtube.com/@DGXeon"
global.websitex = "https://youtu.be/L_SIk59QeAU"
global.wagc = "https://wa.me/254700569709?text=hey+gee+i+love+your+work😘+if+i+am+girl+i+want+to+be+yours"
global.themeemoji = '🚮'
global.wm = "nonesence"
global.botscript = 'https://github.com/geemkuu/CheemsBot-MD8' //script link
global.packname = "n͜͡önesence × By"
global.author = "亗『ＧＥＥ』亗"
global.creator = "254700569709@s.whatsapp.net"
global.prefa = ['','!','.','#','&']
global.sessionName = 'session'
global.hituet = 0

//media target
global.thum = fs.readFileSync("./XeonMedia/theme/Cheemspic.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./XeonMedia/theme/Cheemspic.jpg") //ur logo pic
global.err4r = fs.readFileSync("./XeonMedia/theme/Cheemspic.jpg") //ur error pic
global.thumb = fs.readFileSync("./XeonMedia/theme/Cheemspic.jpg") //ur thumb pic
global.defaultpp = 'https://telegra.ph/file/45040426cb67297d211b8.jpg' //default pp wa

//menu image maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//messages
global.mess = {
    success: 'n͜͡önesence × by 亗『ＧＥＥ』亗!', 
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
