require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import * as admin from 'firebase-admin';
import credentials from './credentials.json';
import cors from 'cors'
import { db } from './db';
import { routes } from './routes';

const uri = process.env.MONGODB_URI;

admin.initializeApp({ credential: admin.credential.cert(credentials) });
const app = express();

const DB_NAME = 'ToDoList';

app.use(bodyParser.json());
app.use(cors({origin: 'https://to-do-list-client.vercel.app'}));

routes.forEach(route => {
    app[route.method](route.path, route.handler);
});

const start = async () => {
    await db.connect(uri, DB_NAME);
    await app.listen(8080);
    console.log("Listening on port 8080");
}

start();

process.on('exit', function() {
    db.close();
    console.log('Closed database!');
});