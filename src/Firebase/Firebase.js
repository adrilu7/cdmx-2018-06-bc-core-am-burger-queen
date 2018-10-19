import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCnEaTj-pj5MMyJ0Q8RMx08EFzOdrjAzIU",
  authDomain: "burger-queen-7256c.firebaseapp.com",
  databaseURL: "https://burger-queen-7256c.firebaseio.com",
  projectId: "burger-queen-7256c",
  storageBucket: "burger-queen-7256c.appspot.com",
  messagingSenderId: "249706397308"
};

firebase.initializeApp(config);

export default firebase;

