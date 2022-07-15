import { injectable, inject } from "inversify";
import { TYPES } from "../../services/DiContainer/types";
import type { IView, IViewProps } from "../../types/Interfaces/View";
import type React from "react";
import type { IResponse } from "src/types/Interfaces/Response";

@injectable()
export class HomeView implements IView {
    constructor(
        @inject(TYPES.HomeRoute) public _path: string,
        @inject(TYPES.HomeComponent) public _component: React.FC
    ) {
        this._path = _path;
        this._component = _component;
    }

    getPath(): string {
        return this._path;
    }

    getComponent(): React.FC {
        return this._component;
    }

    update(res: IResponse): void {
        
    }
}