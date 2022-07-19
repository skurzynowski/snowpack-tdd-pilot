import { inject, injectable } from "inversify";
import type { HomeRepresenter } from "../../representers/HomeRepresenter/HomeRepresenter";
import type { IRepresenterFactory } from "../../types/Interfaces/RepresenterFactory";
import { TYPES } from "../DiContainer/types";


@injectable()
export class RepresenterFactory implements IRepresenterFactory {
   @inject(TYPES.HomeRepresenter) private _homeRepresenter: HomeRepresenter

   createHomeModuleRepresenter() {
      console.log(this._homeRepresenter)
      return this._homeRepresenter;
   }
}