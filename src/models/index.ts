import examples from './examples.model';
import { Application } from '../declarations';

export = function(app: Application) {
    app.context.models.examples = examples(app);
};
