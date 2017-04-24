import 'jquery';
import { templates } from 'templates';
import { registerController } from 'registerController';
import { loginController } from 'loginController';

let currentUser = {};

firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    currentUser  = {
        'displayName': user.displayName,
        'email': user.email,
        'emailVerified': user.emailVerified,
        'photoURL': user.photoURL,
        'isAnonymous': user.isAnonymous,
        'uid': user.uid,
        'providerData': user.providerData
    }
    // ...
  } else {
    // User is signed out.
    // ...
  }
});

const router = new Navigo(null, false, '#!');

router
    .on('/register', () => registerController())
    .on('/home', () => templates.getPage('home', {}))
    .on('/login', () => loginController())
    .on('/gallery', () => templates.getPage('gallery', {}))
    .on('/trainings', () => templates.getPage('trainings', {}))
    .on('/videos', () => templates.getPage('videos', {}))
    .notFound(() => templates.getPage('notFound',{}))
    .resolve();

// const ref = firebase.database().ref();

// ref.on("value", function(snapshot) {
//     console.log(snapshot.val());
// }, function (error) {
//     console.log("Error: " + error.code);
// });