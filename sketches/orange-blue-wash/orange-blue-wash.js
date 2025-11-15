osc(() => cc[getKnob(1, 1)] * 10, -0.5, 1)
  .color(-1.5, -1.5, -1.5)
  .blend(o0)
  .rotate(-0.5, -0.5)
  .modulate(
    shape(4)
      .rotate(0.5, 0.5)
      .scale(2)
      .repeatX(2, 2)
      .modulate(o0, () => cc[getKnob(1, 3)])
      .repeatY(2, 2)
  )
  .luma(() => cc[getKnob(1, 2)])
  .out(o0);
