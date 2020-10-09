import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {TypeFollowBase} from '../models/TypeFollowBase';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypeFollowService {

  typeFollow$ = new BehaviorSubject<TypeFollowBase>(null);

  constructor(private httpClient:HttpClient) { }

  getTypeFollow():Observable<TypeFollowBase>{
    this.httpClient.get<TypeFollowBase>(environment.url+'Follow/GetTypeFollow').subscribe(
      data => {
        this.typeFollow$.next(data);
      });
    return this.typeFollow$;
  }
}
