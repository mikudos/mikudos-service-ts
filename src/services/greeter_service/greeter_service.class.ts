import {
    Application,
    Service,
    Method,
    HookMethod,
    HookService,
    App,
    Customer
} from 'mikudos-node-app';
import { hook1, hook2 } from './greeter_service.hooks';

@Service({ name: 'GreeterService', serviceName: 'GreeterService' })
@HookService('before', hook1)
export default class {
    constructor(
        @App() private app: Application,
        @Customer('test string') private test: any
    ) {}

    @Method('SayHello')
    @Method('SayHi')
    @HookMethod('before', hook2)
    async SayHello(ctx: any) {
        const app = ctx.app;
        ctx.res = { message: 'Hello '.concat(ctx.req.name) };
    }
}
