/* server.js (hypothetical other file) */

console.log('server time');

var myModule = require('./mymodule.js');		//node will runs the file now; .exports in the other file exposed the data to this file (&others) too


console.log(myModule);

/* mymodule.js (hypothetical file) */

console.log('inside mymodule');

module.exports = 'hello from my module';		//can export anything that is valid JS data