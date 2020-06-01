import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

import { get } from 'lodash';
import { Client } from '@line/bot-sdk';

import { DialogflowClient } from './dialogflow-client';
import { lineClientConfig, dialogflowClientConfig } from './config';
import { EventHandler } from './event-handler';

const lineClient = new Client(lineClientConfig);
const dialogflowClient = new DialogflowClient(dialogflowClientConfig);
const webhookHandler = new EventHandler(lineClient, dialogflowClient);
const region = 'asia-east2';

admin.initializeApp(functions.config().firebase);
export const firestoreInstance = admin.firestore();

export const webhook = functions.region(region).https.onRequest(async (req, res) => {
  const event = get(req, ['body', 'events', '0']);
  await webhookHandler.handleEvent(event);
  res.send('');
});
