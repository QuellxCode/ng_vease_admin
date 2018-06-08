//== Class definition
/*
var DatatableDataLocalDemo = function () {
	//== Private functions

	// demo initializer
	var demo = function () {
		var dataJSONArray = JSON.parse('[{"RecordID":1,"TheImage": "./assets/app/media/img/logos/Makeup-icon.png","ServiceName":"bridal make-up","Category":"Makeup","Subcategory":"Personal","Description":"Good quality makeup for bride in a very low cost","Price":"100","Status":1},{"RecordID":2,"TheImage": "./assets/app/media/img/logos/car.png","ServiceName":"Simple car wash","Category":"Car Wash","Subcategory":"Simple car wash","Description":"Good quality makeup for bride in a very low cost","Price":"100","Status":1}, {"RecordID":3,"TheImage": "./assets/app/media/img/logos/hair.png","ServiceName":"simple style","Category":"Hair Stylists","Subcategory":"Simple car wash","Description":"Good quality makeup for bride in a very low cost","Price":"100","Status":2}]');

		var datatable = $('.m_datatable').mDatatable({
			// datasource definition
			data: {
				type: 'local',
				source: dataJSONArray,
				pageSize: 10,
				serverPaging: true,
				serverFiltering: true,
				serverSorting: true
			},

			// layout definition
			layout: {
				theme: 'default', // datatable theme
				class: '', // custom wrapper class
				scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.
				// height: 450, // datatable's body's fixed height
				footer: false // display/hide footer
			},

			// column sorting
			sortable: true,

			pagination: true,

			search: {
				// enable trigger search by keyup enter
				onEnter: false,
				// input text for search
				input: $('#generalSearch'),
				// search delay in milliseconds
				delay: 400,
			  },

			// inline and bactch editing(cooming soon)
			// editable: false,

			// columns definition
			columns: [{
				field: "RecordID",
				title: "#",
				width: 50,
				sortable: false,
				textAlign: 'center',
				
				selector: {class: 'm-checkbox--solid m-checkbox--brand'}
			},
			{
				field: "TheImage",
				title: "The Image",
				template: function(data) 
				{
					return '<img src="' +data.TheImage + '" class="m--img-rounded m--marginless" alt="photo">'
				}
			},  {
				field: "ServiceName",
				title: "Service Name",
				responsive: {visible: 'lg'}
			}, {
				field: "Category",
				title: "Category",
				width: 100
			}, {
				field: "Subcategory",
				title: "Subcategory",
				responsive: {visible: 'lg'}
			},
			{
				field: "Description",
				title: "Description",
				responsive: {visible: 'lg'}
			}, {
				field: "Price",
				title: "Price",
				type: "number"
			}, {
				field: "Active",
				title: "Active",
				// callback function support for column rendering
				template: function (row) {
					var status = 
					{
						1: {status: 'checked'},
						2: {status:''}
					};
					

					return '<span class="m-switch m-switch--outline m-switch--sm m-switch--success m-switch--icon"><label><input name="" type="checkbox" '+status[row.Status].status+'><span></span></label></span>';
				}
			}, {
				field: "Actions",
				width: 110,
				title: "Actions",
				sortable: false,
				overflow: 'visible',
				template: function (row, index, datatable) {
					var dropup = (datatable.getPageSize() - index) <= 4 ? 'dropup' : '';
					return '<span>\
						<a href="javascript:;" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="View details">\
							<i class="la la-ellipsis-h"></i>\
						</a>\
						<a href="javascript:" class="m-portlet__nav-link btn m-btn m-btn--hover-accent m-btn--icon m-btn--icon-only m-btn--pill" title="Edit details">\
							<i class="la la-edit"></i>\
						</a>\
						<a href="javascript:" class="m-portlet__nav-link btn m-btn m-btn--hover-danger m-btn--icon m-btn--icon-only m-btn--pill" title="Delete">\
							<i class="la la-trash"></i>\
						</a>\
					</span>';
				}
			}]
		});

		var query = datatable.getDataSourceQuery();

		$('#m_form_status').on('change', function () {
			datatable.search($(this).val(), 'Status');
		}).val(typeof query.Status !== 'undefined' ? query.Status : '');

		$('#m_form_type').on('change', function () {
			datatable.search($(this).val(), 'Type');
		}).val(typeof query.Type !== 'undefined' ? query.Type : '');

		$('#m_form_status, #m_form_type').selectpicker();

	};

	return {
		//== Public functions
		init: function () {
			// init dmeo
			demo();
		}
	};
}();
*/
jQuery(document).ready(function () {
	//DatatableDataLocalDemo.init();
	$(".servicesCatalogTable").dataTable();
});
