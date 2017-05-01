import { templates } from 'templates';

const changeAvatarController = function (user) {
    if (user) {
        templates.getPage('changeAvatar', user)
            .done(() => {
                const input = document.getElementById('fileInput');
                const uploadBtn = document.getElementById('uploadBtn');
                // const $input = $('#fileInput');
                // const $uploadBtn = $('#uploadBtn');
            });
    } else {
        location.hash = '/login';
    }
};

export { changeAvatarController };