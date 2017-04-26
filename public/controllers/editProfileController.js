import { templates } from 'templates';
import { userController } from 'userController';

const editProfileController = function (user) {
    templates.getPage('editProfile', user)
        .done(() => {
            const $editBtn = $('#editBtn');

            $editBtn.on('click', () => {
                const username = $('#usernameChangeInput').val();
                const email = $('#emailChangeInput').val();
                const password = $('#passwordInput').val();

                if (username.trim() !== '' && username !== user.displayName) {
                    const update = firebase.auth().currentUser.updateProfile({ displayName: username });
                    toastr.success(`Your username is now ${username}`);  

                    update
                        .then(() => {
                            location.hash = '/user';
                        });
                }

                if (email.trim !== '' && email !== user.email) {
                    if (password.trim() === '') {
                        toatr.error('Please enter your password!');
                    } else {
                        const credential = firebase.auth.EmailAuthProvider.credential(user.email, password);
                        const currentUser = firebase.auth().currentUser;
                        const reauth = Promise.resolve(currentUser.reauthenticateWithCredential(credential));

                        reauth
                            .then(() => {                            
                                const updated = Promise.resolve(currentUser.updateEmail(email));
                                
                                updated
                                    .then(() => {
                                        toastr.success('You have changed your email successfully!');
                                        location.hash = '/user';
                                    },
                                    function(error) {
                                        toastr.error(`${error.message}`);
                                });
                            },
                            function (error) {
                                toastr.error(`${error.message}`);
                            }
                        );
                    }
                }
            });
    });
};

export { editProfileController };