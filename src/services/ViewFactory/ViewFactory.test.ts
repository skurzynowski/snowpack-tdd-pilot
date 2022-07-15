import "reflect-metadata";

import { expect } from 'chai';
import { myContainer, TYPES } from '../../services/DiContainer/inversify.config';
import type { ViewFactory } from "./ViewFactory";

describe('View', () => {

    it('should initialize', () => {
        expect(() =>myContainer.get(TYPES.ViewFactory)).to.not.throw();
    })

    it('should create HomeView', () => {
        const factory = myContainer.get<ViewFactory>(TYPES.ViewFactory)
        expect(factory.createHomeView().getComponent()).to.equal(myContainer.get<string>(TYPES.HomeView));
    })
})