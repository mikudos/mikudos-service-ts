import Mali from 'mali';
import config from 'config';
import mongoose from 'mongoose';

export class Application extends Mali {
    config?: config.IConfig;
    configure?: Function;
    context: any;
}
