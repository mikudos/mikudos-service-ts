import { Application } from '../../app';

import SayHello from './say_hello.class';
import hooks from './say_hi.hooks';

export = function(app: Application) {
    app.use(
        'FindUserGameList',
        ...hooks.before,
        new SayHello().SayHello,
        ...hooks.after
    );
};
