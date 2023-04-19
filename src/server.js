require('dotenv').config();
import express from 'express';
import bodyParser from 'body-parser';
import * as admin from 'firebase-admin';
import cors from 'cors'
import { db } from './db';
import { routes } from './routes';

const uri = process.env.MONGODB_URI;
const credentialsConfig = {
  type: process.env.FIREBASE_TYPE,
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKeyId: process.env.FIREBASE_PRIVATE_KEY_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  clientId: process.env.FIREBASE_CLIENT_ID,
  authUri: process.env.FIREBASE_AUTH_URI,
  tokenUri: process.env.FIREBASE_TOKEN_URI,
  authProviderX509CertUrl: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  clientX509CertUrl: process.env.FIREBASE_CLIENT_X509_CERT_URL,
}

admin.initializeApp({ credential: admin.credential.cert(credentialsConfig) });
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