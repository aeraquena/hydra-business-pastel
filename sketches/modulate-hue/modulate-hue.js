hush();
src(o0).modulate(noise(2), 0.001).blend(shape(4), 0.02).out(o0);
src(o0)
  .modulateHue(src(o0).scale(0.98), 1)
  .layer(osc(4, 0.5, 2).mask(shape(3, 0.5, 0.001)))
  .out(o0);
