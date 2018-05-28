import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {IOption, ARCs, ARCNodes, Globals} from '../app.globals';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import {DataReducer} from "../datareducer";

@Component({
  selector: 'app-availability',
  templateUrl: './availability.component.html',
  styles: [`
    .cal-day-cell {
        min-height: 10px !important;
    }
  `],
  encapsulation: ViewEncapsulation.None,
})
export class AvailabilityComponent implements OnInit {

  options: IOption[];
  selectedArc: IOption;
  selectedNodes: IOption[];

  optionsNodes : Map<String, IOption[]>;

  view: string = 'month';
  viewDate: Date = new Date();

  excludeDays: number[] = [0, 6];

  constructor(public globals: Globals) {
    this.options = ARCs;
    this.optionsNodes = ARCNodes;
  }

  ngOnInit() {
  }

  search() {
  }

  reset() {
  }

  onArcChange() {
    this.selectedNodes = [];
  }

  onNodeChange() {
    let nodes = '';
    for (let i = 0 ; i < this.selectedNodes.length; i++) {
      nodes += this.selectedNodes[i].name +',';
    }
    console.log(" NODES " + JSON.stringify(nodes));
  }
}
