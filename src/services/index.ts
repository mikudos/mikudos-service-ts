import { Application } from 'mikudos-node-app';
import sayHello from './say_hello';

export default function(app: Application): void {
    app.configure(sayHello);
}
