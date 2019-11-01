import { Application } from '../../app';

import SayHi from './say_hi.func';
import hooks from './say_hi.hooks';

export default function(app: Application) {
    app.use('FindUserGameList', ...hooks.before, SayHi, ...hooks.after);
}
