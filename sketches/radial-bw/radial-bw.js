hush();
shape(() => cc[getKnob(1, 1)] * 20, 0.1, 0.01)
  .scale(() => Math.sin(time) * 3)
  .repeat(() => Math.sin(time) * 10)
  .modulateRotate(o0)
  .scale(() => Math.sin(time) * 2)
  .modulate(noise(3, 0))
  .rotate(0.1, 0.9)
  .out(o0);
src(o0).modulate(osc(300, 1, 0)).out(o1);
src(o1)
  .modulateKaleid(
    voronoi(() => Math.sin(time) * 3, 0.1, 0.01),
    () => Math.sin(time) * 4
  )
  .scale(() => Math.sin(time) * 3)
  .out(o2);
render(o2);
speed = 0.8;
