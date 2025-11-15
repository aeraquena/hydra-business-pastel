noise(
  () => cc[getKnob(1, 2)] * 5,
  0.1,
  () => cc[getKnob(1, 3)] * 7
)
  .rotate(1, -1, -2)
  .mask(shape(20))
  .colorama(() => cc[getKnob(1, 3)])
  .modulateScale(o0)
  .modulateScale(o0)
  .blend(o0)
  .blend(o0)
  .blend(o0)
  .blend(o0)
  .luma(
    () => cc[getSlider(1)],
    () => cc[getSlider(2)]
  )
  .out(o0);
