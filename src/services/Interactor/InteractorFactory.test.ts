import { expect } from 'chai';
import { myContainer, TYPES } from '../DiContainer/inversify.config';
import type { InteractorFactory } from './InteractorFactory';


describe('Interactor', () => {
    it('should initialize', () => {
        expect(() => myContainer.get(TYPES.InteractorFactory)).to.not.throw();
    })

    it('should create HomeInteractor', () => {
        const factory = myContainer.get<InteractorFactory>(TYPES.InteractorFactory);
        expect(factory.createHomeModuleInteractor()).to.eql(myContainer.get(TYPES.HomeInteractor));
    })
})