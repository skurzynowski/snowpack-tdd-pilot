import { inject, injectable } from "inversify";
import { TYPES } from "../DiContainer/types";
import type { IApp } from "../../types/Interfaces/App";
import type { InteractorFactory } from "../Interactor/InteractorFactory";
import type { IView } from "../../types/Interfaces/View";

@injectable()
export class App implements IApp{
    view: IView;

    @inject(TYPES.InteractorFactory) private _interactorFactory: InteractorFactory;

    init(){
        this.view = this._interactorFactory.createHomeModuleInteractor().view
    }
}