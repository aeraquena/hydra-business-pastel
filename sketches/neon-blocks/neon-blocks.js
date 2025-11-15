speed = 0.75;
setResolution(640, 480);

osc(
  () => cc[getKnob(1, 1)] * 10,
  () => cc[getKnob(1, 2)],
  300
)
  .color(0.9, 0.7, 0.8)
  .diff(
    osc(() => cc[getKnob(1, 3)] * 45, 0.3, 100)
      .color(0.9, 0.9, 0.9)
      .rotate(0.18)
      .pixelate(() => cc[getKnob(1, 4)] * 20)
  )
  .scrollX(() => cc[getKnob(1, 5)])
  .luma(
    () => cc[getSlider(1)],
    () => cc[getSlider(2)]
  )
  .modulate(
    osc(
      () => cc[getKnob(1, 6)] * 0.1,
      () => cc[getKnob(1, 7)]
    )
  )
  .out();
