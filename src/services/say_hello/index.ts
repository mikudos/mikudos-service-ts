import { Application } from 'mikudos-node-app';

import * as Funcs from './say_hello.funcs';
import hooks from './say_hello.hooks';

const MethodName = 'SayHello';

export default function(app: Application) {
    app.use(MethodName, ...hooks.before, Funcs[MethodName], ...hooks.after);
}
