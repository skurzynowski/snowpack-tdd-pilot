import { PointerStore } from './Pointer';
import { expect } from 'chai';

describe('PointerStore', () => {
    it('should initialize', () => {
        expect(() => new PointerStore()).to.not.throw();
    })

    it('should have default positon 0', () => {
        const store = new PointerStore();
        expect(store.position).to.equal(0);
    })

    it('should move positon forward', () => {
        const store = new PointerStore();
        store.moveForward(1)
        expect(store.position).to.equal(1);
    })

    it('should move positon backward', () => {
        const store = new PointerStore();
        store.moveBackward(1)
        expect(store.position).to.equal(-1);
    })
})
