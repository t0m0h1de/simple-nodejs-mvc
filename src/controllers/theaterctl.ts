import Controller from "./controller";
import { Data } from "ejs";
import SearchTheater from "../repositories/search";

export default class TheaterContorller extends Controller {
    public index(data: Data) {
        if (data['city'] === undefined) {
            this.render('index', {});
            return;
        }
        const search = new SearchTheater();
        const theater = search.findByCity(data['city']);
        this.render('index', {'theater': theater});
    }
}