import { Component, OnInit } from '@angular/core';
import {showToastErrorMessage} from "../../../helpers/utilitiesForNotifications";
import {CollaboratorService} from "../../../services/collaborator.service";
import { HotToastService } from '@ngneat/hot-toast';
import {Router} from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-create-collaborator',
  templateUrl: './create-collaborator.component.html',
  styleUrls: ['./create-collaborator.component.css']
})
export class CreateCollaboratorComponent implements OnInit {

  public collaborator : any = {
    genre: '',
    role: '',
    country: ''
  };

  constructor( private __collaboratorService:  CollaboratorService, private toast: HotToastService,
               private __router: Router, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  saveCollaborator( registerFormCollaborator: any){
    this.spinner.show();
  }

}
