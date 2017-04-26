import { templates } from 'templates';

const userController = function (user) {
    templates.getPage('user', user)
        .done();
};

export { userController };