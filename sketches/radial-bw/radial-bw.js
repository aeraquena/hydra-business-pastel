hush();
shape(
  () => cc[getKnob(1, 1)] * 20,
  () => cc[getKnob(1, 2)] * 0.2,
  () => cc[getKnob(1, 3)] * 0.1
)
  .scale(() => Math.sin(time) * 3)
  .repeat(() => Math.sin(time) * 10)
  .modulateRotate(o0)
  .scale(() => Math.sin(time) * 2)
  .modulate(noise(3, 0))
  .rotate(0.1, 0.9)
  .out(o0);
src(o0)
  .modulate(osc(() => cc[getKnob(1, 4)] * 300, 1, 0))
  .out(o1);
src(o1)
  .modulateKaleid(
    voronoi(() => Math.sin(time) * 3, 0.1, 0.01),
    () => Math.sin(time) * 4
  )
  .scale(() => Math.sin(time) * 3)
  .out(o2);
render(o2);
speed = 0.8;
