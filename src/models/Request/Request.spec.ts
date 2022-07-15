import { Request } from './Request';
import { expect } from 'chai';

describe('Request', () => {
    it('should initialize', () => {
        expect(() => new Request()).to.not.throw();
    })
})