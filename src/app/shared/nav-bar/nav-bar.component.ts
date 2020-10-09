import { Component, OnInit } from '@angular/core';
import {ConnectionService} from "../../core/services/connection.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  constructor(public connexionService:ConnectionService) { }

  ngOnInit(): void {
  }

}
