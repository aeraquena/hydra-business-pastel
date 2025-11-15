osc(
  () => cc[getKnob(1, 1)] * 20,
  -0.5,
  () => cc[getKnob(1, 2)]
)
  .kaleid(99)
  .repeat(2, 2)
  .saturate(() => cc[getKnob(1, 5)] * 10)
  .luma(
    () => cc[getSlider(1)],
    () => cc[getSlider(2)]
  )
  .scale(3)
  .out(o0);
