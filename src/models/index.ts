import examples from './examples.model';

export = function(app: any) {
    app.context.models.examples = examples(app);
};
