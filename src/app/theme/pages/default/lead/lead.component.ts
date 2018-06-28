import { Component, OnInit, ViewChild, NgZone, ElementRef, AfterViewInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ScriptLoaderService } from '../../../../_services/script-loader.service';
declare var $: any;

@Component({
    selector: 'app-lead',
    templateUrl: './lead.component.html',
    styleUrls: ['./lead.component.css', '../../../../../../node_modules/dragula/dist/dragula.css',
                '../../../../../assets/vendors/base/vendors.bundle.css', '../../../../../assets/demo/default/base/style.bundle.css']

})
export class LeadComponent implements OnInit, AfterViewInit {
    lang: any;
    lat: any;
    lati: number = 51.678418;
    lng: number = 7.809007;
    formHidden = true;
    isCustomer = true;
    date: boolean = false;
    @ViewChild('search') public searchElementRef: ElementRef;
    constructor(private dragulaService: DragulaService, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private _script: ScriptLoaderService) {

        // dragulaService.setOptions('bag-task1', {
        //     revertOnSpill: true
        //
        // });
        const bag: any = this.dragulaService.find('bag-task1');
        if (bag !== undefined) this.dragulaService.destroy('bag-task1');
        this.dragulaService.setOptions('bag-task1', {
            revertOnSpill: true
        });

        // dragulaService.setOptions('bag-task2', {
        //     revertOnSpill: true,
        //     moves: function (el, source, handle, sibling) {
        //         return true; // elements are always draggable by default
        //     },
        //     accepts: function (el, target, source, sibling) {
        //         return true; // elements can be dropped in any of the `containers` by default
        //     },
        //
        // });
    }

    public searchControl: FormControl;

    ngOnInit() {

        // for client
        this.searchControl = new FormControl();
        this.mapsAPILoader.load().then(() => {
            const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ['address']
            });
            autocomplete.addListener('place_changed', () => {
                this.ngZone.run(() => {
                    const place: google.maps.places.PlaceResult = autocomplete.getPlace();
                    //  this.clientPlacess = place;
                    // console.log(this.clientCity);

                    //    for country
                    var address_components = autocomplete.getPlace().address_components;

                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }

                    this.lat = place.geometry.location.lat();
                    this.lang = place.geometry.location.lng();
                    this.lati = this.lat;
                    this.lng = this.lang;

                });
            });
        });



        var text, counter = 0;
        $(document).on('click', '#add-service-request', function() {
            counter = counter + 1;
            text = $(this).closest('.m-portlet__head').next().find('.m-widget4').append(`
            <div class="m-widget4__item">
                            <div class="m-widget4__img m-widget4__img--logo">
                                <img src="./assets/app/media/img/client-logos/logo5.png" alt="">
                            </div>
                            <div class="m-widget4__info">
								<span class="m-widget4__title">
									New Item ` + counter + `
								</span>
                                <br>
                                <span class="m-widget4__sub">
									Make Metronic Great Again
								</span>
                            </div>
                            <span class="m-widget4__ext">
								<span class="m-widget4__number m--font-brand">
									+$2500
								</span>
							</span>
                        </div>
        `);

        });

    }
    ngAfterViewInit () {
        this._script.loadScripts('app-lead',
            ['assets/app/js/bootstrap-datetimepicker.js']);
    }
     rescheduleCompanyName;
     reschedulePrice;

    onReschedule(name, price) {
        this.rescheduleCompanyName = name;
        this.reschedulePrice = price;
        // this.onBookClass = 'btn btn-primary';
    }
}
