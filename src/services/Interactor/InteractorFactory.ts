import { inject, injectable } from "inversify";
import type { HomeInteractor } from "../../interactors/HomeInteractor/HomeInteractor";
import type { IInteractorFactory } from "../../types/Interfaces/InteractorFactory";
import { TYPES } from "../DiContainer/types";


@injectable()
export class InteractorFactory implements IInteractorFactory {
   @inject(TYPES.HomeInteractor) private _homeInteractor: HomeInteractor

   createHomeModuleInteractor() {
      return this._homeInteractor;
   }
}