import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import {RouterModule} from "@angular/router";
import { SpinnerComponent } from './spinner/spinner.component';
import {NgSpinnerModule} from "ng-bootstrap-spinner";



@NgModule({
    declarations: [NavBarComponent, SpinnerComponent],
    exports: [
        NavBarComponent,
        SpinnerComponent
    ],
  imports: [
    CommonModule,
    RouterModule,
    NgSpinnerModule
  ]
})
export class SharedModule { }
