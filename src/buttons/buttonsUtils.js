function buildDefaultButton(text, callback_data) {
    return {
        text: text,
        callback_data: callback_data
    }
}

function buildUrlButton(text, url) {
    return {
        text: text,
        url: url
    }
}

function buildShareButton(text, shareUrl) {
    return [{
        text: text,
        url: 'https://telegram.me/share/url?url=' + shareUrl
    }]
}

function buildMessageOptions(buttons) {
    return {
        parse_mode: "HTML",
        disable_web_page_preview: false,
        reply_markup: JSON.stringify({
            inline_keyboard: buttons
        })
    }
}

module.exports = {
    buildDefaultButton,
    buildMessageOptions,
    buildShareButton,
    buildUrlButton
}