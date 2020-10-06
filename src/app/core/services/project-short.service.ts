import {Injectable, OnDestroy} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {ProjectShort} from "../models/ProjectShort";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProjectShortService implements OnDestroy{

  /**
   * @type projectShort$: BehaviorSubject<ProjectShort[]>
   */
  projectShort$ = new BehaviorSubject<ProjectShort>(null);

  /**
   * @param httpClient: HttpClient
   */
  constructor(private httpClient: HttpClient) { }

  getProjectShort():Observable<ProjectShort>{
    this.httpClient.get<ProjectShort>(environment.url+"Project/GetShortProjects").subscribe(
      data => {
        this.projectShort$.next(data);
      }
    );
    return this.projectShort$;
  }

  ngOnDestroy(): void {
    this.projectShort$.unsubscribe();
  }
}
