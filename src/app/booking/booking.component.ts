import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import {SuiModalService, TemplateModalConfig, ModalTemplate} from 'ng2-semantic-ui';
import {Globals, IOption, availabilityOptions} from "../app.globals";
import {Availability} from "../availability";
import {Utils} from "../app.utils";

export interface IContext {
  data:string;
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  @ViewChild('newPeriodModalForm')
  public newPeriodModalForm:ModalTemplate<IContext, string, string>;

  view: string = 'month';

  viewDate: Date = new Date();


  clickedDate: Date;

  options: IOption[];
  selectedAvailability: IOption;

  dateStart: Date = new Date();
  dateEnd: Date = new Date();

  // exclude weekends
  excludeDays: number[] = [0, 6];

  @Output() highlightDay: EventEmitter<any> = new EventEmitter();

  @Output() unhighlightDay: EventEmitter<any> = new EventEmitter();


  constructor(public modalService:SuiModalService, public globals: Globals, public utils: Utils) {
    this.options = availabilityOptions;
  }

  ngOnInit() {
  }

  public openNewPeriodModalForm(dynamicContent:string = "Example") {
    const config = new TemplateModalConfig<IContext, string, string>(this.newPeriodModalForm);

    config.closeResult = "closed!";
    config.context = { data: dynamicContent };

    this.modalService
      .open(config)
      .onApprove(result => { /* deny callback */})
      .onDeny(result => { /* deny callback */});
  }

  public delete(id:number){
  }

}
