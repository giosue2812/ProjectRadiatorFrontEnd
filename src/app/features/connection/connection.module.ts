import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnectionRoutingModule } from './connection-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [LoginPageComponent],
  imports: [
    CommonModule,
    ConnectionRoutingModule,
    ReactiveFormsModule
  ]
})
export class ConnectionModule { }
