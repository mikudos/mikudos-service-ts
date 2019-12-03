import { Application } from 'mikudos-node-app';

import ServiceClass from './say_hello.class';
import hooks from './say_hello.hooks';

const MethodName = 'SayHello';

export default function(app: Application) {
    const service = new ServiceClass({}, app);
    app.set('services.game_puzzles', service);
    app.use(
        MethodName,
        ...hooks.before,
        async (ctx: any) => await service[MethodName](ctx),
        ...hooks.after
    );
}
