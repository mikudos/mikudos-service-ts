import logger from './logger';

export = function(app: any) {
    app.use(logger());
};
