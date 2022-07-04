// TODO Get App Path
const sqlite = require('better-sqlite3-with-prebuilds');
const path = require('path');

const totalname = __dirname;

const somePath = [];
somePath.push(totalname);
somePath.push(path.dirname(totalname));
// somePath.push(path.basename(totalname));
// const somePath = path.extname(totalname);

console.log('database manager', somePath);

// const db = new sqlite('./mytest.db');
const db = new sqlite(somePath[1] + '/mytest.db');

exports.db = db;
