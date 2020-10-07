import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import {NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import { ProjectDetailComponent } from './project-detail/project-detail.component';


@NgModule({
  declarations: [ProjectListComponent, ProjectDetailComponent],
    imports: [
        CommonModule,
        ProjectRoutingModule,
        NgbPaginationModule
    ]
})
export class ProjectModule { }
