import { Component, OnInit, ViewEncapsulation, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { Helpers } from '../../../../../helpers';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
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
    
})
export class CatalogComponent implements OnInit, AfterViewInit {

    @ViewChild('personalSubCategory') PersonalSubCategorySelect: ElementRef;
    @ViewChild('autoSubCategory') autoSubCategorySelect: ElementRef;
    @ViewChild('healthSubCategory') healthSubCategorySelect: ElementRef;


    
    //@ViewChild(AgmMap) agmMap: AgmMap;
    viewDate: Date = new Date();
    isServiceFormShown = false;
 
    isBundleFormShown = false;
    editItemIndex= undefined;
    editCatalogIndex = undefined;
    editBundleIndex = undefined;

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
            serviceDescription: 'Good quality makeup for bride in a very low cost ',
            Active: false,
            price:100
        },

        {
            pic: "./assets/app/media/img/logos/hair.png",
            serviceName: 'simple style',
            serviceCategory: 'Hair Stylists',
            serviceSubCategory: 'Personal',
            serviceDescription: 'Good quality makeup for bride in a very low cost ',
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


    bundles = [
        {
            bundleName : "The First Bundle",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            price:200,
            noOfItems: 5,
            active:false
        },

        {
            bundleName : "The Second Bundle",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            price:400,
            noOfItems: 1,
            active:false
        },

        {
            bundleName : "The Bundle",
            description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
            price:500,
            noOfItems: 3,
            active:false
        }
    ];


    BundlesOfServices = 
    [

    ];

     tempBundle :number = 0;
     tempDiscount: number = 0;
     bundlePrice: number = 0;
     isGrossTotal = false;

   




    createNewBundle()
    {
        this.tempBundle= 0;
        this.tempDiscount=0;
        this.bundlePrice=0;
        this.BundlesOfServices = [];
        this.isGrossTotal = false;
    }
    createBundlePrice()
    {
        this.bundlePrice = this.tempBundle - this.tempDiscount
    }
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
        this.listItems.push({itemName:itemName , itemDescription: description, approved:false}); 
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

        if(this.editCatalogIndex!=undefined)
        {
            this.services[this.editCatalogIndex].serviceName = catalogServiceName;
            this.services[this.editCatalogIndex].serviceCategory = this.serviceGroup;
            this.services[this.editCatalogIndex].serviceDescription = catalogServiceDescription;
            this.services[this.editCatalogIndex].serviceSubCategory = selected;
            this.services[this.editCatalogIndex].price = catalogServicePrice;
            this.editCatalogIndex = undefined;
        }
        else
        {
            this.services.push({
                pic: "./assets/app/media/img/logos/file.png",
                serviceName: catalogServiceName,
                serviceCategory: this.serviceGroup,
                serviceSubCategory: selected,
                serviceDescription: catalogServiceDescription,
                Active: true,
                price:catalogServicePrice
            });
        }
      

        this.isServiceFormShown = false;
     
    }
    editCatalog(catalogIndex)
    {
        this.editCatalogIndex = catalogIndex;
        this.isServiceFormShown = true;
    }
    deleteCatalog(catalogIndex)
    {
        this.services.splice(catalogIndex  , 1);
    }


    saveBundle(name , thedescription , quantity)
    {

        if(this.editBundleIndex!=undefined)
        {
            this.bundles[this.editBundleIndex].bundleName = name;
            this.bundles[this.editBundleIndex].description = thedescription;
            this.bundles[this.editBundleIndex].noOfItems = quantity;
            this.editBundleIndex = undefined;
        }
        else
        {
            this.bundles.push({
                bundleName : name,
                description: thedescription,
                price:this.bundlePrice,
                noOfItems: quantity,
                active:false
            });
        }

        
        this.isBundleFormShown = false;
    }

    editBundle(bundleIndex)
    {
        this.editBundleIndex = bundleIndex;
        this.isBundleFormShown = true;
    }

    deleteBundle(bundleIndex )
    {
        this.bundles.splice(bundleIndex , 1);
       
    }




    getPercentedValue(price , quantity , percentage)
    {
       let total = price*quantity;
       total = total - (total*percentage)/100;
       return total;     
    }



    saveServicesForBundle(servicetype_bundle , discountType  ,calculatedvalueNoDiscount , calculatedvalueDiscountAmount, calculatedvalueDiscountPercent , bundleQuantity , service_bundle)
    {

        if(servicetype_bundle!='')
        {
        for(let i=0 ; i<service_bundle.options.length;i++)
        {
            if(service_bundle.options[i].value==servicetype_bundle)
            {
                service_bundle.options[i].remove();
            }
        }
        let Category = this.services[servicetype_bundle].serviceCategory;
        let SubCategory = this.services[servicetype_bundle].serviceSubCategory;
        let price;
        if(discountType=="no")
        {
            price = calculatedvalueNoDiscount;
        }
        else if(discountType=="money")
        {
            price = calculatedvalueDiscountAmount;
        }
        else
        {
            price = calculatedvalueDiscountPercent;
        }

        this.BundlesOfServices.push({
            Category: Category,
            SubCategory: SubCategory,
            Price: price,
            Quantity: bundleQuantity,
            Serviceindex: servicetype_bundle
        });


        this.tempBundle += parseFloat(price); 


        this.isGrossTotal = true;
        this.createBundlePrice();
    }




       
    }




    addNewItemInServiceCatalog()
    {
        this.listItems.push({itemName:"ABC" , itemDescription:"Description" ,approved:true });
    }

    changeTheItemName(event , theItem)
    {
        theItem.itemName = event.target.textContent;
        if(event.target.textContent=="")
        {
            event.target.style.borderBottom="1px solid red";
            event.target.textContent="*required"
        }
        else
        {
            event.target.style.borderBottom = "none";
        }
    }
    changeTheDescription(event , theItem)
    {
        theItem.itemDescription = event.target.textContent;
        if(event.target.textContent=="")
        {
            event.target.style.borderBottom="1px solid red";
            event.target.textContent="*required"
        }
        else
        {
            event.target.style.borderBottom = "none";
        }
    }
    discountTypeChanged(discountType , Money , Percentage)
    {
        if(discountType=='no')
        {
                this.ChangeAndShowDiscount(discountType , null);
        }
        else if(discountType=='money')
        {
            this.ChangeAndShowDiscount(discountType , Money);
        }
        else 
        {
            this.ChangeAndShowDiscount(discountType , Percentage);
        }
        this.createBundlePrice();
    }


    ChangeAndShowDiscount(discounttype , TheAmount)
    {
        
        if(discounttype=='no')
        {
            this.tempDiscount = 0;
        }
        else if(discounttype=='money')
        {
            this.tempDiscount = TheAmount;
        }
        else
        {
            this.tempDiscount = (this.tempBundle*TheAmount)/100;
        }
        this.createBundlePrice();
    }


    deleteBundleService(i , ServiceIndex , servicetype_bundle)
    {
        this.tempBundle -= this.BundlesOfServices[i].Price;
        this.BundlesOfServices.splice(i,1);
        this.createBundlePrice();
        
        let option = document.createElement('option');
        option.value= ServiceIndex;
        option.innerHTML = this.services[ServiceIndex].serviceName;
        servicetype_bundle.options.add(option);
    }


    constructor(private _script: ScriptLoaderService) {

    
    }
    ngOnInit() {

    }
    ngAfterViewInit() {

        this._script.loadScripts('app-catalog',
            ['//www.amcharts.com/lib/3/plugins/tools/polarScatter/polarScatter.min.js',
                '//www.amcharts.com/lib/3/plugins/export/export.min.js', 'assets/app/js/catalogtable.js']);

    }

    adjustRadiusMap() {
        /*
        setTimeout(() => {
            this.agmMap.triggerResize();
        }, 2000);
    */
    }


}