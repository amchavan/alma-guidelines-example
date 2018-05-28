import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import {Globals} from './app.globals';
import { ActivatedRoute } from '@angular/router';
import {Utils} from "./app.utils";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  progressDisplayed = false;
  class = "active";
  subscriptionOn: any;
  subscriptionOff: any;

  constructor(private cdr: ChangeDetectorRef, private globals: Globals, private route: ActivatedRoute, public utils: Utils){
	}

	ngOnInit():void {
  }

  ngAfterViewInit() {
    this.cdr.detectChanges();
  }
}
