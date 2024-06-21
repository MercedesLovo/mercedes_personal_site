---
layout: single
title: "Mi primer post"
date: 2024-06-22 10:00:00 -0400
categories: 
  - Blog
tags:
  - Jekyll
  - GitHub Pages
---
If the Julia set is a way to graphically represent the behavior of a function when evaluated recursively given a seed or initial value, remember that it involves assigning a color in the complex number plane to each initial value depending on whether the function converges or diverges, and in the latter case, how quickly it does so.

Mandelbrot is a particular case; it could be said that it is a map of the Julia set of a specific function, f(z) = z^2 + c , where z  is the initial value or seed for the function that will be called recursively, and c  is a constant. Both can belong to the set of complex numbers.

So, a map of what? It answers the question of for which values of c the Julia set converges if our initial  z is zero.

That is, in Mandelbrot we will also call a function recursively and also store the resulting values in a set. The difference is that in this case, our initial value will always be zero. What we will change now is our  c  or constant. We can now move around our complex number plane and assign a color to each point depending on whether it corresponds to a  c  where the function diverges or not.

<div>
<img src="/assets/images/mandelbrot.png" alt="1100px" width="1100px">
</div>

As a result, we have the two related sets: we know that if we use a  c that converges in Mandelbrot to create a Julia set, it will converge at zero.

Below is a dynamically created Julia set. The mouse position represents the  c of the formula, and the graph will show how the function behaves with each point as an initial value. Note that if you place the mouse where the Mandelbrot set converges, the Julia set converges at the initial value zero.


<div>
<script src="https://cdn.plot.ly/plotly-2.27.0.min.js"></script>
    <div id="myDiv"></div>
    <script src="/assets/js/mandelbrot.js"></script>
</div>


