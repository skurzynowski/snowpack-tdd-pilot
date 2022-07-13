import type { Observer } from "./Observer";

export interface ITimeStore {
    started: boolean;
    speed: number;
    subscribers: Observer[];
    timerId: number;
    subscribe: (obs: Observer) => void;
    isSubscribed: (obs: Observer) => boolean;
}