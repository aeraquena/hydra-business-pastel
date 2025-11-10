speed = 1;
setResolution(640, 480);

hush();

shape(2, 0.01, () => cc[getKnob(1, 1)] * 0.1) // side, radius (out of 1, screen height), smoothing
  .repeat(4, 4, 2, 2)
  .kaleid(4)
  .scrollY(0, 0.1)
  .out();
