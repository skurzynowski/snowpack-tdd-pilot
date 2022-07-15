import { inject, injectable } from "inversify";
import { TYPES } from "../../services/DiContainer/types";
import type { Controller } from "../../types/Interfaces/Controller";
import type { IRequest } from "../../types/Interfaces/Request";
import type { IView } from "../../types/Interfaces/View";
import type { IInteractor } from "../../types/Interfaces/Interactor";
import { makeAutoObservable } from "mobx";


@injectable()
export class HomeInteractor implements IInteractor {
   @inject(TYPES.HomeController) controller: Controller;
   @inject(TYPES.HomeView) public view: IView;

   constructor(){
      makeAutoObservable(this)
   }

   title : string = "Home Page";

   request(request: IRequest){
        const response = this.controller.handleRequest(request);
        this.view.update(response);
   }
}