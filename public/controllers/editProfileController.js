import { templates } from 'templates';

const editProfileController = function (user) {
    templates.getPage('editProfile', user)
        .done(() => {
            const $editBtn = $('#editBtn');
            const $email = $('#emailChangeInput');
            const $username = $('#usernameChangeInput');

            $editBtn.on('click', () => {

            });
    });
};

export { editProfileController };