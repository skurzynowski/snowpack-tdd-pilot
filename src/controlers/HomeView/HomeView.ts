import { injectable } from "inversify";
import type { IResponse } from "../../types/Interfaces/Response";
import type { Controller } from "../../types/Interfaces/Controller";
import type { IRequest } from "../../types/Interfaces/Request";

@injectable()
export class HomeController implements Controller{

    handleRequest(req: IRequest): IResponse {
        return {name: "home",parameters:"test"}
    }
    startGame(request: IRequest){
        return request
    }
}