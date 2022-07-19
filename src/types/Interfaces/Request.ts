
export interface IRequest {
    name: string;
    url?:string;
    parameters?: Record<string, any>;
    id?: string;
}