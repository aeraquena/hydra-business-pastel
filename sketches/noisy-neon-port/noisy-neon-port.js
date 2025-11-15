osc(5, 0.9, 0.001)
  .kaleid([3, 4, 5, 7, 8, 9, 10].fast(0.1))
  .color(0.5, 0.3)
  .colorama(0.4)
  .rotate(0.009, () => Math.sin(time) * -0.001)
  .modulateRotate(o0, () => Math.sin(time) * 0.003)
  .modulate(o0, () => cc[getKnob(1, 2)])
  .scale(0.9)
  .luma(
    () => cc[getSlider(1)],
    () => cc[getSlider(2)]
  )
  .out(o0);
