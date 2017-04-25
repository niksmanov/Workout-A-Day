import { templates } from 'templates';
import { editProfileController } from 'editProfileController';
import { changePasswordController } from 'changePasswordController';

const userController = function (user) {
    templates.getPage('user', user)
        .done(() => {
            const $editProfileBtn = $('#editProfileBtn');
            const $changePasswordBtn = $('#changePasswordBtn');

            $editProfileBtn.on('click', () => editProfileController(user));
            $changePasswordBtn.on('click', () => changePasswordController(user));
    });
};

export { userController };