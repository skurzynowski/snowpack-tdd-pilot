import { QuestionStore } from './Question';
import { expect } from 'chai';

describe('QuestionStore', () => {
    it('should initialize', () => {
        expect(() => new QuestionStore("")).to.not.throw();
    })

    it('should move positon forward', () => {
        const content = "test"
        const store = new QuestionStore(content);
        expect(store.content).to.equal(content);
    })
})
