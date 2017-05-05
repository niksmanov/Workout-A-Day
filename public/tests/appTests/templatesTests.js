import {templates} from 'templates';

mocha.setup('bdd');
const expect = chai.expect;

describe('Templates tests', () => {
    it('Expect getPage() to exist', () => {
        expect(templates.getPage).to.exist;
    });
});