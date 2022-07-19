import type React from "react";

export interface IView {
    _path: string;
    _component: React.FC;
    getComponent():React.FC;
    getPath():string;
}

export interface IViewProps<T> {
    path: string;
    component: T;
}