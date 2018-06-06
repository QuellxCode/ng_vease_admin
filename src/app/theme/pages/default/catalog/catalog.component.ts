import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Helpers } from '../../../../helpers';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
/*
import { AgmMap } from '@agm/core';
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
  import { Subject } from 'rxjs';
  import {
    CalendarEvent,
    CalendarEventAction,
    CalendarEventTimesChangedEvent
  } from 'angular-calendar';


  Calendar And Map Components Not Installed Yet
 */



@Component({
    selector: "app-catalog",
    templateUrl: "./catalog.component.html",
    styleUrls: ["./catalog.component.css"],
    encapsulation: ViewEncapsulation.None,
})
export class CatalogComponent implements OnInit, AfterViewInit {

    @ViewChild('personalSubCategory') PersonalSubCategorySelect: ElementRef;
    @ViewChild('autoSubCategory') autoSubCategorySelect: ElementRef;
    @ViewChild('healthSubCategory') healthSubCategorySelect: ElementRef;
    //@ViewChild(AgmMap) agmMap: AgmMap;
    viewDate: Date = new Date();
    isServiceFormShown = false;
    editItemIndex= undefined;
    
    serviceGroup = "Health";

    listItems = [
        { 
            itemName: "Looper",
            itemDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet ipsum quis neque",
            approved: true
       }
    ];

    services = [
        {
            pic: "./assets/app/media/img/logos/Makeup-icon.png",
            serviceName: 'bridal make-up',
            serviceCategory: 'Make-up',
            serviceSubCategory: 'Personal',
            serviceDescription:'Good quality makeup for bride in a very low cost ',
            Active: false,
            price:100
        },

        {
            pic: "./assets/app/media/img/logos/hair.png",
            serviceName: 'simple style',
            serviceCategory: 'Hair Stylists',
            serviceSubCategory: 'Personal',
            serviceDescription:'Good quality makeup for bride in a very low cost ',
            Active: true,
            price:200
        },
        {
            pic: "./assets/app/media/img/logos/car.png",
            serviceName: 'Simple car wash',
            serviceCategory: 'Car Wash',
            serviceSubCategory: 'Auto',
            serviceDescription:'Good quality makeup for bride in a very low cost ',
            Active: true,
            price:333
        }
    ];

   




    addAnItem(itemName , description)
    {
       if(this.editItemIndex!=undefined)
       {
        this.listItems[this.editItemIndex].itemName = itemName;
        this.listItems[this.editItemIndex].itemDescription = description;
        this.editItemIndex=undefined;
       } 
       else
       {
        this.listItems.push({itemName:itemName , itemDescription: description, approved:true}); 
       }
    }
    editAnItem(itemIndex)
    {
        this.editItemIndex = itemIndex;
    }
    deleteAnItem(itemIndex)
    {
        this.listItems.splice(itemIndex ,1);
    }




    addCatalog(catalogServiceName , catalogServiceDescription , catalogServicePrice)
    {
        let selected="";
        if(this.serviceGroup=="Health")
        {
            selected = this.healthSubCategorySelect.nativeElement.value; 
           
        }
        else if(this.serviceGroup=="Personal")
        {
            selected = this.PersonalSubCategorySelect.nativeElement.value;
        }
        else if(this.serviceGroup=="Auto")
        {
            selected = this.autoSubCategorySelect.nativeElement.value ;
        }

        this.services.push({
            pic: "./assets/app/media/img/logos/file.png",
            serviceName: catalogServiceName,
            serviceCategory: this.serviceGroup,
            serviceSubCategory: selected,
            serviceDescription: catalogServiceDescription,
            Active: true,
            price:catalogServicePrice
        });

        this.isServiceFormShown = false;
     
    }
    deleteCatalog(catalogIndex)
    {
        this.services.splice(catalogIndex  , 1);
    }

    constructor(private _script: ScriptLoaderService) {







        
    }
    ngOnInit() {

    }
    ngAfterViewInit() {

        this._script.loadScripts('app-catalog',
            ['//www.amcharts.com/lib/3/plugins/tools/polarScatter/polarScatter.min.js',
                '//www.amcharts.com/lib/3/plugins/export/export.min.js',
                'assets/app/js/staff.js']);




    }

    adjustRadiusMap() {
        /*
        setTimeout(() => {
            this.agmMap.triggerResize();
        }, 2000);
    */
    }





}