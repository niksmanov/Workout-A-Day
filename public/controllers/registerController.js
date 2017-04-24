import { templates } from 'templates';

const registerController = function () {
    templates.getPage('register', {})
        .done(() => {

        const $registerBtn = $('#btn-register');
        const $username = $('#tb-username');
        const $email = $('#tb-email');
        const $pass = $('#tb-password');

        $registerBtn.on('click', () => {
            if($email.val() && $pass.val()){

                const user = firebase.auth().createUserWithEmailAndPassword($email.val(), $pass.val())
                    .catch(function(error) {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        toastr.error(`There was an error: ${errorCode} - ${errorMessage}
                        Please try again.`);
                    });

                user.then((usr) => {
                    user.updateProfile({ displayName: $username.val()})
                        .then(() => {
                            toastr.success(`You have successfully registered as ${$username.val()}`);
                            location.hash = '/home';
                        });
                });
            } else {
                toastr.error('fill in all fields');
            }  
        });
    });
}

export { registerController };