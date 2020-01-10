import {
    Application,
    Service,
    Method,
    HookMethod,
    HookService,
    App,
    Customer
} from 'mikudos-node-app';
import { hook1, hook2, hook3, hook4 } from './greeter_service.hooks';

@Service({ name: 'GreeterService', serviceName: 'GreeterService' })
@HookService('before', hook1)
@HookService('after', hook4)
export default class {
    constructor(
        @App() private app: Application, // The app is currently only supported param
        @Customer('test string') private test: any
    ) {}

    @Method('SayHello')
    @Method('SayHi')
    @HookMethod('before', hook2)
    @HookMethod('after', hook3)
    async SayHello(ctx: any, next: Function) {
        const app = ctx.app;
        ctx.res = { message: 'Hello '.concat(ctx.req.name) };
        await next();
    }
}
