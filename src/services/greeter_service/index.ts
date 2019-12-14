import { Application, Service } from 'mikudos-node-app';
import HandlerClass from './greeter_service.class';
import methodMap from './greeter_service.map';
import hooks from './greeter_service.hooks';

export default function(app: Application) {
    let handler = new HandlerClass({}, app);
    const service = new Service(handler, methodMap, 'GreeterService');
    app.register(service.name, service, hooks);
}
