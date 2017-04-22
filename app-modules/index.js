import { templates } from 'templates';
import 'jquery';

$('#registerBtn').on('click', () => templates.getPage('register', {}));

// const ref = firebase.database().ref();

// ref.on("value", function(snapshot) {
//     console.log(snapshot.val());
// }, function (error) {
//     console.log("Error: " + error.code);
// });