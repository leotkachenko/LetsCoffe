const { buildDefaultButton, buildUrlButton } = require('./buttonsUtils')
const kb = require('./buttons-name')
const sendStarterButtons =
[
    [buildDefaultButton(kb.startName.testBot, kb.startCallbackData.testBot),buildUrlButton(kb.startName.inMedia, kb.startCallbackData.inMedia)],
    [buildDefaultButton(kb.startName.callUs, kb.startCallbackData.callUs), buildDefaultButton(kb.startName.onMap, kb.startCallbackData.onMap)]
]



module.exports = {
    sendStarterButtons
}