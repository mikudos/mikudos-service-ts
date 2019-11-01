import mongoose from 'mongoose';
import { Application } from './declarations';

export = function(app: any) {
    mongoose.connect(app.config.get('mongodb'), {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    mongoose.Promise = global.Promise;
    app.mongooseClient = mongoose;
    app.context.models = {};
};
