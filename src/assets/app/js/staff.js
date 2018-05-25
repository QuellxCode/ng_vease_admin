

jQuery(document).ready(function() {
    
    var _initSparklineChart = function(src, data, color, border) {
        if (src.length == 0) {
            return;
        }

        var config = {
            type: 'line',
            data: {
                labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October"],
                datasets: [{
                    label: "",
                    borderColor: color,
                    borderWidth: border,

                    pointHoverRadius: 4,
                    pointHoverBorderWidth: 12,
                    pointBackgroundColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                    pointBorderColor: Chart.helpers.color('#000000').alpha(0).rgbString(),
                    pointHoverBackgroundColor: mUtil.getColor('danger'),
                    pointHoverBorderColor: Chart.helpers.color('#000000').alpha(0.1).rgbString(),
                    fill: false,
                    data: data,
                }]
            },
            options: {
                title: {
                    display: false,
                },
                tooltips: {
                    enabled: false,
                    intersect: false,
                    mode: 'nearest',
                    xPadding: 10,
                    yPadding: 10,
                    caretPadding: 10
                },
                legend: {
                    display: false,
                    labels: {
                        usePointStyle: false
                    }
                },
                responsive: true,
                maintainAspectRatio: true,
                hover: {
                    mode: 'index'
                },
                scales: {
                    xAxes: [{
                        display: false,
                        gridLines: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Month'
                        }
                    }],
                    yAxes: [{
                        display: false,
                        gridLines: false,
                        scaleLabel: {
                            display: true,
                            labelString: 'Value'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },

                elements: {
                    point: {
                        radius: 4,
                        borderWidth: 12
                    },
                },

                layout: {
                    padding: {
                        left: 0,
                        right: 10,
                        top: 5,
                        bottom: 0
                    }
                }
            }
        };

        return new Chart(src, config);
    }

    $(".chatServiceButton").click(function(){
        $("#m_quick_sidebar_toggle").click();
        /*
        $("#m_quick_sidebar_close").removeClass("m-quick-sidebar--on");
        $("#m_quick_sidebar").addClass("m-quick-sidebar--on");
        $(".m-quick-sidebar__content").removeClass("m--hide");
        */
    });

$("#adjustRadius").click(function(){
   $("#radiusModal").modal('show');
});
    
    
    
    


  _initSparklineChart($('#m_chart_quick_stats_form2'), [12, 12, 18, 11, 15, 12, 13, 16, 11, 18], mUtil.getColor('brand'), 3);  
    _initSparklineChart($('#m_chart_quick_stats_form3'), [12, 12, 18, 11, 15, 12, 13, 16, 11, 18], mUtil.getColor('brand'), 3);  
    _initSparklineChart($('#m_chart_quick_stats_form4'), [12, 12, 18, 11, 15, 12, 13, 16, 11, 18], mUtil.getColor('brand'), 3);  
    _initSparklineChart($('#m_chart_quick_stats_form5'), [12, 12, 18, 11, 15, 12, 13, 16, 11, 18], mUtil.getColor('brand'), 3);  
    _initSparklineChart($('#m_chart_quick_stats_form6'), [12, 12, 18, 11, 15, 12, 13, 16, 11, 18], mUtil.getColor('brand'), 3);  
    _initSparklineChart($('#m_chart_quick_stats_form7'), [12, 12, 18, 11, 15, 12, 13, 16, 11, 18], mUtil.getColor('brand'), 3);  
       

    _initSparklineChart($('#m_chart_quick_stats_form8'), [12, 12, 18, 11, 15, 12, 13, 16, 11, 18], mUtil.getColor('brand'), 3);  
    _initSparklineChart($('#m_chart_quick_stats_form9'), [12, 12, 18, 11, 15, 12, 13, 16, 11, 18], mUtil.getColor('brand'), 3);  
    _initSparklineChart($('#m_chart_quick_stats_form10'), [12, 12, 18, 11, 15, 12, 13, 16, 11, 18], mUtil.getColor('brand'), 3);  
    _initSparklineChart($('#m_chart_quick_stats_form11'), [12, 12, 18, 11, 15, 12, 13, 16, 11, 18], mUtil.getColor('brand'), 3);  


    _initSparklineChart($('#m_chart_quick_stats_form12'), [12, 12, 18, 11, 15, 12, 13, 16, 11, 18], mUtil.getColor('brand'), 3);  


    var currentYear = 1995;
    var chart = AmCharts.makeChart("SchedulesTasksPieChart", {
        "type": "pie",
        "theme": "light",
        "labelRadius": -35,
        "labelText": "[[percents]]%",
        "dataProvider": [{
            "country": "Salary",
            "litres": 501.9
        }, {
            "country": "Expense",
            "litres": 201.9
        }, {
            "country": "Profit",
            "litres": 300.1
        }],
        "valueField": "litres",
        "titleField": "country",
        "balloon": {
            "fixedPosition": true
        },
        "export": {
            "enabled": true
        }
    });


var chartslist = [];
    /* Circle Chart Of Material */
var m_chart_staff = function(chartID) {
    
        var chart = new Chartist.Pie(chartID, {
            series: [{
                    value: 32,
                    className: 'custom',
                    meta: {
                        color: mUtil.getColor('brand')
                    }
                },
                {
                    value: 32,
                    className: 'custom',
                    meta: {
                        color: mUtil.getColor('accent')
                    }
                },
                {
                    value: 36,
                    className: 'custom',
                    meta: {
                        color: mUtil.getColor('warning')
                    }
                }
            ],
            labels: [1, 2, 3]
        }, {
            donut: true,
            donutWidth: 17,
            showLabel: false
        });

        chart.on('draw', function(data) {
            if (data.type === 'slice') {
                // Get the total path length in order to use for dash array animation
                var pathLength = data.element._node.getTotalLength();

                // Set a dasharray that matches the path length as prerequisite to animate dashoffset
                data.element.attr({
                    'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
                });

                // Create animation definition while also assigning an ID to the animation for later sync usage
                var animationDefinition = {
                    'stroke-dashoffset': {
                        id: 'anim' + data.index,
                        dur: 1000,
                        from: -pathLength + 'px',
                        to: '0px',
                        easing: Chartist.Svg.Easing.easeOutQuint,
                        // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
                        fill: 'freeze',
                        'stroke': data.meta.color
                    }
                };

                // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
                if (data.index !== 0) {
                    animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
                }

                // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us

                data.element.attr({
                    'stroke-dashoffset': -pathLength + 'px',
                    'stroke': data.meta.color
                });

                // We can't use guided mode as the animations need to rely on setting begin manually
                // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
                data.element.animate(animationDefinition, false);
            }
        });

        // For the sake of the example we update the chart every time it's created with a delay of 8 seconds
        chart.on('created', function() {
            if (window.__anim21278907124) {
                clearTimeout(window.__anim21278907124);
                window.__anim21278907124 = null;
            }
            window.__anim21278907124 = setTimeout(chart.update.bind(chart), 15000);
        });


        chartslist.push(chart);


        
    }


    m_chart_staff("#m_chart_staff_1");
    m_chart_staff("#m_chart_staff_2");
    m_chart_staff("#m_chart_staff_3");

    m_chart_staff("#m_chart_staff_list_staff1");
    m_chart_staff("#m_chart_staff_list_staff2");


    $(".btn-changeview").click(function(){
        
        setTimeout(function(){
        for(i=0;i<chartslist.length;i++)
        {
            chartslist[i].update();
        }

        } ,1000);
        
    });


    




});



