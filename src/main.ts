import { createServer, IncomingMessage, ServerResponse } from 'http';
import { config } from 'dotenv';
import { env } from 'process';
import Router from './routes/router';
import TheaterContorller from './controllers/theaterctl';
import { Data } from 'ejs';

config();
const port = env['SERVER_PORT'] || '3000';
const host = env['SERVER_HOST'] || 'localhost';

const router = new Router();
router.get("/", TheaterContorller, 'index');
router.get("/favicon.ico", TheaterContorller, 'favicon');

const app = createServer((request: IncomingMessage, response: ServerResponse) => {
    const url = new URL(request.url || "/", `http://${request.headers.host || host}`);
    const queryParams: Data = {};
    url.searchParams.forEach((value, key) => {
        queryParams[key] = value;
    });
    var method: string = "";
    if (request.method === undefined) {
        console.error("Invalid method of request...");
    } else {
        method = request.method;
    }
    console.log(`Dispatch: ${url}`);
    router.despatch(url.pathname, method, queryParams, response);
})

app.listen(port, () => {
    console.log(`The server has started and is listening on port number: ${port}`);
});