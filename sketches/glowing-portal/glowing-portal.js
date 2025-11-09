osc(
  () => cc[getKnob(1, 1)] * 10,
  0,
  () => cc[getKnob(1, 3)]
)
  .kaleid()
  .mask(shape(() => cc[getKnob(1, 4)] * 5, 0.3, 1))
  .modulateRotate(shape(4, 0.1, 1))
  .modulateRotate(shape(4, 0.1, 0.9))
  .modulateRotate(shape(4, 0.1, 0.8))
  .scale(cc[getKnob(1, 2)] * 10)
  .add(shape(4, 0.2, 1).color(0.3, 1, 1, 0.5))
  .rotate(() => time)
  .scale(() => cc[getKnob(1, 5)])
  .out();
