import { Component } from '@angular/core';
import {SpinnerService} from "./core/services/spinner.service";
import {ConnectionService} from './core/services/connection.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjectRadiator';
  spinnerVisible: boolean;

  constructor(private spinnerService: SpinnerService,public connexionService:ConnectionService) {
    this.spinnerService.spinnerObs$.subscribe(visible => {
      // prevent ExpressionChangedAfterItHasBeenCheckedError angular error
      setTimeout(() => {
        this.spinnerVisible = visible;
      })
    });
  }
}
