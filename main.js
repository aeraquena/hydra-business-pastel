// triangle with feedback
// 1. intro
// 2. text me when you get home

setResolution(640, 480);

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

// rotating blob
// 3. cloud of smoke

noise(
  () => cc[getKnob(1, 1)] * 5,
  0.1,
  () => cc[getKnob(1, 2)] * 7
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

// neon lines
// 4. ghosting

osc(20, -0.5, () => cc[getKnob(1, 1)])
  .kaleid(99)
  .repeat(2, 2)
  .saturate(() => cc[getKnob(1, 2)] * 10)
  .luma(
    () => cc[getSlider(1)],
    () => cc[getSlider(2)]
  )
  .scale(() => cc[getKnob(1, 4)] * 5)
  .modulate(o0, () => cc[getKnob(1, 5)])
  .out(o0);

// noisy neon port
// 5. ______
osc(5, 0.9, 0.001)
  .kaleid([3, 4, 5, 7, 8, 9, 10].fast(0.1))
  .color(0.5, 0.3)
  .colorama(() => cc[getKnob(1, 1)])
  .rotate(0.009, () => Math.sin(time) * -0.001)
  .modulateRotate(o0, () => Math.sin(time) * 0.003)
  .modulate(o0, () => cc[getKnob(1, 2)])
  .scale(() => cc[getKnob(1, 3)])
  .luma(
    () => cc[getSlider(1)],
    () => cc[getSlider(2)]
  )
  .out(o0);

// neon blocks
// 6. goth boys

speed = 0.75;

osc(10, 1, 300)
  .color(0.9, 0.7, 0.8)
  .diff(
    osc(() => 45, 0.3, 100)
      .color(0.9, 0.9, 0.9)
      .rotate(0.18)
      .pixelate(() => cc[getKnob(1, 1)] * 10 + 5)
  )
  .scrollX(() => cc[getKnob(1, 2)])
  .luma(
    () => cc[getSlider(1)],
    () => cc[getSlider(2)]
  )
  .modulate(osc(0.1, 1))
  .scale(() => cc[getKnob(1, 3)] * 0.5 + 0.5)
  .out();

// acid bus seat
// 7. enbydextrous

speed = 1;

osc(() => cc[getKnob(1, 1)] * 200)
  .color(0.5, 0.1, 0.8)
  .rotate(0.11, 0.1)
  .modulate(
    osc(10)
      .rotate(0.3)
      .add(o0, () => cc[getKnob(1, 2)] * 0.2)
  )
  .add(osc(20, 0.01, 1).color(0, 0.8, 1))
  .luma(
    () => cc[getSlider(1)],
    () => cc[getSlider(2)]
  )
  .out(o0);
osc(50, 0.05, 0.7)
  .color(1, 0.7, 0.5)
  .diff(o0)
  .modulate(o1, () => cc[getKnob(1, 3)] * 0.1)
  .luma(
    () => cc[getSlider(3)],
    () => cc[getSlider(4)]
  )
  .scale(() => cc[getKnob(1, 4)] * 5)
  .out(o1);
render(o1);

// diagonal line glitch
// 8. sun in my eyes

osc(18, 0.1, 0)
  .color(2, 0.1, 2)
  .mult(osc(20, 0.01, 0))
  .repeat(2, 20)
  .rotate(() => cc[getKnob(1, 1)])
  .modulate(o1, () => cc[getKnob(1, 2)])
  .scale(
    () => cc[getKnob(1, 3)] * 0.5 + 0.5,
    () => a.fft[0] * 0.9 + 2
  )
  .diff(o1)
  .luma(
    () => cc[getSlider(1)],
    () => cc[getSlider(2)]
  )
  .out(o0);
osc(20, 0.2, 0)
  .color(2, 0.7, 0.1)
  .mult(osc(40))
  .modulateRotate(o0, () => cc[getKnob(1, 4)])
  .rotate(() => cc[getKnob(1, 5)])
  .luma(
    () => cc[getSlider(3)],
    () => cc[getSlider(4)]
  )
  .out(o1);
render(o0);

// clouds
// 9. palette cleanser

speed = 1.5;
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
      .scrollY(() => cc[getKnob(1, 1) * 0.1])
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
    () => cc[getKnob(1, 2)] * 0.75
  )
  .luma(
    () => cc[getSlider(1)],
    () => cc[getSlider(2)]
  )
  .scale(() => cc[getKnob(1, 3)])
  .out();

// glitch river
// 10. she looks just like me

speed = 1;
voronoi(() => cc[getKnob(1, 1)] * 10, 1)
  .mult(
    osc(7, 0.1, () => Math.cos(time) * 3)
      .saturate(2)
      .kaleid(() => cc[getKnob(1, 2)] * 100)
  )
  .modulate(o0, () => cc[getKnob(1, 3)])
  .add(o0, () => cc[getKnob(1, 4)])
  .scrollY(-0.01)
  .scale(0.98)
  .modulate(
    voronoi(() => cc[getKnob(1, 5)] * 10, 1),
    () => cc[getKnob(1, 6)] * 0.05
  )
  .luma(
    () => cc[getSlider(1)],
    () => cc[getSlider(2)]
  )
  .out(o0);

// hue feedback
// 11. 12am in new york
// start with sliders 3 and 4 UP (dark)

voronoi(2, 0.3, 0.2)
  .shift(() => cc[getKnob(1, 1)])
  .modulatePixelate(voronoi(4, 0.2), 32, () => cc[getKnob(1, 2)] * 2)
  .scale(() => 1 + Math.sin(time * 2.5) * 0.05)
  .diff(
    voronoi(() => cc[getKnob(1, 3)] * 3)
      .shift(() => cc[getKnob(1, 4)] * 0.6)
      .luma(
        () => cc[getSlider(1)],
        () => cc[getSlider(2)]
      )
  )
  .diff(osc(2, 0.15, 1.1).rotate())
  .brightness(0.1)
  .contrast(1.2)
  .saturate(1.2)
  .luma(
    () => cc[getSlider(3)],
    () => cc[getSlider(4)]
  )
  .modulate(o0, cc[getKnob(1, 5)])
  .out();
