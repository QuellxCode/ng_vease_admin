import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
@Component({
    selector: 'app-notificationCenter',
    templateUrl: './notificationCenter.component.html',
    styleUrls: ['./notificationCenter.component.css']

})
export class NotificationCenterComponent implements AfterViewInit, OnInit {
    complaints = true;
    cardClassActive = false;
    search: boolean = true;

    firstRowActive = false;
    secondRowActive = false;
    disputeRightSideActive = false;
    feedBack = false;
    clients: any[];
    dataTable: any;
    constructor(private _script: ScriptLoaderService, private http: HttpClient, private chRef: ChangeDetectorRef) {

    }

    ngAfterViewInit() {

        this._script.loadScripts('app-notificationCenter',
            ['assets/app/js/services.js']);
    }

    ngOnInit() {
        $(document).ready(function() {
            const table: any = $('#datatable');
            var users = table.DataTable({
                "dom": "t"
            }
            );
            $('#customSearchBox').keyup(function() {
                users.search($(this).val()).draw();
            })
        });

    }
    activeRow(index: number) {
        this.disputeRightSideActive = true;

        if (index == 1) {
            this.secondRowActive = false;
            this.firstRowActive = true;
        } else {
            this.firstRowActive = false;
            this.secondRowActive = true;
        }
    }
}
