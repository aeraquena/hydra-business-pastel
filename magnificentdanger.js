hush()

// 1
// triangle with feedback

src(o0).modulate(noise(()=>cc[getKnob(1,1)]*4),()=>cc[getKnob(1,2)]*0.01,).blend(shape(3).add(osc(()=>cc[getKnob(2,1)],()=>cc[getKnob(2,2)],()=>cc[getKnob(2,3)],),()=>cc[getSlider(2)],),()=>cc[getKnob(2,4)]*0.04,).luma(()=>cc[getSlider(1)]*0.5,()=>cc[getSlider(2)],).out(o0);

// 2
// neon lines

osc(20,-0.5,()=>cc[getKnob(1,1)]).kaleid(99).repeat(2,2).saturate(()=>cc[getKnob(1,2)]*10).luma(()=>cc[getSlider(1)],()=>cc[getSlider(2)],).scale(()=>cc[getKnob(1,4)]*5).modulate(o0,()=>cc[getKnob(1,5)]).out(o0);

// 3
// rotating blo

noise(()=>cc[getKnob(1,1)]*5,0.1,()=>cc[getKnob(1,2)]*7,).rotate(1,-1,-2).mask(shape(20)).colorama(()=>cc[getKnob(1,3)]).modulateScale(o0).modulateScale(o0).blend(o0).blend(o0).blend(o0).blend(o0).luma(()=>cc[getSlider(1)],()=>cc[getSlider(2)],).out(o0);

// 4
// noisy neon port

osc(5,0.9,0.001).kaleid([3,4,5,7,8,9,10].fast(0.1)).color(0.5,0.3).colorama(()=>cc[getKnob(1,1)]).rotate(0.009,()=>Math.sin(time)*-0.001).modulateRotate(o0,()=>Math.sin(time)*0.003).modulate(o0,()=>cc[getKnob(1,2)]).scale(()=>cc[getKnob(1,3)]).luma(()=>cc[getSlider(1)],()=>cc[getSlider(2)],).out(o0);

// 5
// radial bw

shape(()=>cc[getKnob(1,1)]*20,0.1,0.01).scale(()=>Math.sin(time)*3).repeat(()=>Math.sin(time)*10).modulateRotate(o0).scale(()=>Math.sin(time)*2).modulate(noise(3,0)).rotate(0.1,0.9).out(o0);src(o0).modulate(osc(()=>cc[getKnob(1,2)]*300,1,0)).out(o1);src(o1).modulateKaleid(voronoi(()=>Math.sin(time)*3,0.1,0.01),()=>Math.sin(time)*4,).scale(()=>Math.sin(time)*3).luma(()=>cc[getSlider(1)],()=>cc[getSlider(2)],).out(o2);render(o2);

// 6
// diagonal line glitch

osc(18,0.1,0).color(2,0.1,2).mult(osc(20,0.01,0)).repeat(2,20).rotate(()=>cc[getKnob(1,1)]).modulate(o1,()=>cc[getKnob(1,2)]).scale(()=>cc[getKnob(1,3)]*0.5+0.5,()=>a.fft[0]*0.9+2,).diff(o1).luma(()=>cc[getSlider(1)],()=>cc[getSlider(2)],).out(o0);osc(20,0.2,0).color(2,0.7,0.1).mult(osc(40)).modulateRotate(o0,()=>cc[getKnob(1,4)]).rotate(()=>cc[getKnob(1,5)]).luma(()=>cc[getSlider(3)],()=>cc[getSlider(4)],).out(o1);render(o0);

// 7
// acid bus seat

speed=1;osc(()=>cc[getKnob(1,1)]*200).color(0.5,0.1,0.8).rotate(0.11,0.1).modulate(osc(10).rotate(0.3).add(o0,()=>cc[getKnob(1,2)]*0.2),).add(osc(20,0.01,1).color(0,0.8,1)).luma(()=>cc[getSlider(1)],()=>cc[getSlider(2)],).out(o0);osc(50,0.05,0.7).color(1,0.7,0.5).diff(o0).modulate(o1,()=>cc[getKnob(1,3)]*0.1).luma(()=>cc[getSlider(3)],()=>cc[getSlider(4)],).scale(()=>cc[getKnob(1,4)]*5).out(o1);render(o1);

// 8
// clouds

hush();speed=1.5;shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7].smooth(1)).color(0.2,0.4,0.3).scrollX(()=>Math.sin(time*0.27)).add(shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7,0.5,0.3].smooth(1),).color(0.6,0.2,0.5).scrollY(()=>cc[getKnob(1,1)*0.1]).scrollX(()=>Math.sin(time*0.33)),).add(shape([4,5,6].fast(0.1).smooth(1),0.000001,[0.2,0.7,0.3].smooth(1)).color(0.2,0.4,0.6).scrollY(-0.35).scrollX(()=>Math.sin(time*0.41)*-1),).add(src(o0).shift(0.001,0.01,0.001).scrollX([0.05,-0.05].fast(0.1).smooth(1)).scale([1.05,0.9].fast(0.3).smooth(1),[1.05,0.9,1].fast(0.29).smooth(1),),()=>cc[getKnob(1,2)]*0.75,).luma(()=>cc[getSlider(1)],()=>cc[getSlider(2)],).scale(()=>cc[getKnob(1,3)]).out();

// 9
// glitch river

speed=1;voronoi(()=>cc[getKnob(1,1)]*10,1).mult(osc(7,0.1,()=>Math.cos(time)*3).saturate(2).kaleid(()=>cc[getKnob(1,2)]*100),).modulate(o0,()=>cc[getKnob(1,3)]).add(o0,()=>cc[getKnob(1,4)]).scrollY(-0.01).scale(0.98).modulate(voronoi(()=>cc[getKnob(1,5)]*10,1),()=>cc[getKnob(1,6)]*0.05,).luma(()=>cc[getSlider(1)],()=>cc[getSlider(2)],).out(o0);

// 10
// glowing portal

osc(()=>cc[getKnob(1,1)]*10,0,()=>cc[getKnob(1,3)],).kaleid().mask(shape(()=>cc[getKnob(1,4)]*5,0.3,1)).modulateRotate(shape(4,0.1,1)).modulateRotate(shape(4,0.1,0.9)).modulateRotate(shape(4,0.1,0.8)).scale(cc[getKnob(1,2)]*10).add(shape(4,0.2,1).color(0.3,1,1,0.5)).rotate(()=>time).scale(()=>cc[getKnob(1,5)]).modulate(o0).luma(()=>cc[getSlider(1)],()=>cc[getSlider(2)],).out();
