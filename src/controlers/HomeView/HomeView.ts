import { injectable } from "inversify";
import type { IResponse } from "../../types/Interfaces/Response";
import type { Controller } from "../../types/Interfaces/Controller";
import type { IRequest } from "../../types/Interfaces/Request";

@injectable()
export class HomeController implements Controller {

    handleRequest(req: IRequest): IResponse {
        switch (req.name) {
            case "UPDATE_TITLE":
                return {
                    ...req,
                    parameters: {
                        title: "New title"
                    }
                }
            default:
                return req;
        }
    }

    startGame(request: IRequest) {
        return request
    }

}