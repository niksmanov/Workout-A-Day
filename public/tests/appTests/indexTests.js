
import {UserRequester} from 'userRequester';

mocha.setup('bdd');
const expect = chai.expect;

describe('Index file tests', () => {
    it('It works for index', () => {
        expect(2 + 2).to.equal(4);
    });
});

// mocha.run();