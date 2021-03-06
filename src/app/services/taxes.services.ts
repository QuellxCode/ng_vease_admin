import { EventEmitter, Injectable } from '@angular/core';

@Injectable()

export class TaxesService {
    private taxes = [];
    public taxAdded = new EventEmitter();
    public taxRemoved = new EventEmitter();
    public taxEditted = new EventEmitter();

    addtax(username, percentage, jurisdiction, dummyData, discription) {
        const tax = { id: this.taxes.length + 1, username: username, percentage: percentage, jurisdiction: jurisdiction, dummyData: dummyData, discription: discription }
        this.taxes.push(tax);
        this.taxAdded.emit(tax);
    }

    removeTax(tax) {
        const index = this.taxes.indexOf(tax);
        this.taxes.splice(index, 1);
        this.taxRemoved.emit(tax);
    }
    getTaxes() {
        return this.taxes;
    }

    updateTax(id, username, percentage, jurisdiction, dummyData, discription) {
        const editTask = { id: id, username: username, percentage: percentage, jurisdiction: jurisdiction, dummyData: dummyData, discription: discription };
        this.taxes[id - 1] = editTask;
        this.taxEditted.emit(editTask);
    }
}