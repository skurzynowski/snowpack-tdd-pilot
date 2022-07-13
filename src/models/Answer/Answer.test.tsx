import { AnswerStore } from './Answer';
import { expect } from 'chai';

describe('AnswerStore', () => {
    it('should initialize', () => {
        expect(() => new AnswerStore({id: "123", correct: true, value: "Poznan" })).to.not.throw();
    })
})
