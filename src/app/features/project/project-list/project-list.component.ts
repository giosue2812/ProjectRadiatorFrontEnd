import { Component, OnInit } from '@angular/core';
import {ProjectService} from "../../../core/services/project.service";
import {ProjectBase} from "../../../core/models/ProjectBase";

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {

  projectModel:ProjectBase;

  page=1;
  pageSize = 10;

  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.projectService.getProjectPartialList().subscribe(
      data => {
        this.projectModel = data;
      }
    )
  }

}
