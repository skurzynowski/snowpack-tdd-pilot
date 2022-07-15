import { expect } from 'chai';
import { myContainer, TYPES } from '../../services/DiContainer/inversify.config';
import type { IInteractor } from '../../types/Interfaces/Interactor';


describe('Interactor', () => {
    it('should initialize', () => {
        expect(() => myContainer.get<IInteractor>(TYPES.HomeInteractor) ).to.not.throw();
    })
})