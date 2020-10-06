import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  isConnected = false;

  constructor() { }

  getIsConnected()
  {
    return this.isConnected;
  }
}
