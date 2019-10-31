import mongoose from 'mongoose';

export = function(app: any): mongoose.Model<any> {
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
