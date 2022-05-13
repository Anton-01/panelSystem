import { error } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import {TestService} from "../../services/test.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(
    private __testService: TestService
  ) { }

  ngOnInit(): void {
    this.__testService.testProof().subscribe({
      next: response => {
        console.log("response: "+ JSON.stringify(response));
      },
      error: error => {
        console.log("error: "+ error)
      }
      }
    )
  }

}
