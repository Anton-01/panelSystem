import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.css']
})
export class TopComponent implements OnInit {

  public user: any = {};
  constructor( ) {
    let _str_user: any = localStorage.getItem('user')
    this.user = JSON.parse(_str_user)
  }

  ngOnInit(): void {
  }

  logout(): void {
    localStorage.clear()
    window.location.reload()
  }

}
