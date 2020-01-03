import {
    Application,
    Service,
    Method,
    HookMethod,
    HookService
} from 'mikudos-node-app';
import { hook1, hook2 } from './greeter_service.hooks';

@Service({ name: 'GreeterService' })
@HookService('before', hook1)
export default class {
    constructor(public app: Application) {}

    @Method('SayHello')
    @Method('SayHi')
    @HookMethod('before', hook2)
    async SayHello(ctx: any) {
        const app = ctx.app;
        ctx.res = { message: 'Hello '.concat(ctx.req.name) };
    }
}
