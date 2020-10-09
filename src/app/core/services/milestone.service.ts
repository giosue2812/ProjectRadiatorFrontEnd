import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {MilestoneBase} from "../models/MilestoneBase";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MilestoneService implements OnDestroy{

  milestoneType$ = new BehaviorSubject<MilestoneBase>(null);

  constructor(private httpClient:HttpClient) { }

  getMilestoneTypes():Observable<MilestoneBase>{
    this.httpClient.get<MilestoneBase>(environment.url+'Millestone/GetMilestoneTypes').subscribe(
      data => {
        this.milestoneType$.next(data);
      });
    return this.milestoneType$;
  }

  ngOnDestroy(): void {
    this.milestoneType$.unsubscribe();
  }
}
