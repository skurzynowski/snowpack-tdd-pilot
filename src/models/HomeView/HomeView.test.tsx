import "reflect-metadata";

import type { HomeView } from './HomeView';
import { expect } from 'chai';
import type { IViewProps } from 'src/types/Interfaces/View';
import { myContainer, TYPES } from '../../services/DiContainer/inversify.config';

describe('View', () => {

    it('should initialize', () => {
        expect(() =>myContainer.get(TYPES.HomeView)).to.not.throw();
    })

    it('should has path form constructor', () => {
        const view = myContainer.get<HomeView>(TYPES.HomeView);
        expect(view.getPath()).to.equal(myContainer.get<string>(TYPES.HomeRoute));
    })

    it('should has component', () => {
        const view = myContainer.get<HomeView>(TYPES.HomeView);
        debugger
        expect(view.getComponent()).to.equal(myContainer.get<string>(TYPES.HomeComponent));
    })

})