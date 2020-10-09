import { Component, OnInit } from '@angular/core';
import {ConnectionService} from "../../../core/services/connection.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(public connexionService:ConnectionService) { }
  ngOnInit(): void {
  }

}
