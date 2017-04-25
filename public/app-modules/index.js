import 'jquery';
import {templates} from 'templates';
import {registerController} from 'registerController';
import {loginController} from 'loginController';
import {logoutController} from 'logoutController';
import {userController} from 'userController';
import {homeController} from 'homeController';

let currentlyLoggedUser = firebase.auth().currentUser;

firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
        // User is signed in.
        $('#loginBtn').addClass('hidden');
        $('#registerBtn').addClass('hidden');
        $('#currentUser').removeClass('hidden').text(`Hello, ${currentlyLoggedUser.displayName}`);
        $('#logoutBtn').removeClass('hidden').on('click', () => logoutController(currentlyLoggedUser));
        // ...
    } else {
        // User is signed out.
        // ...
    }
});

const router = new Navigo(null, false, '#!');

router
    .on(() => homeController())
    .on({
        '/home': () => homeController(),
        '/register': () => registerController(),
        '/login': () => loginController(),
        '/logout': () => logoutController(),
        '/user': () => userController(currentlyLoggedUser),
        '/gallery': () => templates.getPage('gallery', {}),
        '/trainings': () => templates.getPage('trainings', {}),
        '/videos': () => templates.getPage('videos', {})
    })
    .notFound(() => templates.getPage('notFound', {}))
    .resolve();

// const ref = firebase.database().ref();

// ref.on("value", function(snapshot) {
//     console.log(snapshot.val());
// }, function (error) {
//     console.log("Error: " + error.code);
// });