import { Application, Service } from 'mikudos-node-app';
import HandlerClass from './greeter_service.class';

export default function(app: Application) {
    app.register(HandlerClass);
}
