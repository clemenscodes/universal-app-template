import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { join } from 'path';

const PROTO_PATH = __dirname + '../../../../../tools/models/';
const API_PROTO_PATH = join(PROTO_PATH, 'api.proto');

const options: protoLoader.Options = {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true,
    includeDirs: [PROTO_PATH],
};

const packageDefinition = protoLoader.loadSync(API_PROTO_PATH, options);
export const grpcObject = grpc.loadPackageDefinition(packageDefinition);

export * from './api';
