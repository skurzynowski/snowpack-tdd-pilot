import "reflect-metadata";

import { Container } from "inversify";
import { TYPES } from "./types";
import { App } from "../App/App";
import { HomeView } from "../../models/HomeView/HomeView";
import { ViewFactory } from "../ViewFactory/ViewFactory";
import { Home } from "../../views/home/Home";
import { InteractorFactory } from "../Interactor/InteractorFactory";
import { HomeInteractor } from "../../interactors/HomeInteractor/HomeInteractor";
import type { IInteractor } from "../../types/Interfaces/Interactor";
import { HomeController } from "../../controlers/HomeView/HomeView";

const myContainer = new Container();
myContainer.bind<App>(TYPES.App).to(App);

//HOME VIEW
myContainer.bind<HomeView>(TYPES.HomeView).to(HomeView);
myContainer.bind(TYPES.HomeComponent).toConstantValue(Home);
myContainer.bind<string>(TYPES.HomeRoute).toConstantValue('/home');

//FACTORY
myContainer.bind<ViewFactory>(TYPES.ViewFactory).to(ViewFactory)
myContainer.bind<InteractorFactory>(TYPES.InteractorFactory).to(InteractorFactory)

myContainer.bind<IInteractor>(TYPES.HomeInteractor).to(HomeInteractor);
myContainer.bind<HomeController>(TYPES.HomeController).to(HomeController)


export { myContainer, TYPES };