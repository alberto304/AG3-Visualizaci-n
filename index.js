// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Visualización AG3</h1>`;

var visualization = d3plus.viz()
  .container("#viz1")
  .data([{"year": 1991, "name":"alpha", "value": 15},
        {"year": 1992, "name":"alpha", "value": 20},])
  .type("bar")
  .id("name")
  .x("year")
  .y("value")
  .draw()


  d3.json("https://raw.githubusercontent.com/raul27868/07MBIG-Visualizacion-Actividades-Guiadas/master/columnas.json", function(data) {
  var visualization = d3plus.viz()
    .container("#viz2")
    .data(data)
    .type('bar')
    .id('name')
    .x('year')
    .y('value')
    .axes({ "ticks": false })
    .draw();
});