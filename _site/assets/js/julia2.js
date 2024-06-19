const myPlot = document.getElementById('myDiv');
const size = 1100;
const x = new Array(size);
const y = new Array(size);
const z = new Array(size);
const nmax = 100;

function julia(re0, im0, n, creal, cim) {
    let re = re0;
    let im = im0;
    for (let i = 0; i < nmax; i++) {
        const reTemp = re * re - im * im + creal;
        im = 2 * re * im + cim;
        re = reTemp;
        if (Math.sqrt(re * re + im * im) >= 2) {
            return i / nmax;
        }
    }
    return 1; // If it did not escape
}

for (let i = 0; i < size; i++) {
    x[i] = y[i] = -2 + (4 * i) / size;
    z[i] = new Array(size);
}

for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        z[i][j] = julia(x[i], y[j], 0, 0.28, -0.01);
    }
}

const data = [{
    z: z,
    x: x,
    y: y,
    type: 'contour',
    autocontour: false,
    contours: {
        start: 0,
        end: 1,
        size: 0.2
    }
}];

const layout = {
    title: {
        text: 'Julia When c = 0.28, -0.01',
        font: {
            family: 'Courier New, monospace',
            size: 24
        }
    },
    autosize: false,
    height: 1000,
    width: 1000
};

Plotly.newPlot(myPlot, data, layout);