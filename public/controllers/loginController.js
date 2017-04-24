import { templates } from 'templates';

const loginController = function (user) {
    templates.getPage('login', {})
        .done(() => {

        const $loginBtn = $('#btn-login');
        const $email = $('#tb-email');
        const $pass = $('#tb-password');

        $loginBtn.on('click', () => {
            if($email.val() && $pass.val()){

                const user = firebase.auth().signInWithEmailAndPassword($email.val(), $pass.val())
                    .catch(function(error) {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        toastr.error(`There was an error: ${errorCode} - ${errorMessage}
                        Please try again.`);
                    });

                user.then((usr) => {
                    $('#loginBtn').addClass('hidden');
                    $('#registerBtn').addClass('hidden');
                    $('#currentUser').removeClass('hidden').html(`Hi, ${usr.displayName}`);
                    $('#logoutBtn').removeClass('hidden');
                    toastr.success(`You have successfully logged in as ${usr.displayName}`);
                    location.hash = '/home';
                });
            } else {
                toastr.error('fill in all fields');
            }  
        });
    });
}

export { loginController };