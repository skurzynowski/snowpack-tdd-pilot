import { View } from './View';
import { expect } from 'chai';
import type { IViewProps } from 'src/types/Interfaces/View';

describe('View', () => {
    const params: IViewProps<string> = { path: '/home', component: 'home' };

    it('should initialize', () => {
        expect(() => new View(params)).to.not.throw();
    })

    it('should has path form constructor', () => {
        const view = new View<string>( params );

        expect(view.getPath()).to.equal(params.path);
    })

    it('should has component form constructor', () => {
        const view = new View<string>( params );

        expect(view.getComponent()).to.equal(params.component);
    })

})