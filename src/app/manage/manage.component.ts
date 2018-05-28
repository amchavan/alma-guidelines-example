import {Component, OnInit, ViewChild} from '@angular/core';
import { SuiModule } from 'ng2-semantic-ui';
import {Globals, IOption, QUALIFICATIONS} from '../app.globals';
import {ARCs, ARCNodes} from "../app.globals";
import {DataReducer} from "../datareducer";
import {SuiModalService, TemplateModalConfig, ModalTemplate} from 'ng2-semantic-ui';
import {isNullOrUndefined} from "util";

export interface IMContext {
  data:string;
}

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

  @ViewChild('modalTemplate')
  public modalTemplate:ModalTemplate<IMContext, string, string>

  selectedArc: IOption;
  selectedNode: IOption;

  options: IOption[];
  optionsNodes : Map<String, IOption[]>;

  dataReducerSearch = new DataReducer();
  dataReducerSelected : DataReducer;

  constructor(public globals: Globals, public modalService:SuiModalService) {
    this.options = ARCs;
    this.optionsNodes = ARCNodes;
    this.dataReducerSearch = new DataReducer()
  }

  ngOnInit() {
  }

  search() {
  }

  reset() {
  }

  onArcChange() {
  }

  onNodeChange() {
  }

  public open(dr) {
  }
}
