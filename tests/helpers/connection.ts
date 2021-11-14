import { ConnectionOptions } from "typeorm";

export const connectionConfig: ConnectionOptions[] = [{
    name: "default",
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "test",
    entities: [
        "build/models/**/*.js",
        "src/models/**/*.ts"
    ],
    logging: false,
    synchronize: true,
    dropSchema: true
}]