import type { Observer } from "src/types/Interfaces/Observer";
import type { ITimeStore } from "src/types/Interfaces/TimeStore";

export class TimeStore implements ITimeStore {
    started = false;
    speed = 1000;
    subscribers: Observer[] = [];
    timerId: number = 0;
    loops: number = 0;

    start() {
        this.started = true;
        this.timerId = setInterval(() => {
            if (this.loops > 0) {
                this.startCallback()
            }else{
                this.stop()
            }

        }, this.speed);
    }

    startCallback() {
        this.subscribers.forEach(s => s.update());
        this.loops--;
    }

    stop() {
        this.started = false;
        clearInterval(this.timerId);
    }

    isActive() {
        return this.started;
    }

    increaseSpeed(speed: number) {
        this.speed += speed;
    }

    decreaseSpeed(speed: number) {
        this.speed -= speed;
    }

    subscribe(observer: Observer) {
        this.subscribers.push(observer);
    }

    unsubscribe(observer: Observer) {
        this.subscribers = this.subscribers.filter(o => o.id !== observer.id);
    }

    isSubscribed(observer: Observer): boolean {
        return Boolean(this.subscribers.find(o => observer.id === o.id));
    }

    setLoops(loops: number) { this.loops = loops; }
}