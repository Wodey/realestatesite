const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

module.exports.onHomesUpdate = functions.firestore.document("homes/1R24M5JXykscxUQfV9y1").onUpdate(change => {
  const after = change.after.data();

})



module.exports.helloWorld = functions.https.onRequest((req, res) => {
  res.send('Hello Body');
})

module.exports.getHomes = functions.https.onRequest((req, res) => {
  const promise = admin.firestore().doc('homes/1R24M5JXykscxUQfV9y1').get();
  promise.then(snapshot => {
    const data = snapshot.data();
    res.send(data);
  }).catch(err => res.status(500).send(err))
})

module.exports.addId = functions.database.ref('/homes/{homeId}')
      .onCreate((snapshot, context) => {
        const original = snapshot.val();
        const id = context.params.homeId;

        return snapshot.ref.update({ id: id});
      });
