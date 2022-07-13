import type React from "react";
import { View } from "../../models/View/View";
import type { IView } from "../../types/Interfaces/View";
import { Home, IHome } from "../../views/home/Home"


const view = new View<IHome>({path: '/home', component: Home});

export class App {
    view: IView<IHome> =  view;
}

export const singletonApp = new App();