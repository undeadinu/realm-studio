import { ipcRenderer } from 'electron';

import { Transport } from './Transport';

export class RendererTransport extends Transport {
  public static instance: RendererTransport;
  public static getInstance() {
    if (!RendererTransport.instance) {
      RendererTransport.instance = new RendererTransport();
    }
    return RendererTransport.instance;
  }

  public constructor() {
    super();
    ipcRenderer.on(Transport.RESPONSE_EVENT_NAME, this.onResponseMessage);
  }

  public sendRequest(requestId: string, action: string, ...args: any[]) {
    ipcRenderer.send(Transport.REQUEST_EVENT_NAME, requestId, action, ...args);
  }

  public sendResponse(requestId: string, result: any) {
    ipcRenderer.send(Transport.RESPONSE_EVENT_NAME, requestId, result);
  }

  private onResponseMessage = (
    event: Electron.IpcMessageEvent,
    ...args: any[]
  ) => {
    this.emit(Transport.RESPONSE_EVENT_NAME, ...args);
  };
}