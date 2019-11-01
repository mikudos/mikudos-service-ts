import { Application } from '../../app';

export = async function SayHi(ctx: any) {
    let app = ctx.app;
    ctx.response.res = { message: 'Hello '.concat(ctx.req.name) };
};
