import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {NgbToastModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashBoardRoutingModule,
    NgbToastModule
  ]
})
export class DashBoardModule { }
