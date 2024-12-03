import { Data, render } from "ejs";
import { readFile } from "fs";
import path from "path";

export default class Controller {

    protected render(view: string, data: Data) {
        const templatePath = path.join(__dirname, 'view', `${view}.ejs`);

        readFile(templatePath, 'utf-8', (err, template) => {
            if (err) {
                console.error(`Error reading template file: ${err}`);
                return;
            }

            const renderedHtml = render(template, data);
            console.log(renderedHtml);
        });
    }
}