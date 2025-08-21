google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Moje úkoly', 'hodiny denně'],
  ['Práce', 8],
  ['Jídlo', 2],
  ['TV', 4],
  ['Sport', 2],
  ['Spaní', 8]
]);

var options = {'title':'Můj průměrný den', 'width':550, 'height':400};
var chart = new google.visualization.PieChart(document.getElementById('piechart'));
chart.draw(data, options);
}