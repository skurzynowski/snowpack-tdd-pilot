
export class Router {
    currentRoute: string = '/home';

    setRoute(route: string): void { 
        this.currentRoute = route; 
    }

    getCurrentRoute(): string {
        return this.currentRoute;
    }
}