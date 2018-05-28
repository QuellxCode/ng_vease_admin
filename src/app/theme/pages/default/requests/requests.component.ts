import { Component, OnInit } from '@angular/core';
import { DragulaService } from 'ng2-dragula/ng2-dragula';

declare var $: any;

@Component({
    selector: 'app-requests',
    templateUrl: './requests.component.html',
    styleUrls: ['./requests.component.css', '../../../../../../node_modules/dragula/dist/dragula.css']

})
export class RequestsComponent implements OnInit {
    constructor(private dragulaService: DragulaService) {

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

    ngOnInit() {

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

}
