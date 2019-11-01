import { Application } from './app';
import path from 'path';
import mongoose from './mongoose';
import middleware from './middleware';
import models from './models';
import grpc_clients from './grpc_clients';
import services from './services';

const PROTO_PATH = path.resolve(
    __dirname,
    '../proto/helloworld/helloworld.proto'
);

function main(): void {
    const app: Application = new Application(PROTO_PATH);
    app.configure(mongoose);
    app.configure(models);
    // app.configure(broker)
    app.configure(grpc_clients);
    app.configure(middleware);
    app.configure(services);
    app.start(`0.0.0.0:${app.config.get('port')}`);
    console.log(`${app.config.get('app')} is started at Port: ${app.ports}`);
}

main();
