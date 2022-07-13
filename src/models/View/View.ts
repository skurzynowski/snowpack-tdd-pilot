import type { IView, IViewProps } from "src/types/Interfaces/View";

export class View<T> implements IView<T>{
    path: string;
    component: T;

    constructor(props: IViewProps<T>) {
        this.path = props.path;
        this.component = props.component;
    }

    getPath(): string {
        return this.path;
    }

    getComponent(): T {
        return this.component;
    }
}