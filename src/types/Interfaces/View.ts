import type React from "react";
import type { IResponse } from "./Response";

export interface IView {
    _path: string;
    _component: React.FC;
    getComponent():React.FC;
    getPath():string;
    update(res: IResponse): void;
}

export interface IViewProps<T> {
    path: string;
    component: T;
}