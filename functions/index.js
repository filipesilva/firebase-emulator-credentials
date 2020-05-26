const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.helloWorld = functions.https.onRequest(async (request, response) => {
  const db = admin.database();
  const ref = await db.ref('auth-test').set({
    date: new Date().toISOString()
  });
  response.send(`Added: ${ref.id}`);
});