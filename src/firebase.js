import firebase from 'firebase';

var config = {
    aapiKey: "AIzaSyDXb-bnGdPEw2_F4ZeJSsEFFmzgTH1NaDQ",
    authDomain: "realestatesite-b655c.firebaseapp.com",
    databaseURL: "https://realestatesite-b655c.firebaseio.com",
    projectId: "realestatesite-b655c",
    storageBucket: "realestatesite-b655c.appspot.com",
    messagingSenderId: "660371264352",
    appId: "1:660371264352:web:8154ac59992af629484405",
    measurementId: "G-PYTY2Z0LCH"
  };

  firebase.initializeApp(config);

export const database = firebase.database();
