//== Class definition
var OverviewSettings = function() {



    var calendarInit = function() {
        if ($('#m_overview_calendar').length === 0) {
            return;
        }
        
        var todayDate = moment().startOf('day');
        var YM = todayDate.format('YYYY-MM');
        var YESTERDAY = todayDate.clone().subtract(1, 'day').format('YYYY-MM-DD');
        var TODAY = todayDate.format('YYYY-MM-DD');
        var TOMORROW = todayDate.clone().add(1, 'day').format('YYYY-MM-DD');

        $('#m_overview_calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay,listWeek'
            },
            editable: true,
            eventLimit: true, // allow "more" link when too many events
            navLinks: true,
            defaultDate: moment('2017-09-15'),
            events: [
                {
                    title: 'Meeting',
                    start: moment('2017-08-28'),
                    description: 'Lorem ipsum dolor sit incid idunt ut',
                    className: "m-fc-event--light m-fc-event--solid-warning"
                },
                {
                    title: 'Conference',                    
                    description: 'Lorem ipsum dolor incid idunt ut labore',
                    start: moment('2017-08-29T13:30:00'),
                    end: moment('2017-08-29T17:30:00'),
                    className: "m-fc-event--accent"
                },
                {
                    title: 'Dinner',
                    start: moment('2017-08-30'),
                    description: 'Lorem ipsum dolor sit tempor incid',
                    className: "m-fc-event--light  m-fc-event--solid-danger"
                },
                {
                    title: 'All Day Event',
                    start: moment('2017-09-01'),
                    description: 'Lorem ipsum dolor sit incid idunt ut',
                    className: "m-fc-event--danger m-fc-event--solid-focus"
                },
                {
                    title: 'Reporting',                    
                    description: 'Lorem ipsum dolor incid idunt ut labore',
                    start: moment('2017-09-03T13:30:00'),
                    end: moment('2017-09-04T17:30:00'),
                    className: "m-fc-event--accent"
                },
                {
                    title: 'Company Trip',
                    start: moment('2017-09-05'),
                    end: moment('2017-09-07'),
                    description: 'Lorem ipsum dolor sit tempor incid',
                    className: "m-fc-event--primary"
                },
                {
                    title: 'ICT Expo 2017 - Product Release',
                    start: moment('2017-09-09'),
                    description: 'Lorem ipsum dolor sit tempor inci',
                    className: "m-fc-event--light m-fc-event--solid-primary"
                },
                {
                    title: 'Dinner',
                    start: moment('2017-09-12'),
                    description: 'Lorem ipsum dolor sit amet, conse ctetur'
                },
                {
                    id: 999,
                    title: 'Repeating Event',
                    start: moment('2017-09-15T16:00:00'),
                    description: 'Lorem ipsum dolor sit ncididunt ut labore',
                    className: "m-fc-event--danger"
                },
                {
                    id: 1000,
                    title: 'Repeating Event',
                    description: 'Lorem ipsum dolor sit amet, labore',
                    start: moment('2017-09-18T19:00:00'),
                },
                {
                    title: 'Conference',
                    start: moment('2017-09-20T13:00:00'),
                    end: moment('2017-09-21T19:00:00'),
                    description: 'Lorem ipsum dolor eius mod tempor labore',
                    className: "m-fc-event--accent"
                },
                {
                    title: 'Meeting',
                    start: moment('2017-09-11'),
                    description: 'Lorem ipsum dolor eiu idunt ut labore'
                },
                {
                    title: 'Lunch',
                    start: moment('2017-09-18'),
                    className: "m-fc-event--info m-fc-event--solid-accent",
                    description: 'Lorem ipsum dolor sit amet, ut labore'
                },
                {
                    title: 'Meeting',
                    start: moment('2017-09-24'),
                    className: "m-fc-event--warning",
                    description: 'Lorem ipsum conse ctetur adipi scing'
                },
                {
                    title: 'Happy Hour',
                    start: moment('2017-09-24'),
                    className: "m-fc-event--light m-fc-event--solid-focus",
                    description: 'Lorem ipsum dolor sit amet, conse ctetur'
                },
                {
                    title: 'Dinner',
                    start: moment('2017-09-24'),
                    className: "m-fc-event--solid-focus m-fc-event--light",
                    description: 'Lorem ipsum dolor sit ctetur adipi scing'
                },
                {
                    title: 'Birthday Party',
                    start: moment('2017-09-24'),
                    className: "m-fc-event--primary",
                    description: 'Lorem ipsum dolor sit amet, scing'
                },
                {
                    title: 'Company Event',
                    start: moment('2017-09-24'),
                    className: "m-fc-event--danger",
                    description: 'Lorem ipsum dolor sit amet, scing'
                },
                {
                    title: 'Click for Google',
                    url: 'http://google.com/',
                    start: moment('2017-09-26'),
                    className: "m-fc-event--solid-info m-fc-event--light",
                    description: 'Lorem ipsum dolor sit amet, labore'
                }
            ],

            eventRender: function(event, element) {
                if (element.hasClass('fc-day-grid-event')) {
                    element.data('content', event.description);
                    element.data('placement', 'top');
                    mApp.initPopover(element);
                } else if (element.hasClass('fc-time-grid-event')) {
                    element.find('.fc-title').append('<div class="fc-description">' + event.description + '</div>');
                } else if (element.find('.fc-list-item-title').lenght !== 0) {
                    element.find('.fc-list-item-title').append('<div class="fc-description">' + event.description + '</div>');
                }
            }
        });
    }

    return {
        //== Init demos
        init: function() {
           
            calendarInit();
        }
    };
}();

//== Class initialization on page load
jQuery(document).ready(function() {
    

    $("#timingsandcalendar").click(function(){
        setTimeout(function(){OverviewSettings.init()} , 80);
    });
});