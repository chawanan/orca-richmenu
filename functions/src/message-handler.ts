import { get } from 'lodash';
import { Client, MessageEvent, } from '@line/bot-sdk';
import {firestoreInstance} from "./index";
import { LINE_VERIFY_TOKEN } from './config';
import { DialogflowClient } from './dialogflow-client';
import {  messageText, messageSticker } from './types'


export class MessageHandler {

  constructor(
    private readonly lineClient: Client,
    private readonly dialogflowClient: DialogflowClient) {
  }

  /**
   * All Message Handler
   */
  async handleText(event: MessageEvent) {
    const replyToken = get(event, 'replyToken');
    if (replyToken === LINE_VERIFY_TOKEN) return;
    const userId = get(event, ['source', 'userId']) as string;
    const timestamp = get(event, 'timestamp')
    const type = get(event, ['message', 'type']);
    const text = get(event, ['message', 'text']);
    const id = get(event, ['message', 'id']);

    const docInput: messageText = {
      userId: userId,
      messageType: type,
      messageId: id,
      timestamp: timestamp,
      text: text,
      fallback: false
    }
    this.insertChatMessage(docInput)

    const lineMessages = await this.dialogflowClient.sendText(userId, text)
    console.log('+++++++++ reply message +++++++++')
    console.log(lineMessages)

    if (lineMessages === undefined || lineMessages.length == 0) {return}
    this.lineClient.replyMessage(replyToken, lineMessages)

    return
  }

  async handleImage(event: MessageEvent) {
    const message = get(event, 'message');
    // tslint:disable-next-line:no-console
    console.log(`Handle Image: ${JSON.stringify(message)}`);
    return;
  }

  async handleVideo(event: MessageEvent) {
    const message = get(event, 'message');
    // tslint:disable-next-line:no-console
    console.log(`Handle Video: ${JSON.stringify(message)}`);
    return;
  }

  async handleAudio(event: MessageEvent) {
    const message = get(event, 'message');
    // tslint:disable-next-line:no-console
    console.log(`Handle Audio: ${JSON.stringify(message)}`);
    return;
  }

  async handleLocation(event: MessageEvent) {
    const message = get(event, 'message');
    // tslint:disable-next-line:no-console
    console.log(`Handle Location: ${JSON.stringify(message)}`);
    return;
  }

  async handleSticker(event: MessageEvent) {
    const replyToken = get(event, 'replyToken');
    if (replyToken === LINE_VERIFY_TOKEN) return;
    const userId = get(event, ['source', 'userId']) as string;
    const timestamp = get(event, 'timestamp')
    const type = get(event, ['message', 'type']);
    const id = get(event, ['message', 'id']);
    const packageId = get(event, ['message', 'packageId']);
    const stickerId = get(event, ['message', 'stickerId']);
    const stickerResourceType = get(event, ['message', 'stickerResourceType']);

    const docInput: messageSticker = {
      userId: userId,
      messageType: type,
      messageId: id,
      timestamp: timestamp,
      stickerId: stickerId,
      packageId: packageId,
      stickerResourceType: stickerResourceType,
      fallback: false
    }
    this.insertChatMessage(docInput)

    // tslint:disable-next-line:no-console
    // console.log(`Handle Sticker: ${JSON.stringify(message)}`);
    return;
  }

  async insertChatMessage(docData : any) {
    firestoreInstance.collection('messagesUser').add(docData)
    .then(function(docRef) {
      console.log("Document written with ID: ", docRef.id);
      firestoreInstance.collection("messagesUser").where("userId", "==", docData.userId)
      .get()
      .then(function(querySnapshot) {
          querySnapshot.forEach(function(doc) {
              console.log(doc.id, " => ", doc.data());
          });
      })
      .catch(function(error) {
          console.log("Error getting documents: ", error);
      });
    })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });


    
  }

}
