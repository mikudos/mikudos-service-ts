import examples from './examples.model';
import { Application } from '../app';

export = function(app: Application): void {
    app.context.models.examples = examples(app);
};
