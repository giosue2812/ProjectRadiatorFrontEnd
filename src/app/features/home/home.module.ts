import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import {PublicPageComponent} from "./public-page/public-page.component";
import {NgbPaginationModule, NgbToastModule} from "@ng-bootstrap/ng-bootstrap";
import {CoreModule} from "../../core/core.module";


@NgModule({
  declarations: [PublicPageComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbPaginationModule,
    CoreModule,
    NgbToastModule
  ]
})
export class HomeModule { }
