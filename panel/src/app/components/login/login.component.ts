import { Component, OnInit } from '@angular/core';
import { validateIsEmpty } from '../../helpers/utilitiesForStrings';
import { showToastErrorMessage } from '../../helpers/utilitiesForNotifications';
import { CollaboratorService } from "../../services/collaborator.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user : any = {
    email: '', password: ''
  };

  public token: any = localStorage.getItem('token');
  constructor( private __collaboratorService:  CollaboratorService, private __router: Router) {}

  ngOnInit(): void {
    if ( this.token){
      this.__router.navigate(['/dashboard']);
    }
  }

  login( ){
    if( validateIsEmpty(this.user.email) ){
      showToastErrorMessage('You must enter an email address')
    }else if ( validateIsEmpty(this.user.password) ){
      showToastErrorMessage('You must enter a password')
    }else{
      this.__collaboratorService.loginAdmin( this.user ).subscribe({
        next: response => {
          if ( response.data === undefined ){
            showToastErrorMessage(response.message)
          }else{
            localStorage.setItem('token', response.token);
            localStorage.setItem('user', JSON.stringify(response.data));
            localStorage.setItem('_id', response.data._id);
            this.__router.navigate(['/dashboard']);
          }
        },
        error: error => {
          console.log("error: "+ error)
        }
      })
    }
  }

}
