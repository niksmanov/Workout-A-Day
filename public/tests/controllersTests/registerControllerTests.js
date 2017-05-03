import {templates} from 'templates';
import {UserRequester} from 'userRequester';
mocha.setup('bdd');
const expect = chai.expect;

describe('Register controller tests', () => {
    it('It works', () => {
        expect(2 + 2).to.equal(4);
    });
});

mocha.run();
