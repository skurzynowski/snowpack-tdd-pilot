import { App } from './App';
import { expect } from 'chai';
import { myContainer } from '../DiContainer/inversify.config';

describe('App', () => {
    it('should initialize', () => {
        const app = myContainer.get(App);
        expect(() => app).to.not.throw();
    })

    it('should view has property', () => {
        const app = myContainer.get(App);
        expect(app.view.getComponent()).to.eq('/home');
    })
})