export interface Observer {
    update(data?: any): void;
    id: string
}