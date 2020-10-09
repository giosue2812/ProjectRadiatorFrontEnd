import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ProjectDetailBase} from "../models/ProjectDetailBase";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Project} from '../models/Project';
import {ProjectBase} from '../models/ProjectBase';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailService implements OnDestroy{

  projectDetail$ = new BehaviorSubject<ProjectDetailBase>(null);

  constructor(private httpClient: HttpClient) { }

  getProjectDetail(projectId):Observable<ProjectDetailBase>{
    this.httpClient.get<ProjectDetailBase>(environment.url+'Project/GetProject/'+projectId).subscribe(
      data => {
        this.projectDetail$.next(data);
      });
    return this.projectDetail$;
  }

  putProject(project:Project, projectId):Observable<ProjectDetailBase>{
    this.httpClient.put<ProjectDetailBase>(environment.url+'Project/PutProject/'+projectId,project).subscribe(
      data => {
        this.projectDetail$.next(data);
      });
    return this.projectDetail$;
  }

  ngOnDestroy(): void {
    this.projectDetail$.unsubscribe();
  }
}
