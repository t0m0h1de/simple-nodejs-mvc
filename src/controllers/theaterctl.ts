import { Data } from "ejs";
import SearchTheater from "../repositories/search";
import ControllerUtil from "./util";
import { ServerResponse } from "http";

export default class TheaterContorller {
    public index(data: Data, response: ServerResponse) {
        if (data['city'] === undefined) {
            ControllerUtil.renderEjs("public/views/index.ejs", {});
            response.writeHead(200, {'Content-Type': 'text/html'} );
            response.end(ControllerUtil.renderEjs("public/views/index.ejs", {}))
            return;
        }
        const search = new SearchTheater();
        const theater = search.findByCity(data['city']);
        response.writeHead(200, {'Content-Type': 'text/html'} );
        response.end(ControllerUtil.renderEjs("public/views/index.ejs", {'theater': theater}))
    }

    public favicon(data: Data, response: ServerResponse): void {
        response.writeHead(200, {'Content-Type': 'image/x-icon'} );
        response.end(ControllerUtil.readFile("public/image/favicon.png"));
    }
    [key: string]: (data: Data, response: ServerResponse) => void;
}