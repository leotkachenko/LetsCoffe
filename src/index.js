const TelegramBot = require('node-telegram-bot-api');

const config = require('./config/env');
const log = require('./config/function-helpers-1.0.0');
const mongoose = require('mongoose')
const User = mongoose.model('users')

mongoose.Promise = global.Promise
log.logStart();


mongoose.connect(config.DB_URL, {
  useMongoClient: true
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log(err))

const bot = new TelegramBot(config.TOKEN, {
  polling: true,
});

bot.on('message', (msg) => {
  console.log(msg.from.first_name, msg);
  let user;

  user = new User(msg);

  user.save()
.then(function(doc){
    console.log("Сохранен объект", doc);
    mongoose.disconnect();
})
.catch(function (err){
    console.log(err);
    mongoose.disconnect();
});
});
