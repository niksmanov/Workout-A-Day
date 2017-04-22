import { templates } from 'templates';
import 'jquery';


$('#loginBtn').on('click', () => templates.getPage('login', {}));
$('#registerBtn').on('click', () => templates.getPage('register', {}));
$('#homeBtn').on('click', () => templates.getPage('home', {}));
$('#galleryBtn').on('click', () => templates.getPage('gallery', {}));
$('#trainingsBtn').on('click', () => templates.getPage('trainings', {}));
$('#videosBtn').on('click', () => templates.getPage('videos', {}));


// const ref = firebase.database().ref();

// ref.on("value", function(snapshot) {
//     console.log(snapshot.val());
// }, function (error) {
//     console.log("Error: " + error.code);
// });