import "reflect-metadata";

import { Container } from "inversify";
import { TYPES } from "./types";
import { App } from "../App/App";
import { HomeView } from "../../models/HomeView/HomeView";
import { ViewFactory } from "../ViewFactory/ViewFactory";
import { Home } from "../../views/home/Home";
import { RepresenterFactory } from "../Representer/RepresenterFactory";
import { HomeRepresenter } from "../../representers/HomeRepresenter/HomeRepresenter";
import type { Representer } from "../../types/Interfaces/Representer";
import { HomeController } from "../../controlers/HomeView/HomeView";

const myContainer = new Container();
myContainer.bind<App>(TYPES.App).to(App);

//HOME VIEW
myContainer.bind<HomeView>(TYPES.HomeView).to(HomeView);
myContainer.bind(TYPES.HomeComponent).toConstantValue(Home);
myContainer.bind<string>(TYPES.HomeRoute).toConstantValue('/home');

//FACTORY
myContainer.bind<ViewFactory>(TYPES.ViewFactory).to(ViewFactory)
myContainer.bind<RepresenterFactory>(TYPES.RepresenterFactory).to(RepresenterFactory)

myContainer.bind<HomeRepresenter>(TYPES.HomeRepresenter).to(HomeRepresenter).inSingletonScope();
myContainer.bind<HomeController>(TYPES.HomeController).to(HomeController)


export { myContainer, TYPES };