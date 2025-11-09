// https://hydra.ojack.xyz/?code=c3JjKG8wKSUwQSUyMCUyMC5tb2R1bGF0ZVJvdGF0ZShub2lzZSgyJTJDJTIwMCklMkMlMjAwLjAzKSUwQSUyMCUyMC5odWUoMC4wMDMpJTBBJTIwJTIwLmxheWVyKHNoYXBlKDIlMkMlMjAwLjEyNSkubHVtYSgpLmNvbG9yKDAlMkMlMjAwJTJDJTIwMSkpJTBBJTIwJTIwLm91dChvMCklM0I%3D

src(o0)
  .modulateRotate(noise(2, 0), 0.03)
  .hue(0.003)
  .layer(shape(2, 0.125).luma().color(0, 0, 1))
  .out(o0);
