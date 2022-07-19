import { expect } from 'chai';
import { myContainer, TYPES } from '../../services/DiContainer/inversify.config';
import type { Representer } from '../../types/Interfaces/Representer';


describe('Representer', () => {
    it('should initialize', () => {
        expect(() => myContainer.get<Representer>(TYPES.HomeRepresenter) ).to.not.throw();
    })
})