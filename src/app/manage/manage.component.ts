import {Component, OnInit, ViewChild} from '@angular/core';
import {Globals, IOption} from '../app.globals';
import {ARCs, ARCNodes} from "../app.globals";
import {DataReducer} from "../datareducer";
import {SuiModalService, TemplateModalConfig, ModalTemplate} from 'ng2-semantic-ui';
import {IContext} from "../booking/booking.component";
import {log} from "util";

export interface IMContext {
    data: string;
}

@Component({
    selector: 'app-manage',
    templateUrl: './manage.component.html',
    styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {

    @ViewChild('modalSearchForm')
    public modalSearchForm: ModalTemplate<IMContext, string, string>

    selectedArc: IOption;
    selectedNode: IOption;

    options: IOption[];
    optionsNodes: Map<String, IOption[]>;

    dataReducerSearch = new DataReducer();

    constructor(public globals: Globals, public modalService: SuiModalService) {
        this.options = ARCs;
        this.optionsNodes = ARCNodes;
        this.dataReducerSearch = new DataReducer()
    }

    ngOnInit() {
    }

    openSearchForm() {
        const config = new TemplateModalConfig<IContext, string, string>(this.modalSearchForm);
        config.closeResult = "closed!";
        config.context = {data: ""};

        this.selectedArc = null;
        this.selectedNode = null;

        this.modalService
            .open(config)
            .onApprove(result => {
            })
            .onDeny(result => {
            });
    }

    reset() {
    }

    onArcChange() {
        log(">>> new ARC: " + this.selectedArc.name)
    }

    onNodeChange() {
        log(">>> new node: " + this.selectedNode.name)
    }

    public open() {
    }
}
