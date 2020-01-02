import { Application } from 'mikudos-node-app';
import GreeterService from './greeter_service';

export default function(app: Application): void {
    app.configure(GreeterService);
}
