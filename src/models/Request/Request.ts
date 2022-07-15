import type { IRequest } from '../../types/Interfaces/Request';

export class Request implements IRequest {
    url: string;
    parameters: {};
    name: string;
}