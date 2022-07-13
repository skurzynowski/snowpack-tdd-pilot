import { App } from './App';
import { expect } from 'chai';

describe('App', () => {
    it('should initialize', () => {
        expect(() => new App()).to.not.throw();
    })

    it('should view has property', () => {
       const app = new App()
        expect(app.view.getComponent()).to.eq('/home');
    })
})