import {templates} from 'templates';

mocha.setup('bdd');
const expect = chai.expect;

describe('Templates tests', () => {
    it('expect getPage() to exist', () => {
        expect(templates.getPage).to.exist();
    });
});