import { TextStore } from './Text';
import { expect } from 'chai';

describe('TextStore', () => {
    it('should initialize', () => {
        expect(() => new TextStore()).to.not.throw();
    })

    it('should set text string', () => {
        const store = new TextStore();
        store.setText('foo bar baz');
        expect(store.getText()).to.equal('foo bar baz');
    })
})
