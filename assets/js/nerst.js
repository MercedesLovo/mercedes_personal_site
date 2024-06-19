const size2 = 200
const val = 1
const a = [...Array(size2).keys()].map(ai=> ai)
const b = [...Array(size2).keys()].map(bi=>bi)
const c = b.map(bi => a.map(ai=> (8.314*310 /(val* 96.485)) * Math.log(ai/bi)))


var data_c1 = [ {
  z: c,
  x: a,
  y: b,
  type: 'surface' 
} ];

var layout = {

  title: {
    text:'Nerst Equilibrium of Sodium',
    font: {
      family: 'Courier New, monospace',
      size: 24
    }
  },

	scene: {

		xaxis:{title: 'Na Concentration outside'},

		yaxis:{title: 'Na Concentration inside'},

		zaxis:{title: 'Nerst Equilibrium'},

		},

	autosize: false,
	width: 1000,
	height: 1000,


}	;
  
   console.log(c) ;

Plotly.newPlot('myDiv', data_c1, layout, {autosize: false, height: 1000, width: 1000});








