import path from 'path';
import Mali from 'mali';
import config from 'config';
import mongoose from './mongoose';
import middleware from './middleware';
import models from './models';

const PROTO_PATH = path.resolve(
    __dirname,
    '../proto/helloworld/helloworld.proto'
);

interface App {}

function main(): void {
    const app: any = new Mali(PROTO_PATH);
    app.config = config;
    app.configure = <Function>function(middle: Function): void {
        middle(app);
    };
    app.configure(mongoose);
    app.configure(models);
    app.configure(middleware);
    app.start(`0.0.0.0:${config.get('port')}`);
    console.log(`${config.get('app')} is started at Port: ${app.ports}`);
}

main();
