import { createServer, IncomingMessage, ServerResponse } from 'http';
import { readFile as fsReadFile } from "fs";
import path from "path";

async function renderTemplate() {
    const templatePath = path.join(__dirname, 'views', 'index.ejs');


}
const port = 3000;

function readFile(file: string, response: ServerResponse): void {
    fsReadFile(`./${file}`, (errors, data) => {
        if (errors) {
            console.error("Error reading the file...");
            response.writeHead(500, { "content-type": "text/plain" });
            response.end("Internal Server Error");
            return;
        }
        response.end(data);
    });
}

const app = createServer((request: IncomingMessage, response: ServerResponse) => {
    if (request.url === "/" && request.method === "GET") {
        response.writeHead(200, { "content-type": "text/html" });
        readFile("public/index.html", response);
    } else if (request.url === "/public/image/nodejs.png" && request.method === "GET") {
        response.writeHead(200, { "content-type": "image/png"});
        readFile("public/image/nodejs.png", response);
    } else if (request.url === "/public/css/style.css" && request.method === "GET") {
        response.writeHead(200, { "content-type": "text/css" });
        readFile("public/css/style.css", response);
    } else {
        response.writeHead(404, { "content-type": "text/html"});
        response.end(`Not found: ${request.url}`);
    }
})

app.listen(port, () => {
    console.log(`The server has started and is listening on port number: ${port}`);
});