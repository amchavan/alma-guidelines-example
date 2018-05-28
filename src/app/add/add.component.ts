import { Component, OnInit } from '@angular/core';
import {logger} from "codelyzer/util/logger";
import {ARCs, Globals} from '../app.globals';
import {DataReducer} from '../datareducer'
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  dataReducer : DataReducer;

  constructor(public globals: Globals) { }

  ngOnInit() {
  }

  search() {
  }

  saveDR() {
  }

  deleteFromDR() {
  }

  accountSelected(accId : string) {
  }
}
