import * as functions from 'firebase-functions';
const admin = require('firebase-admin');
admin.initializeApp();

export const helloWorld = functions.https.onCall((response) => {
response.send("Hello from Firebase!");
});


exports.addCash = functions.auth.user().onCreate(async (user) => {
    return admin.firestore().collection('users').doc(user.uid).set({wallet: 200000}, { merge: true });
  });
