setResolution(640, 480);

shape(4, 0.9)
  .repeat(12, 12)
  .invert()
  .color(1, 0, 1)
  .scrollY(0, -0.1)
  .modulateScale(gradient().g(), 2)
  .luma(
    () => cc[getKnob(1, 3)],
    () => cc[getKnob(1, 4)] * 0.1
  )
  .out();

speed = 1.5;
