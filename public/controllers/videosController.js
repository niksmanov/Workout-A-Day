import {templates} from 'templates';

const videosController = function () {
    templates.getPage('videos', {})
        .done(() => {
            const $upload = $('#video-add');
            const $beginnerVids = $('.beginner');
            const $intermediateVids = $('.intermediate');
            const $advancedVids = $('.advanced');

            let videoId = 0; //I will use this to add removal later

            if (firebase.auth().currentUser !== null) {
                const currentUser = firebase.auth().currentUser.displayName;
            }



            $upload.click(() => {
                let vidUrl = $('#video-url').val();
                var matches = vidUrl.match(/watch\?v=([a-zA-Z0-9\-_]+)/); //URL Validator
                if (matches && firebase.auth().currentUser !== null) {
                    vidUrl = vidUrl.replace('watch?v=', 'embed/');
                    const iFrame = $(`<iframe src="${vidUrl}" frameborder="0" allowfullscreen></iframe>`);
                    // const iFrame = $('<iframe></iframe>').attr('src', $vidUrl).attr('frameborder', '0').attr('allowfullscreen');
                    // const newVideo = $('<div></div>').attr('id', `custom-video-${videoId}`).addClass('col-sm-4').append(iFrame).append('<br/>');
                    const newVideo = $(`<div id="custom-video-${videoId}" class='col-sm-4'></div>`);
                    newVideo.append(iFrame);
                    //Checking real time which radio button is checked
                    const $beginnerChecked = $('#beginnerDifficulty').is(':checked');
                    const $intermediateChecked = $('#intermediateDifficulty').is(':checked');
                    const $advancedChecked = $('#advancedDifficulty').is(':checked');


                    if ($beginnerChecked) {
                        alert('Adding beginner video')

                        $beginnerVids.append(newVideo);
                        videoId+=1;
                    } else if ($intermediateChecked) {
                        $intermediateVids.append(newVideo);
                        videoId+=1;

                    } else if ($advancedChecked) {
                        $advancedVids.append(newVideo);
                        videoId+=1;

                    } else {
                        toastr.error('Please select a workout difficulty for your video.');
                    };
                } else { //todo: seperate those errors:
                    toastr.error('You are either not logged in or the video URL you have entered is invalid. Please try again!', "Invalid Video URL or not logged in!");
                };
            });
        });
};

export {videosController};
