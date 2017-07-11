$(function() {
    $( "#datepicker" ).datetimepicker();
});
$(function() {
    $( "#datepicker1" ).datetimepicker();
});
var i = 0;
$(document).ready(function() {
		$("#reset").click(function() {
		$(':input','#attachmentModal').val("");
		$("#pbarmain").hide();
		$("#pbar").hide();
		$(".progress-bar").css("width", "0%");
		i = 0;
    });
});
function makeProgress(){
  $("#pbarmain").show();
  $("#pbar").show();
    if(i < 100){
    i = i + 4;
    $(".progress-bar").css("width", i + "%").text(i + " %"); 
    setTimeout("makeProgress()", 100);
  }
}
    google.charts.load("current", {packages:["corechart"]});
    google.charts.setOnLoadCallback(drawChart);
    function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Consumed Licences',     5],
          ['Offline Players',      4],
          ['Total Clicks',  4],
          ['Unique Clicks', 10],
          ['Dummy Text',    5]
        ]);	
        var options = {
          title: '',
          pieHole: 0.5,
		  width: 500,
		  height: 300, 
          colors: ['#ffd400', '#f26631', '#00bee7', '#f99d1c', '#f42fab'],
          legend: 'true',
          pieSliceText: 'none',
          pieStartAngle: 100,
        };
        var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
        chart.draw(data, options);
    }
    $(document).ready(function () {
        $('#demo-pie-1').pieChart({
                barColor: '#ffd400',
                trackColor: '#545454',
                lineCap: 'butt',
                lineWidth: 20,
				rotate: 0,
				width: 120,
				height:120,
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '');
                }
        });

        $('#demo-pie-2').pieChart({
                barColor: '#f99d1c',
                trackColor: '#555555',
                lineCap: 'butt',
                lineWidth: 20,
				rotate: 0,
				width: 120,
				height:120,
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '');
                }
        });

        $('#demo-pie-3').pieChart({
                barColor: '#f26631',
                trackColor: '#555555',
                lineCap: 'butt',
                lineWidth: 20,
				rotate: 0,
				width: 120,
				height:120,
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '');
                }
        });

        $('#demo-pie-4').pieChart({
                barColor: '#00bee7',
                trackColor: '#555555',
                lineCap: 'butt',
                lineWidth: 20,
                rotate: 0,
				width: 120,
				height:120,
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '');
                }
        });
		
		$('#demo-pie-5').pieChart({
                barColor: '#f99d1c',
                trackColor: '#555555',
                lineCap: 'butt',
                lineWidth: 20,
                rotate: 0,
				width: 120,
				height:120,
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '');
                }
        });
		
		$('#demo-pie-6').pieChart({
                barColor: '#f42fab',
                trackColor: '#555555',
                lineCap: 'butt',
                lineWidth: 20,
                rotate: 0,
				width: 120,
				height:120,
                onStep: function (from, to, percent) {
                    $(this.element).find('.pie-value').text(Math.round(percent) + '');
                }
            });
        });

	