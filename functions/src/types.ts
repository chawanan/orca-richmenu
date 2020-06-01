export type DialogflowConfig = {
  projectId: string,
  languageCode: string,
};

export type messageText = {
  userId: string,
  messageType: string,
  messageId: string,
  timestamp: number
  text: string,
  fallback: boolean
}

export type messageImage = {
  userId: string,
  messageType: string,
  messageId: string,
  timestamp: number
  contentProvider: string,
  fallback: boolean
}

export type messageVideo = {
  userId: string,
  messageType: string,
  messageId: string,
  timestamp: number,
  contentProvider: string
  duration: number,
  fallback: boolean
}

export type messageAudio = {
  userId: string,
  messageType: string,
  messageId: string,
  timestamp: number,
  contentProvider: string
  duration: number,
  fallback: boolean
}

export type messageFile = {
  userId: string,
  messageType: string,
  messageId: string,
  timestamp: number,
  contentProvider: string
  fileName: string,
  fileSize: number,
  fallback: boolean
}

export type messageLocation = {
  userId: string,
  messageType: string,
  messageId: string,
  timestamp: number,
  title: string,
  address: string,
  latitude: number,
  longtitude: number,
  fallback: boolean
}

export type messageSticker = {
  userId: string,
  messageType: string,
  messageId: string,
  timestamp: number,
  stickerId: string,
  packageId: string,
  stickerResourceType: string,
  fallback: boolean
}