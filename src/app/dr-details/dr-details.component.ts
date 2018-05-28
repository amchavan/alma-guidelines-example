import {Component, Input, OnInit} from '@angular/core';
import {DataReducer} from "../datareducer";
import {ARCNodes, ARCs, IOption} from "../app.globals";

@Component({
  selector: 'dr-details',
  templateUrl: './dr-details.component.html',
  styleUrls: ['./dr-details.component.css']
})
export class DrDetailsComponent implements OnInit {

  @Input() dataReducer : DataReducer;

  selectedArc: IOption;
  selectedNode: IOption;

  options: IOption[];
  optionsNodes : Map<String, IOption[]>;


  constructor() {
  }

  ngOnInit() {
  }

  findSelectedNode( nodeName : string ) : IOption {
    return undefined;
  }

  findSelectedArc( arcName : string ) : IOption {
    return undefined;
  }

  onArcChange() {
  }

  onNodeChange() {
  }
}
