import {templates} from 'templates';

const videosController = function() { //
    templates.getPage('videos', {}).done(() => {

        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                const $upload = $('#video-add');
                const $divBeginner = $('.beginner');
                const $divIntermediate = $('.intermediate');
                const $divAdvanced = $('.advanced');

                let beginnerVideos = '';
                let intermediateVideos = '';
                let advancedVideos = '';

                const addBeginnerVideos = function() {
                    if (localStorage.getItem('beginner')) {
                        let visualizeBeginnerVideos = localStorage.getItem('beginner');
                        visualizeBeginnerVideos = visualizeBeginnerVideos.substring(0, visualizeBeginnerVideos.length - 1).split(',');
                        for (var vid of visualizeBeginnerVideos) {
                                $divBeginner.append(vid);
                        }
                    }
                };

                const addIntermediateVideos = function() {
                    if (localStorage.getItem('intermediate')) {
                        let visualizeIntermediateVideos = localStorage.getItem('intermediate');
                        visualizeIntermediateVideos = visualizeIntermediateVideos.substring(0, visualizeIntermediateVideos.length - 1).split(',');
                        for (var vid of visualizeIntermediateVideos) {
                                $divIntermediate.append(vid);
                        }
                    }
                };

                const addAdvancedVideos = function() {
                    if (localStorage.getItem('advanced')) {
                        let visualizeAdvancedVideos = localStorage.getItem('advanced');
                        visualizeAdvancedVideos = visualizeAdvancedVideos.substring(0, visualizeAdvancedVideos.length - 1).split(',');
                        for (var vid of visualizeAdvancedVideos) {
                                $divAdvanced.append(vid);
                        }
                    }
                };

                const currentUser = firebase.auth().currentUser.displayName;

                $upload.click(() => {
                    let vidUrl = $('#video-url').val();
                    var matches = vidUrl.match(/watch\?v=([a-zA-Z0-9\-_]+)/); //URL Validator
                    if (matches) {
                        vidUrl = vidUrl.replace('watch?v=', 'embed/'); //Setting the URL to be usable with iframe
                        //Checking real time which radio button is checked
                        const $beginnerChecked = $('#beginnerDifficulty').is(':checked');
                        const $intermediateChecked = $('#intermediateDifficulty').is(':checked');
                        const $advancedChecked = $('#advancedDifficulty').is(':checked');
                        const newVideo = `<div class="col-sm-4"><iframe src="${vidUrl}" frameborder="0" allowfullscreen></iframe></div>`

                        if ($beginnerChecked) {
                            beginnerVideos = (newVideo + ',');
                            localStorage.setItem('beginner', beginnerVideos);
                            addBeginnerVideos();
                        } else if ($intermediateChecked) {
                            intermediateVideos = newVideo + ',';
                            localStorage.setItem('intermediate', intermediateVideos);
                            addIntermediateVideos();

                        } else if ($advancedChecked) {
                            advancedVideos = newVideo + ',';
                            localStorage.setItem('advanced', advancedVideos);
                            addAdvancedVideos();
                        };
                    } else { //todo: seperate those errors:
                        toastr.error('You are either not logged in or the video URL you have entered is invalid. Please try again!', "Invalid Video URL or not logged in!");
                    };
                });
            } else {
                const $upload = $('#video-add');

                $upload.click(() => {
                    toastr.error('You are not logged in, please log in to use this function!', "Not logged in!")
                })
            }
        })
    });
};

export {videosController};
