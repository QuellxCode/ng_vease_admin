import { Component, OnInit, ViewEncapsulation, AfterViewInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ScriptLoaderService } from '../../../../../_services/script-loader.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaxesService } from '../../../../../services/taxes.services';
import { MapsAPILoader } from '@agm/core';
import { } from 'googlemaps';


@Component({
    selector: 'app-overview-settings',
    templateUrl: './overview-settings.component.html',
    styleUrls: ['./overview-settings.component.css']
})
export class OverViewSettingsComponent implements OnInit {
    time = { hour: 13, minute: 30 };
    time2 = { hour: 20, minute: 50 };
    locations = [{
        number: 1,
        name: '3rd Location',
        address: 'Missisaaga The Canaada'
    },
    {
        number: 2,
        name: '4th Location',
        address: 'Missisaaga The Canaada'
    },

    {
        number: 3,
        name: '5th Location',
        address: 'Missisaaga The Canaada'
    }
    ];


    schedules = [{
        name: 'St. Mary',
        day: 'Tue',
        hoursPerDay: 12
    },
    {
        name: 'The Meeting',
        day: 'Wed',
        hoursPerDay: 6
    },
    {
        name: 'Annual',
        day: 'Fri',
        hoursPerDay: 10
    }
    ];

    shifts = [
        {
            shiftName: 'Morning',
            timingStart: "11:00",
            timingEnd: "17:00",
            break: 1,
            position: 'No Position',
            schedule: 'ST. Mary'
        },
        {
            shiftName: 'Evening',
            timingStart: "17:00",
            timingEnd: "7:00",
            break: 0.5,
            position: 'No Position',
            schedule: 'ST. Mary'
        },
        {
            shiftName: 'Evening',
            timingStart: "20:00",
            timingEnd: "9:00",
            break: 1,
            position: 'No Position',
            schedule: 'ST. Mary'
        }
    ];



    pricing = [
        {
            serviceName: 'Hair Cutting',
            categoryName: "Adults",
            price: 25
        },
        {
            serviceName: 'Hair Cutting',
            categoryName: "Kids",
            price: 15
        }
    ];


    enterLocationFormDisplay = false;
    isDisplayScheduleEditAndSee = false;
    isDisplayShiftsEditAndSee = false;
    isRoleAddViewOpen = false;
    isPricingAddEditOpen = false;
    isTaxAddViewOpen = false;
    edit = false



    editLocationIndex = undefined;
    editScheduleIndex = undefined;
    editShiftIndex = undefined;
    editPricingIndex = undefined;
    editTaxIndex = undefined;


    public latitude: number;
    public longitude: number;
    public searchControl: FormControl;
    // public BillingandShipping: FormControl;
    public zoom: number;
    @ViewChild('search') public searchElementRef: ElementRef;

    constructor(private _script: ScriptLoaderService, private taxesServices: TaxesService, private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) {

    }

    private placess: any;
    private city = '';
    private country = '';
    private countryCode = '';


    categories = ['Federal', 'Provincial', 'Federal & Provencial'];

    servicesForm: FormGroup;

    addLocation(number: number, name: string, address: string) {

        if (this.editLocationIndex != undefined) {
            this.locations[this.editLocationIndex].number = number;
            this.locations[this.editLocationIndex].name = name;
            this.locations[this.editLocationIndex].address = address;
            this.editLocationIndex = undefined;
        }
        else {
            this.locations.push({                
number: number,
                name: name,
                address: address
            });
        }

        this.enterLocationFormDisplay = false;
    }
    editLocation(locationIndex) {
        this.enterLocationFormDisplay = true;
        this.editLocationIndex = locationIndex;
    }

    deletelocation(locationIndex) {
        this.locations.splice(locationIndex, 1);
    }



    addSchedule(scheduleDay, scheduleName, scheduleHours) {
        if (this.editScheduleIndex != undefined) {
            this.schedules[this.editScheduleIndex].name = scheduleName;
            this.schedules[this.editScheduleIndex].day = scheduleDay;
            this.schedules[this.editScheduleIndex].hoursPerDay = scheduleHours;
            this.editScheduleIndex = undefined;
        }
        else {
            this.schedules.push({ name: scheduleName, day: scheduleDay, hoursPerDay: scheduleHours });
        }

        this.isDisplayScheduleEditAndSee = false;
    }
    editSchedule(ScheduleIndex) {
        this.isDisplayScheduleEditAndSee = true;
        this.editScheduleIndex = ScheduleIndex;
    }
    deleteSchedule(ScheduleIndex) {
        this.schedules.splice(ScheduleIndex, 1);
    }


    addShift(shiftName, shiftPosition, shiftBreak, shiftSchedule) {
        if (this.editShiftIndex != undefined) {
            this.shifts[this.editShiftIndex].shiftName = shiftName;
            this.shifts[this.editShiftIndex].position = shiftPosition;
            this.shifts[this.editShiftIndex].break = shiftBreak;
            this.shifts[this.editShiftIndex].schedule = shiftSchedule;
            this.shifts[this.editShiftIndex].timingStart = this.time.hour + ":" + this.time.minute;
            this.shifts[this.editShiftIndex].timingEnd = this.time2.hour + ":" + this.time2.minute;
            this.editShiftIndex = undefined;
        }
        else {
            this.shifts.push({
                shiftName: shiftName,
                timingStart: this.time.hour + ":" + this.time.minute,
                timingEnd: this.time2.hour + ":" + this.time2.minute,
                break: shiftBreak,
                position: shiftPosition,
                schedule: shiftSchedule
            });
        }


        this.isDisplayShiftsEditAndSee = false;

    }
    editShift(ShiftIndex) {
        this.isDisplayShiftsEditAndSee = true;
        this.editShiftIndex = ShiftIndex;
    }
    deleteShift(ShiftIndex) {
        this.shifts.splice(ShiftIndex, 1);
    }


    addPricing(pricingService, pricingCategory, pricingPrice) {
        if (this.editPricingIndex != undefined) {
            this.pricing[this.editPricingIndex].serviceName = pricingService;
            this.pricing[this.editPricingIndex].categoryName = pricingCategory;
            this.pricing[this.editPricingIndex].price = pricingPrice;
            this.editShiftIndex = undefined;
        }
        else {
            this.pricing.push({
                serviceName: pricingService,
                categoryName: pricingCategory,
                price: pricingPrice
            });
        }

        this.isPricingAddEditOpen = false;
    }

    editPricing(PricingIndex) {
        this.isPricingAddEditOpen = true;
        this.editPricingIndex = PricingIndex;
    }

    deletePricing(PricingIndex) {
        this.pricing.splice(PricingIndex, 1);
    }



    onEditTax(taxID) {
        this.editTaxIndex = taxID;
        this.isTaxAddViewOpen = true;
    }
    ngOnInit() {
        this.servicesForm = new FormGroup({
            'username': new FormControl(null, Validators.required),
            'percentage': new FormControl(null, Validators.required),
            'category': new FormControl('Federal'),
        });

        this.searchControl = new FormControl();
        this.mapsAPILoader.load().then(() => {
            const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
                types: ['(cities)']
            });
            autocomplete.addListener('place_changed', () => {
                this.ngZone.run(() => {
                    // get the place result
                    const place: google.maps.places.PlaceResult = autocomplete.getPlace();
                    this.placess = place;

                    //    for country
                    var address_components = autocomplete.getPlace().address_components;
                    for (var j = 0; j < address_components.length; j++) {
                        this.city = address_components[0].long_name;
                        if (address_components[j].types[0] == 'country') {
                            this.country = address_components[j].long_name;
                        }
                        if (address_components[j].types[0] == 'country') {
                            this.countryCode = address_components[j].short_name;
                        }
                    }
                    // verify result
                    if (place.geometry === undefined || place.geometry === null) {
                        return;
                    }

                    // set latitude, longitude and zoom
                    //    this.latitude = place.geometry.location.lat();
                    //    this.longitude = place.geometry.location.lng();
                    //    this.zoom = 12;
                });
            });
        });
    }

    ngAfterViewInit() {
        this._script.loadScripts('app-overview-settings',
            ['assets/app/js/overview-settings.js']);

    }


    onSubmit(name, percentage, category) {
        // console.log(this.servicesForm.value.username + ' ' + this.servicesForm.value.percentage);

        if (this.editTaxIndex != undefined) {
            console.log(this.taxesServices.getTaxes()[this.editTaxIndex - 1]);
            this.taxesServices.getTaxes()[this.editTaxIndex - 1].username = this.servicesForm.value.username;
            this.taxesServices.getTaxes()[this.editTaxIndex - 1].percentage = this.servicesForm.value.percentage;
            this.taxesServices.getTaxes()[this.editTaxIndex - 1].jurisdiction = this.servicesForm.value.category;
        }
        else {
            this.taxesServices.addtax(name, percentage, category);
        }

        this.servicesForm.reset();
        this.isTaxAddViewOpen = false;

    }

    removeTax(tax) {
        this.taxesServices.removeTax(tax)
    }
    private id: number;
    onEdit() {
        this.edit = true;
        //   this.id = id;
    }

    onUpdate() {
        // console.log(this.servicesForm.value.username + ' ' + this.servicesForm.value.percentage);
        this.taxesServices.updateTax(this.id, this.servicesForm.value.username, this.servicesForm.value.percentage, this.servicesForm.value.category);
        this.edit = false;
    }


}