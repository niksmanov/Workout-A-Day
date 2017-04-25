import { templates } from 'templates';

const changePasswordController = function (user) {
    templates.getPage('changePassword', user)
        .done(() => {
            const $changeBtn = $('#changeBtn');
            const $newPass = $('#tb-newPassword');
            const $confirmPass = $('#tb-confirmPassword');

            $changeBtn.on('click', () => {
                const confirmPass = $currentPass.val();
                const newPass = $newPass.val();

                if (confirmPass !== newPass) {
                    toastr.error('Passwords do not match!');
                } else if (newPass.trim() === '') {
                    toastr.error('The new password cannot be empty!');
                } else {
                    const updated = firebase.User.updatePassword(newPass);

                    updated
                        .then(() => {
                            toastr.success('You have changed your password successfully!');
                            location.hash('/user');
                        });
                }

            });
    });
};

export { changePasswordController };