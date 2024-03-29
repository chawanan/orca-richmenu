import dialogflow from 'dialogflow'
import { get } from 'lodash';
import { Message } from '@line/bot-sdk';
import { structProtoToJson, jsonToStructProto } from './structjson';
import { DialogflowConfig } from './types';

export class DialogflowClient {
  private readonly sessionClient: any;
  private readonly projectId: string;
  private readonly languageCode: string;
  private readonly keyFile = "./dialogflow-credentials.json"
  
  constructor(config: DialogflowConfig) {
    this.projectId = config.projectId;
    this.languageCode = config.languageCode;
    this.sessionClient = new dialogflow.SessionsClient({
      keyFilename: this.keyFile
    });
  }

  public async sendText(sessionId: string, text: string) {
    const sessionPath = this.sessionClient.sessionPath(this.projectId, sessionId);
    const req = {
      session: sessionPath,
      queryInput: {
        text: {
          text,
          languageCode: this.languageCode,
        },
      },
    };
    const messages = await this.getDialogflowMessages(req);
    return this.dialogflowMessagesToLineMessages(messages);
  }

  async sendEvent(sessionId: string, name: string, parameters = {}) {
    const sessionPath = this.sessionClient.sessionPath(this.projectId, sessionId);
    const req = {
      session: sessionPath,
      queryInput: {
        event: {
          name,
          parameters: jsonToStructProto(parameters),
          languageCode: this.languageCode,
        },
      },
    };
    const messages = await this.getDialogflowMessages(req);
    return this.dialogflowMessagesToLineMessages(messages);
  }

  private dialogflowMessagesToLineMessages(dialogflowMessages) {
    const lineMessages: Message[] = [];
    for (let i = 0; i < dialogflowMessages.length; i++) {
      if(get(dialogflowMessages[i], ['platform']) === 'LINE'){
        const messageType = get(dialogflowMessages[i], 'message');
        let message: Message;
        if (messageType === 'text') {
          message = {
            type: 'text',
            text: get(dialogflowMessages[i], ['text', 'text', '0']),
          };
          lineMessages.push(message);
        } else if (messageType === 'payload') {
          let payload = get(dialogflowMessages[i], ['payload']);
          payload = structProtoToJson(payload);
          message = get(payload, 'line');
          lineMessages.push(message);
        }
        else {
        }
      } 
      // else if (get(dialogflowMessages[i], ['platform']) === 'PLATFORM_UNSPECIFIED') {
      //   let message: Message;
      //     message = {
      //       type: 'text',
      //       text: get(dialogflowMessages[i], ['text', 'text', '0']),
      //     };
      //     lineMessages.push(message);
      // }
    }
    return lineMessages;
  }

  private async getDialogflowMessages(req) {
    const res = await this.sessionClient.detectIntent(req);
    const result = get(res, ['0', 'queryResult']);
    console.log(get(result, 'fulfillmentMessages')) //Alog
    return get(result, 'fulfillmentMessages');
  }

}
