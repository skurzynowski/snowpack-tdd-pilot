
export interface IRequest {
    url: string;
    name: string;
    parameters: Record<string, string>;
    id?: string;
}