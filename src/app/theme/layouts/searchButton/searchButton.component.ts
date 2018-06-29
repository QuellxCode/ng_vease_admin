import { Component } from '@angular/core';


@Component({
    selector: 'search-button',
    templateUrl: './searchButton.component.html',
    styleUrls: ['./searchButton.component.css']
})
export class SearchButtonComponent {
    constructor() { }
    search: boolean = true;
}