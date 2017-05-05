import {templates} from 'templates';
import {UserRequester} from 'userRequester';
import {userController} from 'userController';

mocha.setup('bdd');
const expect = chai.expect;

describe('User controller tests', () => {
    it('Expect userController.js to exist', () => {
        expect(userController).to.exist;
    });

    it('Expect userController.js to be a function', function () {
        expect(userController).to.be.a('function');
    });


});

mocha.run();
