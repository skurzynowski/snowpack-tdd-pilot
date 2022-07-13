import { Router } from './Router';
import { expect } from 'chai';

describe('Router', () => {
    it('should initialize', () => {
        expect(() => new Router()).to.not.throw();
    })

    it('should have default route', () => {
         const router = new Router();
         expect(router.getCurrentRoute()).to.eq('/home');
    })

    it('should set route', () => {
        const router = new Router();
        router.setRoute('/foo');
        expect(router.getCurrentRoute()).to.eq('/foo');
   })
})
