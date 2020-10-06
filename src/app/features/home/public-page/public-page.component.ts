import { Component, OnInit } from '@angular/core';
import {ProjectShort} from "../../../core/models/ProjectShort";
import {ProjectShortService} from "../../../core/services/project-short.service";
import {ConnectionService} from "../../../core/services/connection.service";

@Component({
  selector: 'app-public-page',
  templateUrl: './public-page.component.html',
  styleUrls: ['./public-page.component.scss']
})
export class PublicPageComponent implements OnInit {
  page=1;
  pageSize=1;
  /**
   * @type projectShort: ProjectShort[]
   */
  projectShort: ProjectShort;
  /**
   * @param projectShortService: ProjectShortService
   * @param connexionService: ConnectionService
   */
  constructor(private projectShortService:ProjectShortService,public connexionService:ConnectionService) { }

  show = this.connexionService.isConnected;

  ngOnInit(): void {
    this.projectShortService.getProjectShort().subscribe(
      data => {
        this.projectShort = data;
      }
    );
  }
}
