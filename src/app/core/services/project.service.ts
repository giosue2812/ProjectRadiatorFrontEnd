import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ProjectBase} from "../models/ProjectBase";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ConnectionService} from './connection.service';
import {Project} from '../models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService implements OnDestroy{

  /**
   * @type projectBase$: BehaviorSubject<ProjectBase[]>
   */
  projectBase$ = new BehaviorSubject<ProjectBase>(null);
  /**
   * @param httpClient: HttpClient
   * @param connexionService: ConnectionService
   */
  constructor(private httpClient: HttpClient,public connexionService:ConnectionService) { }

  getProjectShort():Observable<ProjectBase>{
    this.httpClient.get<ProjectBase>(environment.url+"Project/GetShortProjects/"+this.connexionService.email).subscribe(
      data => {
        this.projectBase$.next(data);
      }
    );
    return this.projectBase$;
  }

  getProjectPartialList():Observable<ProjectBase>{
    this.httpClient.get<ProjectBase>(environment.url+"Project/GetPartialListProject").subscribe(
      data => {
        this.projectBase$.next(data);
      }
    );
    return this.projectBase$;
  }

  ngOnDestroy(): void {
    this.projectBase$.unsubscribe();
  }
}
