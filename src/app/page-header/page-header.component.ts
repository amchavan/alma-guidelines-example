import { Component, OnInit } from '@angular/core';
import {Globals} from '../app.globals';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.css']
})
export class PageHeaderComponent implements OnInit {

  constructor(public globals: Globals, public router:Router) { }

  ngOnInit() {
  }

  logout(){
  }

  getPiFullName(){
  }
}
