import { Data } from "ejs"
import Controller from "../controllers/controller"

type ControllerAction = {
    controller: Controller,
    action: string
}

type Route = {
    [path: string]: {
        [method: string]: ControllerAction
    }
}

export default class Router {

    protected routes: Route = {};

    public addRoute(route: string, controller: Controller, action: string, method: string): void{
        this.routes[route] = {
            method: {
                'controller': controller,
                "action": action,
            }
        };
    }

    public get(route: string, controller: Controller, action: string): void {
        this.addRoute(route, controller, action, "GET");
    }

    public post(route: string, controller: Controller, action: string): void {
        this.addRoute(route, controller, action, "POST");
    }

    public despatch(uri: string, method: string, data: Data) {
        if (this.routes[uri] !== undefined || this.routes[uri][method] !== undefined) {
            console.error(`No route found for URI: ${uri}`);
        } else {
            const controller = this.routes[uri][method]['controller'];
            const action = this.routes[uri][method]['action'];
            (controller[action] as Function)(data);
        }
    }
}