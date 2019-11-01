import mongoose from 'mongoose';
import { Application } from '../app';

export = function(app: Application): mongoose.Model<any> {
    const mongooseClient = app.mongooseClient;
    const { Schema } = mongooseClient;
    const examples = new Schema(
        {
            text: {
                type: mongoose.Schema.Types.String,
                required: true,
                unique: true
            }
        },
        {
            timestamps: true
        }
    );

    return mongooseClient.model('examples', examples);
};
