const myPlot = document.getElementById('myDiv')
const size = 300
const x = new Array(size)
const y = new Array(size)
const z = new Array(size)
const nmax =100

function julia(re0,im0,n, creal, cim) {
    const re = re0**2 - im0**2 + creal
    const im = 2*re0*im0 +cim
    const norma = Math.sqrt(re**2 + im**2)
    
    if(norma >= 2 || n >=nmax ) {
        return n/nmax
    } else {
        return julia(re,im,n+1, creal, cim)}
}

    for(let i = 0; i < size; i++) {
    x[i] = y[i] = -2 + 4 * i / size
    z[i] = new Array(size);
}

for(let i = 0 ; i < size; i++) {
    for(let j = 0; j < size; j++){
        z[i][j] = julia(x[i],y[j],0,0,0)
    }
}

const data = [ {
    z: z,
    x: x,
    y: y,
    type: 'contour',
    autocontour:false,
    contours:{
        start:0,
        end:1,
        size:0.2
    }
}]

Plotly.newPlot('myDiv', data, {autosize: false, height: 1000, width: 1000,hovermode:"cosest", zaxis: {scaleanchor: "x", scaleratio: 0.01}, yaxis: {scaleanchor: "x"}}, {responsive: true})

myPlot.on("plotly_hover", data=>{
    let re = data.points[0].x
    let im = data.points[0].y
    for(let i = 0 ; i < size; i++) {
    for(let j = 0; j < size; j++){
        z[i][j] = julia(x[i],y[j],0,re,im)
    }
}
    console.log(re,im,z[5][5],z,x,y)
    Plotly.restyle(myPlot,{z:[z]},0)
}).on("ploty_unhover",d=>{
        console.log("un")
    })
