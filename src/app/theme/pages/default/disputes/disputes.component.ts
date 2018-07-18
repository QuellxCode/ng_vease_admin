import { HttpClient } from '@angular/common/http';
import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
import * as $ from 'jquery';
import 'datatables.net';
import 'datatables.net-bs4';
import { DataTable } from 'primeng/primeng';
@Component({
    selector: 'app-disputes',
    templateUrl: './disputes.component.html',
    styleUrls: ['./disputes.component.css']

})
export class DisputesComponent implements AfterViewInit, OnInit {
    complaints = true;
    cardClassActive = false;
    search: boolean = true;

    firstRowActive=false;
    secondRowActive=false;
    disputeRightSideActive = false;
    feedBack = false;
    clients: any[];
    dataTable: any;
    constructor(private _script: ScriptLoaderService, private http: HttpClient, private chRef: ChangeDetectorRef) {

    }

    ngAfterViewInit() {

        this._script.loadScripts('app-disputes',
            ['assets/app/js/services.js']);
    }

    ngOnInit(){
            const table: any = $('table');
            this.dataTable = table.DataTable();


            // $(document).ready(function() {
            // const table: any = $('#datatable');
            //     var users = table.DataTable({
            //         "dom": "t"
            //     });
            //     $('#customSearchBox').keyup(function(){
            //         table.search($(this).val()).draw() ;
            //     })
            // } );

    }
    activeRow(index:number)
    {
        this.disputeRightSideActive=true;

        if(index==1){
            this.secondRowActive=false;
            this.firstRowActive=true;
        }else{
            this.firstRowActive=false;
            this.secondRowActive=true;
        }
    }
}
