osc(() => cc[getKnob(1, 1)] * 200)
  .color(0.5, 0.1, 0.8)
  .rotate(0.11, 0.1)
  .modulate(
    osc(() => cc[getKnob(1, 4)] * 20)
      .rotate(0.3)
      .add(o0, 0.1)
  )
  .add(osc(20, 0.01, 1).color(0, 0.8, 1))
  .luma(() => cc[getKnob(1, 5)])
  .out(o0);
osc(() => cc[getKnob(1, 3)] * 100, 0.05, 0.7)
  .color(1, 0.7, 0.5)
  .diff(o0)
  .modulate(o1, 0.05)
  .luma(() => cc[getKnob(1, 2)])
  .out(o1);
render(o1);
