// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Visualización AG3</h1>`;

d3.csv("https://raw.githubusercontent.com/mwaskom/seaborn-data/master/titanic.csv", function(error, data)
{
if(error){console.log("Error al leer el fichero titanic.csv");
} else {
//Incorporación de gráficos
// .....
}
});

var visualization = d3plus
  .viz()
  .container('#viz1')
  .data([{ year: 1991, name: 'alpha', value: 15 },{ year: 1992, name: 'alpha', value: 20 },])
  .type('bar')
  .id('name')
  .x('year')
  .y('value')
  .draw();
