import { inject, injectable } from "inversify";
import { TYPES } from "../DiContainer/types";
import type { IApp } from "../../types/Interfaces/App";
import type { RepresenterFactory } from "../Representer/RepresenterFactory";
import type { IView } from "../../types/Interfaces/View";
import type { Representer } from "src/types/Interfaces/Representer";
import type { HomeRepresenter } from "src/representers/HomeRepresenter/HomeRepresenter";

@injectable()
export class App implements IApp{
    view: IView;
    store: HomeRepresenter;

    @inject(TYPES.RepresenterFactory) private _RepresenterFactory: RepresenterFactory;

    init(){
        this.view = this._RepresenterFactory.createHomeModuleRepresenter().view
        this.store = this._RepresenterFactory.createHomeModuleRepresenter();
    }
}