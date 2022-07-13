export interface IView<T> {
    path: string;
    component: T;
    getComponent():T;
    getPath():string;
}

export interface IViewProps<T> {
    path: string;
    component: T;
}