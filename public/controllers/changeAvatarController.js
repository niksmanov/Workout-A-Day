import { templates} from 'templates';

const changeAvatarController = function (user) {
    if (user) {
        templates.getPage('changeAvatar', user)
            .done(() => {
                const input = document.getElementById('fileInput');
                const uploadBtn = document.getElementById('uploadBtn');
                const extension = input.value.split('.').pop();
                const fileName = `${user.displayName}_${Date.now()}.${extension}`;
                const storageRef = firebase.storage().ref(`avatars/${fileName}`);

                storageRef.put(input.files[0])
                    .then(snapshot => {
                        user.updateProfile({
                                photoURL: storageRef.fullPath
                            })
                            .then(() => {
                                toastr.success('Your avatar was changed successfully!');
                                location.hash = '/user';
                            });
                    });
            });
    } else {
        location.hash = '/login';
    }
};

export {
    changeAvatarController
};