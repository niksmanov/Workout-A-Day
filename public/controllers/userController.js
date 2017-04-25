import { templates } from 'templates';
import { editProfileController } from 'editProfileController';
import { changePasswordController } from 'changePasswordController';

const userController = function (user) {
    templates.getPage('user', user)
        .done();
};

export { userController };