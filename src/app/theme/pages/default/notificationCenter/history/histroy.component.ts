import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit, TemplateRef } from '@angular/core';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
@Component({
    selector: "app-estimate-response",
    templateUrl: "./history.component.html",
    styleUrls: ["./history.component.css"]
})

export class HistoryComponent implements OnInit, AfterViewInit {
    search: boolean = true;
    dataTable: any;
    constructor(private _script: ScriptLoaderService) { }

    ngOnInit() {
        // const table: any = $('table');
        // this.dataTable = table.DataTable();
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
    ngAfterViewInit() {
        this._script.loadScripts('app-services',
            ['assets/app/js/services.js']);
    }

    roles = [
        {
            category: 'DBAdmin',
            subcategory: 2,
            id: 1,
            status: 'Cancelled'
        },
        {
            category: 'Administrator',
            subcategory: 3,
            id: 2,
            status: 'Pending'
        },
        {
            category: 'Marketer',
            subcategory: 1,
            id: 3,
            status: 'Active'
        }
    ];

}