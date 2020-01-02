import { Application } from 'mikudos-node-app';

export default class {
    constructor(private options = {}, public app: Application) {
        this.options = options || {};
    }

    async SayHello(ctx: any) {
        const app = ctx.app;
        ctx.res = { message: 'Hello '.concat(ctx.req.name) };
    }
}
