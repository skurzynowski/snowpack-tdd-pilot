import { ConcentrationGame } from './ConcentrationGame';
import { expect } from 'chai';
import type { IRequest} from '../../types/Interfaces/Request';

describe('ConcentrationGame', () => {
    it('should initialize', () => {
        expect(() => new ConcentrationGame()).to.not.throw();
    })

    it('should handle startGame event', () => {
        const controler = new ConcentrationGame();
        const request: IRequest = {
           url: '/start-game',
           parameters: {}
        };
        const result = controler.startGame( request )
   
        expect(result.url).to.eq( request.url );
    })
})
