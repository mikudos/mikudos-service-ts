import mongoose from 'mongoose';
import { Application } from './app';

export = function(app: Application) {
    mongoose.connect(app.config.get('mongodb'), {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    mongoose.Promise = global.Promise;
    app.mongooseClient = mongoose;
    app.context.models = {};
};
