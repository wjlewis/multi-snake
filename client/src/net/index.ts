import { HandleInfo } from '../types/handle-info';
import { Denizen } from '../types/denizen';

const baseUrl = process.env.REACT_APP_API_BASE_URL;

export async function joinDen(handle: string): Promise<HandleInfo> {
  return postJson('/den/join', { handle });
}

export async function leaveDen(id: string): Promise<Denizen> {
  return postJson('/den/leave', { id });
}

async function postJson<A>(path: string, body: object): Promise<A> {
  const res = await fetch(`${baseUrl}${path}`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (res.ok) {
    return res.json();
  } else {
    throw new Error(res.statusText);
  }
}

export class Duplex {
  private ws: WebSocket;

  connect(): Promise<void> {
    this.ws = new WebSocket(process.env.REACT_APP_WS_BASE_URL!);

    return new Promise((resolve, reject) => {
      this.ws.onopen = () => resolve();
      this.ws.onerror = e =>
        reject(new Error(`Unable to open WebSocket connection: ${e}.`));
    });
  }

  disconnect(): Promise<void> {
    this.ws.close();

    return new Promise((resolve, reject) => {
      this.ws.onclose = () => resolve();
      this.ws.onerror = e =>
        reject(new Error(`Unable to close WebSocket connection: ${e}.`));
    });
  }
}

export const duplex = new Duplex();
