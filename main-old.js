speed = 1;
setResolution(640, 480);

// Square with feedback
src(o0).modulate(noise(2), 0.005).blend(shape(4), 0.02).out(o0);

// Ascending neon blocks
osc(
  () => cc[getKnob(1, 3)] * 10,
  () => cc[getKnob(1, 4)],
  300
)
  .color(0.9, 0.7, 0.8)
  .diff(osc(45, 0.3, 100).color(0.9, 0.9, 0.9).rotate(0.18).pixelate(12))
  .scrollX(() => cc[getKnob(1, 1)] * 10)
  .luma(() => cc[getKnob(1, 5)])
  .modulate(osc(() => cc[getKnob(1, 2)], -0.9, 00))
  .out(o0);

// *******************************************************************/
// Modulate hue
// feedback
hush();
src(o0).modulate(noise(2), 0.001).blend(shape(4), 0.02).out(o0);

hush();
src(o0)
  .modulateHue(src(o0).scale(0.98), 1)
  .layer(osc(4, 0.5, 2).mask(shape(3, 0.5, 0.001)))
  .out(o0);

// *******************************************************************/
// Mahalia
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

// *******************************************************************/
// Glitch river
hush();
voronoi(() => cc[getKnob(1, 1)] * 10, 1)
  .mult(
    osc(7, 0.1, () => Math.cos(time) * 3)
      .saturate(2)
      .kaleid(100)
  )
  .modulate(o0, 0.4)
  .add(o0, 0.8)
  .scrollY(-0.01)
  .scale(0.98)
  .modulate(voronoi(8, 1), 0.016)
  .luma(0.2)
  .out(o0);

// *******************************************************************/

//clouds of passage
//by Nesso
//www.nesso.xyz

shape([4, 5, 6].fast(0.1).smooth(1), 0.000001, [0.2, 0.7].smooth(1))
  .color(0.2, 0.4, 0.3)
  .scrollX(() => Math.sin(time * 0.27))
  .add(
    shape(
      [4, 5, 6].fast(0.1).smooth(1),
      0.000001,
      [0.2, 0.7, 0.5, 0.3].smooth(1)
    )
      .color(0.6, 0.2, 0.5)
      .scrollY(() => cc[getKnob(1, 2) * 0.1])
      .scrollX(() => Math.sin(time * 0.33))
  )
  .add(
    shape([4, 5, 6].fast(0.1).smooth(1), 0.000001, [0.2, 0.7, 0.3].smooth(1))
      .color(0.2, 0.4, 0.6)
      .scrollY(-0.35)
      .scrollX(() => Math.sin(time * 0.41) * -1)
  )
  .add(
    src(o0)
      .shift(0.001, 0.01, 0.001)
      .scrollX([0.05, -0.05].fast(0.1).smooth(1))
      .scale(
        [1.05, 0.9].fast(0.3).smooth(1),
        [1.05, 0.9, 1].fast(0.29).smooth(1)
      ),
    0.85
  )
  .modulate(voronoi(() => cc[getKnob(1, 1)] * 10, 2, 2))
  .out();

// Glowing lines
osc(50, 0).luma(0.2).color(0, 0, 1).kaleid(5).out();

// Line
shape(2).scale(0.01).out(o0);

// RGB pixel filter
// func is decomposed into R, G, and B channels and overlaid on top of each other.
var n = 50;
var func = () => osc(30, 0.1, 1).modulate(noise(4, 0.1));
var pix = () => shape(4, 0.3).scale(1, 1, 3).repeat(n, n);
pix().mult(func().color(1, 0, 0).pixelate(n, n)).out(o1);
pix()
  .mult(func().color(0, 1, 0).pixelate(n, n))
  .scrollX(1 / n / 3)
  .out(o2);
pix()
  .mult(func().color(0, 0, 1).pixelate(n, n))
  .scrollX(2 / n / 3)
  .out(o3);
solid().add(src(o1), 1).add(src(o2), 1).add(src(o3), 1).out(o0);

// hue() is often useful to combine with feedback. In this example, o0 is gradually modulated and its hue is shifted at the same time.
src(o0)
  .modulateRotate(noise(2, 0), 0.03)
  .hue(0.003)
  .layer(shape(2, 0.125).luma().color(0, 0, 1))
  .out(o0);

// luma - neon lines
osc(30, 0.1, 1).luma(0.5, 0.01).out(o0);

// pink grid in 3d
shape(4, 0.9)
  .repeat(12, 12)
  .invert()
  .color(1, 0, 1)
  .scrollY(0, -0.1)
  .modulateScale(gradient().g(), 2)
  .out();

// Puertas II
// por Celeste Betancur
// https://github.com/essteban

osc(13, 0, 1)
  .kaleid()
  .mask(shape(4, 0.3, 1))
  .modulateRotate(shape(4, 0.1, 1))
  .modulateRotate(shape(4, 0.1, 0.9))
  .modulateRotate(shape(4, 0.1, 0.8))
  .scale(0.3)
  .add(shape(4, 0.2, 1).color(0.3, 1, 1, 0.5))
  .rotate(() => time)
  .out();

// by Rodrigo Velasco
// https://yecto.github.io/

osc(18, 0.1, 0)
  .color(2, 0.1, 2)
  .mult(osc(20, 0.01, 0))
  .repeat(2, 20)
  .rotate(0.5)
  .modulate(o1)
  .scale(1, () => a.fft[0] * 0.9 + 2)
  .diff(o1)
  .out(o0);
osc(20, 0.2, 0)
  .color(2, 0.7, 0.1)
  .mult(osc(40))
  .modulateRotate(o0, 0.2)
  .rotate(0.2)
  .out(o1);

//port
//by Marianne Teixido
//https://marianneteixido.github.io/

osc(5, 0.9, 0.001)
  .kaleid([3, 4, 5, 7, 8, 9, 10].fast(0.1))
  .color(0.5, 0.3)
  .colorama(0.4)
  .rotate(0.009, () => Math.sin(time) * -0.001)
  .modulateRotate(o0, () => Math.sin(time) * 0.003)
  .modulate(o0, 0.9)
  .scale(0.9)
  .luma(0.7)
  .out(o0);
