import type { Controller } from "./Controller";
import type { IRequest } from "./Request";
import type { IView } from "./View";

export interface IInteractor {
  controller: Controller;
  view: IView;

  request(req: IRequest):void;
}