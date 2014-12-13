/**
 * Created by brianbest on 14-12-13.
 */
//14-12-13 express = require('express');
//var app = express();
//var http = require('http').Server(app);
//var io = require('socket.io')(http);

var arDrone = require('ar-drone');
var client  = arDrone.createClient();
client.createRepl();


client.animateLeds('blinkGreen', 5, 10);
