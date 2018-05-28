import { Component, OnInit, ViewChild,  Input, Output, EventEmitter } from '@angular/core';
import {SuiModalService, TemplateModalConfig, ModalTemplate} from 'ng2-semantic-ui';
import {colors, Globals, IOption, availabilityOptions} from "../app.globals";
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
import {Availability} from "../availability";
import {Utils} from "../app.utils";
import {DataReducer} from "../datareducer";

export interface IContext {
  data:string;
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  @ViewChild('modalTemplate')
  public modalTemplate:ModalTemplate<IContext, string, string>

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

  public open(dynamicContent:string = "Example") {
    const config = new TemplateModalConfig<IContext, string, string>(this.modalTemplate);

    config.closeResult = "closed!";
    config.context = { data: dynamicContent };

    this.modalService
      .open(config)
      .onApprove(result => {
        let availability = new Availability();
        availability.userId = this.globals.currentDataReducer.userId;
        availability.availability = this.selectedAvailability.id;
        availability.dateStart = this.dateStart;
        availability.dateEnd = this.dateEnd;
        console.log(" add availability " + JSON.stringify(availability));
      })
      .onDeny(result => { /* deny callback */});
  }

  public delete(id:number){
  }

}
