import { templates } from 'templates';

const changeAvatarController = function (user) {
    if (user) {
        templates.getPage('changeAvatar', user)
            .done(() => {
                const uploadBtn = document.getElementById('uploadBtn');

                uploadBtn.addEventListener('click', () => {
                    const input = document.getElementById('fileInput');
                    const newAvatar = input.files[0];
                    const extension = input.value.split('.').pop();
                    const userName = user.displayName.replace(' ', '_');
                    const newAvatarFileName = `${userName}_${Date.now()}.${extension}`;
                    const storageRef = firebase.storage().ref(`avatars/${newAvatarFileName}`);

                    storageRef.put(newAvatar)
                        .then(snapshot => {
                            storageRef.getDownloadURL()
                                .then(function(url) {                                    
                                    user.updateProfile({ photoURL: url})
                                        .then(() => {
                                            toastr.success('Your avatar was changed successfully!');
                                            location.hash = '/user';
                                        });
                                });
                        });
                });
            });
    } else {
        location.hash = '/login';
    }
};

export { changeAvatarController };