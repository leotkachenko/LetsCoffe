module.exports = {
  debug(obj) {
    return JSON.stringify(obj, null, 4);
  },

  logStart() {
    console.log('Bot has been started ...');
  },

  getChatId(message) {
    return message.hasOwnProperty('chat') ? message.chat.id : message.from.id;
  },
};
