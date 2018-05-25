

jQuery(document).ready(function() {

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


});