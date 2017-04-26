import { templates } from 'templates';

const loginController = function (user) {
    templates.getPage('login', {})
        .done(() => {

        const $loginBtn = $('#btn-login');
        const $email = $('#tb-email');
        const $pass = $('#tb-password');

        $loginBtn.on('click', () => {
            if($email.val() && $pass.val()){
                const user = Promise.resolve(firebase.auth().signInWithEmailAndPassword($email.val(), $pass.val()));
                   
                user
                    .then((usr) => {
                        $('#loginBtn').addClass('hidden');
                        $('#registerBtn').addClass('hidden');
                        $('#currentUser').removeClass('hidden').text(`Hello, ${usr.displayName}`);
                        $('#logoutBtn').removeClass('hidden');

                        toastr.success(`You have successfully logged in as ${usr.displayName}`);
                        location.hash = '/home';                    
                    }, 
                    function(error) {
                        toastr.error(`There was an error: ${error.message}
                        Please try again.`);
                    });
            } else {
                toastr.error('Fill all the fields!');
            }  
        });
    });
};

export { loginController };
