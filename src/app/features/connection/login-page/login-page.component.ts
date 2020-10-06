import { Component, OnInit } from '@angular/core';
import {EmailValidator, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {ConnectionService} from "../../../core/services/connection.service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  /**
   * @type loginGroup: FormGroup
   */
  loginGroup: FormGroup;

  constructor(
    private router: Router,
    private formBuilder:FormBuilder,
    private connexionService: ConnectionService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this.loginGroup = this.formBuilder.group({
      emailAdress:['',Validators.required],
      password:['',Validators.required]
    })
  }

  onSubmitForm(){
    console.log(this.loginGroup.value);
    this.router.navigateByUrl('home');
    this.connexionService.isConnected = true;
  }
}
