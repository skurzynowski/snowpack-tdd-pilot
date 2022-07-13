import { TimeStore } from './Time';
import { expect } from 'chai';
import type { Observer } from 'src/types/Interfaces/Observer';
import { waitFor } from '@testing-library/react';

describe('TimeStore', () => {
    it('should initialize', () => {
        expect(() => new TimeStore()).to.not.throw();
    })

    it('start time', () => {
        const store = new TimeStore();
        store.start();
        expect(store.isActive()).to.equal(true);
        expect(store.timerId).to.equal(2);

    })

    it('stop time', () => {
        const store = new TimeStore();
        store.start();
        expect(store.isActive()).to.equal(true);

        store.stop();
        expect(store.isActive()).to.equal(false);
    })

    it('has speed parameter', () => {
        const store = new TimeStore();
        expect(store.speed).to.equal(1000);
    })

    it('increase speed', () => {
        const store = new TimeStore();
        store.increaseSpeed(1000);
        expect(store.speed).to.equal(2000);
    })

    it('decrease speed', () => {
        const store = new TimeStore();
        store.decreaseSpeed(1000);
        expect(store.speed).to.equal(0);
    })

    it('subscribe to event', () => {
        const store = new TimeStore();
        const event: Observer = { id: '123', update: () => { } }
        store.subscribe(event);
        expect(store.isSubscribed(event)).to.equal(true);
    })

    it('unsubscribe from event', () => {
        const store = new TimeStore();
        const event: Observer = { id: '123', update: () => { } }
        store.subscribe(event);
        expect(store.isSubscribed(event)).to.equal(true);
        store.unsubscribe(event);
        expect(store.isSubscribed(event)).to.equal(false)
    })

    it('timer runs 3 rounds', async () => {
        const store = new TimeStore();
        let counter = 0;
        store.decreaseSpeed(900);
        const event: Observer = { id: '123', update: () => { counter++; } }
        store.subscribe(event);
        store.setLoops(3)
        store.start()
        await waitFor(()=> expect(counter).to.equal(3))
    })
})
