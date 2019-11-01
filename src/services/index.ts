import { Application } from '../app';
import sayHello from './say_hello';
import sayHi from './say_hi';

export = function(app: Application): void {
    app.configure(sayHello);
    app.configure(sayHi);
};
