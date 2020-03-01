const functions = require('firebase-functions');

const server = require('./start/app');

exports.product = functions.https.onRequest(server);
