hush();
src(o0)
  .modulateRotate(
    noise(() => cc[getKnob(1, 1)] * 3, 0),
    () => cc[getKnob(1, 2)]
  )
  .hue(0.003)
  .layer(
    shape(2, 0.000001)
      .luma(
        () => cc[getSlider(1)],
        () => cc[getSlider(2)]
      )
      .color(0, 0, 1)
  )
  .out(o0);
