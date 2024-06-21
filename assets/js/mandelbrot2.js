const myPlot = document.getElementById('myDiv2');
const size = 1100;
const x = new Array(size);
const y = new Array(size);
const z = new Array(size);
const nmax = 100;

function mandelbrot(creal, cim) {
    let re = 0;
    let im = 0;
    for (let i = 0; i < nmax; i++) {
        const reTemp = re * re - im * im + creal;
        im = 2 * re * im + cim;
        re = reTemp;
        if (re * re + im * im >= 4) {
            return i / nmax;
        }
    }
    return 1; // If it did not escape
}

// Populate x and y arrays
for (let i = 0; i < size; i++) {
    x[i] = -2 + (4 * i) / size;
    y[i] = -2 + (4 * i) / size;
}

// Populate z array with mandelbrot function values
for (let i = 0; i < size; i++) {
    z[i] = new Array(size);
    for (let j = 0; j < size; j++) {
        z[i][j] = mandelbrot(x[j], y[i]);
    }
}

const data = [{
    z: z,
    x: x,
    y: y,
    type: 'heatmap',
    colorscale: 'Viridis'
}];

const layout = {
    title: {
        text: 'Mandelbrot Set',
        font: {
            family: 'Courier New, monospace',
            size: 24
        }
    },
    autosize: false,
    height: 800,
    width: 800
};

Plotly.newPlot(myPlot, data, layout);
