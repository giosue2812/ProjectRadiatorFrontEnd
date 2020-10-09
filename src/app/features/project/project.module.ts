import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProjectRoutingModule } from './project-routing.module';
import { ProjectListComponent } from './project-list/project-list.component';
import {NgbDatepickerModule, NgbPaginationModule} from "@ng-bootstrap/ng-bootstrap";
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [ProjectListComponent, ProjectDetailComponent],
  imports: [
    CommonModule,
    ProjectRoutingModule,
    NgbPaginationModule,
    ReactiveFormsModule,
    NgbDatepickerModule
  ]
})
export class ProjectModule { }
