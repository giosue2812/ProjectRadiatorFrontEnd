import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {StageTypeBase} from '../models/StageTypeBase';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StageService {

  stageType$ = new BehaviorSubject<StageTypeBase>(null);

  constructor(private httpClient:HttpClient) { }

  getStageType():Observable<StageTypeBase>{
    this.httpClient.get<StageTypeBase>(environment.url+'Stage/GetStageTypes').subscribe(
      data => {
        this.stageType$.next(data);
      });
    return this.stageType$;
  }
}
