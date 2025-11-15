src(o0)
  .modulate(
    noise(() => cc[getKnob(1, 1)] * 4),
    () => cc[getKnob(1, 2)] * 0.01
  )
  .blend(
    shape(3).add(
      osc(
        () => cc[getKnob(2, 1)],
        () => cc[getKnob(2, 2)],
        () => cc[getKnob(2, 3)]
      ),
      () => cc[getSlider(2)]
    ),
    () => cc[getKnob(2, 4)] * 0.04
  )
  .luma(
    () => cc[getSlider(1)] * 0.5,
    () => cc[getSlider(2)]
  )
  .out(o0);
