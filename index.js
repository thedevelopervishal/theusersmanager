/*
 * Primary file for API
 *
 */

// Dependencies
var server = require('./lib/server');


// Declare the app
var app = {};


app.init = function(){

  // Start the server
  server.init();

};


app.init();


// Export the app
module.exports = app;
