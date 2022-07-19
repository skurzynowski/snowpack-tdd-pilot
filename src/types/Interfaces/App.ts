import type { IView } from "./View";


export interface IApp {
    view: IView;
    init: () => void
}