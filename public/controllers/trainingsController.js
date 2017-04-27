import {templates} from 'templates';

const trainingsController = function () {

    const database = firebase.database().ref('Trainings/');
    let childArray = [];
    let imageId = 0;
    
    database.once('value', function (snapshot) {
        snapshot.forEach(function (childSnapshot) {
            let child = {
                'trainingName': childSnapshot.key,
                'exercises': childSnapshot.val()
            };
            childArray.push(child);

            let exercises = child.exercises;

            for (let workout of exercises) {
                imageId += 1;
                workout['imgSrc'] = `../images/trainings/${imageId}.jpg`;
            }
        });
        templates.getPage('trainings', childArray)
            .done(() => {
                let $currentImage = $('#currentImage');
                $('.list-group-item').on('click', function (event) {
                    let target = event.target.dataset;
                    $currentImage.attr('src', target.imgsrc);
                })
            });
    });
};

export {trainingsController};