import { SingleCorrectAnswersStrategy } from './SingleCorrectAnswersStrategy';
import { expect } from 'chai';

describe('SingleCorrectAnswersStrategy', () => {
    it('should return 3 messages with one correct answer', () => {
        const result = SingleCorrectAnswersStrategy.createFrom({ limit: 3, answers: SingleCorrectAnswersStrategy.mockAnswers })
        expect(result.filter(a => a.correct).length).to.eq(1);
        expect(result.length).to.eq(3);
    })
})
