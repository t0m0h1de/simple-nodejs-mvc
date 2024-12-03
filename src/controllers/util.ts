import { Data, render } from "ejs";
import { readFileSync } from "fs";
import path from "path";

export default class ControllerUtil {

    static renderEjs(absPath: string, data: Data): string {
        const templatePath = path.join(__dirname, '..', '..', absPath);

        const template = readFileSync(templatePath, 'utf-8');
        if (template === null) {
            console.error(`Error reading template file: ${templatePath}`);
            return `Error reading template file: ${templatePath}`;
        }

        const renderedHtml = render(template, data);
        return renderedHtml;
    }

    static readFile(absPath: string): string {
        const filePath = path.join(__dirname, '..', '..', absPath);

        const resource = readFileSync(filePath, 'utf-8');
        if (resource === null) {
            console.error(`Error reading template file: ${absPath}`);
            return `Error reading template file: ${absPath}`;
        }
        return resource;
    }
}