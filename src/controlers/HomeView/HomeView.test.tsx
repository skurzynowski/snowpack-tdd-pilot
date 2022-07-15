import { HomeController } from './HomeView';
import { expect } from 'chai';
import type { IRequest} from '../../types/Interfaces/Request';

describe('ConcentrationGame', () => {
    it('should initialize', () => {
        expect(() => new HomeController()).to.not.throw();
    })

    it('should handle startGame event', () => {
        const controler = new HomeController();
        const request: IRequest = {
           url: '/start-game',
           parameters: {},
           name: "Test"
        };
        const result = controler.startGame( request )
   
        expect(result.url).to.eq( request.url );
    })
})
