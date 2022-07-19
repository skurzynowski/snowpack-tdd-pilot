import { inject, injectable } from "inversify";
import { TYPES } from "../../services/DiContainer/types";
import type { Controller } from "../../types/Interfaces/Controller";
import type { IRequest } from "../../types/Interfaces/Request";
import type { Representer } from "../../types/Interfaces/Representer";
import type { HomeView } from "../../models/HomeView/HomeView";
import type { PageView } from "../../types/Interfaces/PageView";
import { makeAutoObservable } from "mobx";


@injectable()
export class HomeRepresenter implements Representer, PageView {
   title: string = "Test";
   counter: number = 0;

   @inject(TYPES.HomeController) controller: Controller;
   @inject(TYPES.HomeView) public view: HomeView;

   constructor(){
      makeAutoObservable(this)
   }

   request(request: IRequest) {
      const response = this.controller.handleRequest(request);
      this.title = response?.parameters?.title;
      this.counter = response?.parameters?.title;
   }
}