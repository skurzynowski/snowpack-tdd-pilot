import type { IRequest } from "./Request";
import type { IResponse } from "./Response";

export interface Controller {
    handleRequest(req: IRequest): IResponse;
}