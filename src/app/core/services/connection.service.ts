import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectionService {

  isConnected = false;
  isSysadmin = true;
  isProManager = false;
  isAdmin = false;
  constructor() { }
}
