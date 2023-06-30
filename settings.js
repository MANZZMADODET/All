require("./module")

global.owner = "6287819949107"
global.namabot = "YT TanteGiaBotz"
global.autoJoin = false
global.codeInvite = "KSRr5db70BO1PuT0msADrV"
global.thumb = fs.readFileSync("./thumb.png")
global.tekspushkon = ""
global.tekspushkonv2 = ""
global.packname = ""
global.author = "Sticker By YT TanteGiaBotz"

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})