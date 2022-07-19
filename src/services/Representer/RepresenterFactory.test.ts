import { expect } from 'chai';
import { myContainer, TYPES } from '../DiContainer/inversify.config';
import type { RepresenterFactory } from './RepresenterFactory';


describe('Representer', () => {
    it('should initialize', () => {
        expect(() => myContainer.get(TYPES.RepresenterFactory)).to.not.throw();
    })

    it('should create HomeRepresenter', () => {
        const factory = myContainer.get<RepresenterFactory>(TYPES.RepresenterFactory);
        expect(factory.createHomeModuleRepresenter()).to.eql(myContainer.get(TYPES.HomeRepresenter));
    })
})