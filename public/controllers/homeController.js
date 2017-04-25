import {templates} from 'templates';
import 'bootstrap';

const homeController = function () {
    templates.getPage('home', {})
        .done(() => {
            $('.carousel').carousel({
                interval: 3000
            })
        })
};

export {homeController};