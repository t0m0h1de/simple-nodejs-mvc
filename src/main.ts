import { createServer, IncomingMessage, ServerResponse } from 'http';
import { readFile as fsReadFile } from "fs";
import path from "path";
import { config } from 'dotenv';
import { env } from 'process';
import Router from './routes/router';
import TheaterContorller from './controllers/theaterctl';
import { Data } from 'ejs';

config();
const port = env['SERVER_PORT'] || '3000';

const router = new Router();
router.get("/", new TheaterContorller(), 'index');

const app = createServer((request: IncomingMessage, response: ServerResponse) => {
    const url = new URL(request.url === undefined ? "/": request.url);
    const queryParams: Data = {};
    url.searchParams.forEach((value, key) => {
        queryParams[key] = value;
    });
    const method: string = "";
    if (request.method === undefined) {
        console.error("Invalid method of request...");
    }
    router.despatch(url.pathname, request.method, queryParams);
})

app.listen(port, () => {
    console.log(`The server has started and is listening on port number: ${port}`);
});