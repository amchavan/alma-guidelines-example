import {Component, OnInit, ViewChild} from '@angular/core';
import {ARCs, Globals} from '../app.globals';
import {ModalTemplate, SuiModalService, TemplateModalConfig} from "ng2-semantic-ui";
import {IContext} from "../booking/booking.component";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  @ViewChild('modalDialog')
  public modalDialog:ModalTemplate<IContext, string, string>

  constructor(public modalService:SuiModalService,public globals: Globals) { }

  ngOnInit() {
  }

  public open() {
    const config = new TemplateModalConfig<IContext, string, string>(this.modalDialog);

    config.closeResult = "closed!";
    config.context = { data: "" };

    this.modalService
        .open(config)
        .onApprove(result => {})
        .onDeny(result => {});
  }
}
