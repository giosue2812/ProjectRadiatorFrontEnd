import { Component, OnInit } from '@angular/core';
import {ProjectBase} from "../../../core/models/ProjectBase";
import {ProjectService} from "../../../core/services/project.service";
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
   * @type projectShort: ProjectBase[]
   */
  projectShort: ProjectBase;
  /**
   * @param projectShortService: ProjectService
   * @param connexionService: ConnectionService
   */
  constructor(private projectShortService:ProjectService, public connexionService:ConnectionService) { }

  ngOnInit(): void {
    this.projectShortService.getProjectShort().subscribe(
      data => {
        this.projectShort = data;
      }
    );
  }
}
