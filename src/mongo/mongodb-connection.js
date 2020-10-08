const nconf = require('nconf')
const mongoose = require('mongoose');

// Read in keys and secrets. Using nconf use can set secrets via
// environment variables, command-line arguments, or a keys.json file.
nconf.argv().env().file({ file: 'src/config/keys.json' });

const user = nconf.get('mongoUser');
const pass = nconf.get('mongoPass');
const host = nconf.get('mongoHost');
const port = nconf.get('mongoPort');

let uri = `mongodb://mongo:27017`;
//let uri = `mongodb://${user}:${pass}@${host}:${port}`;
if (nconf.get('mongoDatabase')) {
  uri = `${uri}/${nconf.get('mongoDatabase')}`;
}
console.log(uri);

mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true}, (err, db) => {
  if (err) {
    throw err;
  }
  console.log('Mongo connected')
});