const caller: any = require('grpc-caller');
import path from 'path';
import Application from 'mikudos-node-app';

export = function(app: Application): void {
    const file = path.resolve(
        __dirname,
        '../proto/game_config/game_config.proto'
    );
    const load = {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    };
    app.context.grpcClients.gameConfigClient = caller(
        'aomi_game_config_service:50051',
        { file, load },
        'GameConfigService'
    );
};
