import { templates } from 'templates';
import 'jquery';


const router = new Navigo(null, false, '#!');

router
    .on('/register', () => templates.getPage('register', {}))
    .on('/home', () => templates.getPage('home', {}))
    .on('/login', () => templates.getPage('login', {}))
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