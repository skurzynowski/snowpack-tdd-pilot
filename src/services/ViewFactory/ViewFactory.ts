import { inject, injectable } from "inversify";
import { HomeView } from "../../models/HomeView/HomeView";
import { TYPES } from "../DiContainer/types";

@injectable()
export class ViewFactory {
    @inject(TYPES.HomeView) public _homeView: HomeView;

    createHomeView(): HomeView {
        return this._homeView
    }
}