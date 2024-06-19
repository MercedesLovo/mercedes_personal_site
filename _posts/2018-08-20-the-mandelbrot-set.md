---
author: jill
---
The Mandelbrot set is a renowned mathematical construct named after mathematician Benoit Mandelbrot, who investigated it in the late 1970s and early 1980s. This set is closely linked to complex dynamics, fractal geometry, and the iteration of complex functions.

In the Mandelbrot set, the parameter c varies for each pixel and is represented as x+yi, where x and y are the pixel's coordinates in the image. These coordinates also serve as the initial values for z in the iteration process.

The Mandelbrot set can be viewed as an assemblage of all possible Julia sets. Each point in the Mandelbrot set corresponds to a distinct cc value, transitioning from one Julia set to another as you move across the image. This creates a map-like visualization where each location depicts a unique Julia set defined by the corresponding c value.
       
<div>
<script src="https://cdn.plot.ly/plotly-2.27.0.min.js"></script>
    <div id="myDiv"></div>
    <script src="/assets/js/mandelbrot.js"></script>
</div>


