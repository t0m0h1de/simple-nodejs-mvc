import { URL } from "url";

export default class TheaterContorller {
    public async index(req: Request, res: Response): Promise<void> {
        const parsedUrl = URL.parse(req.url);
        const path = parsedUrl?.pathname;
        const query = parsedUrl?.searchParams;
        if (query?.has()) {
        }
    }
}x